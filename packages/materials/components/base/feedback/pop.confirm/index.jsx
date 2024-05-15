import {Popconfirm, theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import css from './_style';
import meta from './meta';

function PopConfirm(props) {
    const {token} = theme.useToken();
    const {state, enabled, children} = useComponent(props);

    return (
        <Popconfirm {...state}>
            <div className={cls(enabled && css.container(token))}>{children}</div>
        </Popconfirm>
    );
}

PopConfirm.craft = craft(meta);

export default memo(PopConfirm, equal);
