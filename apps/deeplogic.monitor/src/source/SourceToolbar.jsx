import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { connect } from 'umi';

function SourceToolbar({ dispatch, selectedKeys, projId }) {
  /**
   * 删除事件
   */
  function onDel(e) {
    e.stopPropagation();
    Modal.confirm({
      icon: <QuestionCircleOutlined />,
      content: '确定要删除选择的驱动吗？',
      onOk() {
        dispatch({ type: 'sources/del' });
      }
    });
  }

  /**
   * 添加事件
   */
  function onAdd(e) {
    e.stopPropagation();
    dispatch({
      type: 'sources/updateState',
      payload: {
        source: { F_SOURCE_ID: '-1', F_P_ID: projId, F_INTERVAL: 2000, F_TIMEOUT: 5000, F_PAR: 10000, F_DRVLIB: true },
        editModalVisible: true
      }
    });
  }

  return (
    <div className='toolbar'>
      <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
        添加
      </Button>
      <Button onClick={onDel} disabled={selectedKeys.length === 0}>
        删除
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  const { selectedKeys } = state.sources;
  const { projId } = state.apps;
  return {
    projId,
    selectedKeys,
    loading: state.loading.models.sources
  };
}

export default connect(mapStateToProps)(SourceToolbar);
