import request from "%request";

/**
 * 获取点表列表页面初始化数据
 */
export function getInitData({ pid, sid }) {
  return request('/ttag/getinitdata', {
    method: 'GET',
    params: { pid, sid }
  });
}
