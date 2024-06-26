import { ContractRightLine } from '@/components/icons';
import { Form, Select, theme } from 'antd';
import cls from 'classnames';
import { useEvent } from '../../__hooks/useEvent';
import BindProperty from '../bind.property';
import { eventAction } from '../config.json';
import EventSelect from '../event.select';
import FormLinkage from '../form.linkage';
import LinkSetter from '../link.setter';
import OpenPopup from '../open.popup';
import PushData from '../push.data';
import css from './_style';

function EventContent() {
  const { name, form } = useEvent();
  const { token } = theme.useToken();

  return (
    <div className={cls(css.container(token))}>
      <Form.Item name={[name, 'action']}>
        <Select options={eventAction?.dataList} listHeight={120} placeholder={'请选择动作'} allowClear />
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(a, b) => a !== b}>
        {({ getFieldValue }) => {
          const action = getFieldValue([name, 'action']);

          if (!action) return null;

          const types = {
            link: <LinkSetter />,
            pushData: <PushData />,
            openPopup: <OpenPopup />,
            navigateTo: <EventSelect />,
            linkTo: <BindProperty />,
            formLinkage: <FormLinkage />,
            bindProperty: <BindProperty />,
            displayComponent: <FormLinkage mode={''} isAll />
          };

          if (!types[action]) return null;

          return (
            <div className={cls(css.contract(token))}>
              <ContractRightLine className={cls(css.icon(token))} />
              <Form.Item noStyle className={cls(css.item(token))}>
                {types[action]}
              </Form.Item>
            </div>
          );
        }}
      </Form.Item>
    </div>
  );
}

export default EventContent;
