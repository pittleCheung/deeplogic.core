import { Element, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import { theme } from 'antd';
import { motion } from 'framer-motion';
import { isEqualWith } from 'lodash-es';
import {set} from 'lodash-es';
import { memo } from 'react';
import SvgIcon from '../../../../../helper/svg-icon';
import cls from './_style';

function ComponentItem({ F_ICON, F_TITLE, F_EXT, component }) {
  const {
    connectors: { create },
    actions: { setCustom }
  } = useEditor();
  const isMaterial = F_EXT?.symbol;
  const { token } = theme?.useToken();
  const { isElement, displayName, props } = component?.craft || component?.type?.craft;
  const params = {
    displayName,
    is: component,
    canvas: !!isElement,
    ...props
  };
  // 素材处理
  const node = isMaterial ? <Element {...params} component={F_ICON} /> : <Element {...params} />;

  /**
   * 将设备id存储到Root Custom
   * @param el
   * @returns {*}
   */
  const onCreate = (el) => {
    const { nodes, rootNodeId } = el;

    if (nodes[rootNodeId]) {
      setCustom(ROOT_NODE, (node) => {
        set(node, 'device', {
          ...node.device,
          id: el?.rootNodeId
        });
      });
    }

    return set(el, `nodes.${el.rootNodeId}.data.props.ext`, F_EXT);
  };

  return (
    <motion.div
      ref={(ref) => {
        if (!ref) return;
        create(ref, node, {
          onCreate
        });
      }}
      className={cls.item(token)}
      onDragEnter={(e) => e.stopPropagation()}
    >
      <motion.div
        className={cls.image(token)}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <SvgIcon svg={F_ICON} />
      </motion.div>
      <div className={cls.label(token)}>{F_TITLE}</div>
    </motion.div>
  );
}

export default memo(ComponentItem, isEqualWith);
