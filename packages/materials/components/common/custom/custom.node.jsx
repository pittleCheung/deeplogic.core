import equal from 'fast-deep-equal/es6';
import {Children, cloneElement, isValidElement, memo, useEffect, useState} from 'react';

function CustomNode({children, linkNodes, setProps}) {
    const [childProps, setChildProps] = useState({});

    // 递归克隆children的函数
    function cloneChildren(children, callback) {
        return Children.map(children, (child) => {
            // 检查是否是React元素
            if (isValidElement(child)) {
                return cloneElement(child, {
                    // 附加的额外props
                    onPropChange: callback,
                    // 递归处理子元素的children
                    children: cloneChildren(child.props.children, callback)
                });
            }
            return child;
        });
    }

    // 处理子组件的prop变化
    const handlePropChange = (props) => {
        if (!equal(childProps, props)) {
            // console.log('handlePropChange', props);
            setChildProps(props);
        }
    };

    useEffect(() => {
        if (linkNodes) {
            linkNodes?.forEach((item) => {
                const {id, onPropChange} = item;
                if (!onPropChange) {
                    setProps(id, {onPropChange: handlePropChange});
                }
            });
        }
    }, []);

    return cloneChildren(children, handlePropChange);
}

export default memo(CustomNode, equal);
