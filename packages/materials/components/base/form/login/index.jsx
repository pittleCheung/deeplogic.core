import {Element} from '@craftjs/core';
import {message} from 'antd';
import {sha256} from 'js-sha256';
import equal from 'fast-deep-equal/es6';
import {memo, useState} from 'react';
import {craft} from '../../../_utils/utils';
import {CustomNode, Drag} from '../../../common';
import {useComponent} from '../../../useComponent';
import Button from '../../general/button';
import Container from '../../layout/container';
import Form from '../form';
import FormItem from '../form.item';
import Input from '../input';
import {login} from './__service/service';
import meta from './meta';

function LoginForm(props) {
    const [loading, setLoading] = useState(false);
    const {id, state, enabled, connectDrag, getLinkNodes, setProps} = useComponent(props);

    const onFinish = async (values) => {
        if (!enabled) {
            setLoading(true);
            Object.assign(values, {password: sha256(values.password)});

            const fd = new FormData();
            for (const key in values) {
                if (values.hasOwnProperty(key)) {
                    const value = values[key];
                    fd.append(key, value);
                }
            }

            try {
                const res = await login(fd);
                // console.log('Login', res);
            } catch (error) {
                message.error(error?.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Drag connectDrag={connectDrag}>
            <CustomNode linkNodes={getLinkNodes(id)} setProps={setProps}>
                <div style={props?.style}>
                    <Element id='login-container' is={Container} canvas>
                        <Element id='login-form' is={Form} canvas labelCol={{span: 4}} onFinish={onFinish}>
                            <Element
                                canvas
                                id='login-form-username'
                                is={FormItem}
                                label='用户名'
                                name='userid'
                                rules={[{required: true, message: '请输入用户名'}]}
                            >
                                <Element id='username-input' is={Input}/>
                            </Element>
                            <Element
                                canvas
                                id='login-form-password'
                                is={FormItem}
                                label='密码'
                                name='password'
                                rules={[{required: true, message: '请输入密码'}]}
                            >
                                <Element id='password-input' is={Input} type='password'/>
                            </Element>
                            <Element id='submit' is={FormItem} canvas wrapperCol={{offset: 4}}>
                                <Element id='submit-button' is={Button} type='primary' htmlType='submit'
                                         loading={loading}>
                                    登录
                                </Element>
                            </Element>
                        </Element>
                    </Element>
                </div>
            </CustomNode>
        </Drag>
    );
}

LoginForm.craft = craft(meta);

export default memo(LoginForm, equal);
