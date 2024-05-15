import {Element} from '@craftjs/core';
import {Layout as AntLayout} from 'antd';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import Menu from '../../navigation/menu';
import Container from '../container';
import Footer from '../layout.footer';
import Header from '../layout.header';
import Sider from '../layout.sider';
import meta from './meta';
import {CustomNode} from "../../../common";
import equal from 'fast-deep-equal/es6';
import {memo} from 'react';

function Layout(props) {
    const {state, connectDrag} = useComponent(props);

    if (!state) return null;

    const {isHeader, isSider, isFooter} = state;

    return (
        <AntLayout ref={connectDrag}>
            <CustomNode>
                {isHeader && <Element id="header" canvas is={Header}/>}

                <AntLayout>
                    {isSider && (
                        <Element id="sider" canvas is={Sider}>
                            <Element id="menu" is={Menu}/>
                        </Element>
                    )}
                    <AntLayout.Content>
                        <Element id="container" is={Container} canvas/>
                    </AntLayout.Content>
                </AntLayout>

                {isFooter && <Element id="footer" canvas is={Footer}/>}
            </CustomNode>
        </AntLayout>
    );
}

Layout.craft = craft(meta);

export default memo(Layout, equal);
