import { Element } from '@craftjs/core';
import { theme as AntTheme } from 'antd';
import { nanoid } from 'nanoid';
import Avatar from '../../../../display/avatar';
import Text from '../../../../general/typography.text';
import Menu from '../../../../navigation/menu';
import Col from '../../../col';
import Space from '../../../space';
import Template from '../template';
import cls from './_style';
import FutureSvg from './future.svg';

function FutureTemplate({ title, theme, ...props }) {
  const { token } = AntTheme.useToken();

  return (
    <Template {...props} svg={<FutureSvg theme={theme} />}>
      <Element
        canvas
        id={nanoid()}
        is={Col}
        span={9}
        style={{ paddingTop: `${token.paddingSM}px` }}
      >
        <Element
          canvas
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
        span={6}
        style={{ paddingBottom: `${token?.paddingSM}px` }}
      >
        <Element
          canvas
          id={nanoid()}
          is={Text}
          style={{ fontSize: '28px', textAlign: 'center', margin: '0' }}
        >
          {title}
        </Element>
      </Element>
      <Element
        canvas
        id={nanoid()}
        is={Col}
        span={9}
        style={{
          textAlign: 'right',
          paddingTop: `${token.paddingSM}px`,
          lineHeight: 0,
        }}
      >
        <Element
          canvas
          id={nanoid()}
          is={Space}
          size="small"
          align="center"
          style={{ lineHeight: 0 }}
        >
          <Element canvas id={nanoid()} is={Text} style={{ marginBottom: 0 }}>
            2023-08-11
          </Element>
          <Element canvas id={nanoid()} is={Text} style={{ marginBottom: 0 }}>
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

export default FutureTemplate;
