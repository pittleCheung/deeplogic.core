import { ROOT_NODE } from '@craftjs/utils';
import { useCallback } from 'react';
import { editor } from '../helper/editor';
import { useDesigner } from '../hooks';

function useConfig() {
  const { state, updateOpen, updateSelected } = useDesigner();
  const { query, points, setProps, ...other } = editor();
  /**
   * 获取当前选中的节点
   * @param id
   * @param name
   * @returns {any}
   */
  const getVariable = useCallback(() => {
    const { id, name } = state?.selected;
    return query?.node(id)?.get()?.data?.props?.[name] || {};
  }, [state?.selected, query]);

  /**
   * 绑定点表
   * @type {(function(*): void)|*}
   */
  const bindPoints = useCallback(
    (variables) => {
      if (!variables) return;
      Object.entries(variables).forEach(([key, value]) => {
        setProps(ROOT_NODE, { points: { ...points, [key]: value } });
      }, 500);
    },
    [points, setProps]
  );

  /**
   * Handle expression
   * @type {(function(*): ([]|*))|*}
   */
  const savePoints = useCallback(
    (params) => {
      if (!params) return;
      const { type, bind, point } = params;

      if (point && type === 'expressions') {
        bindPoints(point?.points);
        return;
      }

      // 默认点表显示
      if (type === 'points') {
        bindPoints({ [`${bind}`]: bind });
      }
    },
    [bindPoints]
  );

  const saveAttribute = useCallback(
    ({ bind, type, point }) => {
      const { id, name } = state?.selected;
      const variable = { bind, type };
      if (point) {
        variable.point = point?.values;
      }
      setProps(id, { [name]: variable });
    },
    [state?.selected]
  );

  /**
   * On bind variable
   * @param params
   */
  const onBind = (params) => {
    updateSelected(params);
    updateOpen(true);
  };

  const onSave = useCallback(
    (params) => {
      if (!params) return;
      savePoints(params);
      saveAttribute(params);
    },
    [savePoints, saveAttribute]
  );

  const onCancel = useCallback(() => {
    updateOpen(false);
    updateSelected(null);
  }, []);

  return {
    ...state,
    ...other,
    query,
    onSave,
    onBind,
    onCancel,
    setProps,
    getVariable
  };
}

export default useConfig;
