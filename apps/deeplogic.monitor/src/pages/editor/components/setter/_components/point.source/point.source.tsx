import Field from '../field';
import PointPicker from '../point.picker';
import Popover from '../popover';

function PointSource({ value, projId, onChange }) {
  return (
    <Popover align={{ targetOffset: [102, 0] }} content={<PointPicker projId={projId} value={value} onChange={onChange} />}>
      <Field>{value || '请选择'}</Field>
    </Popover>
  );
}

export default PointSource;
