import {Element} from '@craftjs/core';
import {Tabs as AntTabs, theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import Container from '../../layout/container';
import css from './_style';
import meta from './meta';

function Tabs(props) {
    const {state, connectDrag} = useComponent(props);
    const {token} = theme?.useToken();

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
            <AntTabs {...state} items={list} rootClassName={cls(css.tabs(token))}/>
        </Drag>
    );
}

Tabs.craft = craft(meta);

export default memo(Tabs, equal);
