import { motion } from 'framer-motion';
import css from "./index.module.less"

function Action({ children, onClick }) {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }} className={css.action} onClick={onClick}>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Action;
