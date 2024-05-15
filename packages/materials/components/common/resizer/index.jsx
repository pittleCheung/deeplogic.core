import {useEditor, useNode} from '@craftjs/core';
import {theme} from 'antd';
import cls from 'classnames';
import equal from 'fast-deep-equal/es6';
import {Resizable} from 're-resizable';
import {memo, useCallback, useRef} from 'react';
import css from './_style';

// TODO: 需要抽离一部分配置到外部
// TODO: 在Page中使用时，需要将一些个性化的配置增加进去
const Resizer = ({children, isStyle = true, style, enabled, onClick, connectDrag, ...props}) => {
    const {query} = useEditor();
    const {useToken} = theme;
    const {token} = useToken();
    const {
        connectors: {connect, drag},
        actions: {setProp},
        active
    } = useNode((node) => {
        return {
            nodeId: node.id,
            active: query?.getOptions()?.enabled && node?.events?.selected
        };
    });
    const resizable = useRef(null);

    const updatedStyle = (rect) => {
        setProp((props) => {
            props.style.width = Math.round(rect.width);
            props.style.height = Math.round(rect.height);
            props.style.widthUnit = 'px';
            props.style.heightUnit = 'px';
            props.style.widthType = 'fixed';
            props.style.heightType = 'fixed';
        }, 100);
    };

    const updateSize = (rect) => {
        setProp((props) => {
            props.width = Math.round(rect.width);
            props.height = Math.round(rect.height);
        }, 100);
    };

    const onResize = useCallback((e, _, dom) => {
        e.stopPropagation();
        e.preventDefault();

        if (!dom) return;

        const rect = dom?.getBoundingClientRect();
        if (rect) {
            isStyle ? updatedStyle(rect) : updateSize(rect);
        }
    }, []);

    function renderPoint() {
        return active ? <div className={cls(css.point(token))}/> : <></>;
    }

    return (
        <Resizable
            className={cls(css.resizer)}
            ref={(ref) => {
                if (ref) {
                    if (query?.getOptions()?.enabled) {
                        resizable.current = ref;
                        connect(resizable.current.resizable);

                        connectDrag?.(resizable.current.resizable);
                    }
                }
            }}
            onResizeStart={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
            onResizeStop={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
            onResize={onResize}
            size={{
                width: props?.width || style?.width,
                height: props?.height || style?.height
            }}
            handleComponent={{
                bottomRight: renderPoint(),
                topRight: renderPoint(),
                bottomLeft: renderPoint(),
                topLeft: renderPoint()
            }}
            handleClasses={{
                topRight: css.handle(token),
                bottomRight: css.handle(token),
                bottomLeft: css.handle(token),
                topLeft: css.handle(token)
            }}
            enable={{
                top: active,
                right: active,
                bottom: active,
                left: active,
                topRight: active,
                bottomRight: active,
                bottomLeft: active,
                topLeft: active
            }}
            style={style}
            {...props}
        >
            {children || (enabled && <div className={cls(css.normalize(token))}>拖动至此</div>)}
        </Resizable>
    );
};
export default memo(Resizer, equal);
