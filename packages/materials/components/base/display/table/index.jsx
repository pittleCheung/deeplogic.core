import { Table as AntdTable } from 'antd';
import equal from 'fast-deep-equal/es6';
import { nanoid } from 'nanoid';
import { memo, useCallback, useEffect, useState } from 'react';
import { craft } from '../../../_utils/utils';
import Drag from '../../../common/drag';
import { useComponent } from '../../../useComponent';
import { getSourceData } from './__service/service';
import meta from './meta';

function Table(props) {
  const { id, enabled, projId, state, connectDrag, setProps } = useComponent(props);
  const { dateType, ranges, type, timeType, aggregate, tags, begin, end, level, date, key, keyword, alarmType, dateTime } =
    props;
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(0);
  const [columns, setColumns] = useState([]);

  if (!state) return null;

  // 获取columns
  const columnsData = meta?.props
    ?.find((item) => item?.name === 'columns')
    ?.props?.find((item) => item?.name === 'title')?.values;

  /**
   * 格式化columns
   * @param values
   */
  const formatColumns = (values) => {
    return values?.map((item) => {
      return {
        ...item,
        title: columnsData?.[item?.title],
        dataIndex: item?.title
      };
    });
  };

  /**
   * 设置额外数据
   * @param values
   */
  const setExtra = (values) => {
    setProps(id, { ...values });
  };

  /**
   * 获取数据
   * @type {(function(): Promise<void>)|*}
   */

  const getData = useCallback(async () => {
    const resp = await getSourceData({
      type: state?.source,
      ...state,
      projId,
      point: state?.point,
      params: {
        dateType,
        ranges,
        type,
        timeType,
        aggregate,
        tags: state?.point?.tags,
        begin,
        end,
        level,
        date,
        key,
        keyword,
        alarmType,
        dateTime
      }
    });
    if (resp) {
      setDataSource(resp?.dataSource?.map((item) => ({ ...item, key: nanoid(10) })) || []);
      setTotal(resp?.total || 0);
      setColumns(resp?.columns || formatColumns(state?.columns));
      setExtra({ extra: { total: resp?.total, ...resp?.maps } });
    }
  }, [props, projId, id]);

  // 获取数据
  useEffect(() => {
    if (state?.source) {
      getData();
    }
  }, [props]);

  const {
    style,
    size = 'middle',
    bordered = false,
    showHeader = false,
    // loading = false,
    isScroll = false,
    scroll = {}
  } = state;
  // console.log('=>(index.jsx:92) state: ', state);

  return enabled ? (
    <Drag connectDrag={connectDrag} style={{ width: style?.width, height: style?.height }}>
      <AntdTable
        scroll={isScroll && scroll.x && scroll.y ? { x: scroll.x + 'px', y: scroll.y + 'px' } : false}
        size={size}
        bordered={bordered}
        showHeader={showHeader}
        tableLayout='auto'
        // loading
        style={style}
        // virtual
        pagination={
          state?.isPagination
            ? {
                ...state?.pagination,
                total,
                onChange: (page, pageSize) => {
                  setProps(id, { pagination: { ...state?.pagination, page: page - 1, pageSize } });
                }
              }
            : false
        }
        columns={columns}
        dataSource={dataSource}
      />
    </Drag>
  ) : (
    <AntdTable
      scroll={isScroll && scroll.x && scroll.y ? { x: scroll.x + 'px', y: scroll.y + 'px' } : false}
      size={size}
      bordered={bordered}
      showHeader={showHeader}
      tableLayout='auto'
      // loading
      style={style}
      // virtual
      pagination={
        state?.isPagination
          ? {
              ...state?.pagination,
              total,
              onChange: (page, pageSize) => {
                setProps(id, { pagination: { ...state?.pagination, page: page - 1, pageSize } });
              }
            }
          : false
      }
      columns={columns}
      dataSource={dataSource}
    />
  );
}

Table.craft = craft(meta);

export default memo(Table, equal);
