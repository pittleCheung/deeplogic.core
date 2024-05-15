/**
 * 水泵
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';
import {useMemo} from'react';
function Pump(props) {
    const {ext} = props;
    const {state, connectRef, getStateColor} = useComponent(props);

    if (!state) return null;

    const {style} = state;
    const status =  useMemo(() => {
        return getStateColor(state?.status)?.[0];
    }, [state?.status])
    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg fill={status?.color || style?.fill} width='100%' height='100%' viewBox='-1 2 31 61' ref={connectRef}>
                <path
                    d='M4 4h20v9h-20ZM6 15h16v17h-16ZM24 17h3v10h-3ZM7 34h14v4h-14v-4M4 39h20v2h-20v-2M5 42h18v9h-18v-9M3 53h22a11 16 0 012 8h-26a11 16 0 012-8Z'/>
                <path d='M9 34H11V38H9V34M17 34H19V38H17V34M7 42H9V51H7V42M19 42H21V51H19V42Z' fillOpacity='0.4'/>
                <path d='M7 34h1v4h-1zM20 34h1v4h-1ZM5 42h1v9h-1ZM22 42h1v9h-1Z' fillOpacity='0.3'/>
            </svg>
        </NodesBox>
    );
}

Pump.craft = craft(meta);

export default Pump;
