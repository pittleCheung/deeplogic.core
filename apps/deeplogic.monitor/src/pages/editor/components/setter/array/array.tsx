import { AddLine } from '@/components/icons';
import equal from 'fast-deep-equal/es6';
import { isEqual } from 'lodash-es';
import { nanoid } from 'nanoid';
import { memo, useEffect, useState } from 'react';
import { Panel, SortableList } from '../_components';
import { isArray, isObject } from '../_helper/utils';
import { ArrayItem } from './_components';
import ArrayEdit from './_components/edit';
import { ArrayProvider } from './_hooks/useArray';
import css from './array.module.less';

function formatFormItems(items) {
  return items?.map((item) => {
    const { name, ...rest } = item;
    return isArray(name) ? { ...rest, name: name?.slice(-1)[0] } : item;
  });
}

function ArraySetter({ title, value, defaultValue, attribute, onChange, pages, ...props }) {
  const [items, setItems] = useState([]);
  const [isStringArray, setIsStringArray] = useState(false);

  const formatValue = (data) => {
    if (!data) return [];

    if (isArray(data)) {
      return data?.map((item) => {
        if (!isObject(item)) {
          setIsStringArray(true);
          item = { id: nanoid(10), label: item };
        } else {
          setIsStringArray(false);
          item = {
            id: item?.key || nanoid(10),
            label: item?.label || item?.name || item?.title,
            ...item
          };
        }
        return item;
      });
    } else {
      return [
        {
          id: nanoid(10),
          label: data
        }
      ];
    }
  };

  const updatedValue = (data) => {
    if (data) {
      const newData = formatValue(data);
      if (!isEqual(items, newData)) {
        setItems(newData);
      }
    }
  };

  const onValueChange = (values) => {
    const result = isStringArray ? values?.map((item) => item?.label) : values;
    onChange?.(
      result?.map((item) => {
        const name = item?.name || item?.title || item?.label;
        console.log(item);
        return {
          ...item,
          label: item?.pointSource ? item?.pointSource : name
        };
      })
    );
  };

  const onLabelChange = ({ label, index }) => {
    setItems((prevState) => {
      const value = isObject(label) ? label : { label, name: label, title: label };
      const state = prevState.map((item, i) => (i === index ? { ...item, ...value } : item));
      onValueChange?.(state);
      return state;
    });
  };

  const onDragChange = (values) => {
    setItems(values);
    onValueChange?.(values);
  };

  const onDelete = (index) => {
    setItems((prevState) => {
      const state = prevState.filter((_, i) => i !== index);
      onValueChange?.(state);
      return state;
    });
  };

  useEffect(() => {
    if (value || defaultValue) {
      updatedValue(value || defaultValue || []);
    }
  }, [value]);

  return (
    <ArrayProvider items={items} pages={pages} onChange={onChange} attribute={formatFormItems(attribute)} {...props}>
      <Panel
        title={title?.label || title || ''}
        isAdd
        open={true}
        extra={
          <ArrayEdit
            id={props?.id}
            icon={<AddLine />}
            onChange={(values) => {
              const id = nanoid(10);
              onDragChange([...items, { id, ...values }]);
            }}
          />
        }
      >
        <div className={css.array}>
          <SortableList
            items={items}
            onChange={onDragChange}
            renderItem={(item, index) => {
              return (
                <ArrayItem
                  {...item}
                  onDelete={() => onDelete(index)}
                  onBlur={() => onValueChange?.(items)}
                  onChange={(label) => onLabelChange({ label, index })}
                  onAttributeChange={(label) => onLabelChange({ label, index })}
                />
              );
            }}
          />
        </div>
      </Panel>
    </ArrayProvider>
  );
}

export default memo(ArraySetter, equal);
