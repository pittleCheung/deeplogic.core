import { Horizontal, Vertical } from '@/components/icons/icons';
import { InputNumber, Space } from 'antd';
import { memo } from 'react';
import useSetter from '../../../_hooks/useSetter';
import css from './final.module.less';

/**
 * 绝对定位布局设置
 * @constructor
 * @returns {JSX.Element}
 * @example
 */
function Final() {
  const { styleData, onChange } = useSetter();
  return (
    <div className={css.final}>
      <Space className={css.space}>
        <div></div>
        <InputNumber className={css.top} value={styleData.top} onChange={(value) => onChange({ top: value })} />
        <div></div>
      </Space>
      <Space className={css.select}>
        <InputNumber className={css.left} value={styleData.left} onChange={(value) => onChange({ left: value })} />
        <div className={css.center}>
          <div className={`${css.pin} ${css.vertical} ${css.pinTop}`}>
            <Vertical />
          </div>
          <div className={`${css.pin} ${css.horizontal} ${css.pinLeft}`}>
            <Horizontal />
          </div>
          <div className={css.box}></div>
          <div className={`${css.pin} ${css.horizontal} ${css.pinRight}`}>
            <Horizontal />
          </div>
          <div className={`${css.pin} ${css.vertical} ${css.pinBottom}`}>
            <Vertical />
          </div>
        </div>
        <InputNumber className={css.right} value={styleData.right} onChange={(value) => onChange({ right: value })} />
      </Space>
      <Space className={css.space}>
        <div></div>
        <InputNumber className={css.bottom} value={styleData.bottom} onChange={(value) => onChange({ bottom: value })} />
        <div></div>
      </Space>
    </div>
  );
}

export default memo(Final);
