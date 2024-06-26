import { useEditor, useNode } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import { message } from "antd";
import { set } from "lodash-es";
import {
  flattenObject,
  formatPages,
  getCloneTree,
  isJson,
  isObject,
  jsonDecompress,
  parseSerializedNode,
  serializedNode
} from "./utils";

import { useCallback } from 'react';
/**
 * Get parent dom element
 * @param node
 * @param query
 * @returns {*|null}
 */
const getParent = (node, query) => {
  if (!node) return null;
  const parent = node?.data?.parent;
  return parent ? query.node(parent)?.get()?.dom : null;
};

/**
 * Get ancestors
 * @param ancestors
 * @param query
 * @returns {*|*[]}
 */
const getAncestors = (ancestors, query) => {
  if (!ancestors || !ancestors?.length) return [];

  return ancestors.map((id) => {
    const node = query?.node(id)?.get();
    return {
      id,
      ...node?.data
    };
  });
};

export function editor() {
  const { actions, query, result } = useEditor((state, query) => { 
    const [id] = state.events.selected;
    const [hover] = state?.events?.hovered;
    const rootNode = query?.node(ROOT_NODE)?.get();
    const node = id ? query?.node(id) : null;

    const result = {
      node,
      selected: node?.get(),
      events: state?.events,
      rootDom: rootNode?.dom,
      undid: query?.history?.canUndo(),
      redid: query?.history?.canRedo(),
      isUndo: query?.history?.canUndo(),
      isRedo: query?.history?.canRedo(),
      enabled: state?.options?.enabled,
      rootCustom: rootNode?.data?.custom,
      points: rootNode?.data?.props?.points,
      device: rootNode?.data?.custom?.device,
      globals: rootNode?.data?.props?.global,
      isRoot: id ? node?.isRoot() : false,
      isCanvas: id ? node?.isCanvas() : false,
      isHovered: hover ? hover !== id : false,
      isSelected: id ? node?.isSelected() : false,
      isDeletable: id ? node?.isDeletable() : false,
      isDraggable: id ? node?.isDraggable() : false,
      hovered: hover ? query?.node(hover)?.get() : null,
      parentDom: id ? getParent(node?.get(), query) : null,
      ancestors: getAncestors(node?.ancestors(true), query)
    };

    return { result };
  });

  /**
    * 选中节点
    * @param id
    */
  const onSelect = useCallback((id) => {
    if (!id) return;
    try {
      actions?.selectNode(id);
    } catch (error) {
      message.error('选中失败');
    }
  }, [actions]);

  /**
   * 回退
   */
  const onUndo = useCallback(() => {
    if (result?.undid) {
      try {
        actions?.history?.undo();
      } catch (error) {
        message.error('回退失败');
      }
    }
  }, [actions, result]);

  /**
   * 重做
   */
  const onRedo = useCallback(() => {
    if (result?.redid) {
      try {
        actions?.history?.redo();
      } catch (error) {
        message.error('重做失败');
      }
    }
  }, [actions, result]);

  /**
   * 删除
   */
  const onDelete = useCallback((id) => {
    if (id && query?.node(id)?.isDeletable()) {
      try {
        actions?.delete(id);
      } catch (error) {
        message.error('删除失败');
      }
      return;
    }
    message.error('该组件不可删除');
  }, [actions, query]);

  /**
   * 复制
   * @returns {Promise<{}|string>}
   */
  const onCopy = useCallback((id) => {
    const node = query?.node(id);
    if (node && !!node?.isRoot()) {
      return id;
    }
    return null;
  }, [query]);

  /**
   * 粘贴
   */
  const onPaste = useCallback((id) => {
    const node = query?.node(id);
    if (node) {
      try {
        const nodeData = node?.toNodeTree();
        const serialized = serializedNode(nodeData, query);
        const parseSerialized = parseSerializedNode(serialized, query);
        const nodes = getCloneTree(parseSerialized, query);
        const { id: sid, data } = result?.selected;

        if (result?.node?.isRoot()) {
          actions?.addNodeTree(nodes, ROOT_NODE);
          return;
        }

        if (sid && data?.isCanvas) {
          actions?.addNodeTree(nodes, sid);
        } else {
          actions?.addNodeTree(nodes, data?.parent);
        }
      } catch (error) {
        message.error('复制失败');
      }
      return;
    }
    message.error('请先复制组件');
  }, [actions, query, result]);

  /**
   * 清空
   */
  const onClear = useCallback(() => {
    try {
      actions?.selectNode();
    } catch (error) {
      message.error('清空失败');
    }
  }, [actions]);

  /**
   * 选中父节点
   */
  const onParent = useCallback(() => {
    try {
      actions?.selectNode(result?.selected?.data?.parent);
    } catch (error) {
      message.error('选中父级失败');
    }
  }, [actions, result]);

  /**
   * 初始化页面
   * @type {(function(*): void)|*}
   */
  const onInitPage = useCallback((value) => {
    try {
      actions?.setOptions((options) => (options.enabled = value));
    } catch (error) {
      message.error('初始化失败');
    }
  }, [actions]);

  /**
   * 渲染页面
   * @param content
   * @param projId
   * @returns {Promise<void>}
   */
  const onRender = useCallback(async (content, projId) => {
    if (!content) return;
    if (isJson(content)) {
      try {
        actions?.deserialize?.(JSON.parse(content));
      } catch (error) {
        message.error('页面渲染失败');
      }
      return;
    }
    const _defaultPageStr = await jsonDecompress(content);
    const _renderPages = formatPages(_defaultPageStr);
    console.log('_renderPagess', _renderPages)
    if (!_renderPages) return;

    try {
      actions?.deserialize?.(_renderPages);
      actions?.setProp(ROOT_NODE, (prop) => {
        prop.projId = projId;
      });
    } catch (error) {
      message.error('页面渲染失败');
    }
  }, [actions]);

  /**
   * 设置全局变量
   * @param global
   */
  const setCustom = useCallback((global) => {
    if (!isObject(global)) return;
    const flatten = flattenObject(global);
    try {
      for (let [key, value] of Object.entries(flatten)) {
        actions?.setCustom(ROOT_NODE, (prop) => set(prop, key, value));
      }
    } catch (error) {
      message.error('设置失败');
    }
  }, [actions]);

  /**
   * 设置属性
   * @param id
   * @param props
   */
  const setProps = useCallback((id, props) => {
    if (!isObject(props) || !query?.node(id)?.get()) return;
    const flatten = flattenObject(props);
    try {
      for (let [key, value] of Object.entries(flatten)) {
        actions?.setProp(id, (prop) => set(prop, key, value));
      }
    } catch (error) {
      message.error('设置失败');
    }
  }, [actions, query]);

  return {
    query,
    actions,
    onUndo,
    onRedo,
    onCopy,
    onPaste,
    onClear,
    onParent,
    onSelect,
    onDelete,
    onRender,
    setProps,
    setCustom,
    onInitPage,
    ...result
  };
}

export function node() {
  const {
    selected,
    connectors: { drag }
  } = useNode((node) => {
    const { custom, displayName } = node?.data;

    return {
      selected: {
        ...node?.data,
        id: node?.id,
        dom: node?.dom,
        name: custom?.title || displayName,
        parentDom: node?.dom?.parentElement
      }
    };
  });

  return {
    selected,
    drag
  };
}

export default { editor, node };
