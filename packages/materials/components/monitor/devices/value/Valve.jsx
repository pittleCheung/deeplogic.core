/**
 * 阀门
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';
import {useMemo} from'react';
function Valve(props) {
    const {ext} = props;
    const {state, connectRef, getStateColor} = useComponent(props);

    if (!state) return null;

    const {style} = state;
    const status =  useMemo(() => {
        return getStateColor(state?.status)?.[0];
    }, [state?.status])
    
    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg fill={status?.color || style?.fill} width='100%' height='100%' viewBox='17 0 37 52' ref={connectRef}>
                <path
                    d='M19 25H22V29H31V23H34V16H25V13H24V5H25V2H46V5H47V13H46V16H37V23H40V29H49V25H52V50H49V46H22V50H19Z'/>
                <path d='M25 6V12H46V6Z' fill={style?.fill} fillOpacity='0.15'/>
                <path d='M22 31H49V34H22Z' fill='white' fillOpacity='0.3'/>
                <path d='M22 34V37H49V34Z' fill='white' fillOpacity='0.2'/>
            </svg>
        </NodesBox>
    );
}

Valve.craft = craft(meta);

export default Valve;
