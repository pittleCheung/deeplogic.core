/**
 * 空压机1
 */
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function CentAcop(props) {
    const { ext } = props;
    const { state, connectRef, getStateColor } = useComponent(props);
    if (!state) return null;
    const { style } = state;
    const status = getStateColor(state?.status)?.[0];

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox="0 0 105 64">
                <path d="M0 0h40v57h-40zM0 58h105v6h-105zM4 4v50h32v-50zM5 5h30v48h-30zM8 9v17h24v-17zM9 10h22v15h-22zM9 27v2h2v-2zM13 27v2h2v-2zM17 27v2h2v-2zM29 27v2h2v-2zM46 32a1 4 0 000 24h2v1h6v-1h39v1h6v-1h2a1 4 0 000-24zM40 12h6v-5h35v21h-35v-5h-6zM82 4h11v27h-11zM94 9h5v17h-5zM100 13h1v9h-1zM66 16v8h9v-8zm1 1h7v6h-7z" />
            </svg>
        </NodesBox>
    );
}

CentAcop.craft = craft(meta);

export default CentAcop;
