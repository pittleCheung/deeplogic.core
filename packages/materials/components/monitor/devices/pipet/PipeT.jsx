/**
 * 三通连接头
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function PipeT(props) {
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
                viewBox='0 0 16 12'
            >
                <path d='M0 0h16v8h-4v4h-8v-4h-4Z'/>
            </svg>
        </NodesBox>
    );
}

PipeT.craft = craft(meta);

export default PipeT;
