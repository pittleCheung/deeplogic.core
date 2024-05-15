import { contentstyle, txtstyle, btnstyle, colrowstyle } from './pageNodeDefault';
import { commonTextStyle } from './stylesDefault';
import { nanoid } from 'nanoid';
import { drawerid } from './pageDefault'
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
                    "height": '48px',
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
                "bkTsl7i0EB",
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
        "bkTsl7i0EB": {
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
                    "size": "",
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
                        "value": name + "："
                    },
                    "after": {
                        "value": unit || ''
                    },
                    "style": {
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
            footItem(footid, '气电比', null, source?.['R_AIR_COMP']?.NAME, type),
            footItem(footid, '总功率', 'kW', source?.['P_PLANT']?.NAME, type),
            footItem(footid, '排气压力', 'kPa', source?.['PR_DISCHARGE']?.NAME, type),
            footItem(footid, '排气温度', 'kPa', source?.['T_DISCHARGE']?.NAME, type),
            footItem(footid, '总管压力', 'kPa', source?.['PR_PLANT']?.NAME, type),
            footItem(footid, '总管露点温度', '℃', source?.['T_DEW']?.NAME, type),
            footItem(footid, '总管流量', 'Nm³', source?.['FLOW_PLANT_AIR']?.NAME, type)
        ]
    } else {
        arr = [
            footItem(containerid, '制冷站COP', null, source?.['COP_PLANT']?.NAME),
            footItem(containerid, '制冷站', 'kW', source?.['P_PLANT']?.NAME),
            footItem(containerid, '制冷机', 'kW', source?.['P_CH_GROUP']?.NAME),
            footItem(containerid, '冷冻泵', 'kW', source?.['P_CHWP_GROUP']?.NAME),
            footItem(containerid, '冷却泵', 'kW', source?.['P_CWP_GROUP']?.NAME),
            footItem(containerid, '冷却塔', 'kW', source?.['P_CT_GROUP']?.NAME)
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
      ...arr[0].page,
      ...arr[1].page,
      ...arr[2].page,
      ...arr[3].page,
      ...arr[4].page,
      ...arr[5].page,
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
                bind: source.MODE_SYS.NAME,
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
                bind: source.MODE_SYS.NAME,
                type: 'points'
              },
              color: 'rgb(38, 38, 38)'
            }
          ],
          events: {
            onClick: {
              action: 'pushData',
              link: {
                component: source.MODE_SYS.NAME,
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
            width: 100,
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
                bind: source.MODE_SYS.NAME,
                type: 'points',
                point: [source.MODE_SYS.NAME]
              },
              color: 'rgb(38,102,216)'
            },
            {
              id: 'EGZ1WVT_gX',
              label: '关闭',
              value: '0',
              expression: {
                bind: source.MODE_SYS.NAME,
                type: 'points',
                point: [source.MODE_SYS.NAME]
              },
              color: 'rgb(38, 38, 38)'
            }
          ],
          events: {
            onClick: {
              action: 'pushData',
              link: {
                component: source.MODE_SYS.NAME,
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
            width: 100,
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
        type: {
          resolvedName: 'Columns'
        },
        isCanvas: true,
        props: {
          displayName: 'Columns',
          columns: 3,
          align: 'top',
          justify: 'start',
          wrap: false,
          style: {
            position: 'relative',
            width: '100%',
            height: 80,
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'side',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 4,
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 0,
            marginTop: 0
          }
        },
        displayName: 'Columns',
        custom: {},
        parent: parentbox,
        hidden: false,
        nodes: ['VUdfeVWXBI', 'ljr0EKwaNF', 'fA4by4U3b6'],
        linkedNodes: {}
      },
      VUdfeVWXBI: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'Io8ACnpHuf',
        hidden: false,
        nodes: ['wIHLoR35VO'],
        linkedNodes: {}
      },
      wIHLoR35VO: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          id: 'col-0',
          span: 4,
          style: {
            heightType: 'fixed',
            height: '40px',
            heightUnit: 'px',
            paddingSide: 'all',
            paddingTop: 8,
            paddingRight: 8,
            paddingLeft: 8,
            paddingBottom: 8,
            padding: 0
          }
        },
        displayName: 'Col',
        custom: {},
        parent: 'VUdfeVWXBI',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      ljr0EKwaNF: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'Io8ACnpHuf',
        hidden: false,
        nodes: ['4ZDgx8MwC6'],
        linkedNodes: {}
      },
      '4ZDgx8MwC6': {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          id: 'col-1',
          span: 16
        },
        displayName: 'Col',
        custom: {},
        parent: 'ljr0EKwaNF',
        hidden: false,
        nodes: ['gsF1PNfUG5'],
        linkedNodes: {}
      },
      gsF1PNfUG5: {
        type: {
          resolvedName: 'Columns'
        },
        isCanvas: true,
        props: {
          displayName: 'Columns',
          columns: 5,
          align: 'middle',
          gutter: 12,
          justify: 'end',
          wrap: false,
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
        displayName: 'Columns',
        custom: {},
        parent: '4ZDgx8MwC6',
        hidden: false,
        nodes: ['Fh84wDBuYB', 'a0hVBozvKY', 'HC7q0VbtSX', '3WqG3vU3QK', 'wdiNiazjtj'],
        linkedNodes: {}
      },
      Fh84wDBuYB: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'gsF1PNfUG5',
        hidden: false,
        nodes: ['otKugVrt6G'],
        linkedNodes: {}
      },
      otKugVrt6G: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          type: 'span',
          span: 5,
          flex: '',
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'unset',
            backgroundList: []
          },
          id: 'col-0'
        },
        displayName: 'Col',
        custom: {},
        parent: 'Fh84wDBuYB',
        hidden: false,
        nodes: ['XT6v_yHZLK'],
        linkedNodes: {}
      },
      XT6v_yHZLK: {
        type: {
          resolvedName: 'Button'
        },
        isCanvas: false,
        props: {
          children: '首页',
          template: 'navigation',
          type: 'default',
          shape: 'default',
          icon: 'icon-menu-home',
          htmlType: 'button',
          isHighlight: 'default',
          status: [],
          events: {
            onClick: {
              action: 'navigateTo',
              "link": links[0]
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 4,
            paddingTop: 4,
            paddingRight: 15,
            paddingBottom: 4,
            paddingLeft: 15
          },
          displayName: 'Button'
        },
        displayName: 'Button',
        custom: {},
        parent: 'otKugVrt6G',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      a0hVBozvKY: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'gsF1PNfUG5',
        hidden: false,
        nodes: ['MClEHUO0XZ'],
        linkedNodes: {}
      },
      MClEHUO0XZ: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          type: 'span',
          span: 5,
          flex: '',
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'unset',
            backgroundList: []
          },
          id: 'col-1'
        },
        displayName: 'Col',
        custom: {},
        parent: 'a0hVBozvKY',
        hidden: false,
        nodes: ['Dnj9ZRXHIy'],
        linkedNodes: {}
      },
      Dnj9ZRXHIy: {
        type: {
          resolvedName: 'Button'
        },
        isCanvas: false,
        props: {
          children: '监控',
          template: 'navigation',
          type: 'link',
          shape: 'default',
          icon: 'icon-menu-snow',
          htmlType: 'button',
          isHighlight: 'primary',
          status: [],
          events: {
            onClick: {
              action: 'navigateTo',
              "link": links[1]
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 4,
            paddingTop: 4,
            paddingRight: 15,
            paddingBottom: 4,
            paddingLeft: 15
          },
          displayName: 'Button'
        },
        displayName: 'Button',
        custom: {},
        parent: 'MClEHUO0XZ',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      HC7q0VbtSX: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'gsF1PNfUG5',
        hidden: false,
        nodes: ['9UO7EIrN9Q'],
        linkedNodes: {}
      },
      '9UO7EIrN9Q': {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          type: 'span',
          span: 5,
          flex: '',
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'unset',
            backgroundList: []
          },
          id: 'col-2'
        },
        displayName: 'Col',
        custom: {},
        parent: 'HC7q0VbtSX',
        hidden: false,
        nodes: ['MWmcBEHlMg'],
        linkedNodes: {}
      },
      MWmcBEHlMg: {
        type: {
          resolvedName: 'Button'
        },
        isCanvas: false,
        props: {
          children: '能耗',
          template: 'navigation',
          type: 'link',
          shape: 'default',
          icon: 'icon-menu-energy',
          htmlType: 'button',
          isHighlight: 'default',
          status: [],
          events: {
            onClick: {
              action: 'navigateTo',
              "link": links[2]
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 4,
            paddingTop: 4,
            paddingRight: 15,
            paddingBottom: 4,
            paddingLeft: 15
          },
          displayName: 'Button'
        },
        displayName: 'Button',
        custom: {},
        parent: '9UO7EIrN9Q',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      '3WqG3vU3QK': {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'gsF1PNfUG5',
        hidden: false,
        nodes: ['anQKGZLaZa'],
        linkedNodes: {}
      },
      anQKGZLaZa: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          type: 'span',
          span: 5,
          flex: '',
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'unset',
            backgroundList: []
          },
          id: 'col-3'
        },
        displayName: 'Col',
        custom: {},
        parent: '3WqG3vU3QK',
        hidden: false,
        nodes: ['yBku64-z68'],
        linkedNodes: {}
      },
      'yBku64-z68': {
        type: {
          resolvedName: 'Button'
        },
        isCanvas: false,
        props: {
          children: '报警',
          template: 'navigation',
          type: 'default',
          shape: 'default',
          icon: 'icon-menu-alarm',
          htmlType: 'button',
          isHighlight: 'default',
          status: [],
          events: {
            onClick: {
              action: 'navigateTo',
              "link": links[3]
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 4,
            paddingTop: 4,
            paddingRight: 15,
            paddingBottom: 4,
            paddingLeft: 15
          },
          displayName: 'Button'
        },
        displayName: 'Button',
        custom: {},
        parent: 'anQKGZLaZa',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      wdiNiazjtj: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'gsF1PNfUG5',
        hidden: false,
        nodes: ['Q8TBXKBhfz'],
        linkedNodes: {}
      },
      Q8TBXKBhfz: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          type: 'span',
          span: 4,
          flex: '',
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'unset',
            backgroundList: []
          },
          id: 'col-4'
        },
        displayName: 'Col',
        custom: {},
        parent: 'wdiNiazjtj',
        hidden: false,
        nodes: ['0TxiBbsyg-'],
        linkedNodes: {}
      },
      '0TxiBbsyg-': {
        type: {
          resolvedName: 'Button'
        },
        isCanvas: false,
        props: {
          children: '报表',
          template: 'navigation',
          type: 'default',
          shape: 'default',
          icon: 'icon-menu-report',
          htmlType: 'button',
          isHighlight: 'default',
          status: [],
          events: {
            onClick: {
              action: 'navigateTo',
              "link": links[4]
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 4,
            paddingTop: 4,
            paddingRight: 15,
            paddingBottom: 4,
            paddingLeft: 15
          },
          displayName: 'Button'
        },
        displayName: 'Button',
        custom: {},
        parent: 'Q8TBXKBhfz',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      fA4by4U3b6: {
        type: {
          resolvedName: 'CustomNode'
        },
        isCanvas: false,
        props: {},
        displayName: 'CustomNode',
        custom: {},
        parent: 'Io8ACnpHuf',
        hidden: false,
        nodes: ['BktNYBedtf'],
        linkedNodes: {}
      },
      BktNYBedtf: {
        type: {
          resolvedName: 'Col'
        },
        isCanvas: true,
        props: {
          id: 'col-2',
          span: 4,
          style: {
            display: 'flex',
            flexDirection: 'row',
            key: 'centerRight',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 24,
            paddingSide: 'side',
            paddingTop: 0,
            paddingRight: 8,
            paddingLeft: 24,
            paddingBottom: 0
          }
        },
        displayName: 'Col',
        custom: {},
        parent: 'fA4by4U3b6',
        hidden: false,
        nodes: ['eyH_wTfsX-', 'prWlgikaM0', 'YYSn8f4pxz', '9SaD63mKm1'],
        linkedNodes: {}
      },
      'eyH_wTfsX-': {
        type: {
          resolvedName: 'Container'
        },
        isCanvas: true,
        props: {
          displayName: 'Container',
          style: {
            position: 'relative',
            width: '37px',
            height: 34,
            widthType: 'fixed',
            heightType: 'fixed',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 8,
            widthUnit: 'px',
            heightUnit: 'px',
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
            paddingRight: 0,
            paddingLeft: 8,
            paddingBottom: 8
          }
        },
        displayName: 'Container',
        custom: {},
        parent: 'BktNYBedtf',
        hidden: false,
        nodes: ['vjhT4R7ASK'],
        linkedNodes: {}
      },
      vjhT4R7ASK: {
        type: {
          resolvedName: 'GenericIcon'
        },
        isCanvas: false,
        props: {
          displayName: 'GenericIcon',
          icon: 'UserOutlined',
          events: {},
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all'
          }
        },
        displayName: 'GenericIcon',
        custom: {},
        parent: 'eyH_wTfsX-',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      prWlgikaM0: {
        type: {
          resolvedName: 'Container'
        },
        isCanvas: true,
        props: {
          displayName: 'Container',
          style: {
            position: 'relative',
            width: '50px',
            height: '34px',
            widthType: 'fixed',
            heightType: 'fixed',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            padding: 8,
            widthUnit: 'px',
            heightUnit: 'px',
            paddingTop: 8,
            paddingRight: null,
            paddingLeft: 0,
            paddingBottom: 8
          }
        },
        displayName: 'Container',
        custom: {},
        parent: 'BktNYBedtf',
        hidden: false,
        nodes: ['W-6PcJKgUq'],
        linkedNodes: {}
      },
      'W-6PcJKgUq': {
        type: {
          resolvedName: 'TypographyText'
        },
        isCanvas: false,
        props: {
          displayName: 'Typography.Text',
          value: {
            bind: 'UserId',
            type: 'global'
          },
          status: [],
          events: {},
          style: {
            position: 'relative',
            width: '80%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            color: 'rgba(170, 175, 209, 0.6)'
          }
        },
        displayName: 'TypographyText',
        custom: {},
        parent: 'prWlgikaM0',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      YYSn8f4pxz: {
        type: {
          resolvedName: 'Container'
        },
        isCanvas: true,
        props: {
          displayName: 'Container',
          style: {
            position: 'relative',
            width: 19,
            height: 43,
            widthType: 'fixed',
            heightType: 'fixed',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            widthUnit: 'px',
            heightUnit: 'px',
            display: 'flex',
            flexDirection: 'row',
            key: 'centerCenter',
            justifyContent: 'center',
            alignItems: 'center'
          }
        },
        displayName: 'Container',
        custom: {},
        parent: 'BktNYBedtf',
        hidden: false,
        nodes: ['1UKidkzVjS'],
        linkedNodes: {}
      },
      '1UKidkzVjS': {
        type: {
          resolvedName: 'Divider'
        },
        isCanvas: true,
        props: {
          displayName: 'Divider',
          type: 'vertical',
          orientation: 'center',
          children: '',
          orientationMargin: 8,
          dashed: false,
          plain: false
        },
        displayName: 'Divider',
        custom: {},
        parent: 'YYSn8f4pxz',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      '9SaD63mKm1': {
        type: {
          resolvedName: 'Container'
        },
        isCanvas: true,
        props: {
          displayName: 'Container',
          style: {
            position: 'relative',
            width: 36,
            height: 38,
            widthType: 'fixed',
            heightType: 'fixed',
            fontFamily: 'PingFang SC',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'all',
            marginSide: 'all',
            padding: 8,
            widthUnit: 'px',
            heightUnit: 'px'
          }
        },
        displayName: 'Container',
        custom: {},
        parent: 'BktNYBedtf',
        hidden: false,
        nodes: ['5xjMIwoc1-'],
        linkedNodes: {}
      },
      '5xjMIwoc1-': {
        type: {
          resolvedName: 'GenericIcon'
        },
        isCanvas: false,
        props: {
          displayName: 'GenericIcon',
          icon: 'icon-icon-exit',
          events: {
            onClick: {
              action: 'logout'
            }
          },
          style: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            widthType: 'relative',
            heightType: 'fit-content',
            fontFamily: 'PingFang SC',
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'left',
            spacing: 0,
            paddingSide: 'side',
            marginSide: 'all',
            paddingTop: 4
          }
        },
        displayName: 'GenericIcon',
        custom: {},
        parent: '9SaD63mKm1',
        hidden: false,
        nodes: [],
        linkedNodes: {}
      }
    };

}
