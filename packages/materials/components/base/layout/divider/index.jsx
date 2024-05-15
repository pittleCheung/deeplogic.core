import {Divider as AntDivider, theme} from 'antd';
import cls from 'classnames';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import css from './_style';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Divider(props) {
    const {token} = theme.useToken();
    const {state, enabled, connectDrag} = useComponent(props);

    return (
        <Drag connectDrag={connectDrag}>
            <AntDivider className={cls(enabled && css.enabled(token))} {...state}>
                {state?.children}
            </AntDivider>
        </Drag>
    );
}

Divider.craft = craft(meta);

export default memo(Divider, equal);
