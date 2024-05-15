import {theme, Typography} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function Link(props) {
    const {state, enabled, connectDrag} = useComponent(props);
    const {token} = theme.useToken();

    if (!state) return null;

    const {children} = state;

    if (enabled) {
        return (
            <Typography.Text ref={connectDrag} style={{color: token?.colorLink}}>
                {children}
            </Typography.Text>
        );
    }

    if (state?.onClick) {
        return (
            <Typography.Link ref={connectDrag} onClick={state?.onClick}>
                {children}
            </Typography.Link>
        );
    }

    return (
        <Typography.Link ref={connectDrag} href={state?.href} target={state?.target}>
            {children}
        </Typography.Link>
    );
}

Link.craft = craft(meta);

export default memo(Link, equal);
