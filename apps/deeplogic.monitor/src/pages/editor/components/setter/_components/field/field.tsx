import { AddLine } from '@/components/icons';
import { Button, theme, Tooltip } from 'antd';
import cls from 'classnames';
import { isValidElement, memo } from 'react';
import { isString } from '../../_helper/utils';
import css from './_style';

const { useToken } = theme;

function Field({ style, label, className, bordered = true, children, action = false, onBind }) {
  const { token } = useToken();
  const isElement = isValidElement(children);

  return (
    <div className={cls(`${css.field(token)} ${bordered && css.bordered(token)} ${className}`)} style={style}>
      {label && <div className={cls(css.label(token), isString(label) && css.text(token))}>{label}</div>}
      <Tooltip title={isElement ? '' : children}>
        <div className={cls(css.content(token), !isElement && css.value(token))}>{children}</div>
      </Tooltip>
      {action && (
        <div className={css.action(token)}>
          <Button size={'small'} type='primary' icon={<AddLine />} onClick={(e) => onBind(e)} />
        </div>
      )}
    </div>
  );
}

export default memo(Field);
