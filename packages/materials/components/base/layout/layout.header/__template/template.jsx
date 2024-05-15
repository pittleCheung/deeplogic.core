import {Element} from '@craftjs/core';
import {Layout, theme} from 'antd';
import {nanoid} from 'nanoid';
import Row from '../../row';
import cls from './_style';
import {CustomNode} from "../../../../common";

function Template({svg, children, style, ...props}) {
    const {token} = theme.useToken();

    return (
        <Layout.Header className={cls.header(token)} style={style} {...props}>
            <CustomNode>
                <Element canvas id={nanoid()} is={Row} className={cls.body(token)}>
                    <CustomNode>
                        {children}
                    </CustomNode>
                </Element>
                <div className={cls.svg(token)}>{svg}</div>
            </CustomNode>
        </Layout.Header>
    );
}

export default Template;
