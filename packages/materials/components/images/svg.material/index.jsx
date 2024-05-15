import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import Svg from 'react-inlinesvg';
import {craft} from '../../_utils/utils';
import {Drag} from '../../common';
import {useComponent} from '../../useComponent';
import meta from './meta';

function SvgMaterialIcons(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state || !state?.component) return null;

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content', height: 'fit-content', lineHeight: 0}}>
            <Svg src={state?.component} style={state?.style}/>
        </Drag>
    );
}

SvgMaterialIcons.craft = craft(meta);

export default memo(SvgMaterialIcons, equal);
