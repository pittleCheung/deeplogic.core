import { findObjectByKey } from '@/pages/editor/components/setter/_helper/utils';
import { TreeSelect } from 'antd';
import Field from '../field';

function Device({ value, items, onChange, parent }) {
  const data = findObjectByKey(items.children, parent) || items;
  const treeData = parent ? (data ? [data] : items.children) : items.children || [];

  return (
    <Field bordered={false}>
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='绑定设备'
        allowClear
        popupMatchSelectWidth={false}
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </Field>
  );
}

export default Device;
