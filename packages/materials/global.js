export const THEME_TYPES = {
	defaultAlgorithm: 'light',
	darkAlgorithm: 'dark',
	darkBlue: 'dark',
};

export const DEFAULT_IMAGE_PREVIEW = '/_api/tfile/';

// API访问的token，登录后由后端给出
export const API_TOKEN = () => {
	return JSON.parse(localStorage.getItem('DEEP_LOGIC_DESIGNER')).token;
};

// API_URL_PREFIX: null,
export const API_URL_PREFIX = '/_api';

// API 请求的通用选项
export const FETCH_OPTION = {
	// httpsAgent: new https.Agent({ rejectUnauthorized: false }),
	method: 'POST',
	headers: {
		'Access-Control-Allow-Origin': '*'
	}
};

// 全局异常信息key，用于message.error中，保证全局只显示一个错误信息
export const GLOBAL_ERROR_KEY = '_GLOBAL_ERROR_';

// 设备树类型Dicts
export const DICTS_C050 = 'C050';
// 故障类别
export const DICTS_C051 = 'C051';
// 故障级别
export const DICTS_C052 = 'C052';
export const DICTS_C056 = 'C056';
export const DICTS_C057 = 'C057';
export const DICTS_C058 = 'C058';
// 本地存储的公共数据的键
export const LOCAL_COMMONDATA_KEY = 'COMM_DATA';

export const TABLE_PAGE_SIZE = 10;
export const TABLE_PAGE_SIZE_OPTIONS = ['10', '20', '30', '40', '50', '100'];
// 故障列表表头
export const TABLE_COLUMNS_OPTIONS = {
	F_P_ID: '项目编号',
	F_ID: '诊断编号',
	F_DEVICE_ID: '设备编号',
	F_STATION_ID: '子系统编号',
	F_NAME: '报警指标',
	F_TYPE: '类别',
	F_LEVEL: '等级',
	F_DES: '问题描述',
	F_SUGGEST: '建议',
	F_FIRST_TIME: '开始时间',
	F_LAST_TIME: '最近报警时间',
	F_IS_NOTIFY: '是否已提醒',
	F_NOTIFY_TIME: '提醒时间',
	F_CONFIRM_TYPE: '故障类型',
	F_NOTIFY_METHOD: '提醒方式',
	F_CONFIRM_STATE: '确认状态',
	F_CONFIRM_TIME: '确认时间',
	F_CONFIRM_USER: '确认人',
	F_STATE: '状态',
	F_INDEX: '序号'
};
// 故障持续时间筛选
export const DURATION_FILTER_OPTIONS = {
	0: '全部',
	1: '1分钟内',
	2: '1分钟以上'
};

export const EFAULT_PUMP_MAP = {
	0: ['#5089CF', '#fff'],
	1: ['#D79815', '#000'],
	2: ['#578FA8', '#000'],
	3: ['#998B59', '#000']
};

// 日期时间格式化字符串，对应dayjs.js的格式化字符串
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm';
// 日期时间格式化字符串，对应dayjs.js的格式化字符串(包括秒)
export const DATETIME_FULL_FORMAT = 'YYYY-MM-DD HH:mm:ss';
