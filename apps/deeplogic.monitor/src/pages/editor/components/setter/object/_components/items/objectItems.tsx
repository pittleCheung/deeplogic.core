import { replaceNameWithArray } from '../../../_helper/utils';
import useObject from '../../../_hooks/useObject';
import RenderItem from './__components/renderItem';

function ObjectItems() {
  const { items } = useObject();
  if (!items?.length) return null;

  const renderItems = items?.map((item) => (item?.propType === 'object' ? replaceNameWithArray(item) : item));

  return (
    <div>
      {renderItems?.map((item) => (
        <RenderItem key={item.name} {...item} />
      ))}
    </div>
  );
}

export default ObjectItems;
