import { Button, Table, Tag } from 'antd';
import { connect } from 'umi';

const sys_types = ['DEFAULT', 'VPOINT', 'FILE', 'EXP_CALC'];

function SourceList({ dispatch, list, loading, selectedKeys }) {
  const columns = [
    {
      title: '名称',
      dataIndex: 'F_NAME',
      key: 'F_NAME',
      render: (text, record) =>
        sys_types.indexOf(record.F_TYPE) > -1 ? (
          <>{text}</>
        ) : (
          <Button type='link' onClick={(e) => onEdit(e, record)}>
            {text}
          </Button>
        )
    },
    { title: '驱动', dataIndex: 'F_TYPE', key: 'F_TYPE' },
    { title: '型号', dataIndex: 'F_SPEC', key: 'F_SPEC' },
    { title: '地址', dataIndex: 'F_ADDRESS', key: 'F_ADDRESS' },
    { title: '参数', dataIndex: 'F_PARAMETER', key: 'F_PARAMETER' },
    {
      title: '状态',
      dataIndex: 'F_DRVLIB',
      key: 'F_DRVLIB',
      width: 120,
      align: 'center',
      render: (v) => <Tag color={v ? 'success' : 'error'}>{v ? '启用' : '禁用'}</Tag>
    }
  ];

  /**
   * 编辑事件
   */
  function onEdit(e, record) {
    e.stopPropagation();
    dispatch({
      type: 'sources/updateState',
      payload: {
        source: record,
        editModalVisible: true
      }
    });
  }

  // 表格多选配置
  const rowSelection = {
    selectedRowKeys: selectedKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => {
      return {
        disabled: sys_types.indexOf(record.F_TYPE) > -1
      };
    }
  };

  /**
   * 表格多选框事件
   * @param {array} keys 选中的rowKeys
   */
  function onSelectChange(keys) {
    dispatch({
      type: 'sources/updateState',
      payload: { selectedKeys: keys }
    });
  }

  return (
    <Table
      rowKey='F_SOURCE_ID'
      size='small'
      dataSource={list}
      columns={columns}
      loading={loading}
      rowSelection={rowSelection}
      pagination={false}
    />
  );
}

function mapStateToProps(state) {
  const { list, selectedKeys } = state.sources;
  return {
    selectedKeys,
    list,
    loading: state.loading.models.sources
  };
}

export default connect(mapStateToProps)(SourceList);
