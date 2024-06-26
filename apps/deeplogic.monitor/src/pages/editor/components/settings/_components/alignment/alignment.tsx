import { Panel } from '@/pages/editor/components/setter';
import { ROOT_NODE } from '@craftjs/utils';
import { Radio, theme } from 'antd';
import cls from 'classnames';
import { createElement } from 'react';
import useSettings from '../../useSettings';
import alignments from './_config';
import css from './_style';

function Alignment() {
  const { token } = theme?.useToken();
  const { setCustom } = useSettings();

  if (!alignments) return null;

  const onSelected = (key) => {
    setCustom(ROOT_NODE, (node) => (node.device.onAlignment = () => key));

    setTimeout(() => {
      setCustom(ROOT_NODE, (node) => (node.device.onAlignment = () => ''));
    }, 200);
  };

  return (
    <Panel title='对齐方式' open>
      <Radio.Group
        defaultValue='c'
        buttonStyle='solid'
        className={cls(css.group(token))}
        onChange={(e) => {
          const key = e?.target?.value;
          onSelected(key);
        }}
      >
        {alignments &&
          alignments?.length > 0 &&
          alignments?.map((item) => (
            <Radio.Button key={item.itemKey} value={item.itemKey} className={cls(css.radio(token))}>
              <div className={css.icon(token)}>{item.icon && createElement(item.icon)}</div>
            </Radio.Button>
          ))}
      </Radio.Group>
    </Panel>
  );
}

export default Alignment;
