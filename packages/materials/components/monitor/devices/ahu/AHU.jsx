/**
 * 空调箱
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';
import {useMemo} from "react";

function AHU(props) {
    const {ext} = props;
    const {state, connectRef, getStateColor} = useComponent(props);

    if (!state) return null;

    const {style} = state;
   const status =  useMemo(() => {
        return getStateColor(state?.status)?.[0];
    }, [state?.status])

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox='0 9 146 80'>
                <path
                    d='M2 80h142v7h-142zM2 69h6v-41h-6v41M10 77v-57h45v57h-45M57 77h35v-57h-35v57M94 77h50v-57h-50ZM21 17h32v-6h-32v6M97 17h43v-6h-43ZM60 48a1 1 0 0129 0 1 1 0 01-29 0M67 48a1 1 0 0015 0 1 1 0 00-15 0M101 48a1 1 0 0129 0 1 1 0 01-29 0M108 48a1 1 0 0015 0 1 1 0 00-15 0'/>
            </svg>
        </NodesBox>
    );
}

AHU.craft = craft(meta);

export default AHU;
