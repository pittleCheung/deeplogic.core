import { theme } from 'antd';
import { useMemo } from 'react';
import { useSidebar } from '../../../../../hooks';
import cls from './_style';
import ComponentItem from './component.item';

function ComponentList({ active, subActive }) {
  const { materials } = useSidebar();
  const { token } = theme?.useToken();

  if (!materials || !materials?.components) return null;

  const components = materials?.components?.[active] || materials?.components?.[subActive];

  const componentList = useMemo(() => {
    return components?.map((item) => {
      const craft = item?.component?.craft || item?.component?.type?.craft;
      return craft ? (
        <div key={item?.F_C_ID}>
          <ComponentItem {...item} />
        </div>
      ) : null;
    });
  }, [materials?.components, active, subActive]);

  if (!components || !components?.length) return null;

  return <div className={cls.list(token)}>{componentList}</div>;
}

export default ComponentList;
