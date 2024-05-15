/**
 * 节点组件盒子
 */
import {useEffect, useRef,memo, useMemo} from 'react';
import {useCanvas} from '../container/hooks/useCanvas';
import '../index.less';

function NodesBox(props) {
 
    const {state, DeviceType} = props;
    const {setProps, rootCustom} = useCanvas();
    const nodeRef = useRef();
    useEffect(() => {
        const parentElement = nodeRef?.current || {};
        if (parentElement) {
            const { width, height, translateX, translateY, rotate, zIndex } = state.style;
            const styleToUpdate = {
                width :`${width}px`,
                height :`${height}px`,
                transform :`translate(${translateX}px, ${
                    translateY
                }px) rotate(${rotate || 0}deg)`,
                ...(zIndex > 0 && { zIndex }),
            };
            Object.assign(nodeRef?.current.parentElement.style, styleToUpdate);
        }
      
    }, [state.style.width, state.style.height, state.style.translateX, state.style.translateY, state.style.rotate, state?.style?.zIndex]);

    useEffect(() => {
        setProps(rootCustom?.device?.id, {
            devicetype: DeviceType
        });
    }, [DeviceType]);
    
    const style = useMemo(() => {
        return {display: 'flex', width: '100%', height: '100%'}
    })

    return (
        <div ref={nodeRef} id='nodebox' style={style}
             onClick={state?.onClick}>
            {/* <div style={{ position: 'absolute', top: -30, width: '100%', textAlign: 'center' }}>test</div> */}
            {props.children}
        </div>
    );
}

export default memo(NodesBox);
