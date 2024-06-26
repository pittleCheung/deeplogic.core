import { useIcon } from '@/pages/editor/components/setter/_components/icon.picker/_components/icons/_hooks/useIcon';
import { theme } from 'antd';
import cls from 'classnames';
import { motion } from 'framer-motion';
import { memo, useCallback, useMemo } from 'react';
import css from './_style';
const IconItem = ({ category, items, icons }) => {
  const { token } = theme?.useToken();
  const { active, selected, search, onChange } = useIcon();
  const transition = { type: 'spring', stiffness: 400, damping: 10 };

  const RenderAntdIcon = useCallback(
    (name) => {
      const component = icons?.[name];
      if (!component) return null;

      return (
        <motion.div
          key={name}
          className={css.icon(token)}
          transition={transition}
          whileHover={{ backgroundColor: token?.colorSplit }}
          onClick={() => onChange({ key: `${name}`, active })}
        >
          {component}
        </motion.div>
      );
    },
    [selected, icons, active]
  );

  const RenderIcon = useMemo(() => {
    return Object.entries(items).map(([key, value]) => {
      const list = value
      return (
        <li key={key}>
          {list?.length > 0 && (
            <>
              <div className={cls(css.label(token))}>{category[key]}</div>
              <ul className={css.iconList(token)}>
                {list?.map((item) => (
                  <motion.li key={`${active}-${item}`}>
                    {
                      RenderAntdIcon(item)
                    }
                  </motion.li>
                ))}
              </ul>
            </>
          )}
        </li>
      );
    }, []);
  }, [items, category, RenderAntdIcon, active, search]);

  return (
    <div className={css.items(token)}>
      <ul>{RenderIcon}</ul>
    </div>
  );
};

export default memo(IconItem);
