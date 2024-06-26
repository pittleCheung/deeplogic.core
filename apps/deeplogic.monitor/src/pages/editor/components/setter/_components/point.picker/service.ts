import request from "%request";

/**
 * 检索点表，不分页，返回字典类型的点表数据 [{标准点表:名称}]
 */
export function searchLite({ projId, key }) {
  return request('/ttag/searchlite', {
    method: 'GET',
    params: { pid: projId, key }
  });
}
