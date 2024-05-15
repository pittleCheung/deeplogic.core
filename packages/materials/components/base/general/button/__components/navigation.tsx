import { Button } from 'antd';
import { navigationWrapper, navigationBg, navigationButton, navigationButtonNormal, navigationIcon, navigationIconNormal } from './_style';
import { SmileOutlined } from '@ant-design/icons';
import { useMemo, isValidElement, cloneElement } from 'react';
import classNames from 'classnames';
import React from 'react';
import selectBg from './images/menu-bg-selected.webp';
import normalBg from './images/menu-bg-normal.webp';
/** 导航按钮 */
function Navigation({ children, icon: Icon, isHighlight, style, ...props }) {
    // console.log('props: ', children, style, props,Icon,isValidElement(Icon));
    // const { isHighlight } = props
    const bgStyle = useMemo(() => {
        if (isHighlight === 'primary') {
            // return { backgroundImage: 'url(/assets/images/menu_btn_selected.png)' }
            return { backgroundImage: `url(${selectBg})` }
        }
        // return { bottom: -8, height: 25, backgroundImage: 'url(/assets/images/menu_btn_normal.png)' }
        return {  backgroundImage: `url(${normalBg})` }
    }, [isHighlight])

    const renderIcon = Icon && isValidElement(Icon) ? Icon : <SmileOutlined />; // 判断 icon 是否是有效的 React 元素
    // 过滤掉 icon 元素，只保留文本内容
    const textChildren = React.Children.map(children, child => {
        // console.log('child: ', child);
        if (!React.isValidElement(child)) {
            return child;
        }
        return null;
    });

    const { paddingTop, paddingBottom, paddingLeft, paddingRight, ...otherStyle } = style
    const styleMerge = { ...otherStyle, textAlign: 'center', padding: 0, }

    return (
        <div className={navigationWrapper} {...props}>
            {/* <SmileOutlined className={classNames(isHighlight !== 'primary' ? navigationIconNormal : navigationIcon)} /> */}
            {cloneElement(renderIcon, {
                style: { ...styleMerge, width: 'auto', fontSize: isHighlight !== 'primary' ? 14 : 28 },
                className: classNames(isHighlight !== 'primary' ? navigationIconNormal : navigationIcon)
            })}
            <Button style={{ ...styleMerge, }} className={classNames(isHighlight !== 'primary' ? navigationButtonNormal : navigationButton)} type='text'>
                {textChildren}
            </Button>
            <div className={navigationBg} style={bgStyle}></div>
        </div >
    );
}

export default Navigation;
