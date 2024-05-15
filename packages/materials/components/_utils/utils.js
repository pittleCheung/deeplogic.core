import defaultImg from '../assets/building.png';
import { message } from 'antd';
import { assign, find, forOwn, get, has } from 'lodash-es';
import { nanoid } from 'nanoid';
import { isValidElement } from 'react';
import { DEFAULT_IMAGE_PREVIEW, GLOBAL_ERROR_KEY, LOCAL_COMMONDATA_KEY } from '../../global';

const _toString = Object.prototype.toString;
const _type = {
  select: {},
  object: {},
  array: [],
  string: '',
  number: 0,
  boolean: false,
  function: () => {},
  element: `<div></div>`,
  symbol: Symbol(),
  undefined: undefined,
  null: null,
  nan: NaN,
  infinity: Infinity,
  date: new Date(),
  regexp: new RegExp(),
  error: new Error(),
  promise: new Promise(() => {}),
  map: new Map(),
  set: new Set()
};

/**
 * @title 将 meta.tsx 转换为可用于Craft组件的 props
 * @description 用于将 meta 转换为可用于Craft组件的 props
 * @param meta
 * @param settings
 */
export function craft(meta, settings) {
  if (!meta) {
    console.error('Meta is undefined');
    return;
  }

  const convertData = (data) => {
    if (!data) return {};

    const attributes = data?.filter((item) => item);
    const result = {};

    const stack = [{ attributes, result }];
    while (stack.length) {
      const { attributes, result } = stack.pop();

      for (const { name, defaultValue, propType, setter } of attributes) {
        if (defaultValue !== undefined) {
          result[name] = defaultValue;
        } else if (setter) {
          /**
           * 如果有 setter，则使用 setter 的 props
           * 如果 setter 的 props 是数组，则递归调用 convertData
           * 如果 setter 的 props 是对象，则直接使用 props.values（针对style特殊处理）
           */
          const { props } = setter;
          if (isArray(props)) {
            result[name] = convertData(props);
          } else if (isObject(props)) {
            result[name] = props?.values;
          } else {
            result[name] = _type[propType];
          }
        } else {
          result[name] = _type[propType];
        }
      }
    }

    return result;
  };

  /**
   * 获取 props
   * @param data
   * @returns {*}
   */
  function getProps(data) {
    return ['props', 'events', 'style'].reduce((newProps, key) => {
      if (data.hasOwnProperty(key)) {
        return isArray(data[key]) ? [...newProps, ...data[key]] : [...newProps, data[key]];
      }
      return newProps;
    }, []);
  }

  const props = convertData(getProps(meta)) || {};
  const { title = '', category = '', componentName = '', isElement = false, isGroup = false, isDevice = false } = meta || {};

  return {
    props,
    title,
    category,
    isElement,
    name: componentName,
    displayName: componentName,
    custom: assign({}, meta, { isGroup, isDevice }),
    type: {
      resolvedName: componentName
    },
    related: {
      settings
    },
    rules: {
      canDrag: () => true,
      canDrop: (target, current) => {
        const { displayName = '' } = target?.data;
        const { isDevice = false } = current?.data?.custom;

        if (!displayName) return true;

        if (isDevice) {
          return displayName === 'DrawCanva' && isDevice;
        } else {
          return true;
        }
      }
    }
  };
}

/**
 * 是否是数组
 * @param {any} params
 * @returns {boolean}
 */
export function isArray(params) {
  return _toString.call(params) === '[object Array]';
}

/**
 * 是否是对象
 * @param {any} params
 * @returns {boolean}
 */
export function isObject(params) {
  return _toString.call(params) === '[object Object]';
}

/**
 * 是否是字符串
 * @param {any} params
 * @returns {boolean}
 */
export function isString(params) {
  return _toString.call(params) === '[object String]';
}

/**
 * 是否是数字
 * @param {any} params
 * @returns {boolean}
 */
export function isNumber(params) {
  if (isNaN(params)) return false;
  return _toString.call(params) === '[object Number]';
}

/**
 * 是否是布尔值
 * @param {any} params
 * @returns {boolean}
 */
export function isBoolean(params) {
  return _toString.call(params) === '[object Boolean]';
}

/**
 * 自定义的对象转换为 Select 的 options
 * @param options
 */
