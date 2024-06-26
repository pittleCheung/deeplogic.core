import { Form } from 'antd';
import { EventSetter } from '../../setter';
import useSettings from '../useSettings';

function Events() {
  const { custom, formValues, pages, resolver, ...other } = useSettings();
  if (!custom || !custom.events || (!'setter') in custom.events) return null;

  const { events } = custom;
  const { props } = events.setter;

  return (
    <Form.Item name='events' noStyle>
      <EventSetter {...other} data={props} pages={pages} values={formValues?.events} resolver={resolver} />
    </Form.Item>
  );
}

export default Events;
