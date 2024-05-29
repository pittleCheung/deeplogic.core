/**
 * 自动生成的节点数据
 */
import { nanoid } from 'nanoid';
import { EFAULT_PUMP_MAP } from './global';
import { checkCHLTotal, checkTotal, deviceCheckH, deviceCheckV } from './ifDefault';
import pointDefault from './pointDefault';
import { deviceMargin, deviceXGap, styleMap, textSystemTransform, textTransform } from './stylesDefault';
// import deviceMap from "@/pages/editor/components/materials/components/monitor/devices/__deviceImg__/deviceMap"
import deviceMap from '@deeplogic/materials/components/monitor/devices/__deviceImg__/deviceMap';
/**
 * 保留一位小数
 */
const fix = (num) => {
  return Number(Number(num).toFixed(1));
};

// 监控容器id
export const boxid = nanoid(10);
export const parentbox = nanoid(10);
export const headid = nanoid(10);
export const footid = nanoid(10);
export const bottomid = nanoid(10);

export const pipeids = [];
// 根节点组件
export const root = {
  type: {
    resolvedName: 'Page'
  },
  id: 'ROOT',
  displayName: 'Page',
  props: {
    displayName: 'Page',
    title: '页面标题',
    theme: {
      algorithm: 'darkBlue',
      token: {
        colorPrimary: '#1677ff'
      }
    },
    events: {
      onLoad: null
    },
    style: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      widthType: 'relative',
      heightType: 'fit-content',
      fontFamily: 'PingFang SC',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'left',
      spacing: 0,
      paddingSide: 'all',
      padding: 0,
      marginSide: 'all',
      margin: 0,
      "background": "url(/assets/images/bg-light.jpg) 50% 50% / 100% 100% no-repeat,linear-gradient(rgba(36, 66, 105, 1), rgba(36, 66, 105, 1))",
      borderRadius: 0,
      backgroundList: [
        {
          id: 'EKzxxXgFQm',
          type: 'color',
          key: 'EKzxxXgFQm',
          value: 'rgba(16, 18, 32, 1)',
          disabled: false
        }
      ],
      display: 'flex',
      flexDirection: 'column',
      key: 'centerLeft',
      justifyContent: '',
      alignItems: '',
      alignContent: '',
      flexWrap: '',
      gap: '',
      rowGap: '',
      columnGap: '',
      justifyItems: '',
      minHeight: '100vh'
    }
  },
  custom: {},
  nodes: [
    // "3GQM1xL3jA",
    '8iFl32LjG1',
    parentbox
  ],
  linkedNodes: {},
  hidden: false,
  isCanvas: true
};


