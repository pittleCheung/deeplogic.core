import { DeleteBin7Line, EditBoxLine } from '@/components/icons';
import { Button, Input, Space, theme } from 'antd';
import cls from 'classnames';
import { Field, SortableList } from '../../../_components';
import useArray from '../../_hooks/useArray';
import ArrayEdit from '../edit';
import css from './_style';

function ArrayItem({ onAttributeChange, onChange, onDelete, onBlur, ...props }) {
  const { attribute } = useArray();
  const { token } = theme?.useToken();

  const findColor = attribute?.find((item) => item?.name === 'color');
  const color = props?.[findColor?.name];

  return (
    <SortableList.Item id={props?.id}>
      <SortableList.DragHandle />

      <Space size={4}>
        <Field>
          <Space size={4} align={'center'} className={cls(findColor && css.space(token))}>
            {findColor && <div className={cls(css.color(token, color))} />}
            <Input
              rootClassName={cls(css.input(token), findColor && css.inputColor(token))}
              value={props?.label}
              onChange={(event) => onChange?.(event?.target?.value)}
              onBlur={(event) => onBlur(event?.target?.value)}
              style={{ flex: 1 }}
              variant={'borderless'}
            />
          </Space>
        </Field>
        {attribute?.length > 0 && (
          <Space size={0}>
            <ArrayEdit onChange={onAttributeChange} value={{ ...props }} icon={<EditBoxLine />} />
            <Button size='small' type='text' icon={<DeleteBin7Line />} onClick={() => onDelete?.()} />
          </Space>
        )}
      </Space>
    </SortableList.Item>
  );
}

export default ArrayItem;
