import config from './config';

/**
 * 从localStorage中加载信息 (apps)
 */
export function load() {
	const stateJson = localStorage.getItem(config.LOCAL_STORAGE_KEY);
	const state = JSON.parse(stateJson);
	return state;
}

/**
 * 保存信息到localStorage
 */
export function save(state) {
	const stateJson = JSON.stringify(state);
	localStorage.setItem(config.LOCAL_STORAGE_KEY, stateJson);
}

/**
 * 从localStorage中加载公共数据
 */
export function loadCommonData() {
	const stateJson = localStorage.getItem(config.LOCAL_COMMONDATA_KEY);
	const data = JSON.parse(stateJson);
	return data;
}

/**
 * 保存公共数据到localStorage
 */
export function saveCommonData(data) {
	const stateJson = JSON.stringify(data);
	localStorage.setItem(config.LOCAL_COMMONDATA_KEY, stateJson);
}

/**
 * 清除localStorage存储的信息
 */
export function clear(){
	localStorage.removeItem(config.LOCAL_STORAGE_KEY);
	localStorage.removeItem(config.LOCAL_COMMONDATA_KEY);
}

/**
 * 单个设置localStorage的值
 */
export function set(key, value){
	localStorage.setItem(key, value)
}
/**
 * 获取localStorage单个的值
 */
export function get(key){
	localStorage.getItem(key)
}