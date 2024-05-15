import {Form as AntForm, theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {forEach} from 'lodash-es';
import {memo, useCallback, useEffect} from 'react';
import {craft, isArray} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {removeEmpty} from '../_helper';
import css from './_style';
import meta from './meta';

function Form(props) {
    const {state, query, enabled, setProps, connectDrag, getData} = useComponent(props);
    const {token} = theme.useToken();
    const [form] = AntForm.useForm();

    if (!state) return null;

    const {children} = state;
    const formItem = [
        'Input',
        'Select',
        'Checkbox',
        'Radio',
        'DatePicker',
        'TimePicker',
        'Switch',
        'Slider',
        'Rate',
        'Upload',
        'ColorPicker'
    ];
    const updateChildren = useCallback(() => {
        forEach(state?.children?.props?.children, (item) => {
            const id = item?.props?.id;
            if (id) {
                const nodes = getData(id)?.nodes;
                if (nodes) {
                    forEach(nodes, (key) => {
                        const node = getData(key);
                        const name = node?.displayName || node?.name;
                        if (formItem.includes(name)) {
                            setProps(key, {form});
                        }
                    });
                }
            }
        });
    }, [state?.children]);

    const onFinish = (values) => {
        const component = state?.events.onFinish.link.component;
        const params = removeEmpty(values);
        if (component && isArray(component)) {
            forEach(component, (key) => {
                setProps(key, params);
            });
        }
    };

    useEffect(() => {
        if (props?.onPropChange) {
            props?.onPropChange?.(state);
        }
    }, [state]);

    useEffect(() => {
        updateChildren();
    }, [updateChildren]);

    const {events, displayName, ...rest} = state;

    return (
        <Drag connectDrag={connectDrag}>
            <AntForm {...rest} form={form} onFinish={onFinish} className={cls(enabled && css.enabled(token))}>
                {children}
            </AntForm>
        </Drag>
    );
}

Form.craft = craft(meta);

export default memo(Form, equal);
