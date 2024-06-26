import { FlashlightLine, QuestionLine } from '@/components/icons';
import { Badge, Button, Input, theme, Tooltip } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useEffect, useState } from 'react';
import { Popover } from '../_components';
import { EventContent } from './_components';
import cls from './_style';

function EventSetter({ data, pages, values, resolver, onChange, ...props }) {
  const [value, setValue] = useState('');
  const { token } = theme.useToken();
  const { name } = data?.[0];

  useEffect(() => {
    if (values?.onClick?.action) {
      const link = pages?.find((item) => item?.F_PAGE_ID === values?.[name]?.link);
      link ? setValue(link?.F_TITLE) : setValue('');
    } else {
      setValue('');
    }
  }, [values]);

  return (
    <div className={cls.events(token)}>
      {data?.map((item) => {
        return (
          <Popover
            title={'事件配置'}
            content={
              <EventContent
                {...props}
                name={item?.name}
                values={values}
                pages={pages}
                resolver={resolver}
                onChange={(values) => {
                  onChange?.(values);
                }}
              />
            }
            key={item?.name}
          >
            <div className={cls.event(token)}>
              <div className={cls.title(token)} onClick={(e) => e.stopPropagation()}>
                <Badge status={values?.[name]?.action ? 'success' : 'default'} text={item?.name} />
                <Tooltip title={item?.title?.tip}>
                  <QuestionLine className={cls.question(token)} />
                </Tooltip>
              </div>
              {value && <Input value={value} className={cls.input(token)} disabled />}
              <Button type='text' size={'small'} icon={<FlashlightLine className={cls.icon(token)} />} />
            </div>
          </Popover>
        );
      }, [])}
    </div>
  );
}

export default memo(EventSetter, equal);
