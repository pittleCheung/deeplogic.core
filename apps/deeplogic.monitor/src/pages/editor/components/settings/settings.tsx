import { Form, Layout } from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import { memo, Suspense, useEffect, useRef } from 'react';
import { Alignment, Breadcrumb } from './_components';
import Attribute from './attribute';
import Events from './events';
import Loading from './loading';
import css from './settings.module.less';
import Style from './style';
import Tabs from './tabs';
import useSettings, { SettingsProvider } from './useSettings';
import { isObject } from './utils';

const SettingContent = memo(() => {
  const contentRef = useRef();
  const { active, initContent, nodes, device } = useSettings();

  useEffect(() => {
    if (contentRef?.current) {
      initContent(contentRef?.current);
    }
  }, [contentRef]);

  return (
    <Suspense fallback={<Loading />}>
      <Layout.Content ref={contentRef} className={`${css.content}`}>
        <Breadcrumb className={css.breadcrumb} />
        {device?.selected && device?.selected?.length > 1 && <Alignment />}
        <div className={cls(nodes?.length > 1 && css.body)}>
          {
            {
              props: <Attribute />,
              style: <Style />,
              events: <Events />
            }[active]
          }
        </div>
      </Layout.Content>
    </Suspense>
  );
}, equal);

const Settings = (props) => {
  const [form] = Form.useForm();
  const { id, setProp, props: formValues } = props;

  /**
   * 属性变更时，更新节点Props
   * @param values
   */
  const propsChange = (values) => {
    if (!isObject(values)) return;
    setProp(id, values);
  };

  /**
   * 表单项变更时，更新节点Props
   * @param values
   */
  const onValuesChange = (values) => {
    console.log('onValuesChange: ', values);
    propsChange(values);
  };

  useEffect(() => {
    if (formValues) {
      form.setFieldsValue(formValues);
    }
  }, [formValues]);

  return (
    <Suspense fallback={<Loading />}>
      <Form form={form} onValuesChange={onValuesChange} labelCol={{ span: 8 }} className={css.form}>
        <SettingsProvider value={{ ...props, nodeId: id, form, formValues }}>
          <Tabs />
          <SettingContent />
        </SettingsProvider>
      </Form>
    </Suspense>
  );
};

export default memo(Settings, (pre, next) => equal(pre?.props, next?.props));
