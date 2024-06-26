import { SortableList } from '../sortable';
import BackgroundItem from './_components/item';

function BackgroundList({
  items = [],
  onDragChange,
  onChange,
  onDisable,
  onRemove,
}) {
  return (
    <SortableList
      items={items}
      onChange={onDragChange}
      renderItem={(item) => (
        <BackgroundItem
          {...item}
          id={item.key || item.id}
          onChange={onChange}
          onDisable={onDisable}
          onRemove={onRemove}
        />
      )}
    />
  );
}

export default BackgroundList;
