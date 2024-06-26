import { AddLine, ArrowDownSLine, ArrowUpSLine } from '@/components/icons';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import css from './panel.module.less';

const variants = {
  open: {
    opacity: 1,
    display: 'block',
  },
  closed: {
    opacity: 0,
    display: 'none',
  },
};

export function Action({ children, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.8 }}
      className={css.action}
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Body({ children, collapsed }) {
  return (
    <motion.div
      variants={variants}
      initial={collapsed ? 'open' : 'closed'}
      animate={collapsed ? 'open' : 'closed'}
    >
      <motion.div>{children}</motion.div>
    </motion.div>
  );
}

function Panel({
  style,
  className,
  open = false,
  isAdd = false,
  onAdd,
  title,
  extra,
  children,
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div style={style} className={`${css.panel} ${className}`}>
      <motion.div className={css.header} animate={isOpen ? 'open' : 'closed'}>
        <div className={css.title} onClick={() => setIsOpen(!isOpen)}>
          {title}
        </div>
        <div className={css.actions}>
          {extra || (
            <>
              {isAdd && (
                <Action onClick={onAdd}>
                  <AddLine />
                </Action>
              )}
              {!isAdd && (
                <Action onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <ArrowDownSLine /> : <ArrowUpSLine />}
                </Action>
              )}
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        className={children && css.body}
        variants={variants}
        initial={isAdd ? 'open' : 'closed'}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div>{children}</motion.div>
      </motion.div>
    </div>
  );
}

export default memo(Panel);
