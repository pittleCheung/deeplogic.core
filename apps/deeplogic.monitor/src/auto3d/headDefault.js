import { contentstyle, txtstyle, btnstyle, colrowstyle } from './pageNodeDefault';
import { commonTextStyle } from './stylesDefault';
import { nanoid } from 'nanoid';
import { drawerid } from './pageDefault'
import {navigationButtonStyle} from './pageNodeDefault';
// import source from '../../source';
// import position from '@/pages/editor/components/setter/style/block/position';

export default (headid, parentbox, source, tag, allsource) => {
    const allArr = allsource && Object.values(allsource).map(t => ({
        "id": t.ID,
        "label": t.NAME,
        "key": t.ID,
        "disabled": false,
        "links": "",
        "name": t.NAME,
        "title": t.NAME
    }))
    return {
        [headid]: {
            "id": headid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                // "span": 24,
                "style": {
                    ...contentstyle,
                    "height": '60px',
                    "translateX": 0,
                    "translateY": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "flexWrap": "wrap",
                    "backgroundList": [
                        {
                            "id": "G56DBVl10R",
                            "type": "color",
                            "key": "G56DBVl10R",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": parentbox,
            "nodes": [
                "Qig2cA0j1y",
                "bkTsl7i0EA",
                "C-Drdz3ynO"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "Qig2cA0j1y": {
            "id": "Qig2cA0j1y",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 8,
                "style": {
                    ...contentstyle,
                    "backgroundList": [
                        {
                            "id": "G56DBVl10R",
                            "type": "color",
                            "key": "G56DBVl10R",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    flex:1,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "color": "rgb(255, 255, 255)",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start",
                    "paddingLeft": 8
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": headid,
            "nodes": [
                // "xUpAMbJesl"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "bkTsl7i0EA": {
            "id": "bkTsl7i0EA",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 8,
                "style": {
                    ...contentstyle,
                    "backgroundList": [
                        {
                            "id": "xTlfDmgn6Z",
                            "type": "color",
                            "key": "xTlfDmgn6Z",
                            "value": "#23263B",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 16
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": headid,
            "nodes": [
                
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        // "xUpAMbJesl": !tag ? {
        //     "id": "xUpAMbJesl",
        //     "type": {
        //         "resolvedName": "TypographyText"
        //     },
        //     "displayName": "TypographyText",
        //     "props": {
        //         "displayName": "Typography.Text",
        //         "value": "系统图",
        //         "style": {
        //             ...txtstyle,
        //             "paddingLeft": 15,
        //         }
        //     },
        //     "custom": {},
        //     "parent": "Qig2cA0j1y",
        //     "nodes": [],
        //     "linkedNodes": {},
        //     "hidden": false,
        //     "isCanvas": false
        // } : {
        //     "type": {
        //         "resolvedName": "Dropdown"
        //     },
        //     "isCanvas": true,
        //     "props": {
        //         "displayName": "Dropdown",
        //         "trigger": [
        //             "hover"
        //         ],
        //         "placement": "bottom",
        //         "children": "空压站房",
        //         "disabled": false,
        //         "arrow": true,
        //         "autoAdjustOverflow": true,
        //         "autoFocus": false,
        //         "destroyPopupOnHide": false,
        //         "menu": {
        //             "style": {
        //                 "maxWidth": 240
        //             },
        //             "items": allArr
        //         }
        //     },
        //     "displayName": "Dropdown",
        //     "custom": {},
        //     "parent": "Qig2cA0j1y",
        //     "hidden": false,
        //     "nodes": [],
        //     "linkedNodes": {}
        // },
        // "yiqQBrj5P6": {
        //     "id": "yiqQBrj5P6",
        //     "type": {
        //         "resolvedName": "Button"
        //     },
        //     "displayName": "Button",
        //     "props": {
        //         "children": "常规模式",
        //         "template": "default",
        //         "type": "default",
        //         "shape": "default",
        //         "htmlType": "button",
        //         "status": [
        //             {
        //                 "id": "zjDgmJ5hLa",
        //                 "label": "打开",
        //                 "value": "1",
        //                 "expression": {
        //                     "bind": source.MODE_SYS.NAME,
        //                     "type": "points",
        //                     "point": [source.MODE_SYS.NAME]
        //                 },
        //                 "color": "rgb(38,102,216)",
        //             },
        //             {
        //                 "id": "EGZ1WVT_gX",
        //                 "label": "关闭",
        //                 "value": "0",
        //                 "expression": {
        //                     "bind": source.MODE_SYS.NAME,
        //                     "type": "points",
        //                     "point": [source.MODE_SYS.NAME]
        //                 },
        //                 "color": "rgb(38, 38, 38)"
        //             }
        //         ],    
        //         "events": {
        //             "onClick": {
        //                 "action": "pushData",
        //                 "link": {
        //                     "component": source.MODE_SYS.NAME,
        //                     "value": "1"
        //                 }
        //             }
        //         },
        //         "style": {
        //             ...btnstyle,
        //             "translateX": 0,
        //             "translateY": 0,
        //             "marginTop": 0,
        //         },
        //         "displayName": "Button"
        //     },
        //     "custom": {},
        //     "parent": "bkTsl7i0EA",
        //     "nodes": [],
        //     "linkedNodes": {},
        //     "hidden": false,
        //     "isCanvas": false
        // },
        // "Ge30tZHeIq": {
        //     "id": "Ge30tZHeIq",
        //     "type": {
        //         "resolvedName": "Button"
        //     },
        //     "displayName": "Button",
        //     "props": {
        //         "children": "优化模式",
        //         "template": "default",
        //         "type": "default",
        //         "shape": "default",
        //         "status": [
        //             {
        //                 "id": "zjDgmJ5hLv",
        //                 "label": "打开",
        //                 "value": "2",
        //                 "expression": {
        //                     "bind": source.MODE_SYS.NAME,
        //                     "type": "points",
        //                 },
        //                 "color": "rgb(38,102,216)",
        //                 "name": "打开",
        //                 "title": "打开"
        //             },
        //             {
        //                 "id": "EGZ1WVT_gw",
        //                 "label": "关闭",
        //                 "value": "0",
        //                 "expression": {
        //                     "bind": source.MODE_SYS.NAME,
        //                     "type": "points",
        //                 },
        //                 "color": "rgb(38, 38, 38)"
        //             }
        //         ],  
        //         "events": {
        //             "onClick": {
        //                 "action": "pushData",
        //                 "link": {
        //                     "component": source.MODE_SYS.NAME,
        //                     "value": "2"
        //                 }
        //             }
        //         },
        //         "style": {
        //             ...btnstyle,
        //             "translateX": 0,
        //             "translateY": 0,
        //             "marginTop": 0,
        //         },
        //         "displayName": "Button"
        //     },
        //     "custom": {},
        //     "parent": "bkTsl7i0EA",
        //     "nodes": [],
        //     "linkedNodes": {},
        //     "hidden": false,
        //     "isCanvas": false
        // },
        "C-Drdz3ynO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 8,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "translateX": 0,
                    "translateY": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "backgroundList": [
                        {
                            "id": "bWxFxFYco2",
                            "type": "color",
                            "key": "bWxFxFYco2",
                            "value": "rgba(35, 38, 59, 1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": headid,
            "hidden": false,
            "nodes": [
                drawerid
            ],
            "linkedNodes": {}
        }
    }
}

const footItem = (footid, name, unit, point, type) => {
    const contentid = nanoid(10);
    const node1id = nanoid(10);
    return {
        id: contentid,
        page: {
            [contentid]: {
                "id": contentid,
                "type": {
                    "resolvedName": "Container"
                },
                "displayName": "Container",
                "props": {
                    "style": {
                        ...colrowstyle,
                        // "width": type ? '14%' : '15%',
                        // "justifyContent": "flex-start",
                        // "rowGap": 0,
                        // "columnGap": 0,
                        "minWidth":"200",
                        "display":"flex",
                        "width":"auto",
                        "marginRight":20

                    },
                    "displayName": "Container",
                },
                "custom": {},
                "parent": footid,
                "nodes": [node1id], //
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [node1id]: {
                "id": node1id,
                "type": {
                    "resolvedName": "NumeralText"
                },
                "isCanvas": false,
                "props": {
                    "displayName": "NumeralText",
                    "level": "5",
                    "decimalSeparator": 1,
                    "percent": false,
                    "value": {
                        "bind": point,
                        "type": "points"
                    },
                    "type": "",
                    "strong": false,
                    "italic": false,
                    "underline": false,
                    "disabled": false,
                    "mark": false,
                    "keyboard": false,
                    "delete": false,
                    "code": false,
                    "isBefore": true,
                    "isAfter": !!unit,
                    "before": {
                        "value": name + "：",
                        size: 18,
                    },
                    "after": {
                        "value": unit || '',
                        size: 14,
                    },
                    "style": {
                        "fontSize": "14px",
                        // ...commonTextStyle,
                    }
                },
                "displayName": "NumeralText",
                "custom": {},
                "parent": contentid,
                "hidden": false,
                "nodes": [],
                "linkedNodes": {}
            },
        }
    }
}

const wrapContainer = ({containerid,footid,ids}) => {
  return {
    id: containerid,
    page: {
      [containerid]: {
        id: containerid,
        type: {
          resolvedName: 'Container'
        },
        displayName: 'Container',
        props: {
          style: {
            display:'flex',
            position:'relative',
            left: '50%',
            transform: "translate(-50%, 10px)"
          },
          displayName: 'Container'
        },
        nodes: [...ids],
        parent: footid
      }
    }
  };
};
export const footDefault = (footid, parentbox, source, type) => {
  const containerid = nanoid(12);

    let arr = [];
    if (type === 'air') {
        arr = [
            footItem(footid, '气电比', null, source?.['R_AIR_COMP'].NAME, type),
            footItem(footid, '总功率', 'kW', source?.['P_PLANT'].NAME, type),
            footItem(footid, '排气压力', 'kPa', source?.['PR_DISCHARGE'].NAME, type),
            footItem(footid, '排气温度', 'kPa', source?.['T_DISCHARGE'].NAME, type),
            footItem(footid, '总管压力', 'kPa', source?.['PR_PLANT'].NAME, type),
            footItem(footid, '总管露点温度', '℃', source?.['T_DEW'].NAME, type),
            footItem(footid, '总管流量', 'Nm³', source?.['FLOW_PLANT_AIR'].NAME, type)
        ]
    } else {
        arr = [
            footItem(containerid, '系统冷负荷', 'kW', source?.['LOAD']?.NAME),
            footItem(containerid, '制冷站', 'kW', source?.['P_PLANT']?.NAME),
            footItem(containerid, '制冷站COP', null, source?.['COP_PLANT']?.NAME),
            // footItem(containerid, '制冷机', 'kW', source?.['P_CH_GROUP'].NAME),
            // footItem(containerid, '冷冻泵', 'kW', source?.['P_CHWP_GROUP'].NAME),
            // footItem(containerid, '冷却泵', 'kW', source?.['P_CWP_GROUP'].NAME),
            // footItem(containerid, '冷却塔', 'kW', source?.['P_CT_GROUP'].NAME)
        ]
    }
    const modelSelectId = nanoid(12)
    // 外面包一层盒子
    const wrap =  wrapContainer({
      containerid,
      footid,
      ids:[...arr?.map((t) => t.id)]
    });
    
    return {
      [footid]: {
        id: footid,
        type: {
          resolvedName: 'Container'
        },
        displayName: 'Container',
        props: {
          // "span": 24,
          style: {
            ...contentstyle,
            backgroundList: [
              {
                id: 'B4lopvwr9K',
                type: 'color',
                key: 'B4lopvwr9K',
                value: '#22263C',
                disabled: false
              }
            ],
            position: 'relative',
            display: 'flex'
          },
          displayName: 'Container'
        },
        custom: {},
        parent: parentbox,
        nodes: [wrap.id, modelSelectId], //arr?.map(t => t.id)
        linkedNodes: {},
        hidden: false,
        isCanvas: true
      },
      ...wrap.page,
      ...arr?.[0]?.page,
      ...arr?.[1]?.page,
      ...arr?.[2]?.page,
      ...arr?.[3]?.page,
      ...arr?.[4]?.page,
      ...arr?.[5]?.page,
      ...(arr?.[6]?.page || {}),
      [modelSelectId]: {
        id: modelSelectId,
        type: {
          resolvedName: 'Container'
        },
        displayName: 'Container',
        props: {
          style: {
            backgroundList: [
              {
                id: 'xTlfDmgn6Z',
                type: 'color',
                key: 'xTlfDmgn6Z',
                value: '#23263B',
                disabled: false
              }
            ],
            display: 'flex',
            position: 'absolute',
            right: 0,
            top: 10,
            boxShadow: '0px -4px 10px 0px rgba(0, 12, 18, 0.2)'
          }
        },
        custom: {},
        parent: footid,
        nodes: ['Ge30tZHeIq', 'yiqQBrj5P6'],
        linkedNodes: {},
        hidden: false,
        isCanvas: true
      },
      Ge30tZHeIq: {
        id: 'Ge30tZHeIq',
        type: {
          resolvedName: 'Button'
        },
        displayName: 'Button',
        props: {
          children: '优化模式',
          template: 'default',
          type: 'default',
          shape: 'default',
          status: [
            {
              id: 'zjDgmJ5hLv',
              label: '打开',
              value: '2',
              expression: {
                // bind: "${" + source?.['MODE_SYS']?.NAME + "}",
                bind: source?.['MODE_SYS']?.NAME,
                type: 'points'
              },
              color: 'rgb(38,102,216)',
              name: '打开',
              title: '打开'
            },
            {
              id: 'EGZ1WVT_gw',
              label: '关闭',
              value: '0',
              expression: {
                bind: source?.['MODE_SYS']?.NAME,
                type: 'points'
              },
              color: 'radial-gradient(194% 194% at 50% 164%, rgba(28, 91, 151, 0) 25%, #062B5F 100%)'
            }
          ],
          events: {
            onClick: {
              action: 'pushData',
              link: {
                component: source?.['MODE_SYS']?.NAME,
                value: '2'
              }
            }
          },
          style: {
            ...btnstyle,
            translateX: 0,
            translateY: 0,
            marginTop: 0,
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '5px 0px 0px 5px',
            background: 'radial-gradient(194% 194% at 50% 164%, rgba(28, 91, 151, 0) 25%, #062B5F 100%)',
            border: 'none'
          },
          displayName: 'Button',
          icon: 'icon-btn-ai'
        },
        custom: {},
        parent: 'bkTsl7i0EA',
        nodes: [],
        linkedNodes: {},
        hidden: false,
        isCanvas: false
      },
      yiqQBrj5P6: {
        id: 'yiqQBrj5P6',
        type: {
          resolvedName: 'Button'
        },
        displayName: 'Button',
        props: {
          children: '常规模式',
          template: 'default',
          type: 'default',
          shape: 'default',
          htmlType: 'button',
          status: [
            {
              id: 'zjDgmJ5hLa',
              label: '打开',
              value: '1',
              expression: {
                bind: source?.['MODE_SYS']?.NAME,
                type: 'points',
                // point: [source.MODE_SYS.NAME]
              },
              color: 'rgb(38,102,216)'
            },
            {
              id: 'EGZ1WVT_gX',
              label: '关闭',
              value: '0',
              expression: {
                bind: source?.['MODE_SYS']?.NAME,
                type: 'points',
                // point: [source.MODE_SYS.NAME]
              },
              color: 'radial-gradient(194% 194% at 50% 164%, rgba(28, 91, 151, 0) 25%, #062B5F 100%)'
            }
          ],
          events: {
            onClick: {
              action: 'pushData',
              link: {
                component: source?.MODE_SYS.NAME,
                value: '1'
              }
            }
          },
          style: {
            ...btnstyle,
            translateX: 0,
            translateY: 0,
            marginTop: 0,
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(194% 194% at 50% 164%, rgba(28, 91, 151, 0) 25%, #062B5F 100%)',
            border: 'none'
          },
          icon: 'icon-regular-high',
          displayName: 'Button'
        },
        custom: {},
        parent: 'bkTsl7i0EA',
        nodes: [],
        linkedNodes: {},
        hidden: false,
        isCanvas: false
      }
    };
}


export const bottomDefault = (bottomid,parentbox,source,links) => {
  return {
    [bottomid]: {
      id: bottomid,
      "type": {
          "resolvedName": "Container"
      },
      "isCanvas": true,
      "props": {
          "displayName": "Container",
          "gap": 0,
          "style": {
              "position": "relative",
              "width": "100%",
              "widthType": "relative",
              "heightType": "relative",
              "fontFamily": "Microsoft YaHei",
              "fontSize": 14,
              "fontWeight": 400,
              "lineHeight": 1.5,
              "textAlign": "left",
              "spacing": 0,
              "paddingSide": "all",
              "marginSide": "all",
              "padding": 0,
              "heightUnit": "%",
          }
      },
      "displayName": "Container",
      "custom": {},
      "parent": parentbox,
      "hidden": false,
      "nodes": [
        "yvp80M66Sr"
     ],
      "linkedNodes": {}
  },
   "yvp80M66Sr": {
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
                "height": "80px",
                "minHeight": "80px",
                "widthType": "relative",
                "heightType": "fixed",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "padding": 0,
                "heightUnit": "px",
                "paddingTop": 0,
                "paddingRight": 0,
                "paddingLeft": 0,
                "paddingBottom": 0,
                "display": "flex"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": bottomid,
        "hidden": false,
        "nodes": [
            "oqkr_D_x_r",
            "7g-1qjY2U0",
            "SquM_VWKnv",
            "tMKSg95JAI"
        ],
        "linkedNodes": {}
    },
    "oqkr_D_x_r": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 12,
            "style": {
                "position": "relative",
                "width": "180px",
                "height": "auto",
                "widthType": "fixed",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "widthUnit": "px",
                "display": "flex"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "yvp80M66Sr",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "7g-1qjY2U0": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 98,
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 6,
                "widthUnit": "%",
                "display": "flex",
                "flexDirection": "row",
                "key": "bottomCenter",
                "justifyContent": "center",
                "alignItems": "flex-end"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "yvp80M66Sr",
        "hidden": false,
        "nodes": [
            "HeIoc3CkxO",
            "rQ_XAZgNd9",
            "o0idd0B_3p",
            "l13s0F8q4U",
            "XUBHdrnvv8"
        ],
        "linkedNodes": {}
    },
    "HeIoc3CkxO": {
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
                "fontSize": 14,
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
        "parent": "7g-1qjY2U0",
        "hidden": false,
        "nodes": [
            "XofknF5ube"
        ],
        "linkedNodes": {}
    },
    "XofknF5ube": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "首页",
            "template": "navigation",
            "type": "default",
            "shape": "default",
            "icon": "icon-menu-home",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            events: {
              onClick: {
                action: 'navigateTo',
                "link": links[0]
              }
            },
            "style": navigationButtonStyle,
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "HeIoc3CkxO",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "rQ_XAZgNd9": {
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
                "fontSize": 14,
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
        "parent": "7g-1qjY2U0",
        "hidden": false,
        "nodes": [
            "fsft9jR_uX"
        ],
        "linkedNodes": {}
    },
    "fsft9jR_uX": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "监控",
            "template": "navigation",
            "type": "default",
            "shape": "default",
            "icon": "icon-menu-snow",
            "htmlType": "button",
            "isHighlight": "primary",
            "status": [],
            events: {
              onClick: {
                action: 'navigateTo',
                "link": links[1]
              }
            },
            "style": {
              ...navigationButtonStyle,
              fontWeight: 700
            },
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "rQ_XAZgNd9",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "o0idd0B_3p": {
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
                "fontSize": 14,
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
        "parent": "7g-1qjY2U0",
        "hidden": false,
        "nodes": [
            "-RWVCILkRl"
        ],
        "linkedNodes": {}
    },
    "-RWVCILkRl": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "能耗",
            "template": "navigation",
            "type": "default",
            "shape": "default",
            "icon": "icon-menu-energy",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            events: {
              onClick: {
                action: 'navigateTo',
                "link": links[2]
              }
            },
            "style": navigationButtonStyle,
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "o0idd0B_3p",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "l13s0F8q4U": {
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
                "fontSize": 14,
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
        "parent": "7g-1qjY2U0",
        "hidden": false,
        "nodes": [
            "ehixYd1aFD"
        ],
        "linkedNodes": {}
    },
    "ehixYd1aFD": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "报警",
            "template": "navigation",
            "type": "default",
            "shape": "default",
            "icon": "icon-menu-alarm",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            events: {
              onClick: {
                action: 'navigateTo',
                "link": links[3]
              }
            },
            "style": navigationButtonStyle,
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "l13s0F8q4U",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "XUBHdrnvv8": {
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
                "fontSize": 14,
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
        "parent": "7g-1qjY2U0",
        "hidden": false,
        "nodes": [
            "qqOU27SGiP"
        ],
        "linkedNodes": {}
    },
    "qqOU27SGiP": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "报表",
            "template": "navigation",
            "type": "default",
            "shape": "default",
            "icon": "icon-menu-report",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            events: {
              onClick: {
                action: 'navigateTo',
                "link": links[4]
              }
            },
            "style": navigationButtonStyle,
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "XUBHdrnvv8",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "SquM_VWKnv": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "flexDirection": "row",
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "paddingTop": 12,
                "paddingRight": 0,
                "paddingLeft": 12,
                "paddingBottom": 12
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "yvp80M66Sr",
        "hidden": false,
        "nodes": [
            "C89kipMFRN",
            "wFwn8NiRuw"
        ],
        "linkedNodes": {}
    },
    "C89kipMFRN": {
        "type": {
            "resolvedName": "GenericIcon"
        },
        "isCanvas": false,
        "props": {
            "displayName": "GenericIcon",
            "icon": "icon-icon-user",
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
        "parent": "SquM_VWKnv",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "wFwn8NiRuw": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "UserId",
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
                "fontSize": 18,
                "fontWeight": 400,
                "lineHeight": 1.1,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "rgba(217, 217, 217, 0.3)",
                "borderSide": "side",
                "borderRadius": 0,
                "borderTopWidth": 0,
                "borderRightWidth": 1,
                "borderLeftWidth": 0,
                "borderBottomWidth": 0,
                "paddingRight": 12
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "SquM_VWKnv",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "tMKSg95JAI": {
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
                "padding": 0,
                "paddingTop": 0,
                "paddingRight": 24,
                "paddingLeft": 0,
                "paddingBottom": 0,
                "display": "flex",
                "flexDirection": "row",
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "yvp80M66Sr",
        "hidden": false,
        "nodes": [
            "K569xjtztO"
        ],
        "linkedNodes": {}
    },
    "Q_Uh6XA1HJ": {
        "type": {
            "resolvedName": "GenericIcon"
        },
        "isCanvas": false,
        "props": {
            "displayName": "GenericIcon",
            "icon": "icon-icon-exit",
            "events": {
                "onClick": {
                    "action": "logout"
                }
            },
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
        "parent": "tMKSg95JAI",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "K569xjtztO": {
        "type": {
            "resolvedName": "Dropdown"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Dropdown",
            "trigger": [
                "hover"
            ],
            "placement": "bottom",
            "children": "",
            "icon": "icon-icon-exit",
            "disabled": false,
            "arrow": true,
            "autoAdjustOverflow": true,
            "autoFocus": false,
            "destroyPopupOnHide": false,
            "menu": {
                "style": {
                    "maxWidth": 240
                },
                "items": [
                    {
                        "id": "1",
                        "label": "系统配置",
                        "key": "1",
                        "disabled": false,
                        "links": {
                            "action": "link",
                            "link": {
                                "href": `http://${location.hostname}:${location.port}`
                            }
                        },
                    },
                    {
                        "id": "2",
                        "label": "退出",
                        "key": "2",
                        "disabled": false,
                        "links": {
                            "action": "logout"
                        },
                        "name": "退出",
                        "title": "退出"
                    }
                ]
            }
        },
        "displayName": "Dropdown",
        "custom": {},
        "parent": "tMKSg95JAI",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    }
}
}
