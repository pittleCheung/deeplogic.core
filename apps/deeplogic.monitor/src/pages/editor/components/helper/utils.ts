import { getRandomId } from '@craftjs/utils';
import LZString from 'lz-string';
const _toString = Object.prototype.toString;
const _ProjectPages = 'PROJECT_PAGES';

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

export function isJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch (e) {
    return false;
  }
}

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
export function object2Array(obj) {
  if (!obj || !isObject(obj)) return [];

  return Object.entries(obj).map(([name, value]) => {
    const type = getType(value);
    return { name, type, value };
  });
}

/**
 * 数组转换为对象
 * @param array
 * @returns {*}
 */
export function array2Object(array) {
  if (!array || !isArray(array)) return {};

  return array.reduce((accumulator, { name, value }) => {
    return { ...accumulator, [name]: value || null };
  }, {});
}

/**
 * 自定义的对象转换为 Select 的 options
 * @param options
 */
export function object2Options(options) {
  if (!options || !isObject(options)) return [];
  return Object.keys(options).map((key) => ({
    label: key,
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
 * json 压缩
 * @param json
 * @returns {{}|string}
 */
export async function jsonCompress(json) {
  if (!json) return '';
  let result = safeStringify(json);
  
  console.time('jsonCompress');
  const compressed = LZString.compressToBase64(result);
  console.timeEnd('jsonCompress');

  // console.time('encodeBase64');
  // const compressed1 = lz.encodeBase64(lz.compress(json));
  // console.timeEnd('encodeBase64');

  // console.log('compressed: ', json,'json---',compressed,'---',compressed1);
  return compressed
  // return lz.encodeBase64(lz.compress(json));
}

/**
 * json 解压缩
 * @param str
 * @returns {{}|any}
 */
export async function jsonDecompress(str) {
  if (!str) return {};

  try {
    // return JSON.parse(lz.decompress(lz.decodeBase64(str)));
    const string = LZString.decompressFromBase64(str);
    console.log('string: ', string);
    return JSON.parse(string);
    // return JSON.parse(lz.decompress(lz.decodeBase64(str)));
  } catch (e) {
    return {};
  }
}

/**
 * 保存项目
 * @param str
 */
export function setProject(str) {
  localStorage.setItem(_ProjectPages, str);
}

/**
 * 获取项目
 * @returns {string}
 */

export function getProject() {
  return localStorage.getItem(_ProjectPages);
}

/**
 * 删除项目
 */
export function removeProject() {
  localStorage.removeItem(_ProjectPages);
}

/**
 * 提取点表变量
 * @param str
 */
export function extractVariables(str) {
  if (!str && !isString(str)) return false;

  const regex = /\$\{([^}]+)\}/g;
  const matches = str.match(regex) || [];
  const points = matches.map((match) => match.slice(2, -1)); // 去除 `${` 和 `}`
  const values = points.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  return {
    points,
    values
  };
}

/**
 * 删除自定义属性
 * @param json
 */
export function deleteCustom(json) {
  if (!json || !isJson(json)) return '';

  const data = JSON.parse(json);

  Object.values(data).forEach((node) => {
    node.custom = {};
  });

  return JSON.stringify(data);
}

/**
 * 将 jsonData 对象中所有具有 custom 属性的嵌套对象清空
 *
 * @param jsonData 需要处理的 json 对象
 * @returns 处理后的 json 对象
 */
export function resetCustomToEmpty(jsonData) {
  // 检查是否是对象
  if (typeof jsonData !== 'object' || jsonData === null) {
      return jsonData;
  }

  // 遍历对象的所有属性
  for (const key in jsonData) {
      if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
          // 如果属性值是对象且具有 custom 属性，则将其设置为空对象
          if (typeof jsonData[key] === 'object' && jsonData[key] !== null && 'custom' in jsonData[key]) {
              jsonData[key].custom = {};
          }

          // 递归调用处理嵌套对象
          if (typeof jsonData[key] === 'object' && jsonData[key] !== null) {
              resetCustomToEmpty(jsonData[key]);
          }
      }
  }

  return jsonData;
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
 * 生成id对应的值
 * @param pairs
 * @returns {{[p: string]: any}|*}
 */
export const fromEntries = (pairs) => {
  if (Object.fromEntries) {
    return Object.fromEntries(pairs);
  }
  return pairs.reduce(
    (accum, [id, value]) => ({
      ...accum,
      [id]: value
    }),
    {}
  );
};

/**
 * 获取克隆树
 * @returns {{nodes: {}, rootNodeId: string}}
 * @param tree
 * @param query
 */
export const getCloneTree = (tree, query) => {
  if (!tree || !query) return null;

  const newNodes = {};
  const changeNodeId = (node, newParentId) => {
    const newNodeId = getRandomId();
    const childNodes = node?.data?.nodes?.map((childId) => changeNodeId(tree?.nodes[childId], newNodeId));
    const linkedNodes = Object.keys(node?.data?.linkedNodes).reduce((acc, id) => {
      const newLinkedNodeId = changeNodeId(tree?.nodes[node?.data?.linkedNodes[id]], newNodeId);
      return {
        ...acc,
        [id]: newLinkedNodeId
      };
    }, {});

    let tmpNode = {
      ...node,
      id: newNodeId,
      data: {
        ...node.data,
        parent: newParentId || node.data.parent,
        nodes: childNodes,
        linkedNodes
      }
    };
    newNodes[newNodeId] = query.parseFreshNode(tmpNode).toNode();
    return newNodeId;
  };

  const rootNodeId = changeNodeId(tree.nodes[tree.rootNodeId]);

  return {
    rootNodeId,
    nodes: newNodes
  };
};

/**
 * 获取模板树
 * @param tree
 * @param query
 * @returns {{nodes: ({[p: string]: *}|*), rootNodeId: *}}
 */
export const getTemplateTree = (tree, query) => {
  if (!tree) return null;

  const nodes = Object.keys(tree.nodes).map((id) => [id, query.node(id).toSerializedNode()]);

  const serializedNodesJSON = fromEntries(nodes);
  return {
    rootNodeId: tree.rootNodeId,
    nodes: serializedNodesJSON
  };
};

/**
 * @description 获取序列化节点
 * @param data
 * @param query
 */
export const serializedNode = (data, query) => {
  if (!data || !query) return null;

  const nodePairs = Object.keys(data.nodes).map((id) => [id, query.node(id).toSerializedNode()]);
  const serializedNodesJSON = fromEntries(nodePairs);

  return {
    rootNodeId: data.rootNodeId,
    nodes: serializedNodesJSON
  };
};

/**
 * @description 获取解析序列化节点
 * @param data
 * @param query
 */
export const parseSerializedNode = (data, query) => {
  if (!data || !query) return null;

  const nodePairs = Object.keys(data.nodes).map((id) => [id, query.parseSerializedNode(data.nodes[id]).toNode()]);
  const serializedNodesJSON = fromEntries(nodePairs);

  return {
    rootNodeId: data.rootNodeId,
    nodes: serializedNodesJSON
  };
};

/**
 * 获取模板
 * @param data
 * @param query
 * @returns {Promise<{nodes: {}, rootNodeId: string}|null>}
 */
export const getTemplate = async (data, query) => {
  if (!data) return null;

  const nodeData = await jsonDecompress(data);
  const newNodes = nodeData.nodes;
  const nodePairs = Object.keys(newNodes).map((id) => {
    let nodeId = id;

    return [nodeId, query.parseSerializedNode(newNodes[id]).toNode((node) => (node.id = nodeId))];
  });
  const tree = { rootNodeId: nodeData.rootNodeId, nodes: fromEntries(nodePairs) };
  const nodes = getCloneTree(tree, query);

  return nodes ? nodes : null;
};

/**
 * 格式化页面, 用于处理页面的type
 * @param pages
 * @returns {*|null}
 */
export const formatPages = (pages) => {
  if (!pages || !isObject(pages)) return null;

  Object.values(pages).forEach((page) => {
    page.type = isObject(page.type) ? page.type : { resolvedName: page?.displayName };
  }, 500);

  return pages;
};

/**
 * 安全地将数据转换为JSON字符串
 *
 * @param data 要转换的数据
 * @returns 转换后的JSON字符串，如果转换失败则返回""
 */
export function safeStringify(data) {
  if(data === null || data === undefined) return "";
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error("Failed to stringify JSON:", error);
    return "";
  }
}