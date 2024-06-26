import { Button, Space, theme } from 'antd';
import cls from 'classnames';
import useSetter from '../../_hooks/useSetter';
import Panel from '../panel';
import config from './_config';
import css from './_style';

function ZIndex() {
  const { token } = theme.useToken();
  const { styleData, onChange } = useSetter();

  function onSelected(value) {
    switch (value) {
      case 'Top':
        onChange({ zIndex: 960 });
        break;
      case 'Bottom':
        onChange({ zIndex: 0 });
        break;
      case 'MoveDown':
        onChange({ zIndex: styleData?.zIndex ? styleData.zIndex - 1 : 0 });
        break;
      case 'MoveUp':
        onChange({ zIndex: styleData?.zIndex < 960 ? styleData.zIndex + 1 : 960 });
        break;
    }
  }

  return (
    <Panel title='层级' open>
      <div className={cls(css.group(token))}>
        <Space className={cls(css.space(token))}>
          {config?.map((item, index) => {
            return (
              <Button
                size='small'
                type='text'
                key={item.value}
                className={cls(css.btn(token))}
                onClick={() => onSelected(item?.value)}
              >
                {item.label}
              </Button>
            );
          })}
        </Space>
      </div>
    </Panel>
  );
}

export default ZIndex;
