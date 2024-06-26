import { AddLine, AlignJustify, All, BorderSide, Separator, SubtractLine } from '@/components/icons';
import { Col, Divider, InputNumber, Row, Segmented, Select } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { BorderRadius } from '../../../../../../../components/icons';
import { Color, Field, Panel, SegmentedOptions, Sides, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { borderStyle, borderType, defaultBorder, defaultBorderRadius, emptyBorder, emptyBorderRadius } from './config.json';
import css from './index.module.less';

const icons = {
  all: <All />,
  side: <BorderSide />
};

function Border() {
  const { open, styleData, onChange } = useSetter();
  const [side, setSide] = useState(styleData?.borderSide || 'all');
  const [radiusSide, setRadiusSide] = useState(styleData?.borderRadiusSide || 'all');
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = useCallback(() => {
    if (!collapsed) {
      onChange?.({ ...defaultBorder?.dataList, ...defaultBorderRadius.dataList });
      console.log({ ...defaultBorder?.dataList, ...defaultBorderRadius.dataList });
    } else {
      onChange?.({
        ...emptyBorder?.dataList,
        ...emptyBorderRadius.dataList
      });
    }
  }, [collapsed]);

  useEffect(() => {
    setCollapsed(!!styleData?.borderStyle);
  }, [styleData?.borderStyle]);

  useEffect(() => {
    setSide(styleData?.borderSide || 'all');
  }, [styleData?.borderSide]);

  return (
    <Panel
      title={'描边'}
      open={open}
      extra={<Panel.Action onClick={onCollapsed}>{!collapsed ? <AddLine /> : <SubtractLine />}</Panel.Action>}
    >
      <Panel.Body collapsed={collapsed}>
        <Row gutter={6}>
          <Col span={12}>
            <Color value={styleData?.borderColor} isLinear={false} onChange={(borderColor) => onChange({ borderColor })} />
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
        <div className={css.item}>
          <Field
            label={
              <Tooltip title={'线宽'}>
                <AlignJustify />
              </Tooltip>
            }
            className={css.width}
          >
            <InputNumber
              value={styleData?.borderWidth}
              variant={'borderless'}
              onChange={(borderWidth) => {
                setSide('all');
                onChange({ borderWidth });
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
        <Divider style={{ margin: `${side === 'side' ? '0' : '4px'} 6px 8px 0` }} />
        <div className={css.item}>
          <Field
            label={
              <Tooltip title={'圆角'}>
                <BorderRadius />
              </Tooltip>
            }
            className={css.width}
          >
            <InputNumber
              value={styleData?.borderRadius}
              variant={'borderless'}
              onChange={(borderRadius) => {
                setRadiusSide('all');
                onChange({ borderRadius });
              }}
              disabled={radiusSide === 'side'}
              min={0}
            />
          </Field>
          <Field bordered={false}>
            <Segmented
              options={SegmentedOptions(borderType?.dataList, icons)}
              value={radiusSide}
              onChange={(type) => {
                setRadiusSide(type);
                onChange({
                  borderRadiusSide: type,
                  borderTopLeftRadius: styleData?.borderRadius,
                  borderTopRightRadius: styleData?.borderRadius,
                  borderBottomRightRadius: styleData?.borderRadius,
                  borderBottomLeftRadius: styleData?.borderRadius
                });
              }}
            />
          </Field>
        </div>
        <Sides
          open={radiusSide === 'side'}
          type='radius'
          value={{ topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }}
          onChange={({ value, key }) =>
            onChange({
              [`border${key.charAt(0).toUpperCase() + key.slice(1)}Radius`]: value
            })
          }
          value={{
            topLeft: styleData?.borderTopLeftRadius,
            topRight: styleData?.borderTopRightRadius,
            bottomRight: styleData?.borderBottomRightRadius,
            bottomLeft: styleData?.borderBottomLeftRadius
          }}
        />
      </Panel.Body>
    </Panel>
  );
}

export default memo(Border);
