import { All, BorderSide, LayoutTopFill } from '@/components/icons';
import { InputNumber, Segmented } from 'antd';
import { useState } from 'react';
import { Field, SegmentedOptions, Sides, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { borderType } from './config.json';
import css from './index.module.less';
import { extractSpacing } from './utils';

const icons = {
  all: <All />,
  side: <BorderSide />
};

function Margin() {
  const { styleData, onChange } = useSetter();
  const [side, setSide] = useState(styleData?.marginSide || 'all');

  function resetMargin(value) {
    return {
      marginTop: value,
      marginRight: value,
      marginLeft: value,
      marginBottom: value
    };
  }

  return (
    <div className={css.margin}>
      <div className={css.item}>
        <Field
          label={
            <Tooltip title={'外边距'}>
              <LayoutTopFill />
            </Tooltip>
          }
        >
          <InputNumber
            variant={'borderless'}
            value={styleData?.margin}
            disabled={side === 'side'}
            onChange={(margin) => onChange({ margin })}
          />
        </Field>
        <Field bordered={false}>
          <Segmented
            value={side}
            options={SegmentedOptions(borderType?.dataList, icons)}
            onChange={(type) => {
              setSide(type);
              onChange({
                marginSide: type,
                ...resetMargin(styleData?.margin)
              });
            }}
          />
        </Field>
      </div>
      <Sides
        value={extractSpacing(styleData, 'margin')}
        open={side === 'side'}
        onChange={({ value, key }) =>
          onChange({
            [`margin${key.charAt(0).toUpperCase() + key.slice(1)}`]: value
          })
        }
      />
    </div>
  );
}

export default Margin;
