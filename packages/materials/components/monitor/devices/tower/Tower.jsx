/**
 * 冷却塔
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';
import {useMemo} from "react";
function Tower(props) {
    const {ext} = props;
    const {state, connectRef, getStateColor} = useComponent(props);

    if (!state) return null;

    const {style} = state;
    const status =  useMemo(() => {
        return getStateColor(state?.status)?.[0];
    }, [state?.status])
    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox='1 -4 94 96'>
                <path
                    d='m6 17h84v53h-84v-53m4 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16v0m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-60 5v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m20 0v3h16v-3h-16m-67 10h90v18h-6v-12h-36v12h-6v-12h-36v12h-6v-18zm30-74h30v2h-30v-2m2 4a16 16 0 01-6 14h1a16 16 0 009-14h-4m5 0a16 16 0 01-9 14h17v-14h-8m9 0h8a16 16 0 008 14h-16v-14m9 0h4a16 16 0 006 14h-1a16 16 0 01-9-14'/>
            </svg>
        </NodesBox>
    );
}

Tower.craft = craft(meta);

export default Tower;