export function object2Options(options) {
  if (!options) return [];
  if (!isObject(options)) throw new Error('options must be an object');
  return Object.keys(options).map((key) => ({
    label: options[key],
    value: key
  }));
}

/**
 * 是否是空对象
 * @param obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => Object.keys(obj).length === 0;

/**
 * 是否是url
 * @param path
 * @returns {boolean}
 */
export const isUrl = (path) => {
  if (!path) return false;

  if (path.startsWith('/')) return true;

  // base64
  if (path.startsWith('data:')) return true;

  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(path);
};

/**
 * 将变量对象中的变量名替换为其对应的值
 * @param variables
 * @param expression
 * @returns {*}
 */
function parseExpression(variables, expression) {
  // 创建一个用于存储变量映射关系的map
  let variableMap = {};

  // 创建一个新的变量对象，其中的变量名是合法的
  const newVariables = Object.keys(variables).reduce((newVars, key) => {
    // 如果键名中包含#，则使用nanoid生成一个新的键名
    const validKey = `${key.replace('#', '_')}_${nanoid(10)}`;
    const newKey = key.includes('#') ? validKey : key;
    // 在映射map中存储新旧键名的映射关系
    variableMap[key] = newKey;
    // 将新的键值对存入新的变量对象中
    newVars[newKey] = variables[key];
    return newVars;
  }, {});

  // 在表达式中替换变量名
  Object.keys(variableMap).forEach((key) => {
    expression = expression.replace(new RegExp(`\\\$\{${key}\}`, 'g'), `\${${variableMap[key]}}`);
  });

  // 创建一个新的表达式，其中的变量名已被替换为其对应的值
  const result = expression.replace(/\$\{([^}]+)\}/g, (_, varName) => {
    return newVariables[varName];
  });

  // console.log('parseExpression ===========////// ', expression, result, newVariables);

  return result;
}

/**
 * 解析变量
 * @param value
 * @param points
 * @param global
 * @param enabled
 * @returns {*}
 */
const parseVariable = (value, { points, global, enabled }, query) => {
  let newProps;
  const { bind, type, point } = value;
  // console.log('parseVariable ===========////// ', value);
  
  if (bind && type) {
    if (point) {
      // 绑定点表和全局变量都 会进入此处
      const newBind = parseExpression({ ...points, ...global }, bind);
      // console.log('parseVariable ===========////// ', value, newBind);
      // console.log("=>(utils.js:266) bind,type,point,newBind: ", bind,type,point,newBind,global);
      try {
        // 绑定的直接返回绑定的点表或全局变量，此方法只会在编辑时用
        // 如绑定的点位太长时，就通过.来切割返回最后一位
        newProps = !enabled ? global?.[bind] || eval(newBind) : global?.[bind] ?? (bind?.split?.('.')?.at?.(-1) || '-'); // change here
        // console.log("=>(utils.js:268) newProps,newBind: ", newProps,newBind);
        // newProps = `$\{${newBind}\}`;
        // console.log("=>(utils.js:272) newProps: ", newProps );

      } catch (err) {
        console.error(`Failed to evaluate expression: ${newBind}`);
      }
    } else {
      switch (type) {
        case 'expressions':
          try {
            // console.log('Expression: ', bind);
            newProps = !enabled ? eval(bind) : "${expressions}"; // and here
          } catch (err) {
            console.error(`Failed to evaluate expression: ${bind}`);
          }
          break;
        case 'points':
          newProps = points?.[`${bind}`] ?? global?.[`${bind}`];
          break;
        case 'global':
          newProps = global?.[`${bind}`];
          break;
        case 'components':
          try {
            const { id, key } = splitKey(bind);
            const nodeProps = query?.node(id)?.get()?.data?.props;
            newProps = get(nodeProps, key);
          } catch (e) {
            console.error(`parse components: ${e}`);
          }
          break;
        default:
          newProps = value;
      }
    }
  } else {
    newProps = value;
  }
  // console.log("=>(utils.js:301) newProps", newProps);
  return newProps;
};

/**
 * 解析事件
 * @param value
 * @param types
 * @param component
 * @returns {*}
 */
