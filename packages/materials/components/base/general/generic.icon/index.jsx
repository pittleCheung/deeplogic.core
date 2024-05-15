import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import {Drag, Icon as AntIcon} from '../../../common';
import {useComponent} from '../../../useComponent';
import meta from './meta';

function GenericIcon(props) {
    const {state, theme, connectDrag} = useComponent(props);

    if (!state) return null;

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content', height: 'fit-content'}}>
            <AntIcon {...state} twoToneColor={state?.style?.color || theme?.token?.colorPrimary}/>
        </Drag>
    );
}

GenericIcon.craft = craft(meta);

export default memo(GenericIcon, equal);
