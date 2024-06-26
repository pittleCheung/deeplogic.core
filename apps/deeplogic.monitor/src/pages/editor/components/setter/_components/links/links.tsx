import { LinkOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect, useState } from 'react';
import { EventConfig } from '../../event';
import Field from '../field';
import Popover from '../popover';
import cls from './_style';

function Links({ value, pages, onChange }) {
  const { token } = theme.useToken();
  const [text, setText] = useState('');

  useEffect(() => {
    if (value) {
      const page = pages?.find((item) => item?.F_PAGE_ID === value?.link);
      setText(page?.F_TITLE || value?.link?.href);
    } else {
      setText('');
    }
  }, [value]);

  return (
    <Field>
      <div className={cls.link(token)}>
        <div className={cls.text(token)}>{text || '请选择'}</div>
        <Popover
          title='链接配置'
          content={
            <EventConfig name='link' values={{ link: value }} pages={pages} onChange={(val) => onChange?.(val?.link)} />
          }
          align={{ targetOffset: [192, 0] }}
        >
          <Button icon={<LinkOutlined />} type='text' size='small' />
        </Popover>
      </div>
    </Field>
  );
}

export default memo(Links, equal);