export const parserEvent = (value, types, component) => {
  if (!value || isEmpty(value) || !types) return value;

  return Object.entries(value).reduce((newProps, [key, value]) => {
    if (value?.action) {
      const { action, link } = value;
      if (!!types?.[action]) {
        const onEvent = types?.[action];
        newProps[key] = (e) => onEvent?.(link, e);
      } else {
        newProps[key] = value;
      }
    } else {
      newProps[key] = value;
    }
    return newProps;
  }, {});
};

export const parseStyle = (value) => {
  let transform = '';

  if (has(value, 'translateX') && has(value, 'translateY')) {
    transform = `translate(${value.translateX}px, ${value.translateY}px)`;
  }

  const values = transform
    ? {
        ...value,
        transform
      }
    : value;

  return values;
};

/**
 * 解析 props
 * @param props
 * @param points
 * @param global
 * @param query
 * @param events
 * @returns {unknown}
 */
export const parseProps = (props, { points, global, functions, enabled }, query) => {
  if (!props || Object.keys(props).length === 0) return;

  return Object.entries(props).reduce((newProps, [key, value]) => {
    if (isValidElement(value)) {
      newProps[key] = value;
    } else if (isObject(value)) {
      if (key === 'events') {
        // 解析Event
        if (functions) {
          newProps[key] = parserEvent(value, functions, props?.displayName);
        } else {
          newProps[key] = value;
        }
      } else if (key === 'style') {
        // 解析 props
        newProps[key] = parseStyle(value);
      } else {
        if (!enabled && key === 'expression') {
          // 非编辑状态下，不解析表达式，由外部手动 setProps
          // newProps[key] = false;
          // 返回一个字符串
          newProps[key]='$expression';
        } else if (points || global) {
          // 解析绑定变量
          newProps[key] = parseVariable(value, { points, global, enabled }, query);
        } else {
          newProps[key] = value;
        }
      }
    } else if (isArray(value)) {
      newProps[key] = value?.map((item) => {
        if (isObject(item)) {
          return parseProps(item, { points, global, enabled });
        }
        return item;
      });
    } else {
      newProps[key] = value;
    }
    return newProps;
  }, {});
};

/**
 * 生成一个长度为 n 的数组，数组中的元素之和为 24
 * @param n
 * @returns {any[]}
 */
export function generateArray(n) {
  const base = Math.floor(24 / n);
  const remainder = 24 % n;

  // 创建一个长度为 n 的数组，每个元素的初始值为 base
  let arr = new Array(n).fill(base);

  // 将余数均匀分配到数组的前几个元素
  for (let i = 0; i < remainder; i++) {
    arr[i]++;
  }

  return arr;
}

/**
 * 将尺寸转换为 transform
 * @param width
 * @param height
 * @param scale
 * @returns {null|string}
 */
export function transform(width, height, scale) {
  if (width && height && scale) {
    const scaleWidth = width / scale;
    const scaleHeight = height / scale;
    const x = (width * (scaleWidth - 1)) / width;
    const y = (height * (scaleHeight - 1)) / height;

    return `translate(${x}, ${y}) scale(${scaleWidth},${scaleHeight})`;
  }
  return null;
}

/**
 * 获取尺寸
 * @param size
 * @param scale
 * @returns {{transform: string, width: (*|number), height: (*|number)}}
 */
export function getSize(size, scale) {
  const width = size?.width ? size?.width : 24;
  const height = size?.height ? size?.height : 24;

  return {
    width,
    height,
    transform: transform(width, height, scale)
  };
}

/**
 * 将 px 转换为数字
 * @param value
 * @returns {number}
 */
export const px2Num = (value) => {
  if (!value || value === 'auto') return 0;
  const numValue = Number(value.replace(/(px|%|rem|em|vw|vh|ex|ch|cm|mm|in|pt|pc)$/, ''));
  return isNaN(numValue) ? 0 : numValue;
};

/**
 * 将组件导出为对象
 * @param requireComponent
 * @returns {*}
 */
// export const exportComponents = (requireComponent) => {
//   if (!requireComponent) throw new Error('requireComponent is undefined');
//   try {
//     // 获取当前目录下的所有组件并转换为对象导出
//     // return requireComponent.keys().reduce((acc, path) => {
//     //   const component = requireComponent(path).default;
//     //   const paths = path
//     //     .replace(/^.\//, '') // 删除开头的 ./
//     //     .replace(/\/index/, '') // 删除 /index
//     //     .replace(/\.jsx?$/, '') // 删除文件后缀名
//     //     .split('/') // 拆分路径
//     //     .map((name) => name[0].toUpperCase() + name.slice(1)); // 首字母大写

