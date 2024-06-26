import request from '%request';
import acops from '@/pages/system/components/auto/airPressure/deviceModel/acops';
import desdryer from '@/pages/system/components/auto/airPressure/deviceModel/desdryer';
import { handleSource as handleSourceacs } from '@/pages/system/components/auto/airPressure/handleSource';
import chiller from '@/pages/system/components/auto/deviceModel/chiller';
import pump from '@/pages/system/components/auto/deviceModel/pump';
import tower from '@/pages/system/components/auto/deviceModel/tower';
import valves from '@/pages/system/components/auto/deviceModel/valves';
import energy from '@/pages/system/components/auto/energy';
import { handleSource } from '@/pages/system/components/auto/handleSource';

import home from '@/pages/system/components/auto/home';
import login from '@/pages/system/components/auto/login';
import report from '@/pages/system/components/auto/report';
import warning from '@/pages/system/components/auto/warning';
/** 3d 风格页 start */
import energy3d from '@/pages/system/components/auto3d/energy';
import home3d from '@/pages/system/components/auto3d/home';
import login3d from '@/pages/system/components/auto3d/login';
import report3d from '@/pages/system/components/auto3d/report';
import warning3d from '@/pages/system/components/auto3d/warning';
// 空压弹窗
import acops3d from '@/pages/system/components/auto3d/airPressure/deviceModel/acops';
import desdryer3d from '@/pages/system/components/auto3d/airPressure/deviceModel/desdryer';
import refdryer3d from '@/pages/system/components/auto3d/airPressure/deviceModel/refdryer';

// 制冷机
import chiller3d from '@/pages/system/components/auto3d/deviceModel/chiller';
// 冷却泵、冷冻泵
import pump3d from '@/pages/system/components/auto3d/deviceModel/pump';
/** 冷却塔 */
import tower3d from '@/pages/system/components/auto3d/deviceModel/tower';
// 3d阀门
import valves3d from '@/pages/system/components/auto3d/deviceModel/valves';
// 监控页
import { handleSource as handleSource3d } from '@/pages/system/components/auto3d/handleSource';

// 空压
import { handleSource as handleSourceacs3d } from '@/pages/system/components/auto3d/airPressure/handleSource';
/** 3d 风格页 end */

import { jsonToFormData } from '@/utils/common';
import config from '@/utils/config';
import { message } from 'antd/lib';
import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { editor } from '../helper/editor';
import { formatPages, jsonCompress, resetCustomToEmpty } from '../helper/utils';
import { useDesigner, useSidebar } from '../hooks';
function generateFunctionMap(template = 'DARK_BLUE') {
  const templateSuffix = template === 'DARK_BLUE' ? '3d' : '';

  return {
    HOME: templateSuffix ? home3d : home,
    ENERGY: templateSuffix ? energy3d : energy,
    WARNING: templateSuffix ? warning3d : warning,
    REPORT: templateSuffix ? report3d : report,
    LOGIN: templateSuffix ? login3d : login,
    CHLS: templateSuffix ? chiller3d : chiller,
    CHWPS: templateSuffix ? pump3d : pump,
    CWPS: templateSuffix ? pump3d : pump,
    CTS: templateSuffix ? tower3d : tower,
    DVS: templateSuffix ? valves3d : valves,
    HANDLESOURCE: templateSuffix ? handleSource3d : handleSource,
    HANDLESOURCEACS: templateSuffix ? handleSourceacs3d : handleSourceacs,
    ACOPS: templateSuffix ? acops3d : acops,
    DDRYS: templateSuffix ? desdryer3d : desdryer,
    RDRYS: templateSuffix ? refdryer3d : desdryer
  };
}

