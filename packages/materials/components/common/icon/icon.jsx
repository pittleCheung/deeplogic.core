import * as AntdIcons from '@ant-design/icons/lib/icons';
import IconFontInfo , {IconFont} from './iconfont';
import equal from 'fast-deep-equal/es6';
import {createElement, memo} from 'react';

function Icon({icon, ...props}) {
    if (!icon) return null;

    if(AntdIcons?.[icon]){
        return createElement(AntdIcons[icon], {...props});
    }
    if(IconFontInfo?.icons?.[icon]){
        return <IconFont type={icon} {...props} />
    }

    return null;
}

export default memo(Icon, equal);
