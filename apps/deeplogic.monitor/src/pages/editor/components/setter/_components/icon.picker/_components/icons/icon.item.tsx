import { useIcon } from '@/pages/editor/components/setter/_components/icon.picker/_components/icons/_hooks/useIcon';
import { theme } from 'antd';
import cls from 'classnames';
import { motion } from 'framer-motion';
import { createElement, memo, useCallback, useMemo } from 'react';
import css from './_style';

const IconItem = ({ category, items, icons }) => {
  const { token } = theme?.useToken();
  const { active, selected, search, onChange } = useIcon();
  const transition = { type: 'spring', stiffness: 400, damping: 10 };

  const RenderAntdIcon = useCallback(
    (name) => {
      const component = icons?.[`${name}${selected}`];
      if (!component) return null;

      return (
        <motion.div
          className={css.icon(token)}
          transition={transition}
          whileHover={{ backgroundColor: token?.colorSplit }}
          onClick={() => onChange({ key: `${name}${selected}`, active })}
        >
          {createElement(component)}
        </motion.div>
      );
    },
    [selected, icons]
  );

  const RenderIcon = useMemo(() => {
    return Object.entries(items).map(([key, value]) => {
      const list = value?.filter((item) => {
        if (!search) return true;
        const matchKey = item
          // eslint-disable-next-line prefer-regex-literals
          .replace(new RegExp(`^<([a-zA-Z]*)\\s/>$`, 'gi'), (_, name) => name)
          .replace(/(Filled|Outlined|TwoTone)$/, '')
          .toLowerCase();
        return matchKey?.includes(search);
      });

      return (
        <li key={key}>
          {list?.length > 0 && (
            <>
              <div className={cls(css.label(token))}>{category[key]}</div>
              <ul className={css.iconList(token)}>
                {list?.map((item) => (
                  <motion.li key={item}>
                    {
                      {
                        antd: RenderAntdIcon(item)
                      }[active]
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
