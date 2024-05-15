import {Element} from '@craftjs/core';
import {Modal as AntModal} from 'antd';
import equal from 'fast-deep-equal/es6';
import {nanoid} from 'nanoid';
import {memo, useState} from 'react';
import {craft} from '../../../_utils/utils';
import {CustomNode} from '../../../common';
import Drag from '../../../common/drag';
import {useComponent} from '../../../useComponent';
import Button from '../../general/button';
import Container from '../../layout/container';
import meta from './meta';

function Modal(props) {
    const [show, setShow] = useState(false);
    const {state, enabled, connectDrag} = useComponent(props);

    if (!state) return null;

    const {children, isTitle, isFooter} = state;
    const title = (
        <CustomNode>
            <Element canvas id='modal-title' is={Container}></Element>
        </CustomNode>
    );
    const content = (
        <CustomNode>
            <Element canvas id='modal-content' is={Container}></Element>
        </CustomNode>
    );
    const footer = (
        <CustomNode>
            <Element canvas id='modal-footer' is={Container}></Element>
        </CustomNode>
    );
    const id = nanoid();

    // console.log('Modal', state);

    return (
        <Drag connectDrag={connectDrag} style={{width: 'fit-content'}} id={id}>
            <div onClick={() => setShow(!show)}>
                {children || (
                    <Element canvas id={'modal-button'} is={Button}>
                        打开
                    </Element>
                )}
            </div>
            <AntModal
                open={show}
                title={isTitle && title}
                footer={isFooter && footer}
                onOk={() => setShow(false)}
                onCancel={() => setShow(false)}
                getContainer={() => (enabled ? document.getElementById(id) : document.body)}
                {...state}
            >
                {content}
            </AntModal>
        </Drag>
    );
}

Modal.craft = craft(meta);

export default memo(Modal, equal);
