import {Element} from '@craftjs/core';
import {Collapse as AntdCollapse} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import Container from '../../layout/container';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Collapse(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {items} = state;
    const list =
        items?.map((item) => {
            return {
                ...item,
                children: (
                    <Element key={item?.key} id={`container-${item?.key}`} canvas is={Container}>
                        {item?.children}
                    </Element>
                )
            };
        }) || [];

    return (
        <Drag connectDrag={connectDrag}>
            <AntdCollapse {...state} items={list}/>
        </Drag>
    );
}

Collapse.craft = craft(meta);

export default memo(Collapse, equal);
