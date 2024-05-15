/**
 * 空压机
 */
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function Acop(props) {
    const { ext } = props;
    const { state, connectRef, getStateColor } = useComponent(props);
    if (!state) return null;
    const { style } = state;
    const status = getStateColor(state?.status)?.[0];

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox="0 0 100 80">
                <path d="M0 0h100v8h-100v-8M0 10h32v30h-32v-30M0 42h32v30h-32v-30M34 10h32v30h-32v-30M34 42h32v30h-32v-30M68 10h32v30h-32v-30M68 42h32v30h-32v-30M4 74h92v6h-92zM12 76v2h17v-2zM71 76v2h17v-2zM72 16v16h24v-16zM73 17h22v14h-22zM89 20v3h3v-3zM89 25v3h3v-3zM77 20v2h8v-2zM77 26v2h8v-2z" />
            </svg>
        </NodesBox>
    );
}

Acop.craft = craft(meta);

export default Acop;
