import config from '%config';
import { message } from 'antd';
import axios from 'axios';
// import { history } from 'umi';
import { useNavigate } from "react-router-dom"

import { showError } from './common';
// import https from 'https';

/**
 * https 配置
 */

// const HTTPS_AGENT = { httpsAgent: new https.Agent({ rejectUnauthorized: false }) };

/**
 * 错误信息
 */
function prepareMessage(errmsg) {
  return (
    <ul style={{ textAlign: 'left' }}>
      {errmsg.map((i) => (
        <li key={i.key}>
          {i.key}: {i.msg}
        </li>
      ))}
    </ul>
  );
}

/**
 * 检查API请求后的返回状态，如果请求无效，则跳转到登录页面
 * @param {object} error 异常对象
 * @param {bool} throwError 是否显示未知错误信息
 */
function checkStatus(error, throwError) {
  // const { message } = App.useApp();
  const navigate = useNavigate()
  if (error.isAxiosError) {
    if (error.response) {
      if ((error.response.data && error.response.data.Message) || error.response.data.message) {
        showError(error.response.data.Message || error.response.data.message);
      } else if (error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;
        let errmsg = [];
        if (Object.prototype.toString.call(errors) === '[object Array]') {
          errors.forEach((err) => {
            const msgs = errors[err];
            if (Object.prototype.toString.call(msgs) === '[object Array]') errmsg.push({ key: err, msg: msgs.join() });
            else errmsg.push({ key: err, msg: msgs });
          });
          errmsg = prepareMessage(errmsg);
        } else if (Object.prototype.toString.call(errors) === '[object Object]') {
          Object.keys(errors).forEach((err) => {
            const msgs = errors[err];
            if (Object.prototype.toString.call(msgs) === '[object Array]') errmsg.push({ key: err, msg: msgs.join() });
            else errmsg.push({ key: err, msg: msgs });
          });
          errmsg = prepareMessage(errmsg);
        } else {
          errmsg = errors;
        }
        showError(errmsg);
      } else if (error.response.status === 401) {
        // history.push('/users/login');
        navigate("/users/login")
        message.error({ key: 'login-info', content: '登录状态已失效，请重新登录！' });
      } else {
        if (throwError) {
          if (error.response.status !== 502) showError(`${error.response.status} ${error.response.statusText}`);
          else showError('请求出错 (502)，请检查服务是否运行正常');
        }
      }
    } else {
      showError(error.message);
    }
  } else {
    if (error.response) {
      showError(error.response);
    } else if (error) {
      showError(error.toString());
    } else {
      showError('未知异常');
    }
  }
}

/**
 * 请求 URL, 返回获取的数据.
 * @param  {string} url           请求地址
 * @param  {object} [options]     传给 "axios" 的参数
 * @param {bool} [throwError]      是否显示未知错误信息
 */
export default async function request(url, options, throwError = true) {
  url = `${config.API_URL_PREFIX}${url}`;

  const opt = options ? { ...config.FETCH_OPTION, ...options } : config.FETCH_OPTION;
  if (config.API_TOKEN) {
    opt.headers['Authorization'] = 'Bearer ' + config.API_TOKEN;
  }

  try {
    const { data, headers } = await axios(url, opt);
    return opt.download ? { data, headers } : data;
  } catch (error) {
    checkStatus(error, throwError);
    return Promise.resolve();
  }
}
