import config from './config';
import { message } from 'antd';
import dayjs from 'dayjs';
import { saveAs } from 'file-saver';
import { nanoid } from 'nanoid';

const {
  DATE_FORMAT,
  DATETIME_FORMAT,
  DEFAULT_TITLE,
  GLOBAL_ERROR_KEY,
  SHORT_DATETIME_FORMAT,
} = config

const nf = new Intl.NumberFormat('en-us', { useGrouping: false, maximumFractionDigits: 4 });
const nf2 = new Intl.NumberFormat('en-us', { useGrouping: false, maximumFractionDigits: 2 });
const nf1 = new Intl.NumberFormat('en-us', { useGrouping: false, maximumFractionDigits: 1 });
const nf3 = new Intl.NumberFormat('en-us', { useGrouping: false, maximumFractionDigits: 3 });

/**
 * 休眠一定时间，只在异步方法中有作用
 */
export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * 获取文本的显示宽度
 * @param {string} txt 文本
 * @param {string} fontname 字体名称
 * @param {string} fontsize 字体大小
 */
export function getWidthOfText(txt, fontname, fontsize) {
  if (getWidthOfText.c === undefined) {
    getWidthOfText.c = document.createElement('canvas');
    getWidthOfText.ctx = getWidthOfText.c.getContext('2d');
  }
  getWidthOfText.ctx.font = fontsize + ' ' + fontname;
  return getWidthOfText.ctx.measureText(txt).width;
}

/**
 * 将js对象转换为FormData，支持嵌套属性
 * @param {object} data 数据对象
 * @returns FormData
 */
export function jsonToFormData(data) {
  /**
   * 生成表单对象
   * @param {object} formData 表单对象
   * @param {object} data 数据对象
   * @param {string} parentKey 上级属性的name
   */
  function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach((key) => {
        buildFormData(formData, data[key], data[key] instanceof File ? key : parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }

  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
}

/**
 * 格式化日期时间 yyyy-MM-dd HH:mm
 * @param {datetime} date 日期
 * @returns
 */
export function datetimeFormat(date) {
  return date && dayjs(date).format(DATETIME_FORMAT);
}

/**
 * 格式化短日期时间 MM-dd HH:mm
 * @param {datetime} date 日期
 * @returns
 */
export function datetimeFormatShort(date) {
  return date && dayjs(date).format(SHORT_DATETIME_FORMAT);
}

/**
 * 格式化日期 yyyy-MMM-dd
 * @param {datetime} date 日期
 * @returns
 */
export function dateFormat(date) {
  return date && dayjs(date).format(DATE_FORMAT);
}

/**
 * 格式化数字，保留最多2或4位小数
 * @param {number} number 要格式化的数字
 * @param {number} digital 要保留的小数位，1-4，默认为4
 * @returns
 */
export function numberFormat(number, digital = 4) {
  switch (digital) {
    case 1:
      return nf1.format(number);
    case 2:
      return nf2.format(number);
    case 3:
      return nf3.format(number);
    default:
      return nf.format(number);
  }
}

/**
 * 根据值类型，进行格式化显示
 * @param {object} val 值
 * @returns
 */
export function format(val) {
  const type = Object.prototype.toString.call(val);
  switch (type) {
    case '[object Undefined]':
    case '[object Null]':
      return null;
    case '[object Number]':
      return numberFormat(val);
    case '[object String]':
      const v = +val;
      if (!isNaN(v)) {
        return numberFormat(v);
      }
      return val;
    case '[object Date]':
      return datetimeFormat(val);
    case '[object Boolean]':
      return val.toString();
    default:
      return JSON.stringify(val);
  }
}

/**
 * 把数组数据导出为 csv 文件
 * @param {array} ts 列标题数组
 * @param {array[array]} ds 数据行数组
 */
export function exportCsv(ts, ds) {
  const lines = [JSON.stringify(ts)];
  ds.forEach((row) => {
    lines.push(JSON.stringify(row));
  });
  const BOM = new Uint8Array([0xef, 0xbb, 0xbf]);
  const content = lines.join('\n').replace(/(^\[)|(\]$)/gm, '');
  const blob = new Blob([BOM, content], { type: 'text/plain;charset=utf-8' });
  saveAs(blob, `${nanoid()}.csv`);
}

/**
 * 设置窗口标题
 * @param {string} title 标题
 */
export function setTitle(title) {
  document.title = title && title.length ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;
}

/**
 * 检测字符串尾部有多少个指定的字符
 * @param {string} str 原始字符串
 * @param {string} char 要检测的字符
 * @returns
 */
export function countTrailingChar(str, char) {
  let count = 0;
  for (let i = str.length - 1; i >= 0 && str[i] === char; i--) {
    count++;
  }
  return count;
}

/**
 * 过滤设备树数据
 * @param {string} key 输入的关键字
 * @param {TreeNode} treeNode 树节点对象
 */
export function filterDeviceTreeNode(key, treeNode) {
  return (treeNode?.title ?? '').toLowerCase().includes(key.toLowerCase());
}

/**
 * 使用message.error显示错误信息
 * @param {ReactNode} content 提示内容
 */
export function showError(content) {
  message.error({ key: GLOBAL_ERROR_KEY, content });
}
