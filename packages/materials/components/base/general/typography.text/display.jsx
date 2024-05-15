import { memo } from 'react';
import { useComponent } from '../../../useComponent';
import css from './_style';

function Display(props) {
  const { state } = useComponent(props);

  // 用于获取状态文字及样式
  const status = state?.status?.find((i) => Number(i.value) === Number(state?.value) || i.value === state?.value);
  const statusStyle = {
    ...(status?.color && { color: status.color }),
    ...(status?.backgroundColor && { backgroundColor: status.backgroundColor })
  };

  return (
    <span style={{ ...state.style, ...statusStyle }} className={css.content}>
      {(status?.label || state?.value) ?? ''}
    </span>
  );
}

export default memo(Display);
