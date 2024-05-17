import {theme} from 'antd';
import cls from 'classnames';
import {Children, memo, useCallback, useEffect, useState} from 'react';
import Node from '../nodes/index';
import {getBoundary, getRotate} from '../tool';
import css from './_style';
import {useCanvas} from './hooks/useCanvas';
import MoveableTool from './movableTool';
import SelectTool from './selectTool';

const DesignerCanvas = ({children, loading, style}) => {
    const {
        state,
        query,
        targets,
        zoom,
        canvasRef,
        movableRef,
        setProps,
        rootCustom,
        setRootCustom,
        enabled,
        id,
        // getNodeProps
    } = useCanvas();
    const {contentMaxX = 0, contentMinX = 0,contentMinY = 0, contentMaxY = 0, drawMaxX, drawMinX} = state?.style; 
    const [offset, setOffset] = useState({offsetX: 0, offsetY: 0});
    const {token} = theme?.useToken();

    /**
     * 拖拽结束时存储位置， 用于拖拽结束后的将设备位置更改为拖拽结束时的位置
     * @param e
     */
    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {offsetX, offsetY} = e;
        
        const {x, y} = getBoundary({offsetX, offsetY});
        setOffset({offsetX: x, offsetY: y});
        setProps(id, {
            style: {
                drawMaxX: Math.max(contentMaxX, x),
                drawMinX: Math.min(contentMinX, x)
            }
        })
    };

    /**
     * 拖拽结束时，将设备位置更改为拖拽结束时的位置
     * @type {(function(): void)|*}
     */
    const startOffset = useCallback(() => {
        const id = rootCustom?.device?.id;
        if (id) {
            const {offsetX, offsetY} = offset;
            setProps(id, {style: {translateX: offsetX, translateY: offsetY}});

            setTimeout(() => {
                setOffset({offsetX: 0, offsetY: 0});
                setRootCustom?.({device: null});
            }, 100);
        }
    }, [rootCustom?.device?.id]);

    /**
     * 同步更改框选旋转角度
     */
    const requestRotatable = async () => {
        // 单选
        if (!!targets?.length) {
            await movableRef?.current?.request('rotatable', {
                rotate: getRotate(targets[0]?.style?.transform),
                deltaRotate: getRotate(targets[0]?.style?.transform)
            });
            await movableRef?.current?.request('resizable', {
                offsetWidth: getRotate(targets[0]?.style?.width),
                offsetHeight: getRotate(targets[0]?.style?.height)
            });
        }
    };

    const renderChild = useCallback((child) => {
        const id = child?.props?.id;
        if (!id || !child) return null;
        const node = query?.node(id)?.get()?.data?.props?.style || {};
        const {translateX, translateY, rotate} = node;
        return (
            <Node
                key={id}
                id={id}
                name={query?.node(id)?.get()?.data?.name}
                style={{
                    transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate || 0}deg)`,
                    display: (isNaN(translateX) && isNaN(translateY)) ? 'none' : 'block'
                }}
            >
                {child}
            </Node>
        );
    }, []);

    useEffect(() => {
        startOffset();
    }, [startOffset]);

    useEffect(() => {
        requestRotatable();
    }, [state?.style]);

    useEffect(() => {
        const canvas = canvasRef?.current;
        if (canvas) {
            canvas?.addEventListener('drop', onDrop);
            canvas?.addEventListener('dragstart', (e) => e.stopPropagation());
        }
        // handleSource(demo);
    }, [canvasRef]);

    const conMaxX = isNaN(drawMaxX) ? contentMaxX : drawMaxX;
    const conMinx = isNaN(drawMinX) ? contentMinX : drawMinX;

    const isXMax = conMaxX - conMinx + 200 > 1400 ? 1400 : conMaxX - conMinx + 200;
    
    // console.log(
    //   "conMaxX - conMinx + 100",
    //   conMaxX - conMinx + 200,
    //   state
    // )
    console.log("style===>",style)

    return (
      <>
        <div
          ref={canvasRef}
          className={cls(
            "container",
            css.layout(token),
            enabled && css.grids(token),
          )}
          style={{
            transform: `scale(${zoom})`,
            width: `${100 / zoom}%`,
            height: `${100 / zoom}%`,
            ...style,
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}>
          {/* <div className='containerdraw' style={{width: enabled ? '100%' : (conMaxX - conMinx + 200) + 'px'}}>
                    <>{Children.map(children?.props?.children || [], renderChild)}</>
                    {enabled && <MoveableTool/>}
                    {enabled && <SelectTool/>}
                </div> */}
          <div
            className="containerdraw"
            style={{ width: isXMax, 
            // height: contentMaxY - contentMinY 
            }}>
            <>{Children.map(children?.props?.children || [], renderChild)}</>
            {enabled && <MoveableTool />}
            {enabled && <SelectTool />}
          </div>
        </div>
        {/* 缩放比例 */}
        {/* <div className='zoombox'>画布比例:{zoom}</div> */}
      </>
    )
};

export default memo(DesignerCanvas, (pre, next) => {
    return pre?.children?.props?.children?.length === next?.children?.props?.children?.length;
});
