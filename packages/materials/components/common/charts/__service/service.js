import request from '../../../_utils/request';

/**
 * 检索数据
 * @param {格挡ng} pid 项目编号
 * @param {array} tags 点表
 * @param {dayjs.Dayjs} begin 开始时间
 * @param {dayjs.Dayjs} end 结束时间
 * @param {string} timeType 时间粒度
 * @param {string}} aggregate 聚合
 */
export function selectReadings(pid, tags, begin, end, timeType, aggregate) {
    return request('/treadings/selectreadings', {
        data: {pid, tags, begin, end, timeType: timeType || '1 minute', aggregate: aggregate || 'last'}
    });
}
