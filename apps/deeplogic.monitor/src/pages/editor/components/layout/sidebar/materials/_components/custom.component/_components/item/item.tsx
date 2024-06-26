import { FolderImageLine } from '@/components/icons';
import { ROOT_NODE } from '@craftjs/utils';
import { Dropdown, theme } from 'antd';
import { motion } from 'framer-motion';
import SvgIcon from '../../../../../../../helper/svg-icon';
import { getTemplate } from '../../../../../../../helper/utils';
import { useSidebar } from '../../../../../../../hooks';
import { rightMenu } from '../_config';
import css from './_style';

function CustomComponentItem({ label, content, icon, cid }) {
  const { token } = theme?.useToken();
  const { materials, create, query, actions } = useSidebar();
  const { onRemoveCustom } = materials?.custom;
  const onClick = ({ key }) => {
    switch (key) {
      case 'delete':
        onRemoveCustom({ ucid: cid });
        break;
      default:
        return;
    }
  };

  const onAddNode = async (value) => {
    const node = await getTemplate(value, query);

    if (!node) return;

    actions.addNodeTree(node, ROOT_NODE, 0);
  };

  return (
    <Dropdown menu={{ items: rightMenu, onClick }} trigger={['contextMenu']}>
      <motion.div onClick={() => onAddNode?.(content)} className={css.item(token)} onDragEnter={(e) => e.stopPropagation()}>
        <motion.div
          className={css.image(token)}
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon ? <SvgIcon svg={icon} /> : <FolderImageLine />}
        </motion.div>
        <div className={css.label(token)}>{label}</div>
      </motion.div>
    </Dropdown>
  );
}

export default CustomComponentItem;
