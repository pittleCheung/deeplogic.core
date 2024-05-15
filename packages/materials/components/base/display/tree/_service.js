import request from "../../../_utils/request";
import {initDeviceTreeDataCore} from "./_helper";

/**
 * 获取设备树
 * @param params
 * @returns {*}
 */
export function getDeviceTree(params) {
    return request('/TDevice/getdevicetree', {method: 'GET', params});
}

/**
 * 获取能耗计算树，从根点表开始生成树结构
 * @param params
 * @returns {Promise<{headers: RawAxiosResponseHeaders | (RawAxiosResponseHeaders & AxiosHeaders), data: any}|*|void|undefined>|*}
 */
export function getSubEntry(params) {
    return request('/viewer/getenergytagtree', {method: 'GET', params});
}

export function getSearchLiteByDeviceType(params) {
    return request('/ttag/searchlitebydevicetype', {method: 'GET', params});
}

/**
 * 根据类型获取不同的树结构
 * @param type
 * @param pid
 * @param sid
 */
export const getTreeData = async ({type, pid, sid}) => {
    // console.log('getTreeData', type, !type, pid, sid);
    if (!type) return [];

    switch (type) {
        case 'DEVICE':
        case 'DEVICE_TAG':
            try {
                const devices = await getDeviceTree({pid, sid: sid || ''});
                if (devices) {
                    if (devices.children) {
                        return initDeviceTreeDataCore(devices.children);
                    }
                }
                return [];
            } catch (e) {
                return [];
            }
        case 'SUBENTRY':
            try {
                const subEntry = await getSubEntry({pid, sid: sid || ''});
                return subEntry?.children || [];
            } catch (e) {
                console.log(e);
                return [];
            }
        default:
            return [];
    }
};

/**
 * 获取点表
 * @param pid
 * @param sid
 */
export const getSearchLite = async ({pid, sid}) => {
    if (!sid) return [];

    try {
        const data = await getSearchLiteByDeviceType({pid, did: sid || ''});
        if (!data) return [];

        return Object.keys(data).map((k) => {
            return {key: k, value: k, title: k, isLeaf: true, selectable: false};
        });
    } catch (e) {
        return [];
    }
};
