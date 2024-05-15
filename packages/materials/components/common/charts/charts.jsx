import { useEditor } from '@craftjs/core';
import { theme as AntTheme } from 'antd';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import equal from 'fast-deep-equal/es6';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { THEME_TYPES } from '../../../global';
import Drag from '../drag';
import { formatDateTime, formatSeries2Tags, formatterOption } from './__helper/utils';
import { selectReadings } from './__service/service';
import dark from './__theme/dark';

function Charts(props) {
  const chartRef = useRef();
  const optionRef = useRef();

  if (!props) return null;

  const { style, projId, theme, connectDrag, dateType, ranges, type, timeType, aggregate, tags, begin, end } = props;
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState(props?.option);
  const { query } = useEditor();
  const isFirst = useRef(true);
  const { token } = AntTheme.useToken();

  // 编辑器是否可用/取根节点
  const { enabled } = useMemo(() => {
    return {
      enabled: query?.getOptions()?.enabled
    };
  }, [query]);
  /**
   * @description: 图表加载完成
   */
  const onChartReady = useCallback((chart) => {
    chartRef.current = chart;
  }, []);

  /**
   * @description: 获取数据
   */
  const getData = useCallback(async () => {
    const option = optionRef?.current?.option;
    const dateTimeRange = formatDateTime(dateType, ranges);
    const points = !!tags?.length ? tags : formatSeries2Tags(option?.series);
    isFirst.current = false;
    // 确保所有需要的数据都是可用的
    if (!points?.length) {
      //  || !dateTimeRange
      return null;
    }

    setLoading({ maskColor: 'rgba(0, 0, 0, 0.1)' }); // 开始加载数据
    try {
      const data = await selectReadings(
        projId,
        points,
        begin || dateTimeRange?.begin,
        end || dateTimeRange?.end,
        timeType,
        aggregate
      );
      const opts = formatterOption({ data, option });
      setOption(opts); // 设置新的 option
    } catch (error) {
      console.error(error); // 处理错误情况
    } finally {
      setLoading(false); // 结束加载状态
    }
  }, [projId, tags, timeType, aggregate, dateType, ranges, begin, end]);

  useEffect(() => {
    if (!equal(optionRef.current, props)) {
      // if (enabled && !isFirst.current) {
      const { type } = props?.option?.series?.[0] || {};
      // 处理仪表盘有多个值，但只有第一个值更新的情况
      if (type === 'gauge' && props?.option.series.length > 1) {
        const [firstData] = props.option?.series || [];
        const opeion = {
          ...props.option,
          series: props.option?.series?.map((item) => {
            if (props.value) {
              item.max = props.value && firstData?.max && firstData?.max > props.value ? firstData?.max : props.value;
              item.min = firstData?.min;
              item.radius = firstData?.radius;
            }

            return item;
          })
        };
        // console.log('仪表盘props: ', props, props.value, opeion);
        setOption(opeion); // 设置新的 option
        optionRef.current = props;
        return;
      } else {
        setOption(props.option); // 设置新的 option
      }
      optionRef.current = props;
      getData();
    }
  }, [getData, props?.option]);

  useEffect(() => {
    echarts?.registerTheme('dark', dark(token?.colorPrimary));
  }, [echarts, token?.colorPrimary]);

  return enabled ? (
    <Drag connectDrag={connectDrag} style={{ width: '100%', height: 'auto' }}>
      <ReactECharts
        // opts={{ width: 'auto', height: 'auto' }}
        notMerge
        lazyUpdate
        autoResize={true}
        style={style}
        //showLoading={loading}
        theme={THEME_TYPES[theme?.algorithm]}
        onChartReady={onChartReady}
        option={option}
        onEvents={{
          // 加了此事件，在flex布局中显示才会正确，echarts会自动调整图表大小
          rendered: () => {
            chartRef.current?.resize();
          }
        }}
      />
    </Drag>
  ) : (
    <ReactECharts
      notMerge
      // opts={{ width: 'auto', height: 'auto' }}
      lazyUpdate
      autoResize={true}
      style={style}
      //showLoading={loading}
      theme={THEME_TYPES[theme?.algorithm]}
      onChartReady={onChartReady}
      option={option}
      onEvents={{
        // 加了此事件，在flex布局中显示才会正确，echarts会自动调整图表大小
        rendered: () => {
          chartRef.current?.resize();
        }
      }}
    />
  );
}

export default memo(Charts, equal);
