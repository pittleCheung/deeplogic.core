import {Element} from '@craftjs/core';
import {Layout, theme} from 'antd';
import {nanoid} from 'nanoid';
import Avatar from '../../../../display/avatar';
import Image from '../../../../general/image';
import Link from '../../../../general/link';
import Text from '../../../../general/typography.text';
import Col from '../../../col';
import Row from '../../../row';
import Space from '../../../space';

function DefaultHeader({title, children, style}) {
    const {token} = theme?.useToken();

    return (
        <Layout.Header
            style={{
                paddingLeft: token?.paddingLG,
                paddingRight: token?.paddingLG,
                background: token?.colorBgContainer,
                ...style,
            }}
        >
            <Element canvas id={nanoid()} is={Row}>
                <Element canvas id={nanoid()} is={Col} span={4}>
                    <Element
                        canvas
                        id={nanoid()}
                        is={Space}
                        size={'small'}
                        align={'center'}
                    >
                        <Element
                            id={nanoid()}
                            is={Link}
                            href="/"
                            style={{display: 'flex', alignItems: 'center'}}
                        >
                            <Element
                                id={nanoid()}
                                is={Image}
                                preview={false}
                                width={32}
                                height={32}
                                alt="logo"
                            />
                        </Element>
                        <Element
                            canvas
                            id={nanoid()}
                            is={Text}
                            style={{fontSize: '28px', textAlign: 'center', margin: '0'}}
                        >
                            {title}
                        </Element>
                    </Element>
                </Element>
                <Element canvas id={nanoid()} is={Col} span={14}>
                    {children}
                </Element>
                <Element
                    canvas
                    id={nanoid()}
                    is={Col}
                    span={6}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Element
                        canvas
                        id={nanoid()}
                        is={Space}
                        size="small"
                        align="center"
                        style={{lineHeight: 0}}
                    >
                        <Element canvas id={nanoid()} is={Text} style={{lineHeight: 1}}>
                            2023-08-11
                        </Element>
                        <Element canvas id={nanoid()} is={Text} style={{lineHeight: 1}}>
                            星期五
                        </Element>
                        <Element canvas id={nanoid()} is={Avatar}/>
                    </Element>
                </Element>
            </Element>
        </Layout.Header>
    );
}

export default DefaultHeader;
