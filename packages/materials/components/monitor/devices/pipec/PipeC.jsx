/**
 * 十字连接头
 */
import {craft} from '../../../_utils/utils';
import {useComponent} from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function PipeC(props) {
    const {ext} = props;
    const {state, connectRef} = useComponent(props);

    if (!state) return null;

    const {style} = state;

    return (
        <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
            <svg
                ref={connectRef}
                width='100%'
                height='100%'
                fill={style.fill}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
            >
                <path d='M0 4h4v-4h8v4h4v8h-4v4h-8v-4h-4Z'/>
            </svg>
        </NodesBox>
    );
}

PipeC.craft = craft(meta);

export default PipeC;
