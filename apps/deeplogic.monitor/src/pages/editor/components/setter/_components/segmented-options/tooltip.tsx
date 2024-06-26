import { Tooltip as AntTooltip } from 'antd';

function Tooltip({ children, title = '', placement = 'bottom' }) {
  return (
    <AntTooltip
      destroyTooltipOnHide
      autoAdjustOverflow
      title={title}
      placement={placement}
    >
      {children}
    </AntTooltip>
  );
}

export default Tooltip;
