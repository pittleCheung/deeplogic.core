import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  FontFamily,
  FontSize,
  FormatClear,
  Italic,
  LineHeight,
  Overline,
  Strikethrough,
  TextSpacing,
  Underline
} from '@/components/icons';
import { Col, InputNumber, Row, Segmented, Select, theme } from 'antd';
import cls from 'classnames';
import { memo } from 'react';
import { Color, Field, Panel, SegmentedOptions, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import css from './_style';
import { fontFamily, fontSize, fontStyle, fontWeight, textAlign, textDecoration } from './config.json';

const icons = {
  left: <AlignLeft />,
  right: <AlignRight />,
  center: <AlignCenter />
};

const fontStyleIcons = {
  normal: <FormatClear />,
  italic: <Italic />,
  underline: <Underline />
};

const textDecorationIcons = {
  none: <FormatClear />,
  underline: <Underline />,
  overline: <Overline />,
  'line-through': <Strikethrough />
};

function Font() {
  const { open, styleData, onChange } = useSetter();
  const data = textAlign?.dataList;
  const styles = fontStyle?.dataList;
  const decoration = textDecoration?.dataList;
  const { token } = theme?.useToken() || {};

  return (
    <Panel title={'文字'} open={open}>
      <Field
        label={
          <Tooltip title={fontFamily?.title} placement={'bottom'}>
            <FontFamily />
          </Tooltip>
        }
      >
        <Select
          options={fontFamily?.dataList}
          variant={'borderless'}
          showSearch
          value={styleData?.fontFamily}
          onChange={(fontFamily) => onChange({ fontFamily })}
        />
      </Field>
      <Row gutter={6}>
        <Col span={12}>
          <Field
            label={
              <Tooltip title={fontWeight?.title} placement={'bottom'}>
                <Bold />
              </Tooltip>
            }
          >
            <Select
              options={fontWeight?.dataList}
              variant={'borderless'}
              value={styleData?.fontWeight}
              onChange={(fontWeight) => onChange({ fontWeight })}
            />
          </Field>
        </Col>
        <Col span={12}>
          <Field
            label={
              <Tooltip title={fontSize?.title} placement={'bottom'}>
                <FontSize />
              </Tooltip>
            }
          >
            <Select
              options={fontSize?.dataList}
              variant={'borderless'}
              value={styleData?.fontSize}
              onChange={(fontSize) => onChange({ fontSize })}
            />
          </Field>
        </Col>
        <Col span={12}>
          <Field
            label={
              <Tooltip title={'行高'} placement={'bottom'}>
                <LineHeight />
              </Tooltip>
            }
          >
            <InputNumber
              variant={'borderless'}
              min={0}
              value={styleData?.lineHeight}
              onChange={(lineHeight) => onChange({ lineHeight })}
            />
          </Field>
        </Col>
        <Col span={12}>
          <Field
            label={
              <Tooltip title={'字间距'} placement={'bottom'}>
                <TextSpacing />
              </Tooltip>
            }
          >
            <InputNumber
              variant={'borderless'}
              formatter={(value) => `${value} %`}
              parser={(value) => value.replace(' %', '')}
              value={styleData?.letterSpacing}
              onChange={(letterSpacing) => onChange({ letterSpacing })}
            />
          </Field>
        </Col>
        <Col span={12}>
          <Color isLinear value={styleData?.color} onChange={(color) => onChange({ color })} />
        </Col>
        <Col span={12}>
          <Field bordered={false}>
            <Segmented
              options={SegmentedOptions(data, icons)}
              value={styleData?.textAlign}
              onChange={(textAlign) => onChange({ textAlign })}
              className={cls(css.segmented(token))}
            />
          </Field>
        </Col>
        <Col span={8}>
          <Field bordered={false}>
            <Segmented
              options={SegmentedOptions(styles, fontStyleIcons)}
              value={styleData?.fontStyle}
              onChange={(fontStyle) => onChange({ fontStyle })}
              className={cls(css.segmented(token))}
            />
          </Field>
        </Col>
        <Col span={16}>
          <Field bordered={false}>
            <Segmented
              options={SegmentedOptions(decoration, textDecorationIcons)}
              value={styleData?.textDecoration}
              onChange={(textDecoration) => onChange({ textDecoration })}
              className={cls(css.segmented(token))}
            />
          </Field>
        </Col>
      </Row>
    </Panel>
  );
}

export default memo(Font);
