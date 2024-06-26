import { useEditor } from '@craftjs/core';
import { Col, Form, Row, Select } from 'antd';
import cls from 'classnames';
import { useEvent } from '../../__hooks/useEvent';
import { linkNodes } from '../_helper';
import css from './_style';

function FormLinkage({ mode = 'multiple', isAll = false }) {
  const { query } = useEditor();
  const { resolver, name, form } = useEvent();
  const options = linkNodes({ query, resolver, isAll });

  return (
    <Row className={cls(css.row)} gutter={[0, 4]}>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'component']}>
          <Select
            mode={mode}
            placeholder='请选择'
            listHeight={120}
            className={cls(css?.select)}
            options={options}
            allowClear
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default FormLinkage;
