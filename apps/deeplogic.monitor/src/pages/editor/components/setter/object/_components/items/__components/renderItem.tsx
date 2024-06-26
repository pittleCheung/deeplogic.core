import { BracesLine } from '@/components/icons';
import { Button, Form, theme } from 'antd';
import cls from 'classnames';
import { isObject } from '../../../../_helper/utils';
import useObject from '../../../../_hooks/useObject';
import { setters } from '../../../../index';
import css from './_style';
import Label from './label';
import ObjectRender from './objectRender';
import RenderSetter from './renderSetter';

function RenderItem(props) {
  const { token } = theme.useToken();
  const { name, title, propType, fieldProps = {}, setter, hidden, defaultValue } = props;
  const { onBind, form } = useObject();
  const isIndent = ['array', 'object'].includes(propType);

  if (!name) return null;

  /**
   * 依赖属性, 用于控制属性的显示隐藏
   */
  if (props?.relatedProps && isObject(props?.relatedProps)) {
    const relate = Object.keys(props?.relatedProps)?.find((key) => {
      const value = form.getFieldValue(key);
      return value === props?.relatedProps[key];
    });

    if (!relate) return null;
  }

  /**
   * 如果是Setter组件，则渲染Setter组件
   */
  if (!!setter?.component && !!setters[setter.component]) {
    return <RenderSetter key={name} {...props} />;
  }

  return (
    <div key={name} className={cls(css.object(token))}>
      <div className={cls(!isIndent && css.item(token))} data-name={name}>
        <Form.Item
          name={name}
          colon={false}
          labelAlign='left'
          noStyle={isIndent}
          label={<Label title={title} />}
          className={css.formItem}
          labelCol={{ flex: '0 0 80px' }}
          initialValue={defaultValue}
          hidden={hidden}
          {...fieldProps}
        >
          <ObjectRender {...props} form={form} />
        </Form.Item>
        {!isIndent && !hidden && <Button type='text' size={'small'} icon={<BracesLine />} onClick={() => onBind?.(name)} />}
      </div>
    </div>
  );
}

export default RenderItem;
