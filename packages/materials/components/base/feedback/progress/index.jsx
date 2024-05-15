import {Progress as AntProgress} from 'antd';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function Progress(props) {
    const {state, connectDrag, ...other} = useComponent(props);

    if (!state) return null;

    return <AntProgress ref={connectDrag} {...state} format={() => Math.round(state?.percent * 10) / 10}/>;
}

Progress.craft = craft(meta);

export default memo(Progress, equal);
