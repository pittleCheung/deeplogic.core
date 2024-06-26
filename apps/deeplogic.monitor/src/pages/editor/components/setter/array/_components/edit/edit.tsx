import { Button } from 'antd';
import { useRef, useState } from 'react';
import { Popover } from '../../../_components';
import Attribute from '../attribute';

function ArrayEdit({ value, icon, onChange }) {
  const [isOk, setIsOk] = useState(true);
  const title = value?.label || value?.name;
  const form = useRef(null);

  return (
    <Popover
      isOk={isOk}
      title={`${title || '新增'}配置`}
      content={
        <Attribute
          onChange={(values) => {
            isOk ? (form.current = values) : (form.current = null);
          }}
          value={value}
        />
      }
      onConfirm={() => {
        if (form.current) {
          onChange?.(form.current);
          setTimeout(() => {
            form.current = null;
          }, 200);
        }
      }}
    >
      <Button size='small' type='text' icon={icon} />
    </Popover>
  );
}

export default ArrayEdit;
