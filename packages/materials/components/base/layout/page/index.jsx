import { injectGlobal } from '@emotion/css';
import { theme as AntTheme, ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { isEmpty } from 'lodash-es';
import { Suspense, lazy } from 'react';
import { craft } from '../../../_utils/utils';
import Resizer from '../../../common/resizer';
import { useComponent } from '../../../useComponent';
import { customThemes } from './customeThemes';
import meta from './meta';

const LazyChildren = lazy(() => import('./lazyChildren'));

function Page({ children, ...props }) {
  const { state } = useComponent({ ...props });
  if (isEmpty(state)) return null;

  const theme = (state.theme?.algorithm &&
    (state.theme.algorithm in AntTheme
      ? { algorithm: AntTheme[state.theme.algorithm], token: state.theme.token }
      : customThemes[state.theme.algorithm])) || { algorithm: AntTheme.defaultAlgorithm };

  // 配置弹窗等样式
  // ConfigProvider.config({
  //   holderRender: (children) => {
  //     return (
  //       <ConfigProvider locale={zhCN} theme={theme}>
  //         {children}
  //       </ConfigProvider>
  //     );
  //   }
  // });

  // 全局滚动条样式匹配页面风格
  const tokens = AntTheme.getDesignToken(theme);
  injectGlobal`
      .page ::-webkit-scrollbar-track {
          background-color: ${tokens.colorBorder} !important;
      }

      .page ::-webkit-scrollbar-thumb {
          background-color: ${tokens.colorTextTertiary} !important;
      }

      .page ::-webkit-scrollbar-thumb:hover {
          background: ${tokens.colorText} !important;
      }
  `;

  return (
    <Resizer className='page' width={state?.style?.width} height={state?.style?.height}>
      <ConfigProvider locale={zhCN} theme={theme}>
        <Layout>
          <Suspense>
            <LazyChildren {...state}>{children}</LazyChildren>
          </Suspense>
        </Layout>
      </ConfigProvider>
    </Resizer>
  );
}

Page.craft = craft(meta);

export default Page;
