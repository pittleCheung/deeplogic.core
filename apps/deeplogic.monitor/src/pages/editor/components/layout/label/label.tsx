import { Tag } from 'antd';
import css from './label.module.less';

function Label({ label, tag }) {
  return (
    <span className={css.label}>
      <span className={css.title}>{label}</span>
      {tag && (
        <Tag size={'small'} bordered={false}>
          {tag}
        </Tag>
      )}
    </span>
  );
}

export default Label;
