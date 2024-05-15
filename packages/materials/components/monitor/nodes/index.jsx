/**
 * 监控节点组件
 */
import equal from 'fast-deep-equal/es6';
import {memo, useRef,useMemo} from 'react';
import '../index.less';

const Node = (props) => {
    const targetRef = useRef(null);
    const style = useMemo(() => {
        return {
                height: 'fit-content',
                width: 'fit-content',
                display: 'flex',
                ...props?.style
        }
    }, [props.style])
    return (
        <>
            <div
                key={props?.id}
                id={props?.id}
                className={`target node${props?.id}`}
                ref={targetRef}
                data_Name={props.name}
                style={style}
            >
                {props?.children}
            </div>
        </>
    );
};

export default memo(Node, equal);
