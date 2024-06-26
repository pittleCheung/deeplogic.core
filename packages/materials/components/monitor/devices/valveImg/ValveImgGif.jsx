/**
 * 阀门
 */
import { useMemo } from 'react';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import NodesBox from '../../nodes/nodesBox';
import defaultImg from '../__deviceImg__/valve_off.png';
import meta from './meta';
function ValveImgGif(props) {
  const { ext } = props;
  const { state, connectRef, getStateColor } = useComponent(props);

  if (!state) return null;

  const status = useMemo(() => {
    return getStateColor(state?.status)?.[0];
  }, [state?.status]);

  return (
    <NodesBox state={state} DeviceType={ext?.DeviceType || ''}>
      {status?.img_src ? (
        <img ref={connectRef} src={status?.img_src} width={'100%'} height={'100%'} />
      ) : (
        <img ref={connectRef} src={defaultImg} width={'100%'} height={'100%'} />
      )}
    </NodesBox>
  );
}

ValveImgGif.craft = craft(meta);

export default ValveImgGif;
