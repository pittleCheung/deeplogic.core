import { Form } from 'antd';
import { get, merge } from 'lodash-es';
import { createElement } from 'react';
import { setters } from '../../setter';
import useSettings from '../useSettings';

function StyleConfig() {
  const { custom, formValues, ...other } = useSettings();

  function renderStyleItem() {
    if (!custom) return null;

    const style = get(custom, 'style');

    if (!style) return null;

    if ('setter' in style) {
      const { props, component } = style.setter;
      const { values, ...rest } = props;

      return (
        <Form.Item name='style' noStyle>
          {createElement(setters[component], {
            name: 'style',
            values: merge({}, values, formValues?.style),
            ...rest,
            ...other
          })}
        </Form.Item>
      );
    }
  }

  return <div>{renderStyleItem()}</div>;
}

export default StyleConfig;
