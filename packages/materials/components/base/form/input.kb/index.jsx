import { cx } from '@emotion/css';
import { Input as AntInput, InputNumber as AntInputNumber, Popover as AntPopover, theme } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { craft } from '../../../_utils/utils';
import Drag from '../../../common/drag';
import { useComponent } from '../../../useComponent';
import { onChange } from '../_helper';
import css from './_style';
import meta from './meta';

const KEY_LAYOUT = {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    "{lock} a s d f g h j k l ; ' {enter}",
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space} {escape}'
  ],
  shift: [
    '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : " {enter}',
    '{shift} Z X C V B N M &lt; &gt; ? {shift}',
    '.com @ {space} {escape}'
  ],
  number: ['1 2 3', '4 5 6', '7 8 9', '0 . {bksp}', '{escape} {enter}']
};

const KEY_DISPLAY = { '{bksp}': '删除', '{enter}': '确定', '{escape}': '关闭', '{space}': '空格' };

function InputKb(props) {
  const { state, id, setProps, connectDrag } = useComponent(props);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardRef, setKeyboardRef] = useState();
  const [layoutName, setLayoutName] = useState(state?.type === 'number' ? 'number' : 'default');

  if (!state) return null;
  const { token } = theme.useToken();

  // input 变化事件
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
    keyboardRef?.setInput(value);
  };

  // input keyDown 事件
  const onKeyDown = (event) => {
    event.stopPropagation();
  };

  const { events, displayName, isPush, onPush, isNumber, ...rest } = state;
  //rest.value = isNumber && rest.value ? (isNaN(+rest.value) ? '' : +rest.value + '') : rest.value || '';
  const params = {
    onKeyDown,
    ...rest
  };

  // 虚拟键盘输入变化事件
  const handleKeyboardChange = (value) => {
    setProps(id, { value });
    onChange?.({ state, value });
  };

  const handleKeybordKeyPressed = (button) => {
    switch (button) {
      case '{escape}':
        setKeyboardVisible(false);
        break;
      case '{enter}':
        params.onPressEnter?.({ target: { value: keyboardRef?.getInput() } });
        break;
      case '{shift}':
        setLayoutName(layoutName === 'default' ? 'shift' : 'default');
        break;
    }
  };

  useEffect(() => {
    setLayoutName(state?.type === 'number' ? 'number' : 'default');
  }, [state?.type]);

  useEffect(() => {
    if (!state) return;
    if (props?.onPropChange) {
      props?.onPropChange?.(state);
    }
  }, [state]);

  useEffect(() => {
    if (keyboardVisible && keyboardRef) {
      keyboardRef?.setInput(params.value);
    }
  }, [keyboardVisible, keyboardRef]);

  // 下拉虚拟键盘
  const popoverContent = () => (
    <Keyboard
      keyboardRef={setKeyboardRef}
      onChange={handleKeyboardChange}
      onKeyPress={handleKeybordKeyPressed}
      layoutName={layoutName}
      layout={KEY_LAYOUT}
      display={KEY_DISPLAY}
    />
  );

  return (
    <Drag connectDrag={connectDrag}>
      <AntPopover
        content={popoverContent}
        arrow={false}
        placement='bottom'
        trigger='click'
        overlayClassName={cx(css.input(token))}
        open={keyboardVisible}
        onOpenChange={setKeyboardVisible}
      >
        {
          {
            text: <AntInput {...params} onChange={handleChange} />,
            password: <AntInput.Password {...params} onChange={handleChange} />,
            textarea: <AntInput.TextArea {...params} onChange={handleChange} />,
            number: <AntInputNumber {...params} controls={false} onChange={handleChange} />
          }[state?.type || 'text']
        }
      </AntPopover>
    </Drag>
  );
}

InputKb.craft = craft(meta);

export default memo(InputKb, equal);
