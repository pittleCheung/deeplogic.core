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
 * 自定义的对象转换为 Select 的 options
 * @param options
 */
export function object2Options(options) {
  if (!options) return [];
  if (!isObject(options)) throw new Error('options must be an object');
  return Object.keys(options).map((key) => ({
    label: options[key],
    value: key,
  }));
}

/**
 * 绑定值
 * @param objs
 * @returns {{}|*}
 */
export function bindWithValue(objs) {
  if (!isObject(objs)) return objs;

  return Object.keys(objs).reduce((newObj, key) => {
    const obj = objs[key];

    if (isObject(obj) && 'bind' in obj && 'type' in obj && objs[obj.type]) {
      newObj[key] = objs[obj.type][obj.bind];
    } else {
      newObj[key] = objs[key];
    }

    return newObj;
  }, {});
}

/**
 * 是否是对象，且有 bind 和 type 属性
 * @param value
 * @returns {boolean}
 */
export function isObjectWithBindAndType(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    'bind' in value &&
    'type' in value
  );
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
 * Nodes 转换为 Items
 * @param nodes
 * @param custom
 * @returns {*|*[]}
 */
export function nodes2items(nodes, custom) {
  if (!nodes) return [];

  const arr =
    nodes
      ?.slice()
      ?.reverse()
      ?.map((node, index) => ({
        title: node?.custom?.title || node?.type,
        id: node?.id,
        index,
      }))
      ?.concat([
        { title: custom?.title, id: 'current', index: nodes.length },
      ]) || [];

  if (arr?.length < 5) {
    return arr;
  } else {
    return [
      arr[0],
      arr[1],
      {
        title: '...',
        id: 'ellipsis',
        index: arr[2]?.index,
        items:
          arr
            ?.slice(2, -1)
            ?.map((item) => ({ ...item, key: item?.id, label: item.title })) ||
          [],
      },
      arr[arr.length - 1],
    ];
  }
}
