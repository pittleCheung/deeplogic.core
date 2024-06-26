import { Tabs as AntdTabs } from 'antd';
import { useEffect, useState, memo } from 'react';
import useSettings from '../useSettings';
import { tabs } from './config';
import css from './index.module.less';

function Tabs() {
  const { active, formValues, onTabClick, custom } = useSettings();
  const [items, setItems] = useState([]);

  function findTabs(data) {
    if (!data) return [];
    return data
      ?.map((item) => {
        if (custom.hasOwnProperty(item?.key)) {
          if (item?.key === 'props') {
            const hides = custom?.props?.filter((i) => i?.hidden);
            const isHideProps = custom?.props?.length === hides?.length;

            if (!isHideProps) return item;
          } else {
            return item;
          }
        }
      })
      ?.filter((item) => item);
  }

  useEffect(() => {
    if (custom) {
      const _items = findTabs(tabs);
      setItems(_items);
      onTabClick?.(_items[0]?.key);
    }
  }, [custom]);

  return (
    <AntdTabs
      type="card"
      items={items}
      defaultActiveKey={active}
      activeKey={active}
      className={css.tabs}
      onChange={onTabClick}
    />
  );
}

export default memo(Tabs);
