// 储气干罐
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import defaultImg from '../__deviceImg__/tank_off.png';
import meta from './meta';

function TankImgGif(props) {
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

TankImgGif.craft = craft(meta);

export default TankImgGif;
