import { Color, Panel } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';

function Fill() {
  const { styleData, onChange } = useSetter();

  return (
    <Panel title="填充" open>
      <Color value={styleData?.fill} onChange={(fill) => onChange?.({ fill })} />
    </Panel>
  );
}

export default Fill;