export const rootHeader = {
  "8iFl32LjG1": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 12,
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "51px",
              "widthType": "relative",
              "heightType": "fixed",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 0,
              "heightUnit": "px",
              "background": "url(/assets/images/header-bg.png) 50% 50% / 100% 100% no-repeat",
              "backgroundList": [
                  {
                      "id": "pgueloUMWV",
                      "type": "image",
                      "key": "pgueloUMWV",
                      "value": {
                          "backgroundImage": "sQcsYoiVl8GLBY2Hz2XpT7",
                          "backgroundRepeat": "no-repeat",
                          "backgroundSize": "100% 100%",
                          "backgroundPosition": "50% 50%"
                      },
                      "disabled": false
                  }
              ],
              "display": "flex"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "ROOT",
      "hidden": false,
      "nodes": [
          "YkFr0EH-Vh",
          "uS5W75azRW"
      ],
      "linkedNodes": {}
  },
  "YkFr0EH-Vh": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 12,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "side",
              "marginSide": "all",
              "padding": 12,
              "paddingTop": 12,
              "paddingRight": 12,
              "paddingLeft": 24,
              "paddingBottom": 12,
              "display": "flex"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "8iFl32LjG1",
      "hidden": false,
      "nodes": [
          "RkRHuJRDen"
      ],
      "linkedNodes": {}
  },
  "RkRHuJRDen": {
      "type": {
          "resolvedName": "TypographyText"
      },
      "isCanvas": false,
      "props": {
          "displayName": "Typography.Text",
          "value": {
              "bind": "ProjectName",
              "type": "global"
          },
          "status": [],
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 24,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "widthUnit": "%"
          }
      },
      "displayName": "TypographyText",
      "custom": {},
      "parent": "YkFr0EH-Vh",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "uS5W75azRW": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 12,
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "side",
              "marginSide": "all",
              "padding": 12,
              "display": "flex",
              "flexDirection": "row",
              "key": "centerRight",
              "justifyContent": "flex-end",
              "alignItems": "center",
              "widthUnit": "%",
              "paddingTop": 12,
              "paddingRight": 24,
              "paddingLeft": 12,
              "paddingBottom": 12
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "8iFl32LjG1",
      "hidden": false,
      "nodes": [
          "SaNq5TFDUq",
          "HK7RoyLu5q",
          "i4ICxEFQTL",
          "Eeai3_17tk",
          "2JaMK0tiQ5"
      ],
      "linkedNodes": {}
  },
  "SaNq5TFDUq": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 6,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 8,
              "display": "flex",
              "flexDirection": "row",
              "key": "centerCenter",
              "justifyContent": "center",
              "alignItems": "center",
              "paddingTop": 0,
              "paddingRight": 0,
              "paddingLeft": 0,
              "paddingBottom": 0
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "uS5W75azRW",
      "hidden": false,
      "nodes": [
          "838TQBO1qo",
          "CeQH9jyp5K"
      ],
      "linkedNodes": {}
  },
  "838TQBO1qo": {
      "type": {
          "resolvedName": "GenericIcon"
      },
      "isCanvas": false,
      "props": {
          "displayName": "GenericIcon",
          "icon": "icon-temperature",
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "GenericIcon",
      "custom": {},
      "parent": "SaNq5TFDUq",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "CeQH9jyp5K": {
      "type": {
          "resolvedName": "StateText"
      },
      "isCanvas": false,
      "props": {
          "displayName": "StateText",
          "size": "14px",
          "decimalSeparator": 0,
          "percent": false,
          "value": {
              "bind": "T_OUTDOOR",
              "type": "points",
              "point": [
                  "T_OUTDOOR"
              ]
          },
          "type": "",
          "strong": false,
          "italic": false,
          "underline": false,
          "mark": false,
          "keyboard": false,
          "code": false,
          "isBefore": false,
          "isAfter": true,
          "title": '室外温度',
          "before": {
              "value": "前缀"
          },
          "after": {
              "value": "℃"
          }
      },
      "displayName": "StateText",
      "custom": {},
      "parent": "SaNq5TFDUq",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "HK7RoyLu5q": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 6,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 0,
              "paddingTop": 0,
              "paddingRight": 0,
              "paddingLeft": 0,
              "paddingBottom": 0,
              "display": "flex"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "uS5W75azRW",
      "hidden": false,
      "nodes": [
          "aPQpzqi-Kb",
          "ZMbg-PZ7DO"
      ],
      "linkedNodes": {}
  },
  "aPQpzqi-Kb": {
      "type": {
          "resolvedName": "GenericIcon"
      },
      "isCanvas": false,
      "props": {
          "displayName": "GenericIcon",
          "icon": "icon-water-temperature",
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "GenericIcon",
      "custom": {},
      "parent": "HK7RoyLu5q",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "ZMbg-PZ7DO": {
      "type": {
          "resolvedName": "StateText"
      },
      "isCanvas": false,
      "props": {
          "displayName": "StateText",
          "size": "14px",
          "decimalSeparator": 0,
          "percent": false,
          "value": {
              "bind": "TW_OUTDOOR",
              "type": "points",
              "point": [
                  "TW_OUTDOOR"
              ]
          },
          "type": "",
          "strong": false,
          "italic": false,
          "underline": false,
          "mark": false,
          "keyboard": false,
          "code": false,
          "isBefore": false,
          "isAfter": true,
          "title": '室外湿球温度',
          "before": {
              "value": "前缀"
          },
          "after": {
              "value": "℃"
          }
      },
      "displayName": "StateText",
      "custom": {},
      "parent": "HK7RoyLu5q",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "i4ICxEFQTL": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 6,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 0,
              "display": "flex"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "uS5W75azRW",
      "hidden": false,
      "nodes": [
          "vd_NgPflBY",
          "PBpmXAKA8d"
      ],
      "linkedNodes": {}
  },
  "vd_NgPflBY": {
      "type": {
          "resolvedName": "GenericIcon"
      },
      "isCanvas": false,
      "props": {
          "displayName": "GenericIcon",
          "icon": "icon-humidity",
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "GenericIcon",
      "custom": {},
      "parent": "i4ICxEFQTL",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "PBpmXAKA8d": {
      "type": {
          "resolvedName": "StateText"
      },
      "isCanvas": false,
      "props": {
          "displayName": "StateText",
          "size": "14px",
          "decimalSeparator": 0,
          "percent": false,
          "value": {
              "bind": "RH_OUTDOOR",
              "type": "points",
              "point": [
                  "RH_OUTDOOR"
              ]
          },
          "type": "",
          "strong": false,
          "italic": false,
          "underline": false,
          "mark": false,
          "keyboard": false,
          "code": false,
          "isBefore": false,
          "isAfter": true,
          "title": '室外相对湿度',
          "before": {
              "value": "前缀"
          },
          "after": {
              "value": "%"
          }
      },
      "displayName": "StateText",
      "custom": {},
      "parent": "i4ICxEFQTL",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "Eeai3_17tk": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 6,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "side",
              "marginSide": "all",
              "padding": 0,
              "paddingTop": 0,
              "paddingRight": 6,
              "paddingLeft": 6,
              "paddingBottom": 0,
              "borderWidth": 1,
              "borderStyle": "solid",
              "borderColor": "rgba(217, 217, 217, 0.3)",
              "borderSide": "side",
              "borderRadius": 0,
              "borderTopWidth": 0,
              "borderRightWidth": 1,
              "borderLeftWidth": 1,
              "borderBottomWidth": 0,
              "display": "flex",
              "flexDirection": "row",
              "key": "centerCenter",
              "justifyContent": "center",
              "alignItems": "center"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "uS5W75azRW",
      "hidden": false,
      "nodes": [
          "LAFKu5ZGIp",
          "I9pYZxf0XY"
      ],
      "linkedNodes": {}
  },
  "LAFKu5ZGIp": {
      "type": {
          "resolvedName": "GenericIcon"
      },
      "isCanvas": false,
      "props": {
          "displayName": "GenericIcon",
          "icon": "FieldTimeOutlined",
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 0,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "GenericIcon",
      "custom": {},
      "parent": "Eeai3_17tk",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "I9pYZxf0XY": {
      "type": {
          "resolvedName": "TimeText"
      },
      "isCanvas": false,
      "props": {
          "displayName": "TimeText",
          "format": "YYYY-MM-DD HH:mm:ss",
          "interval": 1,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "TimeText",
      "custom": {},
      "parent": "Eeai3_17tk",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  },
  "2JaMK0tiQ5": {
      "type": {
          "resolvedName": "Flex"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Flex",
          "gap": 12,
          "style": {
              "position": "relative",
              "width": "auto",
              "height": "auto",
              "widthType": "fit-content",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 0,
              "paddingTop": 0,
              "paddingRight": 0,
              "paddingLeft": 0,
              "paddingBottom": 0,
              "display": "flex"
          }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "uS5W75azRW",
      "hidden": false,
      "nodes": [
          "Yy0mePgnBj"
      ],
      "linkedNodes": {}
  },
  "Yy0mePgnBj": {
      "type": {
          "resolvedName": "GenericIcon"
      },
      "isCanvas": false,
      "props": {
          "displayName": "GenericIcon",
          "icon": "WifiOutlined",
          "events": {},
          "style": {
              "position": "relative",
              "width": "100%",
              "height": "auto",
              "widthType": "relative",
              "heightType": "fit-content",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 18,
              "fontWeight": "normal",
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all"
          }
      },
      "displayName": "GenericIcon",
      "custom": {},
      "parent": "2JaMK0tiQ5",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
  }
}

// 画布容器组件
export const box = {
  id: boxid,
  type: {
    resolvedName: 'DrawCanva'
  },
  displayName: 'DrawCanva',
  props: {
    displayName: 'DrawCanva',
    style: {
      height: document.documentElement.clientHeight - 139 - 80 + 'px',
      // minHeight: document.documentElement.clientHeight - 144 - 80 + "px",
      // "height": 300,
      // "width": '100%',
      contentMaxX: null,
      contentMinX: null,
      contentMinY: null,
      contentMaxY: null,
      // "background": "linear-gradient(#1c2035, #1c2035)",
      backgroundList: [
        {
          id: 'kOXXN92lpv',
          type: 'color',
          key: 'kOXXN92lpv',
          value: '#1c2035',
          disabled: false
        }
      ],
      // "display":"flex",
      flex: '1 1 0%' // 设置画布容器撑满剩余高度
    },
    scale: 1
  },
  custom: {
    class: 'pittle'
  },
  parent: parentbox, // parentbox
  nodes: [],
  linkedNodes: {},
  hidden: false,
  isCanvas: true
};
/**
 * 寻找冷机/冷却塔对应的阀门
 */
const valuesMaps = {};
const valuesModel = {};
export const valuesMapsHandle = (id, vals, deviceModelMap) => {
  valuesMaps[id] = vals;
  vals?.map((t) => {
    if (deviceModelMap?.[t.ID]) {
      valuesModel[t.ID] = deviceModelMap[t.ID];
    }
  });
};
/**
 * 生成冷机/冷却塔组件
 * @param {*} type 设备类型
 *  @param {*} nodeid 后端返回的设备id
 */
const deviceModelProps = {
  D0A1A: ['制冷机', '1250px'],
  D0A1B: ['冷冻泵', '880px'],
  D0A1C: ['冷却泵', '880px'],
  D0A1D: ['冷却塔', '840px'],
  D0A30: ['阀门', '1020px'],
  D0C1A: ['空压机', '900px'],
  D0C1D: ['储气湿罐', '900px'],
  D0C1B: ['冷干机', '900px'],
  D0C1C: ['吸干机', '900px'],
  D0C1E: ['储气干罐', '900px']
};
export const device = (type, item, pointsObject, modelId, childrenStyle) => {
  const id = nanoid(10)
  const { TYPE, ID } = item //DEVICE_PREFIX 设备前缀 STATION_PREFIX_ORG系统前缀

  if (pointsObject) {
    pointsObject[item[pointDefault.status[0]]?.NAME] = 0
    pointsObject[item[pointDefault.status[1]]?.NAME] = 0
  }
  if (!item?.[pointDefault.status[1]]) {
    return {
      id: id,
      type: {
        resolvedName: type,
      },
      displayName: type,
      props: {
        displayName: type,
        devicename: item.NAME,
        devicetype: TYPE,
        device: ID,
        value: item[pointDefault.value]?.map((t) => t?.ID),
        events: {
          onClick: {
            action: "openPopup",
            link: {
              component: modelId,
              title: item?.NAME + "详情",
              width: deviceModelProps[TYPE][1],
            },
          },
        },
        childrenStyle,
        style: {},
      },
      parent: boxid,
      nodes: [],
      linkedNodes: {},
      hidden: false,
      isCanvas: false,
    }
  }

  return {
    id: id,
    type: {
      resolvedName: type,
    },
    displayName: type,
    props: {
      displayName: type,
      devicetype: TYPE,
      devicename: item.NAME,
      device: ID,
      chiller: item[pointDefault.chiller],
      value: item[pointDefault.value]?.map((t) => t?.ID),
      status: [
        {
          label: "故障",
          value: "1",
          key: "3",
          img_src: deviceMap?.[TYPE]?.fault,
          color: "#f5222d",
          expression: {
            bind: "${" + item[pointDefault.status[1]]?.NAME + "}",
            type: "expressions",
            point: [item[pointDefault.status[1]]?.NAME],
          },
        },
        {
          label: "停止",
          value: "0",
          key: "1",
          img_src: deviceMap?.[TYPE]?.off,
          color: "#7E8B99",
          expression: {
            bind: "${" + item[pointDefault.status[0]]?.NAME + "}",
            type: "expressions",
            point: [item[pointDefault.status[0]]?.NAME],
          },
        },
        {
          label: "运行",
          value: "1",
          key: "2",
          img_src: deviceMap?.[TYPE]?.on,
          color: "#73d13d",
          expression: {
            bind: "${" + item[pointDefault.status[0]]?.NAME + "}",
            type: "expressions",
            point: [item[pointDefault.status[0]]?.NAME],
          },
        },
      ],
      events: {
        onClick: {
          action: "openPopup",
          link: {
            component: modelId,
            title: item?.NAME + "详情",
            width: deviceModelProps[TYPE][1],
          },
        },
      },
      childrenStyle,
      style: {},
    },
    parent: boxid,
    nodes: [],
    linkedNodes: {},
    hidden: false,
    isCanvas: false,
  }
}
/**
 * 生成管道
 * @param {*} type 设备类型
 * @returns
 */
export const pipe = (type, direction) => {
  const id = nanoid(10);
  const ptype = type == 'h' ? 'PipeH' : 'PipeV';
  return {
    id: id,
    type: {
      resolvedName: ptype
    },
    displayName: ptype,
    props: {
      displayName: ptype,
      direction,
      waterstyle: '1',
      events: {},
      style: {},
      status: true,
      devicetype: ''
    },
    custom: {},
    parent: boxid,
    nodes: [],
    linkedNodes: {},
    hidden: false,
    isCanvas: false
  };
};
/**
 * 生成连接头
 * @param {*} i
 * @returns
 */
const ctype = {
  w: 'PipeW',
  t: 'PipeT',
  c: 'PipeC'
};

export const connector = (type) => {
  const id = nanoid(10);
  return {
    id,
    type: {
      resolvedName: ctype[type]
    },
    displayName: ctype[type],
    props: {
      displayName: ctype[type],
      events: {},
      style: {},
      devicetype: ''
    },
    custom: {},
    parent: boxid,
    nodes: [],
    linkedNodes: {},
    hidden: false,
    isCanvas: false
  };
};

/**
 * 生成文本框
 */
export const text = () => {
  const id = nanoid(10);
  return {
    id,
    type: {
      resolvedName: 'TypographyText'
    },
    displayName: 'TypographyText',
    props: {
      displayName: 'Typography.Text'
      // "style": commonTextStyle,
    },
    parent: boxid,
    nodes: [],
    custom: {},
    nodes: [],
    linkedNodes: {},
    hidden: false,
    isCanvas: false
  };
};

/**
 * 生成带状态文本框
 */
export const statusText = (percent, unit) => {
  const id = nanoid(10);
  return {
    id,
    type: {
      resolvedName: 'NumeralText'
    },
    isCanvas: false,
    props: {
      displayName: 'NumeralText',
      level: '5',
      size: '',
      decimalSeparator: !!percent ? 0 : 1,
      percent: false,
      value: '',
      type: 'success',
      strong: false,
      italic: false,
      underline: false,
      disabled: false,
      mark: false,
      keyboard: false,
      delete: false,
      code: false,
      isBefore: false,
      isAfter: !!unit || !!percent,
      style: {
        fontSize: '12px',
      },
      before: {
        value: '前缀'
      },
      after: {
        value: percent ? '%' : unit,
        type: 'secondary',
        props: {
          size: '10px'
        }
      }
    },
    displayName: 'NumeralText',
    custom: {},
    parent: boxid,
    hidden: false,
    nodes: [],
    linkedNodes: {}
  };
};

/**
 * 生成冷冻侧
 * @param {*} i
 * @returns
 */

/**
 * 生成冷机关联泵的管子
 * type 区分了 位置的差别
 *
 */
const deviceMapIds = {}; //设备id映射
const deviceIdsMapValue = {}; // 设备id对应的value
export const deviceMapIdsTool = (id, newid, value) => {
  deviceMapIds[id] = newid;
  deviceIdsMapValue[id] = value;
};

// 总管状态映射
let ifTotal = {};
let ifTotslPoints = {};
export const ifTotalMap = (obj, m) => {
  ifTotal = { ...ifTotal, ...obj };
  ifTotslPoints = { ...ifTotslPoints, ...m };
};

//系统温度
let systemTemprature = { cwout: '', cwin: '', chwout: '', chwin: '' };
export const systemTempratureMap = (obj) => {
  systemTemprature = { ...systemTemprature, ...obj };
};

/**
 *
 * @param {*} item 当前组ids
 * @param {*} result result对象
 * @param {*} type 类型 chw冷冻 cw冷却
 * @param {*} dev 是否是它
 * @param {*} pipeType 水管类型
 * @param {*} pimps 总管对应的泵
 * @param {*} towers 当前组对应的冷却塔或冷机
 */
export const chl_pump = (item, result, type, dev, pipeType, pimps, index) => {
  const tag = type === 'chw' ? 1 : -1; // 水泵的类型
  const direction = pipeType == '2' ? '1' : '0';
  for (let i = 0; i < item.length; i++) {
    // 冷冻侧每一组总管里的冷机
    const pointarr = [];
    const totalarr = [];
    const totalstatus = checkTotal(deviceIdsMapValue, item, pimps, dev == 'CTS' ? valuesMaps : undefined, totalarr);
    const current = result[deviceMapIds[item[i]]];
    const values = valuesMaps?.[item[i]]?.map((t) => t?.ID) || [];
    let co_f = {}; // 连接头的位置
    const pipeh1 = pipe('h', direction);
    pipeh1.props.status = {
      bind: `(${totalstatus}) && ${deviceCheckH(deviceIdsMapValue[item[i]], dev == 'CTS' ? valuesMaps?.[item[i]]?.[1] || null : null, pointarr)}`,
      type: 'expressions',
      point: [...pointarr, ...totalarr]
    };
    pipeh1.props.waterstyle = pipeType;
    // pipeh1.props.style = { ...styleMap['h'], fill: EFAULT_PUMP_MAP[pipeType][0], };
    // ZIndex:-1水平线层级要小于图片
    pipeh1.props.style = {
      ...styleMap['h'],
      fill: EFAULT_PUMP_MAP[pipeType][0],
      zIndex: -1
    };
    // 冷机左下宽度 和 冷却塔右下宽度
    // pipeh1.props.style.width = fix(pipeh1.props.style.width / 3);
    pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.8);

    // type=chw情况冷机右下横管 和 冷却塔右下横管位移 往左调2px
    // type!=chw情况 冷机右下横管往右移动2px
    // 目的是确保管子层级能够置于设备底层
    pipeh1.props.style.translateX =
      type === 'chw'
        ? fix(current.props.style.translateX + current.props.style.width) - 2
        : fix(current.props.style.translateX - pipeh1.props.style.width) + 2;
    // 横管的位置在设备的2/3处
    pipeh1.props.style.translateY = fix(current.props.style.translateY + (current.props.style.height / 3) * 2);

    if (dev == 'CTS' && values.length > 1) {
      const value = device('Valve', valuesMaps?.[item[i]]?.[1], undefined, valuesModel[valuesMaps?.[item[i]]?.[1].ID]);
      value.props.style = {
        ...styleMap['Valve'],
        translateX: fix(pipeh1.props.style.translateX + 20),
        translateY: fix(pipeh1.props.style.translateY - styleMap['Valve'].height / 2 - 3)
      };
      result[value.id] = value;
    }
    // chw表示是冷机右边  cw冷机左边
    // 竖管X位移 = 横管的位移 +/- 横管宽度
    // 竖管Y位移 = 2/3设备的位置
    co_f = {
      translateX:
        type === 'chw'
          ? fix(pipeh1.props.style.translateX + pipeh1.props.style.width * tag) - 1
          : fix(pipeh1.props.style.translateX - styleMap['t'].width),
      translateY: fix(current.props.style.translateY + (current.props.style.height / 3) * 2)
    };
    if (i === item.length - 1) {
      // 每一组总管的第一个第一个冷机,生成两个横管，一个三头连接头
      const pipeh2 = pipe('h', direction); // 总管
      const pipev2 = pipe('v', direction); // 竖直总管
      pipeh2.props.status = {
        bind: totalstatus,
        type: 'expressions',
        point: totalarr
      };
      ifTotalMap(
        {
          [dev == 'CTS' ? 'CTS' : type]: {
            ...(ifTotal[dev == 'CTS' ? 'CTS' : type] || {}),
            [index]: totalstatus
          }
        },
        {
          [dev == 'CTS' ? 'CTS' : type]: {
            ...(ifTotslPoints[dev == 'CTS' ? 'CTS' : type] || {}),
            [index]: totalarr
          }
        }
      );
      // pipeh2为从左到右 下方冷却塔连接到水泵  水泵连接到冷机 冷机连接到水泵那条线
      // const linkWidth = deviceXGap - styleMap['h'].width/3 - styleMap['h'].width/ 2 - styleMap['w'].width * 2
      const linkWidth = deviceXGap - styleMap['h'].width * 0.8 - styleMap['h'].width / 2 - styleMap['w'].width * 2 + 2;
      pipeh2.props.waterstyle = pipeType;
      pipeh2.props.style = {
        ...styleMap['h'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        // width: fix(styleMap['h'].width * 0.5), // 75
        // 连接处宽度 = 设备间隙 - 设备左右两侧管子宽度 - 连接头宽度
        width: linkWidth,
        ...co_f,
        // translateY: co_f.translateY + (type === 'chw' ? styleMap['v'].height * 0.25 : 0),
        translateY: co_f.translateY + (type === 'chw' ? styleMap['v'].height * 0.25 : 0) + 2,
        // translateX: co_f.translateX + (type === 'chw' ? styleMap.t.width : fix(styleMap['h'].width * -0.5))
        translateX: co_f.translateX + (type === 'chw' ? styleMap.t.width : fix(linkWidth * -1))
      };

      // console.log(
      //   "deviceXGap - styleMap['h']/3 * 2===>",
      //   deviceXGap - (styleMap["h"] / 3) * 2,
      // )

      pipev2.props.status = {
        bind: totalstatus,
        type: 'expressions',
        point: totalarr
      };
      pipev2.props.waterstyle = pipeType;
      pipev2.props.style = {
        ...styleMap['v'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        height: fix(styleMap['v'].height * 0.25),
        ...co_f,
        translateX: co_f.translateX + styleMap.t.height * 0.5
      };
      generateSystemText(
        result,
        pipeh2,
        'down',
        type === 'chw'
          ? dev == 'CTS'
            ? systemTemprature.cwin
            : systemTemprature.chwin
          : dev == 'CTS'
            ? systemTemprature.cwin
            : null
      );
      const connT = connector('t');
      // connT.props.style = {
      //     ...styleMap['t'],
      //     ...co_f,
      //     translateY: co_f.translateY - styleMap['t'].height / 2,
      //     rotate: type === 'chw' ? 90 : 180
      // }
      // 调整最后一个三头的位置
      connT.props.style = {
        ...styleMap['t'],
        ...co_f,
        translateY: co_f.translateY - styleMap['t'].height / 2 + 2,
        translateX: type === 'chw' ? co_f.translateX - 2 : co_f.translateX,
        rotate: type === 'chw' ? 90 : 180
      };
      if (type === 'chw') {
        const connW2 = connector('w');
        connW2.props.style = {
          ...styleMap['w'],
          ...co_f,
          translateX: co_f.translateX + styleMap['w'].width * 0.5,
          translateY: pipeh2.props.style.translateY - styleMap['w'].height * 0.5,
          rotate: 180
        };
        result[connW2.id] = connW2;
        result[pipev2.id] = pipev2;
      }
      result[pipeh2.id] = pipeh2;
      result[connT.id] = connT;
    } else {
      // 其他冷机生成一个横管，一个竖管，一个三头连接头，如果是最后一个冷机，则生成一个弯头连接头
      // 冷机左侧下方和右侧下方竖管 以及冷却塔右侧下方竖管
      const pipev = pipe('v', dev == 'CTS' ? '0' : '1');
      const pipvArr = item.slice(0, i + 1)?.map((t) => deviceIdsMapValue[t]);
      pipev.props.waterstyle = pipeType;
      const pointarr = [];
      pipev.props.status = {
        bind: `(${totalstatus})&&(${deviceCheckV(deviceIdsMapValue[item[i]], pipvArr, dev == 'CTS' && (item.slice(0, i + 1)?.map((t) => valuesMaps[t]?.[1]) || null), pointarr)})`,
        type: 'expressions',
        point: [...totalarr, ...pointarr]
      };
      pipev.props.style = {
        ...styleMap['v'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        height: current.props.style.height + deviceMargin[dev] - styleMap['t'].height / 2
      };
      // 竖管x位移 横管的位移 +/- 横管宽度 + 竖管宽度
      pipev.props.style.translateX = co_f.translateX + styleMap['v'].width;
      pipev.props.style.translateY = co_f.translateY + styleMap['t'].height / 2;
      result[pipev.id] = pipev;
      if (i === 0) {
        // 冷机下方第一个弯头
        const connW = connector('w');
        connW.props.style = {
          ...styleMap['w'],
          ...co_f,
          // translateX: co_f.translateX - styleMap['v'].width * 0.5 * tag,
          translateX: co_f.translateX - styleMap['v'].width * 0.5 * tag + 2,
          translateY: fix(co_f.translateY - styleMap.h.height * 0.5),
          rotate: tag == 1 ? 0 : -90
        };
        result[connW.id] = connW;
      } else {
        // 调整中间的三头的位置
        const connT = connector('t');
        connT.props.style = {
          ...styleMap['t'],
          ...co_f,
          translateY: fix(current.props.style.translateY + (current.props.style.height / 3) * 2 - styleMap['t'].height / 2),
          rotate: tag * 90
        };
        if (type === 'chw') {
          // 情况2和情况5 冷机右下中间三头的位置调整
          connT.props.style.translateX = connT.props.style.translateX - 3;
          connT.props.style.translateY = connT.props.style.translateY + 2;
        } else if (type === 'cw') {
          // 情况6
          connT.props.style.translateX = connT.props.style.translateX + 2;
          connT.props.style.translateY = connT.props.style.translateY + 2;
        }
        result[connT.id] = connT;
      }
    }
    result[pipeh1.id] = pipeh1;
  }
};

//  冷却塔右四横线一竖线
export const ct_cw_pump = (item, result, type, dev, pipeType, pimps, index) => {
  const tag = type === 'chw' ? 1 : -1; // 水泵的类型
  const direction = pipeType == '2' ? '1' : '0';
  for (let i = 0; i < item.length; i++) {
    // 冷冻侧每一组总管里的冷机
    const pointarr = [];
    const totalarr = [];
    const totalstatus = checkTotal(deviceIdsMapValue, item, pimps, dev == 'CTS' ? valuesMaps : undefined, totalarr);
    const current = result[deviceMapIds[item[i]]];
    const values = valuesMaps?.[item[i]]?.map((t) => t?.ID) || [];
    let co_f = {}; // 连接头的位置
    const pipeh1 = pipe('h', direction);
    pipeh1.props.status = {
      bind: `(${totalstatus}) && ${deviceCheckH(deviceIdsMapValue[item[i]], dev == 'CTS' ? valuesMaps?.[item[i]]?.[1] || null : null, pointarr)}`,
      type: 'expressions',
      point: [...pointarr, ...totalarr]
    };
    pipeh1.props.waterstyle = pipeType;
    // pipeh1.props.style = { ...styleMap['h'], fill: EFAULT_PUMP_MAP[pipeType][0], };
    // ZIndex:-1水平线层级要小于图片
    pipeh1.props.style = {
      ...styleMap['h'],
      fill: EFAULT_PUMP_MAP[pipeType][0],
      zIndex: -1
    };
    // 冷机左下宽度 和 冷却塔右下宽度
    pipeh1.props.style.width = fix(pipeh1.props.style.width * 0.5);

    // type=chw情况冷机右下横管 和 冷却塔右下横管位移 往左调2px
    // type!=chw情况 冷机右下横管往右移动2px
    // 目的是确保管子层级能够置于设备底层
    pipeh1.props.style.translateX = fix(current.props.style.translateX + current.props.style.width) - 2;
    // 横管的位置在设备的2/3处
    pipeh1.props.style.translateY = fix(current.props.style.translateY + (current.props.style.height / 3) * 2);

    if (dev == 'CTS' && values.length > 1) {
      const value = device('Valve', valuesMaps?.[item[i]]?.[1], undefined, valuesModel[valuesMaps?.[item[i]]?.[1].ID]);
      value.props.style = {
        ...styleMap['Valve'],
        translateX: fix(pipeh1.props.style.translateX + 20),
        translateY: fix(pipeh1.props.style.translateY - styleMap['Valve'].height / 2 - 3)
      };
      result[value.id] = value;
    }
    // chw表示是冷机右边  cw冷机左边
    // 竖管X位移 = 横管的位移 +/- 横管宽度
    // 竖管Y位移 = 2/3设备的位置
    co_f = {
      translateX:
        type === 'chw'
          ? fix(pipeh1.props.style.translateX + pipeh1.props.style.width * tag) - 1
          : fix(pipeh1.props.style.translateX - styleMap['t'].width),
      translateY: fix(current.props.style.translateY + (current.props.style.height / 3) * 2)
    };
    if (i === item.length - 1) {
      // 每一组总管的第一个第一个冷机,生成两个横管，一个三头连接头
      const pipeh2 = pipe('h', direction); // 总管
      const pipev2 = pipe('v', direction); // 竖直总管
      pipeh2.props.status = {
        bind: totalstatus,
        type: 'expressions',
        point: totalarr
      };
      ifTotalMap(
        {
          [dev == 'CTS' ? 'CTS' : type]: {
            ...(ifTotal[dev == 'CTS' ? 'CTS' : type] || {}),
            [index]: totalstatus
          }
        },
        {
          [dev == 'CTS' ? 'CTS' : type]: {
            ...(ifTotslPoints[dev == 'CTS' ? 'CTS' : type] || {}),
            [index]: totalarr
          }
        }
      );
      // pipeh2为从左到右 下方冷却塔连接到水泵  水泵连接到冷机 冷机连接到水泵那条线
      // const linkWidth = deviceXGap - styleMap['h'].width/3 - styleMap['h'].width/ 2 - styleMap['w'].width * 2
      const linkWidth = deviceXGap - styleMap['h'].width * 0.5 - styleMap['h'].width / 2 - styleMap['w'].width * 2 + 2;
      pipeh2.props.waterstyle = pipeType;
      pipeh2.props.style = {
        ...styleMap['h'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        // width: fix(styleMap['h'].width * 0.5), // 75
        // 连接处宽度 = 设备间隙 - 设备左右两侧管子宽度 - 连接头宽度
        width: linkWidth,
        ...co_f,
        // translateY: co_f.translateY + (type === 'chw' ? styleMap['v'].height * 0.25 : 0),
        translateY: co_f.translateY + (type === 'chw' ? styleMap['v'].height * 0.25 : 0) + 2,
        // translateX: co_f.translateX + (type === 'chw' ? styleMap.t.width : fix(styleMap['h'].width * -0.5))
        translateX: co_f.translateX + (type === 'chw' ? styleMap.t.width : fix(linkWidth * -1))
      };

      pipev2.props.status = {
        bind: totalstatus,
        type: 'expressions',
        point: totalarr
      };
      pipev2.props.waterstyle = pipeType;
      pipev2.props.style = {
        ...styleMap['v'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        height: fix(styleMap['v'].height * 0.25),
        ...co_f,
        translateX: co_f.translateX + styleMap.t.height * 0.5
      };
      generateSystemText(
        result,
        pipeh2,
        'down',
        type === 'chw'
          ? dev == 'CTS'
            ? systemTemprature.cwin
            : systemTemprature.chwin
          : dev == 'CTS'
            ? systemTemprature.cwin
            : null
      );
      const connT = connector('t');
      // connT.props.style = {
      //     ...styleMap['t'],
      //     ...co_f,
      //     translateY: co_f.translateY - styleMap['t'].height / 2,
      //     rotate: type === 'chw' ? 90 : 180
      // }
      // 调整最后一个三头的位置
      connT.props.style = {
        ...styleMap['t'],
        ...co_f,
        translateY: co_f.translateY - styleMap['t'].height / 2 + 2,
        translateX: type === 'chw' ? co_f.translateX - 2 : co_f.translateX,
        rotate: type === 'chw' ? 90 : 180
      };
      if (type === 'chw') {
        const connW2 = connector('w');
        connW2.props.style = {
          ...styleMap['w'],
          ...co_f,
          translateX: co_f.translateX + styleMap['w'].width * 0.5,
          translateY: pipeh2.props.style.translateY - styleMap['w'].height * 0.5,
          rotate: 180
        };
        result[connW2.id] = connW2;
        result[pipev2.id] = pipev2;
      }
      result[pipeh2.id] = pipeh2;
      result[connT.id] = connT;
    } else {
      // 其他冷机生成一个横管，一个竖管，一个三头连接头，如果是最后一个冷机，则生成一个弯头连接头
      // 冷机左侧下方和右侧下方竖管 以及冷却塔右侧下方竖管
      const pipev = pipe('v', dev == 'CTS' ? '0' : '1');
      const pipvArr = item.slice(0, i + 1)?.map((t) => deviceIdsMapValue[t]);
      pipev.props.waterstyle = pipeType;
      const pointarr = [];
      pipev.props.status = {
        bind: `(${totalstatus})&&(${deviceCheckV(deviceIdsMapValue[item[i]], pipvArr, dev == 'CTS' && (item.slice(0, i + 1)?.map((t) => valuesMaps[t]?.[1]) || null), pointarr)})`,
        type: 'expressions',
        point: [...totalarr, ...pointarr]
      };
      pipev.props.style = {
        ...styleMap['v'],
        fill: EFAULT_PUMP_MAP[pipeType][0],
        height: current.props.style.height + deviceMargin[dev] - styleMap['t'].height / 2
      };
      // 竖管x位移 横管的位移 +/- 横管宽度 + 竖管宽度
      pipev.props.style.translateX = co_f.translateX + styleMap['v'].width;
      pipev.props.style.translateY = co_f.translateY + styleMap['t'].height / 2;
      result[pipev.id] = pipev;
      if (i === 0) {
        // 冷机下方第一个弯头
        const connW = connector('w');
        connW.props.style = {
          ...styleMap['w'],
          ...co_f,
          // translateX: co_f.translateX - styleMap['v'].width * 0.5 * tag,
          translateX: co_f.translateX - styleMap['v'].width * 0.5 * tag + 2,
          translateY: fix(co_f.translateY - styleMap.h.height * 0.5),
          rotate: tag == 1 ? 0 : -90
        };
        result[connW.id] = connW;
      } else {
        // 调整中间的三头的位置
        const connT = connector('t');
        connT.props.style = {
          ...styleMap['t'],
          ...co_f,
          translateY: fix(current.props.style.translateY + (current.props.style.height / 3) * 2 - styleMap['t'].height / 2),
          rotate: tag * 90
        };
        if (type === 'chw') {
          // 情况2和情况5 冷机右下中间三头的位置调整
          connT.props.style.translateX = connT.props.style.translateX - 3;
          connT.props.style.translateY = connT.props.style.translateY + 2;
        }
        result[connT.id] = connT;
      }
    }
    result[pipeh1.id] = pipeh1;
  }
};

/**
 * 生成冷机出水的管子
 * 第一个冷机生成两个横管，一个竖管, 一个三头连接头，一个弯头连接头
 * 后面的冷机生成一个横管一个竖管一个三头连接头，
 * 最后一个冷机的三头连接头，代替为弯头连接头
 *
 * result json数组
 * index 冷机序号
 * tag 是否是最后一个
 * current 当前冷机样式
 * item 当前冷机数据
 * CHLS 所有冷机数组
 */
export const chl_Out = (result, index, tag, current, item, CHLS) => {
  const currentID = item.ID;
  const values = valuesMaps?.[currentID]?.map((t) => t?.ID) || []; // 水泵 有一个展示在冷冻侧 两个就加上冷却侧
  const pipeType = '0';
  // 横管的x位移 向左偏移8px确保能够置于图片下方
  const translateX = fix(current.translateX + current.width - styleMap['t'].width);
  // 纵管的x位移
  const vtranslateX = fix(translateX + styleMap['h'].width / 2);
  const pipeh1 = pipe('h', '0');
  pipeh1.props.waterstyle = pipeType;
  let pointarr = [];
  pipeh1.props.status = {
    bind: deviceCheckH(item, null, pointarr),
    type: 'expressions',
    point: pointarr
  };
  pipeh1.props.style = {
    ...styleMap['h'],
    fill: EFAULT_PUMP_MAP[pipeType][0],
    width: styleMap['h'].width / 2,
    translateX,
    translateY: fix(current.translateY + current.height / 3),
    zIndex: -1
  };
  if (values.length > 0) {
    pointarr = [];
    pipeh1.props.status = {
      bind: deviceCheckH(item, valuesMaps?.[currentID]?.[0], pointarr),
      type: 'expressions',
      point: pointarr
    };
    const resultMap = device('Valve', valuesMaps?.[currentID]?.[0], undefined, valuesModel[valuesMaps?.[currentID]?.[0].ID]);
    resultMap.props.style = {
      ...styleMap['Valve'],
      translateX: fix(translateX + 20),
      translateY: fix(pipeh1.props.style.translateY - styleMap['Valve'].height / 2 - 3)
    };
    result[resultMap.id] = resultMap;
  }
  const pipev = pipe('v', '1');
  const pointvarr = [];
  pipev.props.waterstyle = pipeType;
  pipev.props.status = {
    bind: deviceCheckV(
      item,
      CHLS.slice(index, CHLS.length),
      CHLS.slice(index, CHLS.length)?.map((t) => valuesMaps?.[t.ID]?.[0]),
      pointvarr
    ),
    type: 'expressions',
    point: pointvarr
  };
  pipev.props.style = {
    ...styleMap['v'],
    fill: EFAULT_PUMP_MAP[pipeType][0],
    height: styleMap.CHLS.height + deviceMargin.CHLS - styleMap['t'].height / 2,
    translateX: vtranslateX,
    translateY: current.translateY - (current.height * 2) / 3 - deviceMargin.CHLS + styleMap['t'].height / 2
  };
  if (index === 0) {
    pipev.props.style.height = 50;
    pipev.props.style.translateY = current.translateY + current.height / 3 - 50;
    const pipeh2 = pipe('h', '0');
    const pointarr = [];
    pipeh2.props.status = {
      bind: checkCHLTotal(CHLS, valuesMaps, pointarr),
      type: 'expressions',
      point: pointarr
    };
    const pipeh3 = connector('w'); // 第一个冷机对应的弯头
    pipeh2.props.waterstyle = pipeType;
    // pipeh3.props.style = { ...styleMap['w'], translateX: vtranslateX - 4, translateY: fix(pipev.props.style.translateY + 2 - styleMap['t'].height / 2), rotate: -90 };
    // 弯头x轴位移保持vtranslateX
    pipeh3.props.style = {
      ...styleMap['w'],
      translateX: vtranslateX,
      translateY: fix(pipev.props.style.translateY - styleMap['t'].height / 2),
      rotate: -90
    };
    // 弯头对应右边的的线 往上调3px
    pipeh2.props.style = {
      ...styleMap['h'],
      fill: EFAULT_PUMP_MAP[pipeType][0],
      translateX: vtranslateX + styleMap['w'].width / 3,
      translateY: fix(pipeh3.props.style.translateY + pipeh3.props.style.height / 3 - 3),
      width: deviceXGap + styleMap.CHWPS.width / 2 + styleMap.h.width / 2
    };
    result[pipeh2.id] = pipeh2;
    result[pipeh3.id] = pipeh3;
    generateSystemText(result, pipeh2, null, systemTemprature.chwout);
  }
  const connect = {
    // 连接头样式
    translateX: vtranslateX - 4,
    translateY: current.translateY,
    rotate: 90
  };
  if (!tag) {
    // 其他冷机对应的三头
    const connT = connector('t');
    connT.props.style = {
      ...styleMap['t'],
      ...connect,
      translateX: connect.translateX - styleMap['v'].width / 2,
      translateY: fix(current.translateY + current.height / 3 - styleMap['t'].height / 2 + styleMap['h'].height / 2)
    };
    result[connT.id] = connT;
  }
  if (!!tag) {
    // 最后一个冷机对应的弯头
    const pipeh3 = connector('w');
    pipeh3.props.style = {
      ...styleMap['w'],
      ...connect,
      translateX: connect.translateX - 1, // 计算最后一个弯头向左偏移了1px 向下偏移了3px
      translateY: fix(connect.translateY + styleMap['w'].height + styleMap.h.height * 0.5 + 5)
    };
    result[pipeh3.id] = pipeh3;
  }
  result[pipeh1.id] = pipeh1;
  result[pipev.id] = pipev;
};
/**
 * 生成泵关联冷机的管子
 */
export const pump_chl = (item, result, type, init, dType, pipeType, index) => {
  const tag = type === 'chw' ? 1 : -1; // 水泵的类型
  const direction = pipeType == '2' ? '0' : type === 'chw' ? '1' : '0';
  // let pipewidth = (type === 'chw' && dType === 'tower') ? styleMap['h'].width * 0.33 : styleMap['h'].width * 0.25;
  let pipewidth = type === 'chw' && dType === 'tower' ? styleMap['h'].width * 0.5 : styleMap['h'].width * 0.5;
  const initpos = fix(
    result[deviceMapIds[init]].props.style.translateY + (result[deviceMapIds[init]].props.style.height * 2) / 3
  ); // 当前组总管的位置
  /**
   * 判断每一个泵与总管的上下位置，误差在10
   * height = deviceMargin.Pump + styleMap.CHLS.height / 2
   * > deviceMargin.Pump + styleMap.CHWPS.height + 5
   */
  for (let i = 0; i < item.length; i++) {
    // 冷冻侧每一组总管里的冷机
    const currentpump = result[deviceMapIds[item[i]]].props.style;
    const currentY = currentpump.translateY + styleMap.CHWPS.height - styleMap['h'].height;
    // translateX这个位移是冷却塔 左侧管子 和 水泵左侧管子 同时变化
    const translateX = fix(currentpump.translateX - pipewidth + tag * 3);
    // 当前需要生成竖管的数量
    const vnum =
      (currentpump.translateY - (i === 0 ? initpos : result[deviceMapIds[item[i - 1]]].props.style.translateY)) /
      (currentpump.height + deviceMargin.Pump);
    // 不对齐就会多相应多的竖管
    if (Math.abs(vnum) > 0 && dType !== 'tower') {
      const pipev = pipe('v', direction);
      pipev.props.waterstyle = pipeType;
      pipev.props.style = {
        ...styleMap.v,
        fill: EFAULT_PUMP_MAP[pipeType][0],
        height: fix((currentpump.height + deviceMargin.Pump) * Math.ceil(Math.abs(vnum))),
        // translateX: fix(currentpump.translateX - styleMap.h.width * 0.25 * tag - styleMap.t.width * 0.5) + (type === 'cw' ? currentpump.width : 0),
        translateX:
          fix(currentpump.translateX - styleMap.h.width * 0.5 * tag - styleMap.t.width * 0.5) +
          (type === 'cw' ? currentpump.width + styleMap.t.width * 0.5 : 0),
        translateY: fix(
          currentpump.translateY -
            deviceMargin.Pump -
            (deviceMargin.Pump + styleMap.CHWPS.height) * Math.floor(Math.abs(vnum - 1)) -
            styleMap.h.height * 0.5
        )
      };
      if (vnum > 0 || (vnum < 0 && currentpump.translateY > initpos)) {
        // 条件判断用于属性设置
        // 竖管的流向
        pipev.props.direction =
          pipev.props.style.translateY - initpos > 0
            ? dType === 'tower_pump'
              ? '0'
              : '1'
            : dType === 'tower_pump'
              ? '1'
              : '0';
        result[pipev.id] = pipev;
      }
      const pointarr = [];
      const pipvArr = [...item.slice(0, i), ...item.slice(i + 1, item.length)]?.map((t) => deviceIdsMapValue[t]);
      const total = dType === 'tower' || dType === 'tower_pump' ? ifTotslPoints?.CTS?.[index] : ifTotslPoints[type][index];
      pipev.props.status = {
        bind: `(${dType === 'tower' || dType === 'tower_pump' ? ifTotal?.CTS?.[index] : ifTotal[type][index]})&&(${deviceCheckV(deviceIdsMapValue[item[i]], pipvArr, null, pointarr)})`,
        type: 'expressions',
        point: [...total, ...pointarr]
      };
      if (
        i == 0 &&
        currentpump.translateY - initpos >= deviceMargin.Pump &&
        currentpump.translateY - initpos < deviceMargin.Pump + styleMap.CHWPS.height
      ) {
        const connW = connector('w');
        connW.props.style = {
          ...styleMap['w'],
          translateY: pipev.props.style.translateY - styleMap['w'].height * 0.5,
          translateX: pipev.props.style.translateX - pipev.props.style.width,
          rotate: type == 'chw' ? 0 : -90
        };
        result[connW.id] = connW;
      }
    }
    const pipeh1 = pipe('h', pipeType == '2' ? '1' : '0');
    const pointarr = [];
    const total =
      dType === 'tower'
        ? ifTotslPoints?.CHtoCT?.[index]
        : dType === 'tower_pump'
          ? ifTotslPoints?.CTS?.[index]
          : ifTotslPoints[type][index];
    pipeh1.props.status = {
      bind: `(${dType === 'tower' ? ifTotal?.CHtoCT?.[index] : dType === 'tower_pump' ? ifTotal?.CTS?.[index] : ifTotal[type][index]}) && (${deviceCheckH(deviceIdsMapValue[item[i]], null, pointarr)})`,
      type: 'expressions',
      point: [...total, ...pointarr]
    };
    pipeh1.props.waterstyle = pipeType;
    pipeh1.props.style = {
      ...styleMap['h'],
      fill: EFAULT_PUMP_MAP[pipeType][0],
      width: pipewidth,
      translateY: fix(currentpump.translateY + styleMap.CHWPS.height - styleMap['h'].height) - (dType === 'tower' ? 20 : 3),
      translateX: fix(type === 'chw' ? translateX : currentpump.translateX + currentpump.width),
      zIndex: -1
    };
    if (dType === 'tower') {
      const values = valuesMaps?.[item[i]]?.map((t) => t?.ID) || [];
      if (values.length > 0) {
        const pointarr = [];
        pipeh1.props.status = {
          bind: deviceCheckH(deviceIdsMapValue[item[i]], valuesMaps?.[item[i]]?.[0], pointarr),
          type: 'expressions',
          point: pointarr
        };
        const value = device('Valve', valuesMaps?.[item[i]]?.[0], undefined, valuesModel[valuesMaps?.[item[i]]?.[0].ID]);
        value.props.style = {
          ...styleMap['Valve'],
          translateX: fix(pipeh1.props.style.translateX + 20),
          translateY: fix(pipeh1.props.style.translateY - styleMap['Valve'].height / 2 - 3)
        };
        result[value.id] = value;
      }
    }
    result[pipeh1.id] = pipeh1;
    const connectXT = fix(
      translateX - styleMap['t'].width * tag - 5 * tag + (type === 'cw' ? styleMap.h.width + 2 : styleMap.t.height)
    );
    const connectXW = fix(
      translateX -
        (dType === 'tower' ? styleMap.v.width * 0.5 * -1 : styleMap['w'].width) -
        styleMap.v.width -
        (type === 'cw' && styleMap.h.width * 0.25 + styleMap.w.width + 2)
    );
    const connectYW = fix(
      currentpump.translateY +
        styleMap.CTS.height * 0.33 +
        (dType == 'tower' ? -styleMap.w.height / 2 : styleMap.w.height * 0.6)
    );
    const connectYT = fix(currentpump.translateY + styleMap.CHWPS.height - styleMap['t'].height);
    // 下边两侧的三头 和 连接总管的一条竖管线和一个弯头
    if (i == item.length - 1) {
      const wtag = dType !== 'tower' && Math.abs(currentY - initpos) <= deviceMargin.Pump - 2;
      const connW = wtag ? connector('t') : connector('w');
      connW.props.style = {
        ...styleMap[wtag ? 't' : 'w'],
        translateY: wtag ? connectYT : connectYW,
        // translateX: wtag ? (connectXT - styleMap['v'].width * tag) : connectXW,
        translateX: wtag ? connectXT - styleMap['v'].width * tag : connectXW - 1,
        rotate: !wtag && type == 'cw' ? 90 : type == 'cw' || dType === 'tower' ? 180 : -90
      };
      result[connW.id] = connW;
      if (type === 'chw' && dType !== 'tower') {
        const pipev1 = pipe('v', direction);
        pipev1.props.waterstyle = pipeType;
        pipev1.props.style = {
          ...styleMap.v,
          fill: EFAULT_PUMP_MAP[pipeType][0],
          height: styleMap['v'].height * 0.25,
          translateX: fix(pipeh1.props.style.translateX - styleMap['t'].height * 0.5 - styleMap['v'].width * tag),
          translateY: fix(pipeh1.props.style.translateY)
        };
        pipev1.props.status = {
          bind: ifTotal[dType == 'tower_pump' ? 'CTS' : type][index],
          type: 'expressions',
          point: ifTotslPoints[dType == 'tower_pump' ? 'CTS' : type][index]
        };
        result[pipev1.id] = pipev1;
        const connWchw = connector('w');
        connWchw.props.style = {
          ...styleMap['w'],
          translateY: pipev1.props.style.translateY + pipev1.props.style.height - styleMap['w'].height * 0.5,
          translateX: pipev1.props.style.translateX - styleMap['w'].width * 0.5 + 2,
          rotate: 90
        };
        result[connWchw.id] = connWchw;
      }
      break;
    }
    const connecW = (i) => {
      const connT = connector('w');
      connT.props.style = {
        ...styleMap['w'],
        translateY: connectYW,
        translateX: connectXW,
        rotate: i == 0 ? (type === 'chw' ? -90 : 0) : tag * 0
      };
      result[connT.id] = connT;
    };
    const connecT = (edg) => {
      const connT = connector('t');
      connT.props.style = {
        ...styleMap['t'],
        translateY: connectYT,
        translateX: connectXT - tag * 5,
        // 如果edg是isNaN(undefined) 则为true否则是false  三头默认0是朝下的 -90中间口朝右 90中间口朝左
        rotate: isNaN(edg) ? (type === 'chw' ? -90 : 90) : 0
      };
      result[connT.id] = connT;
    };

    if (dType !== 'tower') {
      if (i === 0) {
        // 每一组总管的第一个生成一个三头连接头
        if (Math.floor(Math.abs(vnum)) > 0) {
          const connW = connector('w');
          connW.props.style = {
            ...styleMap['w'],
            // 弯头往下调整2px
            translateY:
              fix(currentpump.translateY + styleMap.CHWPS.height - styleMap['w'].height / 2 - styleMap['h'].height) + 2,
            // translateY: fix(currentpump.translateY + styleMap.CHWPS.height - styleMap['w'].height / 2 - styleMap['h'].height),
            // translateX: fix(currentpump.translateX - pipeh1.props.style.width * tag - styleMap['w'].width * tag + (tag === -1 ? 8 : 4)), //  + styleMap['v'].width * tag + (tag == -1 ? 4 : 0)
            translateX: fix(
              currentpump.translateX -
                pipeh1.props.style.width * tag -
                styleMap['w'].width * tag +
                (tag === -1 ? styleMap['w'].width + 2 : 4)
            ), //  + styleMap['v'].width * tag + (tag == -1 ? 4 : 0)
            rotate: tag == -1 ? 0 : 270
          };
          result[connW.id] = connW;
        } else {
          if (Math.abs(currentY - initpos) < deviceMargin.Pump) {
            connecT(0);
          } else if (currentY - initpos > deviceMargin.Pump) {
            connecT();
          } else {
            connecW(i);
          }
        }
      } else {
        // 其他泵
        if (Math.floor(Math.abs(vnum)) == 0 || (Math.abs(currentY - initpos) <= deviceMargin.Pump && i < item.length - 1)) {
          const connC = connector('c');
          connC.props.style = {
            ...styleMap['c'],
            translateY: fix(currentpump.translateY + styleMap.CHWPS.height - styleMap['c'].height + 2),
            translateX: fix(
              currentpump.translateX -
                styleMap.h.width * 0.25 * tag -
                styleMap['c'].width * tag -
                styleMap['v'].width * tag +
                3
            )
          };
          result[connC.id] = connC;
        } else {
          // 中间两侧三头的位置
          connecT();
        }
      }
    }
  }
};
/**
 * 水泵回水总管
 * 第一个生成一个横管一个弯头
 * 其余生成一个横管一个三头(-90)
 * 最后一个生成两个横管一个三头(90)
 */
export const pump_In = (item, result) => {
  const pipeType = '2';
  for (let i = 0; i < item.length; i++) {
    const { ID } = item[i];
    const current = result[deviceMapIds[ID]].props.style;
    const pipeh1 = pipe('h', '1'); // 冷却水回水
    pipeh1.props.waterstyle = pipeType;
    const pointarr = [];
    pipeh1.props.status = {
      bind: deviceCheckH(deviceIdsMapValue[ID], null, pointarr),
      type: 'expressions',
      point: pointarr
    };
    pipeh1.props.style = {
      ...styleMap['h'],
      // width: fix(styleMap['h'].width * 0.25),
      width: fix(styleMap['h'].width * 0.5),
      fill: EFAULT_PUMP_MAP[pipeType][0],
      translateX: current.translateX + current.width,
      translateY: current.translateY + current.height - styleMap['h'].height - 3
    };
    result[pipeh1.id] = pipeh1;
    // const conTranslateX = fix(pipeh1.props.style.translateX + styleMap['h'].width * 0.25);
    const conTranslateX = fix(pipeh1.props.style.translateX + styleMap['h'].width * 0.5);
    if (i == 0) {
      const connW = connector('w');
      connW.props.style = {
        ...styleMap['w'],
        translateX: conTranslateX,
        translateY: pipeh1.props.style.translateY - styleMap['w'].height / 2 + 3
      };
      result[connW.id] = connW;
    } else if (i == item.length - 1) {
      const pipeh2 = pipe('h', '1');
      pipeh2.props.waterstyle = pipeType;
      const pointarr = [];
      pipeh2.props.status = {
        bind: checkCHLTotal(item, null, pointarr),
        type: 'expressions',
        point: pointarr
      };
      pipeh2.props.style = {
        ...styleMap['h'],
        width: fix(styleMap['h'].width * 0.25),
        fill: EFAULT_PUMP_MAP[pipeType][0],
        translateX: pipeh1.props.style.translateX + pipeh1.props.style.width + styleMap['t'].width,
        translateY: pipeh1.props.style.translateY + 50
      };
      const connW = connector('w');
      connW.props.style = {
        ...styleMap['w'],
        translateX: pipeh1.props.style.translateX + pipeh1.props.style.width + styleMap['w'].width * 0.5,
        translateY: pipeh1.props.style.translateY + 50 - styleMap['w'].height * 0.5,
        rotate: 180
      };
      result[connW.id] = connW;
      result[pipeh2.id] = pipeh2;
    }
    if (i > 0) {
      const connT0 = connector('t');
      connT0.props.style = {
        ...styleMap['t'],
        // translateX: conTranslateX,
        // translateY: pipeh1.props.style.translateY - styleMap['h'].height / 2,
        // 调整三头的位置
        translateX: conTranslateX - 2,
        translateY: pipeh1.props.style.translateY - styleMap['h'].height / 2 - 1,
        rotate: 90
      };
      result[connT0.id] = connT0;
    }
    const pipev = pipe('v', '1');
    pipev.props.waterstyle = pipeType;
    const height = styleMap.CHWPS.height + deviceMargin.CHWPS;
    const pointvarr = [];
    pipev.props.status = {
      bind: deviceCheckV(item, item.slice(0, i + 1), null, pointvarr),
      type: 'expressions',
      point: pointvarr
    };
    pipev.props.style = {
      ...styleMap['v'],
      height,
      fill: EFAULT_PUMP_MAP[pipeType][0],
      // translateX: fix(pipeh1.props.style.translateX + styleMap['w'].width / 2 + styleMap['h'].width * 0.25),
      translateX: fix(pipeh1.props.style.translateX + styleMap['w'].width / 2 + styleMap['h'].width * 0.5),
      translateY: fix(pipeh1.props.style.translateY)
    };

    if (i === item.length - 1) {
      pipev.props.style.height = 50;
    }
    result[pipev.id] = pipev;
  }
};

/**
 * 冷机关联冷却塔的管子
 * 默认生成一个横管一个竖管，一个三通连接头
 * 第一个设备生成两个横管，和弯头连接头
 */
export const chl_tower = (item, result, index, CT) => {
  const pipeType = '1';
  for (let i = 0; i < item.length; i++) {
    const currentpump = result[deviceMapIds[item[i]]].props.style;
    const values = valuesMaps?.[item[i]]?.map((t) => t?.ID) || [];
    const pipeh = pipe('h', '1');
    const pipev = pipe('v', '1');
    pipev.props.waterstyle = pipeType;
    pipeh.props.waterstyle = pipeType;
    const pointarr = [];
    pipeh.props.status = {
      bind: deviceCheckH(deviceIdsMapValue[item[i]], null, pointarr),
      type: 'expressions',
      point: pointarr
    };
    pipeh.props.style = {
      ...styleMap['h'],
      // width: styleMap['h'].width * 0.5,
      width: styleMap['h'].width * 0.5 + styleMap['t'].width, // 管子宽度延长一个三头宽度 到冷机背后
      zIndex: -1,
      translateX: fix(currentpump.translateX - styleMap['h'].width * 0.5),
      translateY: fix(currentpump.translateY + currentpump.height / 3)
    };
    if (values.length > 1) {
      const pointharr = [];
      const value = device('Valve', valuesMaps?.[item[i]]?.[1], undefined, valuesModel[valuesMaps?.[item[i]]?.[1].ID]);
      pipeh.props.status = {
        bind: deviceCheckH(deviceIdsMapValue[item[i]], valuesMaps?.[item[i]][1], pointharr),
        type: 'expressions',
        point: pointharr
      };
      value.props.style = {
        ...styleMap['Valve'],
        translateX: fix(pipeh.props.style.translateX + styleMap['h'].width * 0.5 - 20 - styleMap['Valve'].width),
        translateY: fix(pipeh.props.style.translateY - styleMap['Valve'].height / 2 - 3)
      };
      result[value.id] = value;
    }
    result[pipeh.id] = pipeh;
    const pointvarr = [];
    pipev.props.status = {
      bind: `(${checkTotal(deviceIdsMapValue, item, CT, valuesMaps, pointvarr)})&&(${deviceCheckV(
        deviceIdsMapValue[item[i]],
        item.slice(i, item.length)?.map((t) => deviceIdsMapValue[t]),
        item.slice(i, item.length)?.map((t) => valuesMaps?.[t]?.[1]),
        pointvarr
      )})`,
      type: 'expressions',
      point: [...(ifTotslPoints?.CHtoCT?.[index] || []), ...pointvarr]
    };
    pipev.props.style = {
      ...styleMap['v'],
      height: styleMap['CHLS'].height + deviceMargin.CHLS,
      translateX: fix(pipeh.props.style.translateX - styleMap['v'].width * 0.5),
      translateY: fix(pipeh.props.style.translateY - styleMap['CHLS'].height - deviceMargin.CHLS)
    };
    result[pipev.id] = pipev;
    if (i == 0) {
      pipev.props.style.height = 50;
      pipev.props.style.translateY = pipeh.props.style.translateY - 50;
      const pipeh0 = pipe('h', '1');
      pipeh0.props.waterstyle = pipeType;
      // const h0width = fix(styleMap['h'].width * 2.25 + styleMap['CHWPS'].width + styleMap['CTS'].width);
      const h0width = fix(deviceXGap * 2 + styleMap['CHWPS'].width + styleMap['CTS'].width - styleMap.t.width / 2);
      const pointarr = [];
      pipeh0.props.status = {
        // bind: checkCHLTotal(CHLS, valuesMaps, 1),
        bind: checkTotal(deviceIdsMapValue, item, CT, valuesMaps, pointarr, 'chltower'),
        type: 'expressions',
        point: pointarr
      };
      ifTotalMap(
        {
          CHtoCT: {
            ...ifTotal.CHtoCT,
            [index]: checkTotal(deviceIdsMapValue, item, CT, valuesMaps, pointarr, 'chltower')
          }
        },
        { CHtoCT: { ...ifTotal.CHtoCT, [index]: pointarr } }
      );
      pipeh0.props.style = {
        ...styleMap['h'],
        width: h0width,
        // translateX: pipev.props.style.translateX - h0width,
        translateX: pipev.props.style.translateX - h0width + 2, //第一根管子向右移动2
        translateY: fix(currentpump.translateY - 50 + styleMap['CHWPS'].height / 3)
      };
      result[pipeh0.id] = pipeh0;
      const connW = connector('w');
      connW.props.style = {
        ...styleMap['w'],
        translateX: pipeh0.props.style.translateX + pipeh0.props.style.width - styleMap.w.width / 2,
        translateY: pipeh0.props.style.translateY - styleMap.w.height / 2 + 4
      };
      result[connW.id] = connW;
      generateSystemText(result, pipeh0, null, systemTemprature.cwout);
    }
    const transObj = {
      translateX: fix(currentpump.translateX - styleMap['h'].width * 0.5),
      translateY: fix(currentpump.translateY + currentpump.height / 3)
    };
    if (i !== item.length - 1) {
      const connT = connector('t');
      connT.props.style = {
        ...styleMap['t'],
        // translateX: fix(transObj.translateX - styleMap['t'].width / 2),
        // 调整十字头的位置
        translateX: fix(transObj.translateX - styleMap['t'].width / 2) + 2,
        translateY: fix(transObj.translateY - styleMap['t'].height / 2 + styleMap['h'].height * 0.5),
        rotate: -90
      };
      result[connT.id] = connT;
    } else {
      const connW = connector('w');
      connW.props.style = {
        ...styleMap['w'],
        translateX: fix(transObj.translateX - styleMap['w'].width / 2) + 3,
        translateY: fix(transObj.translateY - styleMap['w'].height / 2),
        rotate: 180
      };
      result[connW.id] = connW;
    }
  }
};

/** 生成冷却塔关联冷机的管子 */
export const tower_chl = (item, result, index) => {
  const pipeType = '1';
  for (let i = 0; i < item.length; i++) {
    // 冷冻侧每一组总管里的冷机
    const currenttower = result[deviceMapIds[item[i]]].props.style;
    // const translateX = fix(currenttower.translateX - styleMap['h'].width / 3);
    const translateX = fix(currenttower.translateX - styleMap['h'].width / 2);
    const pipev = pipe('v', '0');
    const pipvArr = item.slice(i, item.length)?.map((t) => deviceIdsMapValue[t]);
    const valueArr = item.slice(i, item.length)?.map((t) => valuesMaps?.[t]?.[0] || null);
    if (ifTotal?.CHtoCT?.[index]) {
      const pointvarr = [];
      pipev.props.status = {
        bind: `(${ifTotal.CHtoCT[index]})&&(${deviceCheckV(deviceIdsMapValue[item[i]], pipvArr, valueArr, pointvarr)})`,
        type: 'expressions',
        point: [...ifTotslPoints.CHtoCT[index], ...pointvarr]
      };
    }
    pipev.props.waterstyle = pipeType;
    const pipevheight = styleMap.CTS.height + deviceMargin.CTS - 10;
    pipev.props.style = {
      ...styleMap['v'],
      // height: pipevheight, // 调整管子的高度
      height: pipevheight + 1, // 调整管子的高度
      fill: EFAULT_PUMP_MAP[pipeType][0],
      translateX,
      translateY: fix(currenttower.translateY - deviceMargin.CTS - styleMap['CTS'].height * 0.5 - 10)
    };

    if (i === 0) {
      // 每一组总管多生成一个弯头连接头
      // pipev.props.style.height = 50;
      pipev.props.style.height = styleMap.v.height / 3 + styleMap.t.height / 2;
      // pipev.props.style.translateY = currenttower.translateY - 30;
      // 调整第一个竖管的位移 向上移动2px
      pipev.props.style.translateY = currenttower.translateY - 30 - 2;
      const connW2 = connector('w');
      connW2.props.style = {
        ...styleMap['w'],
        // translateX: fix(pipev.props.style.translateX - styleMap.v.width * 0.5),
        // translateY: fix(pipev.props.style.translateY - styleMap['w'].height - styleMap.h.height * 0.5),
        translateX: fix(pipev.props.style.translateX - styleMap.v.width * 0.5),
        translateY: fix(pipev.props.style.translateY - styleMap['w'].height) + 4,
        rotate: 270
      };
      result[pipev.id] = pipev;
      result[connW2.id] = connW2;
    } else {
      const connT = connector('t');
      connT.props.style = {
        ...styleMap['t'],
        translateX: fix(pipev.props.style.translateX - styleMap.v.width * 0.5),
        translateY: fix(currenttower.translateY - styleMap['CTS'].height * 0.66 - deviceMargin.CTS - 10) + 3,
        rotate: -90
      };
      result[connT.id] = connT;
    }
    // result[pipeh.id] = pipeh;
    result[pipev.id] = pipev;
  }
};

/**
 * 每个设备生成两个文本框
 * 冷机： 功率 P，电流百分比 I_PCT
 * 泵：频率 FREQ，功率 P
 * 塔： 频率 FREQ，功率 P
 */

export const generateText = ({ result, name, unit, percent, translateX, translateY, xAxis, yAxis }) => {
  const poc = statusText(percent, unit);
  // console.log(textTransform(resultMap, tag, other, index), '====>textTransform(resultMap, tag, other, index)');
  poc.props.style = {
    // ...commonTextStyle,
    ...textTransform({
      translateX,
      translateY,
      xAxis,
      yAxis
    })
  };
  poc.props.value = {
    bind: name?.NAME,
    type: 'points'
  };
  result[poc.id] = poc;
  // console.log(' poc.props.style: ',  poc.props.style);
};

export const generateTypoText = ({ result, resultMap, deviceName, xAxis = 0, yAxis = 0 }) => {
  const nameText = text();
  nameText.props.value = deviceName;
  nameText.props.style = {
    translateX: resultMap.props.style.translateX + xAxis,
    translateY: resultMap.props.style.translateY + resultMap.props.style.height + yAxis,
    fontSize: '12px'
  };
  result[nameText.id] = nameText;
  return {
    translateX: nameText.props.style.translateX,
    translateY: nameText.props.style.translateY
  };
};
/**
 * 系统属性 湿度
 */
export const generateSystemText = (result, source, tag, name) => {
  if (!name) return;
  const poc = statusText(false, '℃');
  poc.props.style = {
    // ...commonTextStyle,
    ...textSystemTransform(source, tag)
  };
  poc.props.value = {
    bind: name?.NAME,
    type: 'points'
  };
  result[poc.id] = poc;
};
