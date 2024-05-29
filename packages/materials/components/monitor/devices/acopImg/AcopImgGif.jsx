/**
 * 空压机
 */
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import defaultImg from '../__deviceImg__/acop_screw_off.png';
import meta from './meta';

function AcopImgGif(props) {
  const { ext } = props;
  const { state, connectRef, getStateColor,childrenStyle } = useComponent(props);
  if (!state) return null;
  const status = getStateColor(state?.status)?.[0];

  console.log("AcopImgGif=====>", props.childrenStyle)
  return (
    <NodesBox state={state} DeviceType={ext?.DeviceType || ''} {...props}>
      {status?.img_src ? (
        <img ref={connectRef} src={status?.img_src} width={'100%'} height={'100%'} style={{...props.childrenStyle}}/>
      ) : (
        <img ref={connectRef} src={defaultImg} width={'100%'} height={'100%'} style={{...props.childrenStyle}}/>
      )}
    </NodesBox>
  );
}

AcopImgGif.craft = craft(meta);

export default AcopImgGif;
