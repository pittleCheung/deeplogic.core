const config = {
  DEFAULT_TITLE: 'DeepLogic',

  // 版权信息
  COPYRIGHT: `DeepLogic © ${new Date().getFullYear()}`,

  // API_URL_PREFIX: null,
  API_URL_PREFIX: '/_api',

  // 加载图片的API地址
  API_IMAGE_URL_PREFIX: '/_api/tfile/',

  // core signalr 地址
  CORE_URL: `${window.location.origin}/_core/taghub`,
  // source debug signalr 地址
  SOURCE_DEBUG_URL: `${window.location.origin}/_core/sourcedebughub`,
  // logic signalr 地址
  LOGIC_URL: `${window.location.origin}/_core/logichub`,
  // notify signalr 地址
  NOTIFY_URL: `${window.location.origin}/_core/notifyhub`,
  // train signalr 地址，模型训练的地址
  TRAIN_URL: `${window.location.origin}/_api/trainhub`,

  // API访问的token，登录后由后端给出
  API_TOKEN: null,

  // 列表分页大小
  PAGE_SIZE: 19,

  // 页面布局之间的间距
  BOX_SPACE: 24,

  // 左侧栏的宽度
  SIDER_WIDTH: '222px',
  // 左侧栏折叠起来的宽度
  COLLAPSED_SIDER_WIDTH: '80px',

  // 默认的项目图片
  DEFAULT_PROJECT_IMAGE: '/building.png',

  // API 请求的通用选项
  FETCH_OPTION: {
    // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  // 浮点数正则
  REGEX_FLOAT: /^[-+]?\b[0-9]+(\.[0-9]+)?\b$/gi,
  // 浮点数正则
  REGEX_INT: /^[0-9]+$/gi,
  // URL验证正则
  //REGEX_URL:/^([hH][tT]{2}[pP][sS]*:\/\/)(((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[0-9]\d|\d)){3})|([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:\.[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)*))(:([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5]))*$/i,

  // 本地存储的键
  LOCAL_STORAGE_KEY: 'DEEP_LOGIC_DESIGNER',
  // 本地存储的公共数据的键
  LOCAL_COMMONDATA_KEY: 'COMM_DATA',
  // WEBAPI 的URL前缀的存储键
  API_URL_KEY: 'API_URL_PREFIX',

  // 登录的URL
  LOGIN_URL: '/users/login',

  // 首页URL
  HOME_URL: '/home',

  // 日期格式化字符串，对应dayjs.js的格式化字符串
  DATE_FORMAT: 'YYYY-MM-DD',

  // 日期时间格式化字符串，对应dayjs.js的格式化字符串
  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm',

  // 短日期时间格式化字符 串
  SHORT_DATETIME_FORMAT: 'MM-DD HH:mm:ss',

  // 日期时间格式化字符串，对应dayjs.js的格式化字符串(包括秒)
  DATETIME_FULL_FORMAT: 'YYYY-MM-DD HH:mm:ss',

  // 时间格式字符串，对应dayjs.js的格式化字符串
  TIME_FORMAT: 'HH:mm',

  // 时间格式字符串，对应dayjs.js的格式化字符串（包括秒）
  FULL_TIME_FORMAT: 'HH:mm:ss',

  // iconfont 的本地url
  // ICONFONT_URL: `//${window.location.host}/assets/iconfont.js`,

  // 组态预览地址
  PREVIEW_URL: '/_viewer',

  // 字典类型常量
  DICT_CATES: {
    建筑类型: 'C012',
    冷冻机类型: 'C018',
    空调系统类型: 'C019',
    设备类型: 'C031',
    日志类型: 'C032',
    策略载体类型: 'C033',
    策略日志类型: 'C034',
    存储周期: 'C035',
    点表类型: 'C036',
    数据驱动类型: 'C037',
    策略类型: 'C038',
    点表数据类型: 'C040',
    THINKBOS设备类型: 'C041',
    策略参数绑定类型: 'C042',
    策略参数值类型: 'C043',
    模型类型: 'C044',
    诊断类别: 'C045',
    诊断等级: 'C046',
    项目类型: 'C047',
    计算方式: 'C048',
    组态列表数据源: 'C049',
    组态树数据来源: 'C050',
    报警类型: 'C051',
    报警等级: 'C052'
  },

  // 暖通空调
  DT_HVC: 'D0A00',
  // 制冷站
  DT_HVAC: 'D0A10',
  // 冷机
  DT_CHILLER: 'D0A1A',
  // 冷却塔
  DT_TOWER: 'D0A1D',
  // 制冷站阀门
  DT_VALVE: 'D0A30',
  // 冷冻泵
  DT_CHWP: 'D0A1B',
  // 二次冷冻泵
  DT_SCHWP: 'D0A1E',
  // 冷冻泵
  DT_CWP: 'D0A1C',
  // 空调末端
  DT_TERMINAL: 'D0A20',

  // 空压系统
  DT_CAS: 'D0C00',
  // 空压站
  DT_CA: 'D0C10',
  // 空压机
  DT_CAS_ACOP: 'D0C1A',
  // 冷干机
  DT_CAS_RDRY: 'D0C1B',
  // 吸干机
  DT_CAS_DDRY: 'D0C1C',
  // 湿罐
  DT_CAS_ARWT: 'D0C1D',
  // 干罐
  DT_CAS_ARDT: 'D0C1E',
  // 空压水泵
  DT_CAS_ACWP: 'D0C1F',
  // 空压散热塔
  DT_CAS_ACT: 'D0C1G',
  // 阀门
  DT_CAS_AV: 'D0C1H',

  // 状态的选项
  STATE_OPTIONS: [
    { label: '正常', value: 1, key: 1 },
    { label: '禁用', value: 0, key: 0 }
  ],

  // 读写的选项
  RW_OPTIONS: [
    { label: 'R', value: 'R', key: 'R' },
    { label: 'W', value: 'W', key: 'W' }
  ],

  // 读写的选项
  IS_SYS_OPTIONS: [
    { label: '是', value: 1, key: 1 },
    { label: '否', value: 0, key: 0 }
  ],


  // 允许用户选择的策略参数绑定类型
  ALLOWED_PARA_TYPE: ['C', 'P', 'E', 'PN'],

  // 模型数据的分隔符
  MODEL_DATA_SEPARATOR: '\u000B',

  // 表达式模型类型
  MODEL_EXP_TYPE: 'EXP',

  // modbus 驱动ID
  MODBUS_SOURCE_ID: 'MODBUS',

  // echars 图表颜色
  CHART_COLORS: [
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#3B3EAC',
    '#0099C6',
    '#DD4477',
    '#66AA00',
    '#B82E2E',
    '#316395',
    '#994499',
    '#22AA99',
    '#AAAA11',
    '#6633CC',
    '#E67300',
    '#8B0707',
    '#329262',
    '#5574A6',
    '#990099'
  ],

  // 自定义组件类型
  CUSTOM: 'CT99',

  // 图片默认Preview地址
  DEFAULT_IMAGE_PREVIEW: '/TFile/',

  // 全局异常信息key，用于message.error中，保证全局只显示一个错误信息
  GLOBAL_ERROR_KEY: '_GLOBAL_ERROR_'
};

export default config;
