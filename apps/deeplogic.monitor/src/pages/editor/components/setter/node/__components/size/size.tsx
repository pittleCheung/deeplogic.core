import { AnticlockwiseLine, RoundedCorner } from '@/components/icons';
import { InputNumber, theme } from 'antd';
import { Field, Panel, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import cls from '../_style';

function NodeSize() {
  const { token } = theme.useToken();
  const { styleData, onChange } = useSetter();

  if (!styleData) return null;

  function onStep(value, info, type) {
    const val = styleData[type];
    if (info.type === 'up') {
      onChange({ [type]: (val || 0) + info.offset });
    } else {
      onChange({ [type]: val ? val - info.offset : 0 });
    }
  }

  function formatValue(value) {
    if (!value) return 0;
    return Math.round(value);
  }

  return (
    <Panel title={'尺寸'} open>
      <div className={cls.space(token)}>
        <Field bordered={false}>
          <InputNumber
            prefix={'X'}
            min={0}
            value={formatValue(styleData.translateX)}
            onChange={(translateX) => onChange({ translateX })}
            onStep={(value, info) => onStep(value, info, 'translateX')}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
        <Field bordered={false}>
          <InputNumber
            prefix={'Y'}
            min={0}
            value={formatValue(styleData.translateY)}
            onChange={(translateY) => onChange({ translateY })}
            onStep={(value, info) => onStep(value, info, 'translateY')}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
      </div>
      <div className={cls.space(token)}>
        <Field bordered={false}>
          <InputNumber
            prefix={'W'}
            min={0}
            value={formatValue(styleData.width)}
            onChange={(width) => onChange({ width })}
            onStep={(value, info) => onStep(value, info, 'width')}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
        <Field bordered={false}>
          <InputNumber
            prefix={'H'}
            min={0}
            value={formatValue(styleData.height)}
            onChange={(height) => onChange({ height })}
            onStep={(value, info) => onStep(value, info, 'height')}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
      </div>
      <div className={cls.space(token)}>
        <Field
          label={
            <Tooltip title={'旋转'} placement={'bottom'}>
              <AnticlockwiseLine />
            </Tooltip>
          }
        >
          <InputNumber
            variant={'borderless'}
            min={0}
            max={360}
            value={formatValue(styleData.rotate)}
            onChange={(rotate) => onChange({ rotate })}
            formatter={(value) => `${value}%`}
            onStep={(value, info) => onStep(value, info, 'rotate')}
            parser={(value) => value.replace('%', '')}
          />
        </Field>
        <Field
          label={
            <Tooltip title={'圆角'} placement={'bottom'}>
              <RoundedCorner />
            </Tooltip>
          }
        >
          <InputNumber
            value={formatValue(styleData.borderRadius)}
            variant={'borderless'}
            min={0}
            onChange={(borderRadius) => onChange({ borderRadius })}
            onStep={(value, info) => onStep(value, info, 'borderRadius')}
          />
        </Field>
      </div>
    </Panel>
  );
}

export default NodeSize;
