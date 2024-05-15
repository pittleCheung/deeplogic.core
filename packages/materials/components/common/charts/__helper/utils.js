import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import utc from 'dayjs/plugin/utc';
import {cloneDeep, map} from 'lodash-es';
import {isArray, isObject} from '../../../_utils/utils';

dayjs.extend(quarterOfYear);
dayjs.extend(utc);

/**
 * 格式化时间
 * @param type
 * @param date
 */
export const formatDate = (type = 'day', date) => {
    const format = 'YYYY-MM-DD HH:mm:ss';
    const dateTime = date ? dayjs(date) : dayjs();
    const begin = dayjs(dateTime?.format('YYYY-MM-DD'))
        ?.startOf(type || 'day')
        ?.format(format);
    const end = dayjs(dateTime?.format('YYYY-MM-DD'))
        ?.endOf(type || 'day')
        ?.format(format);

    return {begin: dayjs(begin)?.utc(true), end: dayjs(end)?.utc(true)};
};

/**
 * 根据类型获取时间区间
 * @param type
 * @param date
 */
export const formatDateTime = (type = 'day', date) => {
    
    if (date && isArray(date)) {
        if (date[0]) {
            return {
                begin: dayjs(date[0]).utc(true),
                end: dayjs(date[1]).utc(true)
            };
        } else {
            return formatDate(type, '');
        }
    }

    return formatDate(type, date);
};

/**
 * 合并数据, 支持Line, Bar, Scatter
 * @param series
 * @param data
 */
export const mergeCommonSeries = ({series, data}) => {
    if (!series || !data) return series;

    const list = data?.Titles || series;

    return map(list, (item) => {
        if (isObject(item)) {
            const {data, stack, ...rest} = item;
            const name = item?.pointSource || item?.name;
            return {...rest, name, label: name, showSymbol: false, encode: {x: 'Time', y: name}};
        } else {
            return {type: series?.[0]?.type, name: item, label: item, showSymbol: false, encode: {x: 'Time', y: item}};
        }
    });
};

/**
 * 格式化Series数据
 * @returns {*|*[]}
 * @param data
 */
export const formatSeries2Tags = (data) => {
    let pointSources = [];

    const findRecursively = (item) => {
        // 检查当前项是否有pointSource，如果有，则添加到结果数组
        if (item.pointSource) {
            pointSources.push(item.pointSource);
        }

        // 如果当前项有data属性并且它是一个数组，递归每一个子项
        if (isArray(item.data)) {
            item.data.forEach(findRecursively);
        }
    };

    // 对于传入的数据的每个项进行递归
    data.forEach(findRecursively);

    return pointSources;
};

/**
 * 格式化图表数据
 * @param data
 * @param option
 */
export const formatterCommonOption = ({data, option}) => {
    const series = mergeCommonSeries({series: option?.series, data});

    return {
        ...option,
        series,
        xAxis: {
            ...option?.xAxis,
            type: 'time'
        },
        legend: {
            ...option?.legend,
            data: map(series, (item) => item?.name)
        },
        dataset: {
            source: formatterDataSource({data})
        }
    };
};

/**
 * 格式化饼图数据
 * @param data
 * @param option
 */
export const formatPieOptions = ({data, option}) => {
    if (!data) return option;

    if (data?.Readings?.length > 1) {
        return formatterCommonOption({data, option});
    }

    const series = option?.series?.map((item) => {
        item.data = item?.data?.map((child, i) => {
            return {
                ...child,
                value: data?.Readings[0]?.Value[i]
            };
        });
        return item;
    });

    return {
        ...option,
        series
    };
};

/**
 * 格式化图表配置
 * @param data
 * @param options
 */
export const formatterOption = ({data, option: options}) => {
    if (!data) return options;
    const option = cloneDeep(options);
    const type = option?.series?.find((item) => item?.type)?.type;

    if (type !== 'pie') {
        return formatterCommonOption({data, option});
    }

    return formatPieOptions({data, option});
};

/**
 * 格式化点表数据源
 * @param data
 * @returns {[*[],...*]|*[]}
 */
export const formatterDataSource = ({data}) => {
    if (!data || !data?.Readings) return [];

    const {Readings, Titles} = data;

    return [['Time', ...Titles], ...Readings?.map((item) => [item?.Time, ...item?.Value])];
};
