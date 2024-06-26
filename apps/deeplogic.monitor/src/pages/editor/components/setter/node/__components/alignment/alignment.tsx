import { Radio, theme } from 'antd';
import cls from 'classnames';
import { createElement } from 'react';
import alignments from './_config';
import css from './_style';

function Alignment() {
  const { token } = theme?.useToken();

  if (!alignments) return null;

  return (
    <Radio.Group buttonStyle='solid' className={cls(css.group(token))}>
      {alignments &&
        alignments?.length > 0 &&
        alignments?.map((item) => (
          <Radio.Button key={item.itemKey} value={item.itemKey} className={cls(css.radio(token))}>
            <div className={css.icon(token)}>{item.icon && createElement(item.icon)}</div>
          </Radio.Button>
        ))}
    </Radio.Group>
  );
}

export default Alignment;
