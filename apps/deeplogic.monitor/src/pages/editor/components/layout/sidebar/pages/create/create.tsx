import {AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import {Button, Form, Input, Modal, Segmented} from 'antd';
import {useEffect, useState} from 'react';
import usePages from '../usePages';
import css from "./create.module.less"

function CreatePage() {
    const [form] = Form.useForm();
    const {open, setOpen, groupId, setGroupId, onCreate} = usePages();
    const [active, setActive] = useState('page');

    function onFinish(values) {
        console.log("create========>", active, onCreate)
        if (active === 'page') {
            onCreate?.({F_PAGE_ID: '-1', F_PT_ID: groupId, ...values});
        } else {
            onCreate?.({F_PT_ID: '-1', ...values});
        }
        onCancel();
    }

    function onCancel() {
        form.resetFields();
        setActive('page');
        setGroupId?.('');
        setOpen?.(!open);
    }

    useEffect(() => {
        if (groupId) {
            setActive('page');
        }
    }, [groupId]);


    return (
        <Modal open={open} onCancel={onCancel} footer={null}>
            <div className={`${css.tab}`}>
                {
                    !groupId &&
                    <Segmented
                        value={active}
                        disabled={groupId}
                        onChange={setActive}
                        options={[
                            {
                                label: '页面',
                                value: 'page',
                                icon: <BarsOutlined/>
                            },
                            {
                                label: '分组',
                                value: 'group',
                                icon: <AppstoreOutlined/>
                            }
                        ]}
                    />
                }
            </div>
            <Form form={form} labelCol={{span: 4}} onFinish={onFinish}>
                {
                    {
                        page: (
                            <>
                                <Form.Item label="页面名称" name="F_TITLE"
                                           rules={[{required: true, message: '请填写页面名称'}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="页面描述" name="description">
                                    <Input.TextArea/>
                                </Form.Item>
                            </>
                        ),
                        group: (
                            <Form.Item label="分组名称" name="F_NAME"
                                       rules={[{required: true, message: '请填写分组名称'}]}>
                                <Input/>
                            </Form.Item>
                        )
                    }[active]
                }
                <div style={{textAlign: 'center'}}>
                    <Button onClick={() => setOpen?.(!open)}>取消</Button>
                    <Button style={{marginLeft: 12}} type="primary" htmlType="submit">
                        新建
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}

export default CreatePage;
