import { Dropdown, Layout } from 'antd';
import { useCallback, useRef,useMemo } from 'react';
import { useLayout,useDesigner } from '../hooks';
import LayoutEmpty from './empty';
import css from "./layout.module.less"
import items from './menus';
import Setter from './setter';
import SideBar from './sidebar';
import Toolbar from './toolbar';
const trigger= ['contextMenu']
function DesignerLayout({ children }) {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const { enabled, nodeCustom, isRoot, isParse, isUndo, isRedo, onKeyDown, onKeyboard } = useLayout();
  const designer = useDesigner();
  console.log('designer: ', designer);
  const { sidebar } = designer;
  const { pageId } = sidebar?.page ? sidebar?.page : {};
  const isDevice = nodeCustom?.isDevice;

  const onKeyboardHandler = useCallback(
    (events) => {
      if (enabled) {
        onKeyDown?.(events);
      }
    },
    [enabled, onKeyDown]
  );

  const onMouseEnterHandler = useCallback(() => {
    // contentRef.current.focus();
  }, []);

  const onMouseLeaveHandler = useCallback(() => {
    console.log('onMouseLeaveHandler-blur');
    contentRef.current.blur();
    // document.removeEventListener('keydown', onKeyboardHandler);
  }, [onKeyboardHandler]);

  const menu = useMemo(() => {
    return {
      items: items(!isDevice, isRoot, isParse, isUndo, isRedo),
      onClick: ({ key }) => onKeyboard?.(key)
    }
  }, [items,isDevice, isRoot, isParse, isUndo, isRedo,onKeyboard])

  return (
    <Layout className={css.layout}>
      <Layout>
        <SideBar />
        {pageId && (
          <Layout.Content id='craft-canvas'>
            <Toolbar />
            <div
              ref={contentRef}
              tabIndex={0}
              onKeyDown={onKeyboardHandler}
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
              className={css.wrapper}
            >
              <Layout.Content ref={ref} className={css.content} id={'craft-content'}>
                <Dropdown
                  menu={menu}
                  trigger={trigger}
                  destroyPopupOnHide
                  overlayClassName={css.dropdown}
                  disabled={!enabled}
                >
                  <Layout.Content className={css.canvas}>{children}</Layout.Content>
                </Dropdown>
              </Layout.Content>
            </div>
          </Layout.Content>
        )}
        {!pageId && <LayoutEmpty />}
        {enabled && <Setter />}
      </Layout>
    </Layout>
  );
}

export default DesignerLayout;
