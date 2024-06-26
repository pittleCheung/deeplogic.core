import { Col, Form, Input, Row, Switch } from 'antd';
import { useState } from 'react';
import { PointPicker } from '../../../../../_components';
import { useEvent } from '../../__hooks/useEvent';

function PushData() {
  const { name, projId, value } = useEvent();
  const fixed = value?.[name]?.link?.value;
  const [isShow, setIsShow] = useState(!!fixed || false);

  return (
    <Row gutter={[0, 8]}>
      <Col span={24}>
        <Form.Item label='是否下发固定参数'>
          <Switch checked={isShow} onChange={setIsShow} />
        </Form.Item>
      </Col>
      {isShow && (
        <Col span={24}>
          <Form.Item noStyle name={[name, 'link', 'value']}>
            <Input placeholder='请输入固定值' allowClear />
          </Form.Item>
        </Col>
      )}
      <Col span={24}>
        <Form.Item noStyle name={[name, 'link', 'component']}>
          <PointPicker value={value?.[name]?.link} projId={projId} />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default PushData;
