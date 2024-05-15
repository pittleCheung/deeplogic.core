import {Element} from '@craftjs/core';
import {theme as AntTheme} from 'antd';
import {nanoid} from 'nanoid';
import Avatar from '../../../../display/avatar';
import Text from '../../../../general/typography.text';
import Menu from '../../../../navigation/menu';
import Col from '../../../col';
import Space from '../../../space';
import Template from '../template';
import cls from './_style';
import ScienceSvg from './science.svg';

function Science({title, theme, ...props}) {
    const {token} = AntTheme.useToken();

    return (
        <Template {...props} svg={<ScienceSvg theme={theme}/>}>
            <Element canvas id={nanoid()} is={Col} span={9}>
                <Element
                    canvas
                    id={nanoid()}
                    is={Text}
                    style={{fontSize: '28px', textAlign: 'left', margin: '0'}}
                >
                    {title}
                </Element>
            </Element>
            <Element
                canvas
                id={nanoid()}
                is={Col}
                span={11}
                style={{paddingBottom: `${token.paddingXS}px`}}
            >
                <Element
                    id={nanoid()}
                    is={Menu}
                    mode="horizontal"
                    className={cls.menu(token)}
                />
            </Element>
            <Element
                canvas
                id={nanoid()}
                is={Col}
                span={4}
                style={{
                    textAlign: 'right',
                    paddingBottom: `${token.paddingXXS}px`,
                    lineHeight: 0,
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
                    <Element
                        canvas
                        id={nanoid()}
                        is={Avatar}
                        size="small"
                        shape="square"
                    />
                </Element>
            </Element>
        </Template>
    );
}

export default Science;
