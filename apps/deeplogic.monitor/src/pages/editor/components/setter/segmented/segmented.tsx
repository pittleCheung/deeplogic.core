import { Segmented as AntSegmented } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { isArray, isString } from '../_helper/utils';

const defaultOptions = [
  {
    label: '显示',
    value: 'true'
  },
  {
    label: '隐藏',
    value: 'false'
  }
];

function Segmented(props) {
  const [options, setOptions] = useState(defaultOptions);

  /**
   * 用于将数组选项转化为对象选项
   */
  const getOptions = useCallback(() => {
    if (isArray(props?.options)) {
      const values = props?.options?.map((item, index) => {
        if (isString(item)) {
          return {
            label: item,
            value: !!index ? 'true' : 'false'
          };
        }
        return item;
      });
      setOptions(values);
    }
  }, [props.options]);

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <AntSegmented
      options={options}
      value={`${props?.value}`}
      onChange={(value) => {
        props?.onChange(value);
      }}
    />
  );
}

export default memo(Segmented);
