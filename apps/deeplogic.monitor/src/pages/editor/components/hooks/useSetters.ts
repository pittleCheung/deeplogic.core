import { editor } from '../helper/editor';

function useSetters() {
  /**
   * 获取当前选中的节点
   * @type {any}
   * @return { { selected: { id; name; settings: React.ElementType<any>; }; } }
   * @doc https://docs.craftjs.org/api/useEditor
   */
  const { setProps, ancestors, ...other } = editor();

  function onUnbind({ id, name }) {
    setProps(id, { [name]: '' });
  }

  /**
   * 选中节点
   * @param id
   */
  function onSelected(id) {
    selectNode(id);
  }

  /**
   * Get nodes
   * @type {Function}
   */
  const getNodes = (id) => {
    return ancestors || [];
  };

  return { setProps, onUnbind, onSelected, getNodes, ...other };
}

export default useSetters;
