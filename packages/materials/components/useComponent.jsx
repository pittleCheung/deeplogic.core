import { useEditor, useNode } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { isFunction, set, some } from 'lodash-es';
import { useCallback, useMemo, useRef } from 'react';
import { flattenObject, getChildrenProps, isArray, isObject, parseProps } from './_utils/utils';

export const useComponent = (props) => {
  const { actions, query } = useEditor();
  const prevPropsRef = useRef();
  const stateRef = useRef();

  const {
    id,
    parentId,
    selected,
    descendants,
    connectors: { connect, drag }
  } = useNode((node) => {
    const isGroup = node?.custom?.isGroup;
    const descendants = [];

    if (isGroup) {
      descendants.push(...getChildrenProps(node.getDescendants()));
    }

    return {
      descendants,
      selected: node?.events?.selected,
      parentId: node?.data?.parent
    };
  });
  // 编辑器是否可用/取根节点
  const { enabled, root } = useMemo(() => {
    return {
      enabled: query?.getOptions()?.enabled,
      root: query?.node(ROOT_NODE)?.get()
    };
  }, [query, ROOT_NODE]);
  // // 编辑器是否可用
  // const enabled = query?.getOptions()?.enabled;
  // // 获取根节点
  // const root = query?.node(ROOT_NODE)?.get();
  const ROOT_DATA = root?.data;
  const ROOT_DOM = root?.dom;

  // 获取全局配置
  const { theme = null, global = null, points = null, functions = null, projId = null } = ROOT_DATA?.props;
  // 获取根节点的custom
  const rootCustom = ROOT_DATA?.custom;

  /**
   * 连接拖拽
   * @param ref
   * @returns {*}
   */
  function connectDrag(ref) {
    // 如果是可拖拽的
    if (enabled) {
      return connect(drag(ref) || ref);
    }
  }

  /**
   * 连接ref， 主要用来给设备增加选中状态
   * @param ref
   * @returns {*}
   */
  function connectRef(ref) {
    // 如果是可拖拽的
    if (enabled) {
      return connect(ref);
    }
  }

  /**
   * 设置Cart component props
   * @param nodeId
   * @param values
   */
  const setProps = useCallback((nodeId, values) => {
    if (!nodeId || !isObject(values) || !query?.node(nodeId)) return;
    const flatten = flattenObject(values);
    for (let [key, value] of Object.entries(flatten)) {
      actions?.setProp(nodeId, (prop) => set(prop, key, value));
    }
  }, []);

  const setHidden = useCallback((nodeId, isHidden) => {
    if (!nodeId || !query?.node(nodeId)) return;

    actions?.setHidden(nodeId, isHidden);
  }, []);

  /**
   * 选中节点
   * @param key
   */
  function onSelect(key) {
    if (!query?.node(key)?.get()) return;

    actions?.selectNode(key);
  }

  /**
   * 设置Root Custom
   * @param values
   * @returns {null}
   */
  const setRootCustom = useCallback(
    (values) => {
      if (!isObject(values)) return;
      const flatten = flattenObject(values);
      for (let [key, value] of Object.entries(flatten)) {
        actions?.setCustom(ROOT_NODE, (prop) => set(prop, key, value));
      }
    },
    [actions]
  );

  /**
   * 获取节点
   * @param id
   */
  function getNodeProps(id) {
    const node = query?.node(id)?.get();
    if (!node) return null;

    return node?.data?.props;
  }

  /**
   * 删除Device Id
   * @returns {null}
   */
  function onRemoveDevice() {
    if (!rootCustom) return null;

    if (rootCustom?.device) {
      actions?.setCustom(ROOT_NODE, (node) => (node.device = null));
    }
  }

  /**
   * 获取节点的custom
   * @param id
   * @returns {*}
   */
  function getCustom(id) {
    return query?.node(id)?.get()?.data?.custom;
  }

  /**
   * Get ancestors
   * @returns {*|*[]}
   */
  const getAncestors = () => {
    const selected = query?.getEvent('selected')?.first();

    //console.log(selected);

    // if (!ancestors || !ancestors?.length) return [];
    //
    // return ancestors.map((id) => {
    //     const node = query?.node(id)?.get();
    //     return {
    //         id,
    //         ...node?.data
    //     };
    // });
  };

  //
  const getLinkNodes = (key) => {
    if (!key) return null;

    const treeNodes = query
      ?.node(key)
      ?.linkedNodes()
      ?.map((i) => {
        const nodes = query?.node(i)?.toNodeTree()?.nodes;
        return Object.entries(nodes).map(([key, value]) => {
          return {
            ...value?.data?.props,
            id: value?.id
          };
        });
      })
      ?.flat();
    return treeNodes;
  };

  /**
   * 获取状态颜色
   * @param data
   * @returns {*|null}
   */
  function getStateColor(data) {
    if (isArray(data)) {
      return data.filter((item) => {
        if (item?.expression && !isObject(item?.expression)) {
          if (Number(item?.expression) === Number(item?.value)) {
            return true;
          }
        }
        return false;
      });
    }
    return null;
  }

  function getData(key) {
    const node = query?.node(key)?.get();
    if (!node) return null;

    return node?.data;
  }

  // 解析 props
  const data = useMemo(() => {
    // console.time('useMemoprops');
    if (!enabled && prevPropsRef.current) {
      // 页面全局数据，一般不会变动，可以缓存起来
      if (props.projId && props.projId === prevPropsRef.current.projId) {
        //   console.timeEnd('useMemoprops');
        return prevPropsRef.current;
      }
      // 页面数据变化时，基本上是 value 的变化，重新赋值这些即可
      if ((typeof props.value === 'string' || typeof props.value === 'number') && stateRef.current.value !== props.value) {
        //   console.timeEnd('useMemoprops');
        return { ...stateRef.current, value: props.value };
      }
    }
    // if (!equal(prevPropsRef.current, props)) {
    prevPropsRef.current = props;
    const result = parseProps(
      prevPropsRef.current,
      {
        global,
        points,
        functions,
        enabled
      },
      query
    );
    // console.timeEnd('useMemoprops');
    return result;
    // } else {
    // 	return stateRef.current;
    // }
  }, [props]);

  // if (data?.events && !enabled) {
  // 	const hasFunction = some(data.events, isFunction);
  // 	if (hasFunction) {
  // 		stateRef.current = { ...data, ...data.events };
  // 	} else {
  // 		stateRef.current = data;
  // 	}
  // } else {
  // 	stateRef.current = data;
  // }
  const state = useMemo(() => {
    stateRef.current = data;
    if (data?.events && !enabled) {
      const hasFunction = some(data.events, isFunction);
      if (hasFunction) {
        stateRef.current = { ...data, ...data.events };
        return stateRef.current;
      } else {
        return data;
      }
    }
    return data;
  }, [data, enabled]);
  
  return {
    id,
    parentId,
    projId,
    theme,
    actions,
    query,
    state: state,
    enabled,
    selected,
    descendants,
    rootCustom,
    rootDOM: ROOT_DOM,
    rootFunction: functions,
    setProps,
    setHidden,
    setRootCustom,
    getNodeProps,
    getStateColor,
    getAncestors,
    getLinkNodes,
    getCustom,
    getData,
    onSelect,
    connectRef,
    connectDrag
  };
};
