import { EyeCloseLine, EyeLine, SubtractLine } from '@/components/icons';
import { Button, theme } from 'antd';
import Color from '../../color';
import Field from '../../field';
import { SortableList } from '../../sortable';
import { button, content, disable } from './_style';
import BackgroundImage from './image';

const { useToken } = theme;

function BackgroundItem({
  id,
  type = 'color',
  value,
  disabled,
  onDisable,
  onRemove,
  onChange,
}) {
  const { token } = useToken();

  return (
    <SortableList.Item id={id}>
      <SortableList.DragHandle />
      {
        {
          color: (
            <Color
              className={`${content(token)} ${(disabled && disable) || ''}`}
              isLinear={false}
              value={value}
              onChange={(value) => onChange?.(id, value)}
            />
          ),
          image: (
            <BackgroundImage
              value={value}
              onChange={(value) => onChange?.(id, value)}
            />
          ),
        }[type]
      }
      <Field bordered={false}>
        <Button
          className={button}
          type="text"
          icon={disabled ? <EyeCloseLine /> : <EyeLine />}
          onClick={() => onDisable?.(id)}
        />
      </Field>
      <Field bordered={false}>
        <Button
          className={button}
          icon={<SubtractLine />}
          type="text"
          onClick={() => onRemove?.(id)}
        />
      </Field>
    </SortableList.Item>
  );
}

export default BackgroundItem;
