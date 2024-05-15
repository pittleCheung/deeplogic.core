import {Form, theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {memo, useEffect} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {getChildrenProps} from './_helper';
import css from './_style';
import meta from './meta';

function FormItem(props) {
    const {id, state, query, enabled, connectDrag, setProps} = useComponent(props);
    const {token} = theme.useToken();

    if (!state) return null;

    const {children} = state;

    useEffect(() => {
        if (props?.onPropChange) {
            props?.onPropChange?.(state);
        }
    }, [state]);

    useEffect(() => {
        const name = getChildrenProps(children, query);
        if (name) {
            setProps(id, {name});
        }
    }, [children]);

    const {events, displayName, ...rest} = state;

    return (
        <Drag connectDrag={connectDrag}>
            <Form.Item {...rest} className={cls(enabled && css.enabled(token))}>
                {children}
            </Form.Item>
        </Drag>
    );
}

FormItem.craft = craft(meta);

export default memo(FormItem, equal);
