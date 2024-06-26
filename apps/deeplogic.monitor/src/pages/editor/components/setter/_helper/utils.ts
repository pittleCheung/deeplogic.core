import config from '@/utils/config';
import defaultImg from '@/assets/building.webp';
import { get, has, some } from 'lodash-es';

const _toString = Object.prototype.toString;

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
 * 是否是函数
 * @param params
 * @returns {boolean}
 */
export function isFunction(params) {
  return _toString.call(params) === '[object Function]';
}

/**
 * 是否是undefined
 * @param params
 * @returns {boolean}
 */
export function isUndefined(params) {
  return _toString.call(params) === '[object Undefined]';
}

/**
 * 是否是null
 * @param params
 * @returns {boolean}
 */
export function isNull(params) {
  return _toString.call(params) === '[object Null]';
}

/**
 * 是否是空
 * @param params
 * @returns {boolean}
 */
export function isNil(params) {
  return isUndefined(params) || isNull(params);
}

/**
 * children是否为null
 * @param children
 * @returns {boolean}
 */
export const isChildNull = (children) => {
  if (!children) return true;
  return Boolean(children?.type === null);
};

/**
 * 是否是url
 * @param path
 * @returns {boolean}
 */
export const isUrl = (path) => {
  if (!path) return false;

  // 这里需要增加一个判断是否是/开头的url
  if (path.startsWith('/')) return true;

  // 这里需要判断是否是一个base64的图片
  if (path.startsWith('data:image')) return true;

  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return regex.test(path);
};

export const previewUrl = (url) => {
  if (!url) return defaultImg;

  if (isUrl(url)) return url;

  return `${config?.API_IMAGE_URL_PREFIX}${url}`;
};

/**
 * 单词首字母大写
 * @param str 字符串
 * @returns {string}
 */
export function upperFirst(str) {
  if (!str) return '';
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

/**
 * 数组转换为Antd Select的options
 * @description 用于将数组转换为Antd Select的options, 例如: ['a', 'b', 'c'] => [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}, {label: 'c', value: 'c'}]
 * @param params 数组 ['a', 'b', 'c']
 */
export function arrayToOptions(params) {
  if (!isArray(params)) return [];
  return params.map((item) => ({
    label: isString(item) ? upperFirst(item) : item,
    value: item
  }));
}

/**
 * 获取类型
 * @param params
 * @returns {string|*|string}
 */
export function getType(params) {
  if (!params) return 'unknown';

  const typeChecks = [
    { check: isNil, type: 'nil' },
    { check: isArray, type: 'array' },
    { check: isObject, type: 'object' },
    { check: isString, type: 'string' },
    { check: isNumber, type: 'number' },
    { check: isBoolean, type: 'boolean' },
    { check: isFunction, type: 'function' }
  ];
  const typeCheck = typeChecks.find(({ check }) => check(params));
  return typeCheck ? typeCheck.type : 'unknown';
}

/**
 * 对象转换为数组
 * @param obj
 * @returns {any}
 */
export function objectToArray(obj) {
  if (!obj || !isObject(obj)) return [];

  return Object.entries(obj).map(([name, value]) => {
    const type = getType(value);
    if (type === 'object' || type === 'array') {
      value = objectToArray(value);
    }
    return { name, type, value };
  });
}

/**
 * 数组转换为对象
 * @param array
 * @returns {*}
 */
export function arrayToObject(array) {
  if (!array || !isArray(array)) return {};

  return array.reduce((accumulator, { name, value }) => {
    return { ...accumulator, [name]: value };
  }, {});
}

/**
 * 自定义的对象转换为 Select 的 options
 * @param options
 */
export function object2Options(options) {
  if (!options || !isObject(options)) return [];
  return Object.keys(options).map((key) => ({
    label: options[key] || key,
    value: key
  }));
}

/**
 * 自定义的对象转换为 Select 的 options
 * @param str
 * @returns {{}|any}
 */
export function string2Json(str) {
  if (!str) return {};
  try {
    const JSONStr = str.replace(/(\w+):/g, '"$1":').replace(/:'(\w+)'/g, ':"$1"');
    return JSON.parse(JSONStr);
  } catch (e) {
    return {};
  }
}

/**
 * 将对象中的name属性替换为数组
 * @param obj
 * @param path
 * @returns {*}
 */
export function replaceNameWithArray(obj, path = []) {
  const newObj = { ...obj };

  path.push(newObj.name);
  newObj.name = [...path];

  if (Array.isArray(newObj.props)) {
    newObj.props = newObj.props.map((prop) => replaceNameWithArray(prop, path));
  }

  path.pop();

  return newObj;
}

/**
 * 是否是对象，且有 bind 和 type 属性
 * @param value
 * @returns {boolean}
 */
export function isObjectWithBindAndType(value) {
  return typeof value === 'object' && value !== null && 'bind' in value && 'type' in value;
}

/**
 * 检查数组对象中是否有某个key
 * @param array
 * @param key
 * @returns {boolean}
 */
export function hasKey(array, key) {
  return some(array, (obj) => has(obj, key));
}

/**
 * 获取图片base64
 * @param file
 * @returns {Promise<unknown>}
 */
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 *  生成线性渐变颜色
 * @param color
 * @returns {*|string}
 */
export function backgroundColor(color) {
  if (!color) return;

  const isLinear = color.includes('linear-gradient');
  return isLinear ? color : `linear-gradient(${color}, ${color})`;
}

/**
 * 生成背景图片
 * @param background
 * @returns {string}
 */
export function backgroundImage(background) {
  if (!background) return '';

  if (isObject(background)) {
    const { backgroundImage, backgroundPosition, backgroundSize, backgroundRepeat } = background;
    return `url(${previewUrl(backgroundImage)}) ${backgroundPosition} / ${backgroundSize} ${backgroundRepeat}`;
  }
  return `url(${background})`;
}

/**
 * 生成背景
 * @param items
 * @returns {*}
 */
export function generateBackground(items) {
  return items
    ?.filter((item) => !item.disabled)
    ?.map((item) => {
      if (item?.type === 'image') {
        return backgroundImage(item?.value);
      }
      return backgroundColor(item?.value);
    })
    ?.join(',');
}

/**
 * 将对象的key转换为数组 {"menu":{"items":{"label":"label1"}}} => ["menu","items","label"]
 * @param obj
 * @param parentKey
 * @returns {*[]}
 */
export const keysFlat = (obj, parentKey = '') => {
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object') {
        keys = keys.concat(keysFlat(obj[key], currentKey));
      } else {
        keys.push(currentKey);
      }
    }
  }

  return keys?.[0];
};

/**
 * 根据key获取对象中的值
 * @param data
 * @param key
 * @returns {null}
 */
export function findObjectByKey(data, key) {
  if (!key) return null;

  let result = null;

  function search(items) {
    if (!items) return false;
    return items.some((item) => {
      if (item.key === key) {
        result = item;
        return true;
      }
      return search(get(item, 'children'));
    });
  }

  search(data);
  return result;
}
