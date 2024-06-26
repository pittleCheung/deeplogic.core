import { All, BorderSide, LayoutTopLine } from '@/components/icons';
import { InputNumber, Segmented } from 'antd';
import { useState } from 'react';
import { Field, SegmentedOptions, Sides, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { borderType } from './config.json';
import css from "./index.module.less"
import { extractSpacing } from './utils';

const icons = {
  all: <All />,
  side: <BorderSide />
};

function Padding() {
  const { styleData, onChange } = useSetter();
  const [side, setSide] = useState(styleData?.paddingSide || 'all');

  function resetPadding(value) {
    return {
      paddingTop: value,
      paddingRight: value,
      paddingLeft: value,
      paddingBottom: value
    };
  }

  return (
    <div className={css.padding}>
      <div className={css.item}>
        <Field
          label={
            <Tooltip title={'内边距'}>
              <LayoutTopLine />
            </Tooltip>
          }
        >
          <InputNumber
            variant={'borderless'}
            value={styleData?.padding}
            disabled={side === 'side'}
            onChange={(padding) => onChange({ padding })}
          />
        </Field>
        <Field bordered={false}>
          <Segmented
            value={side}
            options={SegmentedOptions(borderType?.dataList, icons)}
            onChange={(type) => {
              setSide(type);
              onChange({
                paddingSide: type,
                ...resetPadding(styleData?.padding)
              });
            }}
          />
        </Field>
      </div>
      <Sides
        value={extractSpacing(styleData, 'padding')}
        open={side === 'side'}
        onChange={({ value, key }) =>
          onChange({
            [`padding${key.charAt(0).toUpperCase() + key.slice(1)}`]: value
          })
        }
      />
    </div>
  );
}

export default Padding;
