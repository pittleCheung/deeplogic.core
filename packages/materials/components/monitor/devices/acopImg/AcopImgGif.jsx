/**
 * 空压机
 */
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import defaultImg from '../__deviceImg__/空压螺杆机默认.png';
import meta from './meta';

function AcopImgGif(props) {
  const { ext } = props;
  const { state, connectRef, getStateColor } = useComponent(props);
  if (!state) return null;
  const status = getStateColor(state?.status)?.[0];

  return (
    <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
      {status?.img_src ? (
        <img ref={connectRef} src={status?.img_src} width={'100%'} height={'100%'} />
      ) : (
        <img ref={connectRef} src={defaultImg} width={'100%'} height={'100%'} />
      )}
    </NodesBox>
  );
}

AcopImgGif.craft = craft(meta);

export default AcopImgGif;
