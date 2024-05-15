import { theme } from "antd";
import Moveable, { DIRECTIONS, makeAble } from "react-moveable"; // 基础组件
import "../index.less";
import { toolstyle } from "../tool";
import css from "./_style";
import { useCanvas } from "./hooks/useCanvas";
import { memo } from "react";

// 可移动的范围
const bounds = { left: 0, top: 0, right: 0, bottom: 0, position: 'css' };
// 对齐点
const directions = { top: true, left: true, bottom: true, right: true, center: false, middle: false };
// 查看维度(宽高)
const dimensionViewable = {
    name: 'dimensionViewable',
    props: [],
    events: [],
    render(moveable) {
        const { width = 0, height = 0, offsetWidth = 0, offsetHeight = 0 } = moveable?.getRect();

        return (
            <div
                key={'dimension-viewer'}
                className={'moveable-dimension'}
                style={{
                    position: 'absolute',
                    left: `${width / 2}px`,
                    top: `${height + 5}px`,
                    background: '#4af',
                    borderRadius: '2px',
                    padding: '2px 4px',
                    color: 'white',
                    fontSize: '13px',
                    whiteSpace: 'nowrap',
                    fontWeight: 'bold',
                    willChange: 'transform',
                    transform: `translate(-50%, 0px)`,
                }}
            >
                {Math.round(offsetWidth)} x {Math.round(offsetHeight)}
            </div>
        );
    },
};

const MoveableTool = () => {
    const { targets, movableRef, nodes, onSelect, onTranslateChange, onRotateChange, onSizeGroupChange } = useCanvas();
    const { token } = theme?.useToken();
    const nodeLines = nodes?.map((t) => ({ element: `.node${t.props.id}`, className: 'red' }));
    const typeName = targets?.[0]?.getAttribute('data_name');
    return (
        <Moveable
            className={css.moveable(token)}
            ref={movableRef}
            target={targets}
            // dragTarget={document.querySelector(".target")}
            ables={[dimensionViewable]} // 添加自定义dom 结构
            dragContainer={'.container'} //拖动工作的容器区域,就是
            draggable={true} // 拖拽
            resizable={true} // 改变大小
            // rotationPosition="right-top"
            // throttleDrag={0}
            rotatable={{
                renderDirections: typeName == 'PipeH' ? ["e", "w"] : typeName == 'PipeV' ? ["n", "s"] : DIRECTIONS, //DIRECTIONS
            }}
            renderDirections={typeName == 'PipeH' ? ["e", "w"] : typeName == 'PipeV' ? ["n", "s"] : DIRECTIONS}
            edgeDraggable={false}
            // startDragRotate={0}
            // throttleDragRotate={0}
            scalable={false}
            origin={false}
            keepRatio={false}
            // throttleRotate ={90}// 每次移动90度
            // throttleScale={16} // 每次移动16px
            // snapRotataionThreshold={5}
            snapRotationDegrees={[0, 90, 180, 270]}
            svgOrigin="50% 50%"
            bounds={bounds} // 可移动的范围
            snappable={true}
            snapGridWidth={5}
            snapDigit={0}
            snapDirections={directions}
            snapThreshold={5}
            elementSnapDirections={directions}
            onRender={(e) => toolstyle(e)}
            onRenderGroup={(e) =>
                e.events.forEach((ev) => {
                    toolstyle(ev);
                })
            }
            onClick={(e) => onSelect(e?.target?.id)}
            onBeforeRender={(e) => { onSelect(e?.target?.id) }}
            onBeforeRenderGroup={(e) =>
                e.events.forEach((ev) => {
                    onSelect(ev.target.id);
                })
            }
            onDragEnd={onTranslateChange}
            onDragGroupEnd={(e) => e.events.forEach((ev) => onTranslateChange(ev))}
            elementGuidelines={nodeLines}
            props={{
                dimensionViewable: true, // 查看维度(宽高)
            }}
            onRotateEnd={onRotateChange}
            onRotateGroupEnd={(e) => e.events.forEach((ev) => onRotateChange(ev))}
            onResizeEnd={onSizeGroupChange}
            onResizeGroupEnd={(e) => e.events.forEach((ev) => onSizeGroupChange(ev))}
            useMouseDrag={true}
            stopPropagation={true}
        />
    );
};

export default memo(MoveableTool);
