/**
 * @description: 生成树形结构
 * @param {Array} list
 * @param list
 * @param key
 * @param children
 * @returns {*}
 */
export const updateTreeData = (list, key, children) =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      };
    }
    return node;
  });

/**
 * @description: 初始化设备树的展开节点
 * @param list
 * @returns {*}
 */
export const initDeviceTreeDataCore = (list) => {
  return list.map((node) => {
    node.checkable = false;
    node.selectable = false;
    if (node.children) {
      return { ...node, children: initDeviceTreeDataCore(node.children) };
    }

    return node;
  });
};
