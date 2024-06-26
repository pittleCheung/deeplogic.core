import { Empty, Layout } from 'antd';
import equal from 'fast-deep-equal/es6';
import { memo, useRef } from 'react';
import Settings from '../../settings';
import { useConfig, useDesigner, useLayout, useSetters, useSidebar } from '../../hooks';
import css from './setting.module.less';

function Setting() {
  const ref = useRef(null);
  const selectRef = useRef(null);
  const { selected, device, ancestors, setProps, getNodes, onUnbind, onSelected } = useSetters();
  const { page } = useSidebar();
  const { onUpload } = useLayout();
  const { data, projId, resolver } = useDesigner();
  const { onBind } = useConfig();
  const displayName = selected?.data?.displayName || selected?.data?.custom?.displayName;
  const custom = displayName ? resolver?.[displayName]?.type?.craft?.custom : null;

  // console.log("=>(setting.jsx:20) selected", selected);
  return (
    <>
      <Layout.Sider ref={ref} width={252} theme='light' className={`editor-setting ${css.sider}`}>
        {selected && (
          <Settings
            data={data}
            projId={projId}
            device={device}
            id={selected.id}
            setProp={setProps}
            pages={page?.pages}
            nodes={ancestors}
            onBind={onBind}
            onUnbind={onUnbind}
            onUpload={onUpload}
            resolver={resolver}
            onSelected={onSelected}
            props={selected?.data?.props}
            custom={custom || selected?.data?.custom}
          />
        )}
        {!selected && (
          <div style={{ paddingTop: '20%' }}>
            <Empty description='请选择组件' image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </Layout.Sider>
    </>
  );
}

export default memo(Setting, equal);
