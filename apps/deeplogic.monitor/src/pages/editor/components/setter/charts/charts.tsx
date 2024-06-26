import {
  BarChartGroupedFill,
  Chat2Fill,
  GridFill,
  InputMethodFill,
  LayoutColumnFill,
  LayoutRowFill,
  ShapesFill,
  ToolsFill
} from '@/components/icons';
import { Space, Tabs, theme, Tooltip } from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect, useState } from 'react';
import { replaceNameWithArray } from '../_helper/utils';
import { SetterProvider } from '../_hooks/useSetter';
import ObjectSetter from '../object';
import SeriesSetter from '../series';
import css from './_style';

const icons = {
  title: <InputMethodFill />,
  legend: <ShapesFill />,
  grid: <GridFill />,
  xAxis: <LayoutColumnFill />,
  yAxis: <LayoutRowFill />,
  series: <BarChartGroupedFill />,
  tooltip: <Chat2Fill />,
  toolbox: <ToolsFill />
};

function ChartSetter(props) {
  const [attributes, setAttributes] = useState(null);
  const { setter } = props;
  const { token } = theme?.useToken();

  if (!setter) return null;

  const formatterItems = (items) => {
    return items?.map((item) => {
      const key = item?.name?.[item?.name?.length - 1];

      return {
        ...item,
        key,
        label: (
          <Tooltip title={item?.title} placement={'left'} align={{ offset: [-24, 0] }}>
            <Space size={4} align={'center'}>
              {icons?.[key]}
            </Space>
          </Tooltip>
        ),
        children: item?.setter ? (
          <SeriesSetter {...item} values={props?.values} />
        ) : (
          <ObjectSetter {...item} items={item?.props} />
        )
      };
    });
  };

  useEffect(() => {
    if (setter?.props) {
      const result = replaceNameWithArray({ ...setter, name: 'option' });
      const { props } = result;
      const items = formatterItems(props);
      setAttributes(items);
    }
  }, [setter?.props]);

  return (
    <SetterProvider {...props}>
      <Tabs tabPosition={'left'} items={attributes} className={cls(css.charts(token))} />
    </SetterProvider>
  );
}

export default memo(ChartSetter, equal);
