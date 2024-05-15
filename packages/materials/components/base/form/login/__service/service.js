import request from "../../../../_utils/request";

/**
 * 登录
 * @param {object} formData 包含用户名(userid)和密码(password)的表单
 * @returns {object} 用户信息对象
 */
export function login(formData) {
  return request('/tuser/login', {
    data: formData
  });
}
