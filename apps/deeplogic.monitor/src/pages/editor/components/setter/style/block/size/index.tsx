import {
  ContractLeftRightFill,
  ContractLeftRightLine,
  ContractUpDownFill,
  ContractUpDownLine,
  ExpandUpDownLine
} from '@/components/icons';
import { InputNumber, Select } from 'antd';
import { memo } from 'react';
import { Field, Panel } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { heightOptions, widthOptions,overflowOptions } from './config.json';
import css from "./index.module.less"

// 宽度选项图标
const widthIcons = {
  fixed: <ContractLeftRightFill />,
  relative: <ContractLeftRightLine />,
  'fit-content': <ContractLeftRightLine />
};

// 高度选项图标
const heightIcons = {
  fixed: <ContractUpDownFill />,
  relative: <ContractUpDownLine />,
  'fit-content': <ContractUpDownLine />,
  viewport: <ExpandUpDownLine />
};

// 选项默认值
const values = {
  fixed: { value: 100, unit: 'px' },
  relative: { value: 100, unit: '%' },
  'fit-content': { value: 'auto' },
  viewport: { value: 100, unit: 'vh' }
};

function Size() {
  const { open, styleData, onChange } = useSetter();
  const { width, height, widthType, heightType, overflow } = styleData;
  console.log('styleData: ', styleData,overflow);
  const defaultW = widthType ? widthType : width !== 'auto' ? widthType : 'fit-content';
  const defaultH = heightType ? heightType : height !== 'auto' ? heightType : 'fit-content';

  function handleFormatValue(size, unit) {
    if (!size) return;
    return size.toString().replace(unit || '', '');
  }

  function handleFormatter(size, unit) {
    if (!size) return '';
    return `${handleFormatValue(size || '', unit || '')}${unit || ''}`;
  }

  function onStep(type, info) {
    const unit = values[styleData[`${type}Type`]]?.unit;
    const value = Number(handleFormatValue(styleData[type], unit));

    if (info.type === 'up') {
      onChange({ [type]: `${value + info.offset}${unit}` });
    } else {
      onChange({ [type]: `${value - info.offset}${unit}` });
    }
  }

  function onChangeType(type, value) {
    onChange?.({
      [`${type}Type`]: value,
      [type]: `${values[value]?.value}${values[value]?.unit || ''}`,
      [`${type}Unit`]: values[value]?.unit
    });
  }

  function onChangeSize(type, value) {
    onChange?.({
      [type]: `${value}${values[styleData[`${type}Type`]]?.unit || ''}`
    });
  }

  return (
    <Panel title='尺寸' className={css.size} open={open}>
      <div className={css.item}>
        <Field bordered={false}>
          <InputNumber
            className={css.number}
            prefix={'W'}
            value={width}
            onChange={(value) => onChangeSize('width', value)}
            disabled={widthType === 'fit-content' || width === 'auto'}
            formatter={(value) => handleFormatter(value, values[widthType]?.unit)}
            parser={(value) => value.replace(values[widthType]?.unit, '')}
            min={0}
            onStep={(value, info) => onStep('width', info)}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
        <Field label={widthIcons[widthType || defaultW]} className={css.select}>
          <Select
            variant={'borderless'}
            options={widthOptions.dataList}
            value={widthType || defaultW}
            onChange={(value) => onChangeType('width', value)}
          />
        </Field>
      </div>
      <div className={css.item}>
        <Field bordered={false}>
          <InputNumber
            className={css.number}
            prefix={'H'}
            value={height}
            onChange={(value) => onChangeSize('height', value)}
            disabled={heightType === 'fit-content' || height === 'auto'}
            formatter={(value) => handleFormatter(value, values[heightType]?.unit)}
            parser={(value) => value.replace(values[heightType]?.unit, '')}
            max={`${(values[heightType]?.unit || '') === 'vh' ? 100 : undefined}`}
            min={0}
            onStep={(value, info) => onStep('height', info)}
            onBlur={(e) => e.stopPropagation()}
          />
        </Field>
        <Field label={heightIcons[heightType || defaultH]} className={css.select}>
          <Select
            variant={'borderless'}
            options={heightOptions.dataList}
            value={heightType || defaultH}
            onChange={(value) => onChangeType('height', value)}
          />
        </Field>
      </div>
      <div className={css.item}>

        <Field label={'overflow'} className={css.select}>
          <Select
            variant={'borderless'}
            options={overflowOptions.dataList}
            value={overflow}
            onChange={(value) => onChange({'overflow': value})}
          />
        </Field>
      </div>
    </Panel>
  );
}

export default memo(Size);
