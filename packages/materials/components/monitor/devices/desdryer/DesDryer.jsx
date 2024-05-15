// 吸干机
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function DesDryer(props) {
    const { ext } = props;
    const { state, connectRef, getStateColor } = useComponent(props);
    if (!state) return null;
    const { style } = state;
    const status = getStateColor(state?.status)?.[0];

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox="-2 0 72 71">
                <path d="M0 10c0-10 26-10 26 0v46c-3 8-23 8-26 0zM42 10c0-10 26-10 26 0v46c-3 8-23 8-26 0zM0 42h-2v29h72v-29h-2v25h-26v-25h-2v25h-12v-25h-2v25h-26zM12 62v1h-1v1h1v1h2v-1h1v-1h-1v-1zM54 62v1h-1v1h1v1h2v-1h1v-1h-1v-1zM22 22v15h4v-1h-3v-13h3v-1zM42 37h4v-15h-4v1h3v13h-3zM26 23h16v13h-16zM28 26v2h2v-2zM28 31v2h2v-2zM38 29a1 1 0 002 0 1 1 0 00-2 0M12 3v-3h44v3h-2v-1h-40v1zM11 15a1 1 0 004 0 1 1 0 00-4 0M12 15a1 1 0 002 0 1 1 0 00-2 0M53 15a1 1 0 004 0 1 1 0 00-4 0M54 15a1 1 0 002 0 1 1 0 00-2 0Z" />
            </svg>
        </NodesBox>
    );
}

DesDryer.craft = craft(meta);

export default DesDryer;
