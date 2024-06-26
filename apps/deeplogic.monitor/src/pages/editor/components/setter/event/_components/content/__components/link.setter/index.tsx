import { Col, Form, Input, Row, Select } from 'antd';
import { useEvent } from '../../__hooks/useEvent';
import { hrefTarget } from '../config.json';

const LinkSetter = () => {
  const { name } = useEvent();

  return (
    <Row gutter={[8, 0]}>
      <Col span={14}>
        <Form.Item name={[name, 'link', 'href']}>
          <Input allowClear />
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item name={[name, 'link', 'target']}>
          <Select options={hrefTarget?.dataList} listHeight={120} allowClear />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default LinkSetter;
