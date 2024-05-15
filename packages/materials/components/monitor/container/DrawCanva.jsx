import { useEditor } from '@craftjs/core';
import { Spin } from 'antd';
import equal from 'fast-deep-equal/es6';
import { lazy, memo, Suspense, useEffect, useState,useMemo } from 'react';
import { craft } from '../../_utils/utils';
import Resizer from '../../common/resizer';
import { useComponent } from '../../useComponent';
import '../index.less';
import { CanvasProvider } from './hooks/useCanvas';
import meta from './meta';

const Canvas = lazy(() => import('./DesignerCanvas'));

function DrawCanva(props) {
  const { state, connectRef, ...component } = useComponent(props);
  const [isInitialized, setIsInitialized] = useState(true);
  if (!state) return null;
  const { query } = useEditor();

  const { width, height, background, ...otherStyle } = state?.style || {};
  const enabled = query?.getOptions()?.enabled;

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsInitialized(true);
    // }, 300);

    // return () => clearTimeout(timer);
  }, []);
  const style = useMemo(() => {
    return {
      width: width || '100%',
      height: height || '100%',
      ...otherStyle,
      background
    };
  }, [otherStyle,width, height, background]);


  if (!enabled) {
    return (
      <CanvasProvider {...{ state, ...component }}>
        <div
          style={style}
        >
          <Suspense
            fallback={
              <div style={{ textAlign: 'center' }}>
                <Spin />
              </div>
            }
          >
            {isInitialized ? (
              <Canvas>{state?.children}</Canvas>
            ) : (
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <Spin />
              </div>
            )}
          </Suspense>
        </div>
      </CanvasProvider>
    );
  }
  return (
    <CanvasProvider {...{ state, ...component }}>
      <Resizer
        isStyle={true}
        connectDrag={connectRef}
        width={style.width}
        height={style.height}
        style={{ height: '100%', width: '100%', background: background }}
      >
        <Suspense
          fallback={
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          }
        >
          {isInitialized ? (
            <Canvas>{state?.children}</Canvas>
          ) : (
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Spin />
            </div>
          )}
        </Suspense>
      </Resizer>
    </CanvasProvider>
  );
}

DrawCanva.craft = craft(meta);

export default memo(DrawCanva, equal);
