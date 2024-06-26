import { useEditor } from '@craftjs/core';
import { Col, Form, Row, Select, TreeSelect } from 'antd';
import cls from 'classnames';
import { isEqualWith } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';
import { useEvent } from '../../__hooks/useEvent';
import { getValues, linkNodes, linkProps } from '../_helper';
import css from './_style';

function BindProperty() {
  const { query } = useEditor();
  const { resolver, name, form } = useEvent();
  const nodesRef = useRef([]);
  const [property, setProperty] = useState([]);

  const getProperty = (params) => {
    const data = linkProps(params);
    setProperty(data);
  };

  useEffect(() => {
    const links = linkNodes({ query, resolver });
    if (!isEqualWith(nodesRef.current, links)) {
      nodesRef.current = links;
    }
  }, []);

  useEffect(() => {
    const component = form.getFieldValue(name)?.link?.component;
    if (component) {
      getProperty({ keys: component, data: nodesRef.current });
    }
  }, [form.getFieldValue(name), nodesRef.current]);

  return (
    <Row className={cls(css.row)} gutter={[0, 4]}>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'component']}>
          <Select
            allowClear
            placeholder='请选择'
            mode='multiple'
            listHeight={120}
            className={cls(css?.select)}
            options={nodesRef.current}
            onChange={(keys) => getProperty({ keys, data: nodesRef.current })}
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'props']} noStyle>
          <TreeSelect
            allowClear
            placeholder='请选择'
            listHeight={120}
            className={cls(css?.select)}
            treeData={property}
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            treeDefaultExpandAll
            onChange={(value) => {
              return getValues({ value, data: property });
            }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default BindProperty;
