import { Col, Form, Input, Row, TreeSelect } from 'antd';
import { useEvent } from '../../__hooks/useEvent';

function OpenPopup() {
  const { pages, name } = useEvent();

  const treeData = (data) => {
    if (!data) return [];
    return data?.map((item) => {
      return {
        title: item?.F_TITLE,
        value: item?.F_PAGE_ID,
        selectable: !item?.IS_GROUP,
        children: item?.IS_GROUP ? treeData(item?.PAGES) : null
      };
    });
  };

  return (
    <Row gutter={[8, 8]} wrap>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'component']} noStyle>
          <TreeSelect
            style={{ width: '100%' }}
            listHeight={120}
            treeData={treeData(pages)}
            placeholder='请选择页面/弹窗'
            treeDefaultExpandAll
            allowClear
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'title']} noStyle>
          <Input style={{ width: '100%' }} placeholder='请输入弹窗标题' allowClear />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'width']} noStyle initialValue={520}>
          <Input style={{ width: '100%' }} placeholder='请输入弹窗宽度' allowClear />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default OpenPopup;
