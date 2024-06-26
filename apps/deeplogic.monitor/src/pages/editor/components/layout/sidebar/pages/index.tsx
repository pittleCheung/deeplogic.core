import { File2Line, FileReduceLine, Folder3Fill, Folder3Line, Home5Line } from '@/components/icons';
import { Menu, Space, theme } from 'antd';
import cls from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { Panel } from '../../../setter';
import css from './_style';
import CreatePage from './create';
import Label from './label';
import usePages from './usePages';

function Pages() {
  const { pageId, pages, setOpen, setGroupId, onSelect } = usePages();
  const [menu, setMenu] = useState([]);
  const { token } = theme?.useToken();

  const _formatItems = (data) => {
    if (!data) return;
    return data?.map((item, index) => {
      let type = 'page';

      if (item?.F_TYPE === 1) {
        type = 'home';
      } else if (item?.F_TYPE === 2) {
        type = 'login';
      } else if (item?.IS_GROUP) {
        type = 'group';
      } else {
        type = 'page';
      }

      const isGroup = type === 'group';
      const hasPages = isGroup && item?.PAGES?.length > 0;

      const icons = {
        group: hasPages ? <Folder3Fill /> : <Folder3Line />,
        page: <File2Line />,
        home: <Home5Line className={cls(css.primary(token))} />,
        login: <FileReduceLine className={cls(css.primary(token))} />
      };

      return {
        type,
        key: item?.F_PAGE_ID,
        title: item?.F_TITLE,
        icon: icons[type],
        label: (
          <Space align='center'>
            <span>{isGroup && icons['group']}</span>
            <Label key={item?.F_PAGE_ID} id={item?.F_PAGE_ID} title={item?.F_TITLE} type={type} />
          </Space>
        ),
        children: _formatItems(item?.PAGES)
      };
    });
  };

  const getMenu = useCallback(() => {
    const items = _formatItems(pages);
    setMenu(items);
  }, [pages]);

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  function _getFirstPage(data) {
    return data?.find((item) => item?.type === 'page')?.key || '';
  }

  return (
    <>
      <Panel
        title={'全部页面'}
        open
        isAdd
        onAdd={() => {
          setOpen(true);
          setGroupId('');
        }}
      >
        <div className={cls(css.page(token))}>
          <Menu
            mode={'inline'}
            theme={'light'}
            items={menu}
            className={cls(css.pages(token))}
            inlineIndent={4}
            selectedKeys={[pageId || _getFirstPage(pages)]}
            onClick={({ key, domEvent }) => {
              domEvent?.stopPropagation();
              onSelect?.(key);
            }}
          />
          <CreatePage />
        </div>
      </Panel>
    </>
  );
}

export default Pages;
