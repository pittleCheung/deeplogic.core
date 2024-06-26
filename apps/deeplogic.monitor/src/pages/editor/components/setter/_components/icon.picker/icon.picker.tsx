import { theme } from 'antd';
import cls from 'classnames';
import { isEqualWith } from 'lodash-es';
import { createElement, memo, useState } from 'react';
import Field from '../field';
import Popover from '../popover';
import { IconPickerComponent, fields } from './_components';
import css from './_style';

function IconPicker({ value, onChange }) {
  const [selected, setSelected] = useState('antd');
  const component = fields?.[selected]?.icons?.[value];
  const { token } = theme?.useToken();

  const renderIcon = (component) => {
    if (component) {
      if (selected === 'antd') {
        return <div className={cls(css.icon(token))}>{createElement(component)}</div> 

      }else if(selected === 'iconfont'){
        return <div className={cls(css.icon(token))}>{component}</div>;
      }
    }
    return '请选择';
  };
  return (
    <Popover
      content={
        <IconPickerComponent
          onChange={({ active, key }) => {
            setSelected(active);
            onChange?.(key);
          }}
        />
      }
      align={{ targetOffset: [98, 0] }}
    >
      {/* <Field>{component && selected === 'antd'? <div className={cls(css.icon(token))}>{createElement(component)}</div> : '请选择'}</Field> */}
      <Field>{renderIcon(component)}</Field>
    </Popover>
  );
}

export default memo(IconPicker, isEqualWith);
