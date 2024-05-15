import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { alignment, filterNonentityNodes, getTranslate2 } from '../../tool';

const CanvasContext = createContext(null);

const CanvasProvider = ({ children, rootCustom, setProps, setRootCustom, nodes, ...props }) => {
    const selectoRef = useRef(null);
    const movableRef = useRef(null);
    const canvasRef = useRef(null);
    const [zoom, setZoom] = useState(1);
    const [targets, setTargets] = useState([]);
    const [boundBool, setBoundBool] = useState(false);
    /**
     * 更新Node位置
     * @param e
     */
    const onTranslateChange = (e) => {
        if (!e) return;

        const { lastEvent } = e;
        const { id } = e.target;
        const {contentMaxX = 0, contentMinX = 0} = props.state?.style;
        if (lastEvent) {
            const { translate } = lastEvent;
            setProps(id, {
                style: {
                    translateX: translate[0],
                    translateY: translate[1],
                },
            });
            setProps(props.id, {
                style: {
                    drawMaxX: Math.max(contentMaxX, translate[0]),
                    drawMinX: Math.min(contentMinX, translate[0])
                }
            })
        }
    };

    /**
     * 更新Node旋转角度
     * @param e
     */
    const onRotateChange = (e) => {
        if (!e) return;
        const { lastEvent } = e;
        const { id } = e.target;
        let rotate = lastEvent?.rotate % 360;
        const num = Math.floor(Math.abs(rotate) / 90);
        if (Math.abs(rotate) % 90 < 16) {
            rotate = num * 90;
        } else if (Math.abs(rotate) % 90 > 74) {
            rotate = (num + 1) * 90;
        }
        const { x, y } = getTranslate2(e.target.style.transform);
        if (lastEvent) {
            setProps(id, {
                style: {
                    rotate: rotate * Math.sign(lastEvent?.rotate),
                    translateX: x,
                    translateY: y
                },
            });
        };
    }

    // 更新Node大小
    const onSizeChange = (e) => {
        if (!e) return;
        const { lastEvent } = e;
        const { id } = e.target;

        if (lastEvent) {
            const { width, height } = lastEvent;
            setProps(id, {
                style: { width, height },
                width,
                height
            });
        }
    };

    // 更新Node大小
    const onSizeGroupChange = (e) => {
        if (!e) return;
        const { lastEvent } = e;
        const { id } = e.target;
        if (lastEvent) {
            const { width, height, transform } = lastEvent;
            const { x, y } = getTranslate2(transform);
            setProps(id, {
                style: { width, height, translateX: x, translateY: y },
                width,
                height
            });
        }
    };

    // 多选
    const onMultipleSelect = (selected) => {
        setTargets(selected || []);
        setRootCustom({ device: { selected: selected?.map((el) => el?.id) || [] } });
    };

    useEffect(() => {
        if (!nodes) return;
        setTargets(filterNonentityNodes(targets, nodes));
    }, [nodes]);

    /**
     * 框选对齐操作
     */
    useEffect(() => {
        if (rootCustom?.device) {
            if (rootCustom?.device?.onAlignment?.()) {
                const align = rootCustom?.device?.onAlignment?.();
                // 这个用来调用相关对齐操作，ref必传
                alignment?.[align]?.(movableRef);
            }
        }
    }, [rootCustom?.device]);
    /**
     * 监听zoom
     */
    /**
     * 同步更改zoom
     */
    const requestZoom = async () => {
        await movableRef?.current?.request("zoom", props.state?.scale || 1);
    }
    useEffect(() => {
        requestZoom();
        setZoom(props.state?.scale || 1);
    }, [props.state?.scale]);

    return (
        <CanvasContext.Provider
            value={{
                selectoRef,
                movableRef,
                canvasRef,
                nodes: props.state?.children?.props?.children,
                targets,
                boundBool,
                rootCustom,
                zoom,
                setZoom,
                setTargets,
                setBoundBool,
                setProps,
                setRootCustom,
                onSizeChange,
                onSizeGroupChange,
                onRotateChange,
                onMultipleSelect,
                onTranslateChange,
                ...props,
            }}
        >
            {children}
        </CanvasContext.Provider>
    );
};

const useCanvas = () => useContext(CanvasContext);

export { CanvasProvider, useCanvas };
