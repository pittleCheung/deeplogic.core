import { isObject } from 'lodash-es';
import { memo, useMemo, useRef } from 'react';
import { useComponent } from '../../../useComponent';
import css from './_style';

function TypographyText(props) {
  const { state, enabled, id, actions, connectDrag } = useComponent(props);
  const ref = useRef(null);

  if (!state) return null;
  const { style } = state;
  const { root } = props;

  // 获取全局配置
  const { global = null } = root?.data?.props || {};

  // 用于获取状态文字及样式
  const status = state?.status?.find((i) => Number(i.value) === Number(state?.value) || i.value === state?.value);
  const statusStyle = {
    ...(status?.color && { color: status.color }),
    ...(status?.backgroundColor && { backgroundColor: status.backgroundColor })
  };

  // 编辑事件
  const handleEditEvent = (e) => {
    if (!enabled) return;
    switch (e.type) {
      case 'keydown':
        if (e.keyCode === 8) {
          e.preventDefault();
        }
        if (e.keyCode === 13) {
          e.preventDefault();
          ref.current.contentEditable = 'false';
          actions?.setProp(id, (props) => {
            props.value = e.target.innerText;
          });
        }
        break;
      case 'blur':
        actions?.setProp(id, (props) => {
          props.value = e.target.innerText;
        });
        ref.current.contentEditable = 'false';
        break;
      case 'dblclick':
        ref.current.contentEditable = 'true';
        ref.current.focus();
        break;
    }
  };

  const value = useMemo(() => {
    const statusLabel = status?.label;
    const stateValue = state?.value;
    // 判断状态值是否为对象
    if ((statusLabel && !isObject(statusLabel)) || (stateValue && !isObject(stateValue))) {
      return statusLabel || stateValue;
    } else if (isObject(stateValue)) {
      const { type } = stateValue || {};
      return type === 'global' ? global?.value || 0 : 0;
    }
    return 0;
  }, [status, state?.value, global]);
  // console.log('typograp', status?.label, state?.value, props, global, value);
  return (
    <span style={{ position: "relative", ...style }}>
      <span
        ref={(dom) => {
          ref.current = dom
          connectDrag(dom)
        }}
        onDoubleClick={handleEditEvent}
        className={css.content}
        style={{ ...statusStyle }}
        onBlur={handleEditEvent}
        onKeyDown={handleEditEvent}>
        {value}
      </span>
    </span>
  )
}

export default memo(TypographyText);
