import global from '@/utils/config';
import { Layout, Menu, Space, theme } from 'antd';
import { isEqualWith } from 'lodash-es';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSidebar } from '../../../hooks';
import { ComponentList, CustomComponent } from './_components';
import cls from './_style';

const SubMenu = memo(({ items, onSelect }) => {
  const { token } = theme?.useToken();
  const [selected, setSelected] = useState('');

  function onSubSelected({ key }) {
    onSelect?.(key);
    setSelected(key);
  }

  useEffect(() => {
    if (!!items?.length) {
      onSubSelected({ key: items?.[0]?.key });
    }
  }, [items]);

  if (!items?.length) return null;

  return (
    <div style={{ flex: 0 }}>
      <Menu
        mode='inline'
        items={items}
        inlineIndent={16}
        className={cls.submenu(token)}
        defaultSelectedKeys={[items?.[0]?.key]}
        selectedKeys={[selected || items?.[0]?.key || '']}
        onSelect={onSubSelected}
      />
    </div>
  );
}, isEqualWith);

function MaterialMenu() {
  const { materials } = useSidebar();

  if (!materials) return null;

  const { token } = theme?.useToken();
  const { menus, onSelect } = materials;
  const [active, setActive] = useState('');
  const [subActive, setSubActive] = useState('');
  const [subMenu, setSubMenu] = useState([]);

  function onSelected(key) {
    setActive(key);

    if (materials) {
      const material = menus?.find((item) => item?.key === key);
      if (material) {
        setSubMenu(material?.items?.map(({ children, ...item }) => ({ ...item })) || []);
        const first = material?.items?.[0];
        if (first) {
          onSelect?.(first?.key);
        } else {
          onSelect?.(key);
        }
      } else {
        onSelect?.(key);
      }
    }
  }

  const GroupMenu = useCallback((items) => {
    const { token } = theme?.useToken();

    if (!items?.length) return [];
    return items?.map((item) => {
      return {
        key: item?.key,
        icon: (
          <Space className={cls.label(token)} direction={'vertical'} size={0}>
            <span style={{ fontSize: 20 }}>{item?.icon}</span>
            <span className={cls.text(token)}>{item?.label || item?.label}</span>
          </Space>
        ),
        children: false
      };
    });
  }, []);

  useEffect(() => {
    if (menus?.length) {
      onSelected(menus?.[0]?.key);
    }
  }, [materials.menus]);

  console.log("=>(menu.jsx:96) token.sizeXL: ", token.sizeXL);
  return (
    <div className={cls.menu(token)}>
      <div className={cls.item(token)}>
        <Layout.Sider trigger={null} theme={'light'} collapsible collapsed className={cls.sider(token)}>
          <Menu
            mode='inline'
            items={GroupMenu(menus)}
            defaultValue={menus?.[0]?.key}
            selectedKeys={[active || '']}
            onSelect={({ key }) => onSelected(key)}
          />
        </Layout.Sider>
      </div>
      {!!subMenu?.length && (
        <SubMenu
          items={subMenu}
          active={active}
          onSelect={(key) => {
            onSelect(key);
            setSubActive(key);
          }}
        />
      )}
      <ComponentList active={active} subActive={subActive} />
      {active === global.CUSTOM && <CustomComponent />}
    </div>
  );
}

export default memo(MaterialMenu, isEqualWith);
