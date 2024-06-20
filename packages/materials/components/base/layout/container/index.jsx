import {memo, useEffect} from 'react';
import {craft} from '../../../_utils/utils';
import Resizer from '../../../common/resizer';
import {useComponent} from '../../../useComponent';
import meta from './meta';
import equal from 'fast-deep-equal/es6';

function Container(props) {
    const {state, enabled} = useComponent(props);

    useEffect(() => {
        if (props?.onPropChange) {
            props?.onPropChange?.(state);
        }
    }, [state]);

    // return <Resizer {...{ ...props.style, enabled:false}}>{props?.children}</Resizer>
    return <Resizer {...{ ...state, enabled }}>{state?.children}</Resizer>
}

Container.craft = craft(meta);

export default memo(Container, equal);
