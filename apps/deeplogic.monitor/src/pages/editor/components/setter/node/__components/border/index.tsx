import { AlignJustify, All, BorderSide, Separator } from '@/components/icons';
import { Col, InputNumber, Row, Segmented, Select, theme } from 'antd';
import { memo, useEffect, useState } from 'react';
import { Color, Field, Panel, SegmentedOptions, Sides, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import css from './_style';
import { borderStyle, borderType } from './config.json';

const icons = {
  all: <All />,
  side: <BorderSide />
};

function Border() {
  const { styleData, onChange } = useSetter();
  const { token } = theme?.useToken();
  const [side, setSide] = useState(styleData?.borderSide || 'all');

  useEffect(() => {
    setSide(styleData?.borderSide || 'all');
  }, [styleData?.borderSide]);

  return (
    <Panel title={'描边'} open className={css.border(token)}>
      <Row gutter={6}>
        <Col span={12}>
          <Color value={styleData?.stroke} onChange={(stroke) => onChange?.({ stroke })} />
        </Col>
        <Col span={12}>
          <Field
            label={
              <Tooltip title={'样式'}>
                <Separator />
              </Tooltip>
            }
          >
            <Select
              options={borderStyle?.dataList}
              variant={'borderless'}
              allowClear
              value={styleData?.borderStyle}
              onChange={(borderStyle) => onChange({ borderStyle })}
            />
          </Field>
        </Col>
      </Row>
      <div className={css.item(token)}>
        <Field
          label={
            <Tooltip title={'线宽'}>
              <AlignJustify />
            </Tooltip>
          }
          className={css.width(token)}
        >
          <InputNumber
            value={styleData?.strokeWidth || 0}
            variant={'borderless'}
            onChange={(strokeWidth) => {
              setSide('all');
              onChange({ strokeWidth });
            }}
            disabled={side === 'side'}
            min={0}
          />
        </Field>
        <Field bordered={false}>
          <Segmented
            options={SegmentedOptions(borderType?.dataList, icons)}
            value={side}
            onChange={(type) => {
              setSide(type);
              onChange({
                borderSide: type,
                borderTopWidth: styleData?.borderWidth,
                borderRightWidth: styleData?.borderWidth,
                borderLeftWidth: styleData?.borderWidth,
                borderBottomWidth: styleData?.borderWidth
              });
            }}
          />
        </Field>
      </div>
      <Sides
        open={side === 'side'}
        onChange={({ value, key }) =>
          onChange({
            [`border${key.charAt(0).toUpperCase() + key.slice(1)}Width`]: value
          })
        }
        value={{
          left: styleData?.borderLeftWidth,
          right: styleData?.borderRightWidth,
          top: styleData?.borderTopWidth,
          bottom: styleData?.borderBottomWidth
        }}
      />
    </Panel>
  );
}

export default memo(Border);
