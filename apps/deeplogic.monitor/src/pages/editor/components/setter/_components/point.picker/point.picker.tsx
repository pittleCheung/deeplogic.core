import { Empty, Form, Input, Radio, Space, Tag, theme, Typography } from 'antd';
import cls from 'classnames';
import { trim } from 'lodash-es';
import { useState } from 'react';
import css from './_style';
import { searchLite } from './service';
import { transform } from './utils';

function PointPicker({ projId, value, onChange }) {
  const [list, setList] = useState([]); // [{ key: '1', value: '1' }
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(value);
  const { token } = theme.useToken();

  function onSearch(key) {
    if (!trim(key).length) return;
    setLoading(true);
    searchLite({ projId, key })
      .then((r) => {
        if (r) {
          const options = transform(r);
          setList(options);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <Input.Search
        allowClear
        onSearch={onSearch}
        onChange={(e) => !e?.target?.value && setList([])}
        placeholder={'输入关键字检索点表'}
        loading={loading}
      />
      {checked && (
        <div className={cls(css.selected(token))}>
          <Typography.Text type='secondary'>当前选中：</Typography.Text>
          <Tag
            bordered={false}
            color={'blue'}
            closable
            onClose={() => {
              setChecked('');
              onChange?.('');
              form?.resetFields();
            }}
          >
            {checked}
          </Tag>
        </div>
      )}
      <div className={cls(css.picker(token))}>
        <Form form={form} onValuesChange={() => onChange?.(form?.getFieldValue('point'))}>
          <Form.Item name='point' noStyle>
            <Radio.Group value={checked} onChange={(e) => setChecked(e.target.value)}>
              <Space direction={'vertical'}>
                {list?.map((item) => (
                  <Radio key={item.key} value={item.key}>
                    <Space>
                      <Tag bordered={false} color={'blue'}>
                        {item.key}
                      </Tag>
                      <Typography.Text ellipsis>{item.value}</Typography.Text>
                    </Space>
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description='暂无数据'
          style={{ display: list.length ? 'none' : 'block' }}
          className={css.empty}
        />
      </div>
    </div>
  );
}

export default PointPicker;