//     //   const name = paths
//     //     .map((n) => {
//     //       // 处理驼峰命名
//     //       if (n.includes('.')) {
//     //         const [left, right] = n.split('.');
//     //         return `${left}${right[0].toUpperCase()}${right.slice(1)}`;
//     //       } else {
//     //         return n;
//     //       }
//     //     })
//     //     ?.at(-1); // 获取最后一个

//     //   // 如果组件存在，则添加到组件列表中，否则从组件列表中删除
//     //   if (component) {
//     //     acc[name] = component;
//     //   } else {
//     //     delete acc[name];
//     //   }

//     //   return acc;
//     // }, {});
//      return requireComponent.reduce((acc, path) => {
//        const component = requireComponent(path).default
//        const paths = path
//          .replace(/^.\//, "") // 删除开头的 ./
//          .replace(/\/index/, "") // 删除 /index
//          .replace(/\.jsx?$/, "") // 删除文件后缀名
//          .split("/") // 拆分路径
//          .map((name) => name[0].toUpperCase() + name.slice(1)) // 首字母大写

//        const name = paths
//          .map((n) => {
//            // 处理驼峰命名
//            if (n.includes(".")) {
//              const [left, right] = n.split(".")
//              return `${left}${right[0].toUpperCase()}${right.slice(1)}`
//            } else {
//              return n
//            }
//          })
//          ?.at(-1) // 获取最后一个

//        // 如果组件存在，则添加到组件列表中，否则从组件列表中删除
//        if (component) {
//          acc[name] = component
//        } else {
//          delete acc[name]
//        }

//        return acc
//      }, {})
//   } catch (e) {
//     throw new Error(e);
//   }
// };

/**
 * 获取子组件的 props
 * @param items
 * @returns {*|*[]}
 */
export function getChildrenProps(items) {
  if (!items || items.length === 0) return [];

  return items.map((item) => item?.props);
}

/**
 * 获取子组件的 props
 * @param childs
 * @param id
 * @returns {unknown|{}}
 */
export function childProp(childs, id) {
  if (!childs || childs.length === 0) return {};
  return find(childs, { id });
}

/**
 * 将对象扁平化
 * @param obj
 * @param parentKey
 * @param result
 * @returns {{}}
 */
export function flattenObject(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (isObject(obj[key]) && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

/**
 * 深度搜索Object中是否包含指定的key
 * @param obj
 * @param key
 * @returns {boolean}
 */
export function deepSearch(obj, key) {
  // 检查当前层级是否包含key
  if (has(obj, key)) {
    return true;
  }

  // 如果obj是对象或数组，则递归搜索
  let result = false;
  forOwn(obj, function (value) {
    if (isObject(value) || isArray(value)) {
      // 递归查找
      if (deepSearch(value, key)) {
        result = true;
        // 早返回，不需要继续查找
        return false; // 停止遍历
      }
    }
  });
  return result;
}

/**
 * 使用message.error显示错误信息
 * @param {ReactNode} content 提示内容
 */
export function showError(content) {
  message.error({ key: GLOBAL_ERROR_KEY, content });
}

/**
 * 从localStorage中加载公共数据
 */
export function loadCommonData() {
  const stateJson = localStorage.getItem(LOCAL_COMMONDATA_KEY);
  return JSON.parse(stateJson);
}

/**
 * 获取公共数据中的字典数据
 * @param key
 * @returns {*|{}}
 */
export function getDict(key) {
  return loadCommonData()?.Dicts?.[key] ?? {};
}

/**
 * 获取图片的预览地址
 * @param url
 * @returns {*|string}
 */
export const previewUrl = (url) => {
  if (!url) return defaultImg;

  if (isUrl(url)) return url;

  return `${DEFAULT_IMAGE_PREVIEW}${url}`;
};

/**
 * 提取变量
 * @param key
 * @returns {{id: *, key: *}}
 */
export function splitKey(key) {
  const parts = key.split('.');
  const firstPart = parts[0];
  const remainingParts = parts.slice(1).join('.');

  return {
    id: firstPart,
    key: remainingParts
  };
}
