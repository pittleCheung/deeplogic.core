import { PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, theme } from 'antd';
import { useState } from 'react';
import { useSidebar } from '../../../../../hooks';
import { CustomCategory, CustomList } from './_components';
import css from './_style';

function CustomComponent() {
  const { token } = theme?.useToken();
  const { materials } = useSidebar();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(null);
  const { onCreateCategory } = materials?.custom;

  async function onSubmit() {
    if (!form) return;

    // @ts-ignore
    form?.validateFields().then(async () => {
      setLoading(true);
      // @ts-ignore
      const resp = await onCreateCategory(form?.getFieldsValue());

      if (resp) {
        setOpen(false);
        setLoading(false);
        // @ts-ignore
        form?.resetFields();
      }
      setLoading(false);
    });
  }

  return (
    <div className={css.customs(token)}>
      <Popconfirm
        open={open}
        title={'组件分类'}
        placement={'rightTop'}
        onConfirm={onSubmit}
        trigger={'click'}
        arrow={false}
        icon={null}
        onCancel={() => setOpen(false)}
        okButtonProps={{ loading }}
        description={<CustomCategory onChange={setForm} />}
      >
        <Button type='text' icon={<PlusOutlined />} block className={css.add(token)} onClick={() => setOpen(!open)}>
          创建分类
        </Button>
      </Popconfirm>
      <CustomList />
    </div>
  );
}

export default CustomComponent;
