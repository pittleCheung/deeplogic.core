import dayjs from 'dayjs';
import {DATETIME_FORMAT, DATETIME_FULL_FORMAT} from '../../../../../global';
import request from '../../../../_utils/request';

/**
 * 获取告警列表
 * @param params
 */
export const getAlarm = (params) => {
    return request('/TAlarmRecord/getalarm', {method: 'GET', params});
};

/**
 * 检索数据
 * @param {格挡ng} pid 项目编号
 * @param {array} tags 点表
 * @param {dayjs.Dayjs} begin 开始时间
 * @param {dayjs.Dayjs} end 结束时间
 * @param {string} timeType 时间粒度
 * @param {string}} aggregate 聚合
 */
export function selectReadings({pid, tags, begin, end, timeType, aggregate, rangesTime}) {
    return request('/treadings/selectreadings', {
        data: {pid, tags, begin: begin || dayjs(), end: end || dayjs(), timeType: timeType || '1 seconds', aggregate: aggregate || 'sum', rangesTime}
    });
}

export const formatTableData = (list, timeType) => {
    const columns = [
        {
            title: 'Time',
            dataIndex: 'Time',
            width: 150,
            fixed: 'left',
            render: (t) =>
                dayjs(t).format(timeType === '5 seconds' || timeType === '30 seconds' ? DATETIME_FULL_FORMAT : DATETIME_FORMAT)
        }
    ];
    if (list && list.Titles) {
        // prepare column
        list.Titles.forEach((title) => {
            columns.push({title: title, dataIndex: title});
        });

        // prepare data
        const dataSource = [];
        let title, item;
        for (const reading of list.Readings) {
            item = {};
            item['Time'] = reading.Time;
            for (let c = 0; c < list.Titles.length; c++) {
                const value = JSON.parse(JSON.stringify(reading.Value));
                title = list.Titles[c];
                item[title] = value[c];
            }
            dataSource.push(item);
        }   
        return {dataSource, columns, total: dataSource?.length};
    }

    return {dataSource: [], columns, total: 0};
};

/**
 * 获取告警或者点表数据
 * @param type
 * @param alarm
 * @param projId
 * @param point
 * @param isPagination
 * @param pagination
 */
export async function getSourceData({
                                        type,
                                        alarm,
                                        projId,
                                        point = {
                                            begin: dayjs()?.format(),
                                            end: dayjs()?.format(),
                                            tags: [],
                                            aggregate: 'last',
                                            timeType: '5 minutes'
                                        },
                                        params={},
                                        isPagination = true,
                                        pagination = {page: 0, pageSize: 10}
                                    }) {
    let page = isPagination ? pagination : {};

    switch (type) {
        case 'alarm':
            const alarmResp = await getAlarm({projectId: projId, ...alarm, ...page, needData: true, ...params});
            if (alarmResp) {
                const {Datas, ...other} = alarmResp;
                const dataSource = Datas?.List?.map((item,index) => {
                    item.F_FIRST_TIME = dayjs(item.F_FIRST_TIME).format(DATETIME_FULL_FORMAT);
                    item.F_LAST_TIME = dayjs(item.F_LAST_TIME).format(DATETIME_FULL_FORMAT);
                    item.F_NOTIFY_TIME = item.F_NOTIFY_TIME? dayjs(item.F_NOTIFY_TIME).format(DATETIME_FULL_FORMAT) : '-';
                    item.F_INDEX = page?.page === 0 ? index + 1 : (page?.page || 0) * (page?.pageSize||0) + index + 1;
                    return item;
                }) || [];
                return {
                    dataSource,
                    total: Datas?.RecordCount,
                    maps: {...other}
                };
            }

            return {
                dataSource: [],
                total: 0
            };

        case 'point':
            if (!point || !projId || !point?.tags?.length) {
                return {dataSource: [], total: 0};
            }

            const pointResp = await selectReadings({pid: projId, ...point, ...params});
            return formatTableData(pointResp, point?.timeType);

        default:
            return [];
    }
}
