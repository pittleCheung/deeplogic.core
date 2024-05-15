import {Element} from '@craftjs/core';
import {Card as AntdCard} from 'antd';
import {craft} from '../../../_utils/utils';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import Container from '../../layout/container';
import Template from './__template';
import meta from './meta';
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Card(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {template, ...other} = state;

    return (
        <Drag connectDrag={connectDrag}>
            {
                {
                    default: (
                        <AntdCard {...other}>
                            <Element id='card-container' canvas is={Container}>
                                {state?.children}
                            </Element>
                        </AntdCard>
                    ),
                    line: <Template.Line {...other} />,
                    gradient: <Template.Gradient {...other} />,
                    green: <Template.Green {...other} />
                }[template]
            }
        </Drag>
    );
}

Card.craft = craft(meta);

export default memo(Card, equal);
