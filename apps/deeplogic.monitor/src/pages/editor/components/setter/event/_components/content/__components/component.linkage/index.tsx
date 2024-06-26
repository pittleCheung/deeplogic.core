import { useEditor } from '@craftjs/core';
import { Col, Form, Row, Select, TreeSelect } from 'antd';
import cls from 'classnames';
import { isEqualWith } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';
import { useEvent } from '../../__hooks/useEvent';
import { linkNodes, linkProps } from '../_helper';
import css from './_style';

function ComponentLinkage() {
  const linkageRef = useRef();
  const { query } = useEditor();
  const { resolver, name, form } = useEvent();
  const [child, setChild] = useState();

  useEffect(() => {
    if (!isEqualWith(linkageRef.current, linkNodes({ query, resolver }))) {
      linkageRef.current = linkNodes({ query, resolver });
    }
  }, [query]);

  useEffect(() => {
    const component = form.getFieldValue(name)?.link?.component;
    if (component) {
      setChild(linkProps({ keys: component, data: linkageRef.current }));
    }
  }, [form.getFieldValue(name), linkageRef.current]);

  return (
    <Row gutter={8} className={cls(css?.row)}>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'component']}>
          <Select placeholder='请选择' listHeight={120} options={linkageRef?.current} allowClear />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={[name, 'link', 'props']}>
          <TreeSelect placeholder='请选择' listHeight={120} treeData={child} allowClear />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default ComponentLinkage;
