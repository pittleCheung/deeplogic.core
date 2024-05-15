/**
 * 弯头连接头
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function PipeW(props) {
    const {ext} = props;
    const {state, connectRef} = useComponent(props);

    if (!state) return null;

    const {style} = state;

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg
                ref={connectRef}
                fill={style?.fill}
                width='100%'
                height='100%'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 12 12'
            >
                <path d='M0 0h4c6 0 8 2 8 8v4h-8v-4h-4Z'/>
            </svg>
        </NodesBox>
    );
}

PipeW.craft = craft(meta);

export default PipeW;