function useToolbar() {
  const { onSave: onPublish, projId } = useDesigner();
  const { page } = useSidebar();

  const { query, ...other } = editor();

  const onSave = useCallback(async () => {
    const data = query.serialize();
    const pages = formatPages(JSON.parse(data));

    if (!pages) return;
    const noCusotomPages = resetCustomToEmpty(pages);
    const json = await jsonCompress(noCusotomPages);
    console.log('data: ', data, noCusotomPages);
    if (json) {
      onPublish?.(json);
    }
  }, [query]);

  const onPreview = useCallback(() => {
    const url = `${config.PREVIEW_URL}/${projId}/${page?.pageId}`;
    window.open(url, '_blank');
  }, [page?.pageId]);

  const onGenerate = async () => {
    // 清空页面
    const del = await request('/TEdPage/clearpages', {
      params: { pid: projId },
      method: 'PUT'
    });
    if (del.code == 0) return message.error('生成失败');
    const { tagSystem: re, wizardRequest = {} } = await request(`/TProject/gettagsystem`, {
      params: { pid: projId },
      method: 'GET'
    });
    localStorage.setItem('res', JSON.stringify(re));
    // PAGE_TEMPLATE决定是生成 3d 还是平面风格
    const { PAGE_TEMPLATE } = wizardRequest?.project || {};
    console.log('gettagsystemres:', re);
    // 获取全局变量
    const global = await request(`/viewer/getviewerglobaldata`, {
      params: { pid: projId },
      method: 'GET'
    });
    const arrids = [nanoid(22), nanoid(22), nanoid(22), nanoid(22), nanoid(22)];
    const { HVAC_PLANTS } = re || {};
    const functionMap = generateFunctionMap(PAGE_TEMPLATE);
    const { HOME, ENERGY, WARNING, REPORT, LOGIN, HANDLESOURCE, HANDLESOURCEACS } = functionMap;

    if (HVAC_PLANTS && !!Object.keys(HVAC_PLANTS)?.length) {
      const item = Object.keys(re.HVAC_PLANTS)?.[0];
      // 生成设备弹窗文件夹
      const modelid = await request(`/TEdPageType/save`, {
        method: 'POST',
        data: jsonToFormData({
          F_P_ID: projId,
          F_PT_ID: '-1',
          F_NAME: '设备弹窗'
        })
      });
      // 设备弹窗
      const deviceModelMap = {};
      const deviceNameMap = {
        CHLS: '制冷机',
        CHWPS: '冷冻泵',
        CWPS: '冷却泵',
        CTS: '冷却塔',
        DVS: '阀门'
      };
      const deviceNameMao = Object.keys(deviceNameMap);
      // const deviceName = ['制冷机', '冷冻泵', '冷却泵', '冷却塔', '阀门'];
      const deviceArr = [];
      const source = re.HVAC_PLANTS[item]; // 默认第一个空调系统
      for (const item0 of deviceNameMao) {
        // 当前JSON中存在 deviceNameMao中的其中一个设备
        if (source[item0]) {
          deviceModelMap[item0] = {};
          // 当前的deviceNameMao里面的每个设备的key的集合
          const deviceKeys = Object.keys(source[item0]);
          // 遍历每一台设备 获取每一台设备的点表数据传入相应的json函数
          for (let i = 0; i < deviceKeys.length; i++) {
            const t = deviceKeys[i];
            const sour = source[item0][t]; // 每一台设备的属性(包含点表信息)
            const result = functionMap[item0]?.(sour);
            const id = nanoid(22);
            deviceArr.push({
              F_P_ID: projId,
              F_PT_ID: modelid,
              F_PAGE_ID: id,
              F_TITLE: deviceNameMap[item0] + (i + 1) + '页面',
              F_CONTENT: await jsonCompress(result)
            });
            // console.log(deviceName[n] + (i + 1) + '页面' + 'result: ', result);
            const mapname = item0 == 'DVS' ? 'VALVES' : item0;
            deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id };
          }
        }
      }

      const code = await request(`/TEdPage/createpages`, {
        method: 'POST',
        data: [
          ...deviceArr,
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '首页',
            F_PAGE_ID: arrids[0],
            F_CONTENT: await jsonCompress(HOME(re.HVAC_PLANTS[item], arrids, global, 'HVAC')),
            F_EXT: { PAGE_TYPE: 1 }
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_TITLE: '监控页面',
            F_PAGE_ID: arrids[1],
            F_CONTENT: await jsonCompress(HANDLESOURCE(re.HVAC_PLANTS[item], deviceModelMap, arrids, global, 'HVAC'))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '能耗页面',
            F_PAGE_ID: arrids[2],
            F_CONTENT: await jsonCompress(ENERGY(re.HVAC_PLANTS[item], arrids, global))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '报警页面',
            F_PAGE_ID: arrids[3],
            F_CONTENT: await jsonCompress(WARNING(re.HVAC_PLANTS[item], arrids, global, 'HVAC'))
          }, //
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '报表页面',
            F_PAGE_ID: arrids[4],
            F_CONTENT: await jsonCompress(REPORT(re.HVAC_PLANTS[item], arrids, global, 'HVAC'))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '登录页面',
            F_PAGE_ID: nanoid(22),
            F_CONTENT: await jsonCompress(LOGIN(global)),
            F_EXT: { PAGE_TYPE: 2 }
          }
        ]
      });

      if (code >= 1) {
        message.success('生成成功');
        window.location.reload();
      }
      if (code.code == 0) {
        message.error('生成失败');
        window.location.reload();
      }
    } else {
      const item = Object.keys(re?.CAS_PLANTS || {})?.[0]; // key1
      // 生成设备弹窗文件夹
      const modelid = await request(`/TEdPageType/save`, {
        method: 'POST',
        data: jsonToFormData({
          F_P_ID: projId,
          F_PT_ID: '-1',
          F_NAME: '设备弹窗'
        })
      });
      // 设备弹窗
      const deviceModelMap = {};
      const deviceNameMap = {
        ACOPS: '空压机',
        DDRYS: '吸干机',
        RDRYS: '冷干机'
      };
      const deviceNameMao = Object.keys(deviceNameMap);
      const deviceArr = [];
      const source = re.CAS_PLANTS[item]; // 默认是第一个空压系统
      for (const item0 of deviceNameMao) {
        // 当前JSON中存在 deviceNameMao中的其中一个设备
        if (source[item0]) {
          deviceModelMap[item0] = {};
          // 当前的deviceNameMao里面的每个设备的key的集合
          const deviceKeys = Object.keys(source[item0]);
          // 遍历每一台设备 获取每一台设备的点表数据传入相应的json函数
          for (let i = 0; i < deviceKeys.length; i++) {
            const t = deviceKeys[i];
            const sour = source[item0][t]; // 每一台设备的属性(包含点表信息)
            const result = functionMap[item0]?.(sour);
            console.log('item0: ', item0, result);
            const id = nanoid(22);
            deviceArr.push({
              F_P_ID: projId,
              F_PT_ID: modelid,
              F_PAGE_ID: id,
              F_TITLE: deviceNameMap[item0] + (i + 1) + '页面',
              F_CONTENT: await jsonCompress(result)
            });
            const mapname = item0 == 'DVS' ? 'VALVES' : item0;
            deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id };
          }
        }
      }
      const code = await request(`/TEdPage/createpages`, {
        method: 'POST',
        data: [
          ...deviceArr,
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '首页',
            F_PAGE_ID: arrids[0],
            F_CONTENT: await jsonCompress(HOME(re.CAS_PLANTS[item], arrids, global, 'CAS')),
            F_EXT: { PAGE_TYPE: 1 }
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_TITLE: '监控页面',
            F_PAGE_ID: arrids[1],
            F_CONTENT: await jsonCompress(HANDLESOURCEACS(re.CAS_PLANTS[item], deviceModelMap, arrids, global, re.CAS_PLANTS))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '能耗页面',
            F_PAGE_ID: arrids[2],
            F_CONTENT: await jsonCompress(ENERGY(re.CAS_PLANTS[item], arrids, global, 'CAS'))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '报警页面',
            F_PAGE_ID: arrids[3],
            F_CONTENT: await jsonCompress(WARNING(re.CAS_PLANTS[item], arrids, global, 'CAS'))
          }, //
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '报表页面',
            F_PAGE_ID: arrids[4],
            F_CONTENT: await jsonCompress(REPORT(re.CAS_PLANTS[item], arrids, global, 'CAS'))
          },
          {
            F_P_ID: projId,
            F_PT_ID: '',
            F_PAGE_ID: '-1',
            F_TITLE: '登录页面',
            F_PAGE_ID: nanoid(22),
            F_CONTENT: await jsonCompress(LOGIN(global)),
            F_EXT: { PAGE_TYPE: 2 }
          }
        ]
      });
      if (code >= 1) {
        message.success('生成成功');
        window.location.reload();
      }
      if (code.code == 0) {
        message.error('生成失败');
        window.location.reload();
      }
    }
  };

  return {
    ...other,
    onSave,
    onPreview,
    onGenerate
  };
}

export default useToolbar;
