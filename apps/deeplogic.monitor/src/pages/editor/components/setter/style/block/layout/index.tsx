import { AddLine, LayoutColumnLine, LayoutRowLine, SubtractLine, TextWrap } from '@/components/icons';
import { Segmented, Switch } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { Field, FlexControl, Panel, SegmentedOptions, Tooltip } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import { defaultLayout, display, emptyLayout, layoutType } from './config.json';
import Gap from './gap';
import css from './index.module.less';

const layoutTypeIcons = {
  row: <LayoutRowLine />,
  column: <LayoutColumnLine />
};

function Layout() {
  const { open, styleData, onChange } = useSetter();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = useCallback(() => {
    !collapsed ? onChange?.(defaultLayout?.dataList) : onChange?.(emptyLayout?.dataList);
  }, [collapsed]);

  useEffect(() => {
    setCollapsed(!!styleData?.display);
  }, [styleData?.display]);

  return (
    <Panel
      title={'布局'}
      open={open}
      className={css.layout}
      extra={<Panel.Action onClick={onCollapsed}>{!collapsed ? <AddLine /> : <SubtractLine />}</Panel.Action>}
    >
      <Panel.Body collapsed={collapsed}>
        <Field bordered={false} style={{ textAlign: 'center' }}>
          <Segmented
            value={styleData?.display}
            options={SegmentedOptions(display?.dataList)}
            onChange={(display) => onChange({ display })}
          />
        </Field>
        <div className={css.item}>
          <Field bordered={false}>
            <Segmented
              options={SegmentedOptions(layoutType?.dataList, layoutTypeIcons)}
              value={styleData?.flexDirection}
              onChange={(flexDirection) => onChange({ flexDirection, rowGap: 0, columnGap: 0 })}
            />
          </Field>
          <Field
            label={
              <Tooltip title={'是否换行'}>
                <TextWrap />
              </Tooltip>
            }
          >
            <div style={{ padding: '4px 11px' }}>
              <Switch
                size={'small'}
                checked={styleData?.flexWrap === 'wrap'}
                onChange={(value) => onChange({ flexWrap: value ? 'wrap' : 'nowrap' })}
              />
            </div>
          </Field>
        </div>
        <FlexControl
          value={{
            alignItems: styleData?.alignItems,
            justifyContent: styleData?.justifyContent
          }}
          onChange={onChange}
        />
        <Gap />
      </Panel.Body>
    </Panel>
  );
}

export default Layout;
