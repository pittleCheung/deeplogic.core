import { Tooltip } from 'antd';

export const SegmentedOptions = (data, icons, placement) => {
  return data.map((item) => {
    return {
      value: item?.value,
      label: (
        <Tooltip destroyTooltipOnHide autoAdjustOverflow title={item?.label} placement={placement || 'bottom'}>
          {icons?.[item?.value] || item?.label}
        </Tooltip>
      )
    };
  });
};
