import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import {Aperture, DefaultHeader, Future, Metals, Science} from './__template';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Header(props) {
    const {state, theme, connectDrag} = useComponent(props);

    if (!state) return null;
    const {template, ...other} = state;
    const key = template?.key || template || 'default';

    return (
        <Drag connectDrag={connectDrag}>
            {key === 'metals' && <Metals {...{theme, ...other}} />}
            {key === 'science' && <Science {...{theme, ...other}} />}
            {key === 'aperture' && <Aperture {...{theme, ...other}} />}
            {key === 'default' && <DefaultHeader {...{theme, ...other}} />}
            {key === 'future' && <Future {...{theme, ...other}} />}
        </Drag>
    );
}

Header.craft = craft(meta);

export default memo(Header, equal);
