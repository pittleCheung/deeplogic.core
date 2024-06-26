import { getDomPosition } from "@/pages/editor/components/designer/stateful/utils";
import { ROOT_NODE } from "@craftjs/utils";


/**
 * 获取组件方法
 * @param query useEditor()返回的query
 * @param resolver 全部组件
 * @param actions useEditor()返回的actions
 */
const Methods = ({ query, resolver, actions }) => {
  return {
    /**
     * @description 获取选中的组件
     */
    selected: query?.getEvent('selected')?.first(),

    /**
     * @description 获取悬停的组件
     */
    hovered: query?.getEvent('hovered')?.first(),

    /**
     * @description 组件是否被选中
     */
    isSelected: (id) => id && query?.node(id)?.isSelected(),

    /**
     * @description 组件是否被悬停
     */
    isHovered: (id) => id && query?.node(id)?.isHovered(),

    /**
     * @description 组件是否可以被拖拽
     */
    isDraggable: (id) => id && query?.node(id)?.isDraggable(),

    /**
     * @description 组件是否可以被删除
     */
    isDeletable: (id) => id && query?.node(id)?.isDeletable(),

    /**
     *  @description 组件是否是根组件
     */
    isRoot: (id) => id && query?.node(id)?.isRoot(),

    /**
     * @description 获取组件的数据
     */
    noneData: (id) => id && query?.node(id)?.get(),

    /**
     * @description 获取选中组件的父组件
     */
    ancestors: (id) => {
      if (!id) return;
      try {
        return query
          ?.node(id)
          ?.ancestors(true)
          ?.map((key) => {
            const node = query?.node(key)?.get();
            return node
              ? {
                  key,
                  id: key,
                  ...node?.data
                }
              : null;
          })
          ?.filter(Boolean);
      } catch (error) {
        return [];
      }
    },

    /**
     * @description 获取选中组件的子组件
     */
    descendants: (id) => {
      if (!id) return;

      try {
        return query
          ?.node(id)
          ?.descendants(true)
          ?.map((key) => {
            const node = query?.node(key)?.get();
            return node
              ? {
                  key,
                  id: key,
                  ...node?.data
                }
              : null;
          })
          ?.filter(Boolean);
      } catch (error) {
        return [];
      }
    },

    /**
     * @description 获取Root组件
     */
    Root: query?.node(ROOT_NODE)?.get(),

    /**
     * @description 获取组件的自定义数据
     */
    custom: (id) => {
      if (!id || !resolver) return;
      try {
        const node = query?.node(id)?.get()?.data;
        const resolverNode = resolver?.[node?.displayName];
        const craft = resolverNode?.type?.craft || resolverNode?.craft;

        return craft?.custom;
      } catch (error) {
        return null;
      }
    },

    /**
     * @description 删除特定组件
     * @param id 组件id
     */
    onDelete: (id) => {
      if (!id) return;
      try {
        actions?.delete(id);
      } catch (error) {
        console.error('删除失败');
      }
    },

    /**
     * @description 选中特定组件
     * @param id
     */
    onSelect: (id) => {
      if (!id) return;
      try {
        actions?.selectNode(id);
      } catch (error) {
        console.error('选中失败');
      }
    },

    /**
     * @description 获取组件的位置信息
     * @param dom 组件的dom
     * @param rootDom 根组件的dom
     */
    getPosition: (dom, rootDom) => getDomPosition(dom, rootDom)
  };
};

export default Methods;
