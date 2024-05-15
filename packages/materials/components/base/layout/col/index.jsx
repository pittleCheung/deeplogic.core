import { Col as AntCol, theme } from 'antd';
import cls from 'classnames';
import { memo } from 'react';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import css from './_style';
import meta from './meta';

function Col(props) {
  const { token } = theme.useToken();
  const { state, enabled, connectDrag } = useComponent(props);
  if (!state) return null;
  const { type = 'span' } = state;
  if (type === 'flex') {
    state.lastSpan = state.span;
    delete state.span;
    if (!state.flex) state.flex = state.lastFlex ?? 'auto';
  } else if (type === 'span') {
    state.lastFlex = state.flex;
    delete state.flex;
    if (!state.span) state.span = state.lastSpan ?? 12;
  }

  return (
    <AntCol className={cls(enabled && css.col(token, state?.children))} {...state} ref={connectDrag}>
      {state?.children}
    </AntCol>
  );
}

Col.craft = craft(meta);

export default memo(Col);
