import {Element} from '@craftjs/core';
import {Descriptions as AntdDescriptions} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import Container from '../../layout/container';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Descriptions(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {isExtra, ...other} = state;

    return (
        <Drag connectDrag={connectDrag}>
            <AntdDescriptions {...other} extra={isExtra && <Element canvas id="extra" is={Container}/>}/>
        </Drag>
    );
}

Descriptions.craft = craft(meta);

export default memo(Descriptions, equal);
