/**
 * 空调主机
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';
import {useMemo} from'react';
function Chiller(props) {
    const {ext} = props;
    const {state, connectRef, getStateColor} = useComponent(props);
    if (!state) return null;
    const {style} = state;

    const status =  useMemo(() => {
        return getStateColor(state?.status)?.[0];
    }, [state?.status])
    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox='4 -8 190 114'>
                <path
                    d='M20 20h163v66h-163v-66Zm31 0v56h-31v2h31v8h2v-8h31v8h2v-8h31v8h2v-8h31v8h2v-8h31v-2h-31v-56h-2v56h-31v-56h-2v56h-31v-56h-2v56h-31v-56ZM18 14v89h4v1h-11v-1h4v-89ZM185 14h3v89h4v1h-11v-1h4ZM99 86v17h-4v1h11v-1h-4v-17ZM13 27v15h-4v-15ZM8 25v20h-2v-20ZM13 54v24h-4v-24ZM8 52v31h-2v-31ZM119 19h7v-25h-7ZM118-3v19h-3v-19ZM127-3h15v-3h1v3h15v19h-15v2h-1v-2h-15ZM159-6h1v25h-1ZM114 1a25 25 0 00-20 18h14a10 10 0 016-6Z'/>
            </svg>
        </NodesBox>
    );
}

Chiller.craft = craft(meta);

export default Chiller;
