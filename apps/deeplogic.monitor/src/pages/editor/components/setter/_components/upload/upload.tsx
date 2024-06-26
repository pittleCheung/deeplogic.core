import { Input, Segmented, theme } from 'antd';
import { useEffect, useState } from 'react';
import { isUrl } from '../../_helper/utils';
import Uploads from './_components/uploads';
import cls from './_style';

const options = [
  {
    label: '本地',
    value: 'local'
  },
  {
    label: '网络',
    value: 'network'
  }
];

function Upload({ onChange, value, type, onTypeChange, onUpload }) {
  const { token } = theme?.useToken();
  const [active, setActive] = useState('local');

  useEffect(() => {
    setActive(type || 'local');
  }, [type]);

  return (
    <div className={cls?.upload(token)}>
      <div className={cls.segmented(token)}>
        <Segmented
          value={active}
          options={options}
          onChange={(key) => {
            setActive(key);
            onTypeChange?.(key);
          }}
        />
      </div>
      {
        {
          local: <Uploads value={value} onUpload={onUpload} onChange={onChange} />,
          network: <Input.TextArea value={value && isUrl(value) ? value : ''} onChange={onChange} autoSize={{ minRows: 3 }} />
        }[active]
      }
    </div>
  );
}

export default Upload;
