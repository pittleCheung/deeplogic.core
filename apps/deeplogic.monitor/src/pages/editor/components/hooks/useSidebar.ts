import { useEditor } from '@craftjs/core';
import { useCallback } from 'react';
import useDesigner from './useDesigner';

function useSidebar() {
  const { sidebar } = useDesigner();
  const {
    connectors: { create, drag },
    actions,
    query
  } = useEditor();


  console.log("pages==========>", sidebar)


  /**
   * 选中节点, 这里主要处理选中节点后, 重置画布中选中的组件为空
   * @type {(function(*): void)|*}
   */
  const onSelect = useCallback((nodeId) => {
    sidebar?.page?.onSelect(nodeId);
    actions?.selectNode(null);
  }, []);

  return { ...sidebar, page: { ...sidebar?.page, onSelect }, actions, create, drag, query };
}

export default useSidebar;
