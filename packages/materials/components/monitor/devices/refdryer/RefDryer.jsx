// 冷干机
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function RefDryer(props) {
    const { ext } = props;
    const { state, connectRef, getStateColor } = useComponent(props);
    if (!state) return null;
    const { style } = state;
    const status = getStateColor(state?.status)?.[0];

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
            <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox="0 0 66 77">
                <path d="M0 0h66v8h-66v-8zM0 10h32v60h-32zM34 10h32v60h-32zM4 72h58v5h-58zM11 74v1h17v-1zM38 74v1h17v-1zM4 16v16h24v-16zM5 17h22v14h-22zM9 20v2h8v-2zM9 26v2h8v-2zM21 20v3h3v-3zM21 25v3h3v-3zM56 19a1 1 0 004 0 1 1 0 00-4 0M56 27a1 1 0 004 0 1 1 0 00-4 0z" />
            </svg>
        </NodesBox>
    );
}

RefDryer.craft = craft(meta);

export default RefDryer;
