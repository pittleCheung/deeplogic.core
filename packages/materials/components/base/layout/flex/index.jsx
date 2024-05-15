import { theme } from 'antd';
import equal from 'fast-deep-equal';
import { memo, useEffect, useState } from 'react';
import { craft } from '../../../_utils/utils';
import { useComponent } from '../../../useComponent';
import css from './_style';
import meta from './meta';

/**
 * Flex 弹性布局，使用了antd的Flex组件
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Flex(props) {
  const [divStyle, setDivStyle] = useState({});
  const { token } = theme.useToken();
  const {
    id,
    actions: { setProp },
    enabled,
    state,
    connectDrag,
    parentId,
    selected,
    getNodeProps
  } = useComponent(props);
  const { style, gap } = state;

  const parentProps = getNodeProps(parentId);
  useEffect(() => {
    setProp(id, (props) => {
      props.style.display = 'flex';
    });
  }, []);

  useEffect(() => {
    if (props?.onPropChange) {
      props?.onPropChange?.(state);
    }
  }, [state]);

  useEffect(() => {
    if (parentProps?.style?.display === 'flex') {
      const flexBasis = parentProps?.style?.flexDirection === 'column' ? style?.height : style?.width;

      setDivStyle({
        ...style,
        gap: `${gap}px`,
        flex: flexBasis
          ? flexBasis === 'auto'
            ? '0 1 auto'
            : flexBasis === '100%'
              ? '1 1 100%'
              : `0 1 ${flexBasis}`
          : '0 1 auto',
        width: '',
        height: ''
      });
    } else {
      setDivStyle({ ...style, gap: `${gap}px` });
    }
  }, [style, gap]);

  return (
    <div className={css.flex(token, enabled, state?.children, selected)} style={divStyle} ref={enabled ? connectDrag : {}}>
      {state?.children}
    </div>
  );
}

Flex.craft = craft(meta);

export default memo(Flex, equal);
