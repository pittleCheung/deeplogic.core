/**
 * 竖向管道
 */
import equal from 'fast-deep-equal';
import {memo} from 'react';
import cls from 'classnames';
import {EFAULT_PUMP_MAP} from '../../../../global';
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import '../../index.less';
import NodesBox from '../../nodes/nodesBox';
import css from '../_style';
import meta from './meta';

function PipeV(props) {
    const {ext} = props;
    const {state, connectRef, enabled} = useComponent(props);

    if (!state) return null;

    const {status, style, waterstyle, direction} = state;
    const {width} = style;
    const fill = style?.fill || EFAULT_PUMP_MAP[waterstyle]?.[0];
    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                height='100%'
                width={width}
                // fill={fill}
                color={fill}
                ref={connectRef}
                style={{width, height: '100%'}}
            >
                <path d={`M0 0V16000`} stroke='currentColor' shape-rendering='crispEdges' stroke-width='100%'/>
                {/* 这里决定管道的流动 */}
                <path
                    d={`M${width * 0.5} 0V16000`}
                    className={
                        !enabled && status
                            ? direction === '0'
                                ? `${cls(
                                    css.water_flow_vertical({
                                        color: EFAULT_PUMP_MAP?.[fill] || '#fff',
                                        height: width * 0.5
                                    })
                                )} water_flow`
                                : `${cls(
                                    css.reverse_water_flow_vertical({
                                        color: EFAULT_PUMP_MAP?.[fill] || '#fff',
                                        height: width * 0.5
                                    })
                                )} reverse_awter_flow`
                            : ''
                    }
                />
            </svg>
        </NodesBox>
    );
}

PipeV.craft = craft(meta);

export default memo(PipeV, equal);
