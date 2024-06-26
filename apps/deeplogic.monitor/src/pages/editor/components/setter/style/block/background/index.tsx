import equal from 'fast-deep-equal/es6';
import { nanoid } from 'nanoid';
import { memo, useEffect, useState } from 'react';
import { BackgroundList, Panel } from '../../../_components';
import { generateBackground } from '../../../_helper/utils';
import useSetter from '../../../_hooks/useSetter';
import Action from './_components/action';

function Background() {
  const { styleData, onChange } = useSetter();
  const [propertySetter, setPropertySetter] = useState([]);

  /**
   * 添加
   */
  function onAdd(item) {
    setPropertySetter((pre) => [item, ...pre]);
  }

  /**
   * 禁用
   * @param key
   */
  function onDisable(key) {
    setPropertySetter((pre) =>
      pre.map((item) =>
        item.key === key
          ? {
              ...item,
              disabled: !item.disabled
            }
          : item
      )
    );
  }

  /**
   * 移除
   * @param key
   */
  function onRemove(key) {
    const newset = propertySetter?.filter((item) => item.key !== key);
    if (!newset.length) {
      // 没有背景设置时返回无设置
      onChange?.({ background: 'unset', backgroundList: [] });
    }
    setPropertySetter(newset);
  }

  /**
   * 修改颜色
   * @param key
   * @param value
   */
  function onChangeColor(key, value) {
    setPropertySetter(propertySetter?.map((item) => (item.key === key ? { ...item, value } : item)));
  }

  /**
   * setter改变时将值传递给styleData
   */
  const onSetterChange = (items) => {
    if (!items?.length) {
      return;
    }

    const background = generateBackground(items);
    onChange?.({
      background,
      backgroundList: items
    });
  };

  /**
   * 转换渐变色
   * @param color
   */
  function transformGradient(color) {
    if (!color) return null;
    const rgbaPattern = /rgba\(([^)]+)\)/g;
    const matches = color.match(rgbaPattern);

    if (matches && matches.length === 2 && matches[0] === matches[1]) {
      const id = nanoid(10);
      return {
        id,
        key: id,
        disabled: false,
        value: matches[0]
      };
    }

    return null;
  }

  useEffect(() => {
    if (!!propertySetter?.length) {
      onSetterChange(propertySetter);
    }
  }, [propertySetter]);

  useEffect(() => {
    if (styleData) {
      const { background, backgroundList } = styleData;

      if (!!backgroundList?.length) {
        setPropertySetter(backgroundList || []);
        return;
      }
      const defaultBackground = transformGradient(background);
      setPropertySetter(defaultBackground ? [defaultBackground] : []);
    }
  }, [styleData]);

  return (
    <Panel title={'背景'} open={true} extra={<Action onAdd={onAdd} />}>
      <BackgroundList
        items={propertySetter}
        onChange={onChangeColor}
        onDragChange={setPropertySetter}
        onDisable={onDisable}
        onRemove={onRemove}
      />
    </Panel>
  );
}

export default memo(Background, equal);
