import request from '%request';

/**
 * 获取设备/属性提示
 * @param {string} prefix 前缀单词。提示信息的前缀，包括所有父级单词.
 */
export function suggest(prefix) {
  return request('/tfault/getjscodesuggest', {
    method: 'GET',
    params: { prefix },
  });
}
