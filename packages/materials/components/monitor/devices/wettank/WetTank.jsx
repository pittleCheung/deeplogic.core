// 储气湿罐
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import meta from './meta';

function WetTank(props) {
  const { ext } = props;
  const { state, connectRef, getStateColor } = useComponent(props);
  if (!state) return null;
  const { style } = state;
  const status = getStateColor(state?.status)?.[0];

  return (
    <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
      <svg ref={connectRef} fill={status?.color || style?.fill} width='100%' height='100%' viewBox='0 0.25 34 66.95'>
        <path d='M0 10c0-13 34-13 34 0v46c-5 8-29 8-34 0zM4 60l6 2.2-.5 5h-6zM24 62.2l6-2.2.5 7.2h-6zM15 18a1 1 0 004 0 1 1 0 00-4 0m1 0a1 1 0 002 0 1 1 0 00-2 0zM17 50l2-6a1 1 0 00-4 0zM17 49l-1-5a1 1 0 112 0z' />
      </svg>
    </NodesBox>
  );
}

WetTank.craft = craft(meta);

export default WetTank;
