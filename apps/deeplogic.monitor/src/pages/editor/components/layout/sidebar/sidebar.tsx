import { Layers } from '@craftjs/layers';
import { Layout, Segmented } from 'antd';
import { useState,memo } from 'react';
import { useSidebar } from '../../hooks';
import { tabs } from './config';
import WidgetMenu from './materials';
import Pages from './pages';
import { PagesProvider } from './pages/usePages';
import css from './sidebar.module.less';

function Sidebar() {
  const [active, setActive] = useState('pages');
  const { page } = useSidebar();

  return (
    <Layout.Sider className={css.sidebar} width={262} theme='light'>
      <div className={css.tabs}>
        <Segmented options={tabs(active)} value={active} onChange={(key) => setActive(key)} />
      </div>
      <div className={css.content}>
        {
          {
            pages: (
              <PagesProvider {...page}>
                <Pages />
              </PagesProvider>
            ),
            layers: (
              <div className={css.layers}>
                <Layers expandRootOnLoad={true} />
              </div>
            ),
            components: <WidgetMenu />
          }[active]
        }
      </div>
    </Layout.Sider>
  );
}

export default memo(Sidebar);
