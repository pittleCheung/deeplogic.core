import { IconProvider } from '@/pages/editor/components/setter/_components/icon.picker/_components/icons/_hooks/useIcon';
import { Input, Select, Space, Tabs, theme } from 'antd';
import cls from 'classnames';
import { isEqualWith } from 'lodash-es';
import { memo, useState } from 'react';
import config from './_config';
import fields from './_fields';
import css from './_style';

const IconPickerComponent = (props) => {
  const { token } = theme?.useToken();
  const [active, setActive] = useState('antd');
  const [selected, setSelected] = useState('Outlined');
  const [search, setSearch] = useState('');
  const options = fields?.[active]?.theme;

  return (
    <IconProvider {...props} active={active} selected={selected} search={search}>
      <div className={cls(css.icons(token))}>
        <Space.Compact>
          {options && <Select options={options} value={selected} onSelect={setSelected} className={cls(css.select(token))} />}
          <Input.Search onSearch={setSearch} onChange={(e) => setSearch(e?.target?.value)} allowClear />
        </Space.Compact>
        <Tabs items={config?.tabs} activeKey={active} onChange={setActive}/>
      </div>
    </IconProvider>
  );
};

export default memo(IconPickerComponent, isEqualWith);
