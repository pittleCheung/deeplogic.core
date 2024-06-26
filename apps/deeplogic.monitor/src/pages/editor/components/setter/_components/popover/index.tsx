import { Popconfirm as AntdPopconfirm, theme } from 'antd';
import { useRef, useState } from 'react';
import { PopoverTitle } from './_components';
import cls from './_style';

function Popover({ title, content, children, isOk, ...props }) {
  const ref = useRef(null);
  const [offsetX, setOffsetX] = useState(-32);
  const { token } = theme.useToken();
  const pop = useRef(null);

  /**
   * @description: 处理弹出框位置
   * @param open
   */
  const onChange = (open) => {
    if (open && !props?.targetOffset) {
      const rect = ref.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const x = windowWidth - rect.x;
      x < 0 ? setOffsetX(-32) : setOffsetX(252 + 28 - x);
    }
  };

  return (
    <AntdPopconfirm
      ref={pop}
      arrow={false}
      title={title ? <PopoverTitle title={title} /> : null}
      trigger='click'
      icon={null}
      description={content}
      autoAdjustOverflow
      placement='leftTop'
      destroyTooltipOnHide
      onOpenChange={onChange}
      overlayClassName={cls.overlay(token)}
      align={{ targetOffset: [offsetX, 0] }}
      showCancel={false}
      okButtonProps={{ style: { textAlign: 'right', display: isOk ? 'block' : 'none' } }}
      {...props}
    >
      <div ref={ref}>{children}</div>
    </AntdPopconfirm>
  );
}

export default Popover;
