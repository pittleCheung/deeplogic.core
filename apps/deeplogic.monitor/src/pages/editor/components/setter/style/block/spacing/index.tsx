import { Panel } from '../../../_components';
import useSetter from '../../../_hooks/useSetter';
import Margin from './margin';
import Padding from './padding';

function Spacing() {
  const { open } = useSetter();

  return (
    <Panel title={'间距'} open={open}>
      <Margin />
      <Padding />
    </Panel>
  );
}

export default Spacing;
