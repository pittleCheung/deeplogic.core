import { ThunderboltOutlined } from '@ant-design/icons';
import { cx } from '@emotion/css';
import { Input as AntInput, InputNumber as AntInputNumber, theme } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect } from 'react';
import { craft } from '../../../_utils/utils';
import Drag from '../../../common/drag';
import { useComponent } from '../../../useComponent';
import { onChange } from '../_helper';
import css from './_style';
import meta from './meta';

function Input(props) {
  const { state, id, setProps, connectDrag } = useComponent(props);

  if (!state) return null;
  const { token } = theme.useToken();

  const handleChange = (e) => {
    let value;
    if (state?.type === 'number') {
      value = e + '';
    } else {
      e?.stopPropagation?.();
      value = e?.target?.value;
    }
    setProps(id, { value });
    onChange?.({ state, value });
  };

  const onKeyDown = (event) => {
    event.stopPropagation();
  };

  const { events, displayName, isPush, onPush, isNumber, ...rest } = state;
  // rest.value = isNumber && rest.value ? (isNaN(+rest.value) ? '' : +rest.value + '') : rest.value || '';
  const params = {
    onKeyDown,
    ...rest
  };

  useEffect(() => {
    if (props?.onPropChange) {
      props?.onPropChange?.(state);
    }
  }, [state]);

  return (
    <Drag connectDrag={connectDrag}>
      {
        {
          text: (
            <AntInput
              {...params}
              addonAfter={
                isPush ? (
                  <div onClick={() => onPush && onPush({ value: state?.value, component: props?.value?.bind })}>
                    <ThunderboltOutlined />
                  </div>
                ) : null
              }
              className={cx(css.input(token))}
              onChange={handleChange}
            />
          ),
          password: <AntInput.Password {...params} onChange={handleChange} />,
          textarea: <AntInput.TextArea {...params} onChange={handleChange} />,
          number: (
            <AntInputNumber
              {...params}
              controls={false}
              addonAfter={
                isPush ? (
                  <div onClick={() => onPush && onPush({ value: state?.value, component: props?.value?.bind })}>
                    <ThunderboltOutlined />
                  </div>
                ) : null
              }
              className={cx(css.input(token))}
              onChange={handleChange}
            />
          )
        }[state?.type || 'text']
      }
    </Drag>
  );
}

Input.craft = craft(meta);

export default memo(Input, equal);
