import { memo } from 'react';
import { SetterProvider } from '../_hooks/useSetter';
import Background from './block/background';
import Border from './block/border';
import Font from './block/font';
import Layout from './block/layout';
import Size from './block/size';
import Spacing from './block/spacing';
import { styleValue } from './config.json';

const TabRenderer = memo(({ show }) => {
  const tabs = {
    size: <Size />,
    font: <Font />,
    border: <Border />,
    background: <Background />,
    layout: <Layout />,
    spacing: <Spacing />
    // position: <Position />,
  };

  return (
    <>
      {show?.map((key) => (
        <div key={key}>{tabs[key]}</div>
      ))}
    </>
  );
});

/**
 * 样式设置面板
 * @constructor
 */
function StyleSetter({
  show = ['size', 'font', 'border', 'background', 'layout', 'spacing', 'position'],
  values = styleValue.dataList,
  open,
  name,
  onChange,
  ...props
}) {
  return (
    <SetterProvider name={name} values={values} open={open} onChange={onChange} {...props}>
      <TabRenderer show={show} />
    </SetterProvider>
  );
}

export default memo(StyleSetter);
