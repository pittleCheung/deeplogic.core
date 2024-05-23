/**
 * 生成监控页面默认
 */
import { nanoid } from 'nanoid';
import { contentstyle, colstyle, btnstyle, txtstyle, contentflexstyle, colnoflex, colrowstyle, textborderstyle, titlestyle } from './pageNodeDefault';
import { drawthree, drawmap, drawtwo, drwacontrol, ariMap } from './pageNodeDefault';
export const drawerid = nanoid(10);

export const pageDefault = (parentbox, boxid, headid, footid, bottomid) => {
    return {
        id: parentbox,
        type: {
            resolvedName: 'Container'
        },
        displayName: 'Container',
        props: {
            span: 24,
            style: {
                ...colstyle,
                padding: 0,
                // height: '100%',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                // flexDirection: 'row',
                key: 'topLeft',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                rowGap: 0,
                columnGap: 0,
                flexWrap: 'wrap'
            },
            displayName: 'Container'
        },
        parent: 'ROOT',
        nodes: [
            footid,
            headid,
            // drawerid,
            boxid,
            bottomid
        ],
        linkedNodes: {},
        hidden: false,
        isCanvas: true
    };
};


// export const pageDefault = (parentbox, boxid, headid, footid, bottomid) => {
//     const container = {
//       id: parentbox,
//       type: {
//         resolvedName: 'Columns'
//       },
//       isCanvas: true,
//       props: {
//         displayName: 'Columns',
//         columns: 3,
//         wrap: false,
//         style: {
//           position: 'relative',
//           width: '100%',
//           height: '100vh',
//           widthType: 'relative',
//           heightType: 'viewport',
//           fontFamily: 'Microsoft YaHei',
//           fontSize: 14,
//           fontWeight: 400,
//           lineHeight: 1.5,
//           textAlign: 'left',
//           spacing: 0,
//           paddingSide: 'all',
//           marginSide: 'all',
//           padding: null,
//           display: 'flex',
//           flexDirection: 'column',
//           rowGap: 0,
//           columnGap: 0,
//           heightUnit: 'vh'
//         }
//       },
//       displayName: 'Columns',
//       custom: {},
//       parent: 'ROOT',
//       hidden: false,
//       nodes: ['f8aJwz8fVk', 'AmQ25CxoFQ', 'b2-mJavExG'],
//       linkedNodes: {}
//     }; 
//     const LayoutArea = {
//       f8aJwz8fVk: {
//         type: {
//           resolvedName: 'CustomNode'
//         },
//         isCanvas: false,
//         props: {},
//         displayName: 'CustomNode',
//         custom: {},
//         parent: parentbox,
//         hidden: false,
//         nodes: ['ajDPGISxZj'],
//         linkedNodes: {}
//       },
//       ajDPGISxZj: {
//         type: {
//           resolvedName: 'Col'
//         },
//         isCanvas: true,
//         props: {
//           id: 'col-0',
//           span: 8,
//           type: 'flex',
//           style: {
//             heightType: 'fixed',
//             height: '100px',
//             heightUnit: 'px'
//           }
//         },
//         displayName: 'Col',
//         custom: {},
//         parent: 'f8aJwz8fVk',
//         hidden: false,
//         nodes: [footid, headid],
//         linkedNodes: {}
//       },
//       AmQ25CxoFQ: {
//         type: {
//           resolvedName: 'CustomNode'
//         },
//         isCanvas: false,
//         props: {},
//         displayName: 'CustomNode',
//         custom: {},
//         parent: 'nIlD89X7T2',
//         hidden: false,
//         nodes: ['wfY-vzbQQD'],
//         linkedNodes: {}
//       },
//       'wfY-vzbQQD': {
//         type: {
//           resolvedName: 'Col'
//         },
//         isCanvas: true,
//         props: {
//           id: 'col-1',
//           span: 8,
//           type: 'flex',
//           flex: 'auto',
//           style: {
//             heightType: 'relative',
//             height: '100%',
//             heightUnit: '%',
//             overflow: 'auto'
//           }
//         },
//         displayName: 'Col',
//         custom: {},
//         parent: 'AmQ25CxoFQ',
//         hidden: false,
//         nodes: [boxid],
//         linkedNodes: {}
//       },
//       'b2-mJavExG': {
//         type: {
//           resolvedName: 'CustomNode'
//         },
//         isCanvas: false,
//         props: {},
//         displayName: 'CustomNode',
//         custom: {},
//         parent: 'nIlD89X7T2',
//         hidden: false,
//         nodes: ['9N7wy0LAWt'],
//         linkedNodes: {}
//       },
//       '9N7wy0LAWt': {
//         type: {
//           resolvedName: 'Col'
//         },
//         isCanvas: true,
//         props: {
//           id: 'col-2',
//           span: 8,
//           type: 'flex',
//           style: {
//             heightType: 'fixed',
//             height: '100px',
//             heightUnit: 'px'
//           }
//         },
//         displayName: 'Col',
//         custom: {},
//         parent: 'b2-mJavExG',
//         hidden: false,
//         nodes: [bottomid],
//         linkedNodes: {}
//       }
//     };


//     return {
//         ...container,
//         ...LayoutArea
//     }
// };
// 能耗能效反馈
const efficiencyTab = (parentid, source) => {
    return {
        "WjE5WGRXQ8": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "span": 24,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "translateX": 0,
                    "translateY": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": parentid,
            "hidden": false,
            "nodes": [
                "23QzGz-y2q",
                "wXdPhSCitj",
                "zcAz3tuKp_",
                "pDjq40AL8X",
                "eqGr_o4d0r",
                "n0TzbNA-cV"
            ],
            "linkedNodes": {}
        },
        "23QzGz-y2q": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "P_qeNHeIlb",
                "pC99J0R3lu",
                "a-Ex5Ukuyh"
            ],
            "linkedNodes": {}
        },
        "P_qeNHeIlb": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "",
                    "flexDirection": "",
                    "key": "centerCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": ""
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "23QzGz-y2q",
            "hidden": false,
            "nodes": [
                "0MCUgHjsPY"
            ],
            "linkedNodes": {}
        },
        "0MCUgHjsPY": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设备",
                "status": [],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "P_qeNHeIlb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pC99J0R3lu": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "23QzGz-y2q",
            "hidden": false,
            "nodes": [
                "VxG37agh0l"
            ],
            "linkedNodes": {}
        },
        "VxG37agh0l": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "功率（kw）",
                "status": [],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "pC99J0R3lu",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "a-Ex5Ukuyh": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "23QzGz-y2q",
            "hidden": false,
            "nodes": [
                "xFU1lGOnvf"
            ],
            "linkedNodes": {}
        },
        "xFU1lGOnvf": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "COP",
                "status": [],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "a-Ex5Ukuyh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wXdPhSCitj": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "i-P8asrp5U",
                "1Y133yS6xT",
                "1K3DfyHX9M"
            ],
            "linkedNodes": {}
        },
        "i-P8asrp5U": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "wXdPhSCitj",
            "hidden": false,
            "nodes": [
                "ayaRWC5ToP"
            ],
            "linkedNodes": {}
        },
        "ayaRWC5ToP": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷机",
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "i-P8asrp5U",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1Y133yS6xT": {
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "wXdPhSCitj",
            "hidden": false,
            "nodes": [
                "5s-uhEO1jf"
            ],
            "linkedNodes": {}
        },
        "5s-uhEO1jf": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.['P_CH_GROUP'].NAME,
                    "type": "points",
                    "point": [
                        source?.['P_CH_GROUP'].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "1Y133yS6xT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1K3DfyHX9M": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "wXdPhSCitj",
            "hidden": false,
            "nodes": [
                "HsKhSj6jmO"
            ],
            "linkedNodes": {}
        },
        "HsKhSj6jmO": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["COP_CH_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["COP_CH_GROUP"].NAME,
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "1K3DfyHX9M",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zcAz3tuKp_": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "SGOfPX7_dE",
                "iEPayRloE5",
                "M0mIxYXins"
            ],
            "linkedNodes": {}
        },
        "SGOfPX7_dE": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zcAz3tuKp_",
            "hidden": false,
            "nodes": [
                "oUi_dh13NZ"
            ],
            "linkedNodes": {}
        },
        "oUi_dh13NZ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷冻泵",
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "SGOfPX7_dE",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "iEPayRloE5": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zcAz3tuKp_",
            "hidden": false,
            "nodes": [
                "7BPa_WC4ki"
            ],
            "linkedNodes": {}
        },
        "7BPa_WC4ki": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.['P_CHWP_GROUP'].NAME,
                    "type": "points",
                    "point": [
                        source?.['P_CHWP_GROUP'].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "iEPayRloE5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "M0mIxYXins": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zcAz3tuKp_",
            "hidden": false,
            "nodes": [
                "N4qyaMXcZl"
            ],
            "linkedNodes": {}
        },
        "N4qyaMXcZl": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["COP_CHWP_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["COP_CHWP_GROUP"].NAME,
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "M0mIxYXins",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pDjq40AL8X": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "dXHcX3-e17",
                "-wR_zqWU2U",
                "aQcpccMEHk"
            ],
            "linkedNodes": {}
        },
        "dXHcX3-e17": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pDjq40AL8X",
            "hidden": false,
            "nodes": [
                "hP2NXzQAvm"
            ],
            "linkedNodes": {}
        },
        "hP2NXzQAvm": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷却泵",
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "dXHcX3-e17",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "-wR_zqWU2U": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pDjq40AL8X",
            "hidden": false,
            "nodes": [
                "msLYyvGADW"
            ],
            "linkedNodes": {}
        },
        "msLYyvGADW": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind":  source?.["P_CWP_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["P_CWP_GROUP"].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "-wR_zqWU2U",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "aQcpccMEHk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pDjq40AL8X",
            "hidden": false,
            "nodes": [
                "12IFioi8kD"
            ],
            "linkedNodes": {}
        },
        "12IFioi8kD": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["COP_CWP_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["COP_CWP_GROUP"].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "aQcpccMEHk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "eqGr_o4d0r": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "YtoF3Ycx0y",
                "1hf0xBOe73",
                "rmjo2jBJuI"
            ],
            "linkedNodes": {}
        },
        "YtoF3Ycx0y": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "eqGr_o4d0r",
            "hidden": false,
            "nodes": [
                "rIRNA4btUA"
            ],
            "linkedNodes": {}
        },
        "rIRNA4btUA": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷却塔",
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "YtoF3Ycx0y",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1hf0xBOe73": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "eqGr_o4d0r",
            "hidden": false,
            "nodes": [
                "AEt8QHWC1z"
            ],
            "linkedNodes": {}
        },
        "AEt8QHWC1z": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["P_CT_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["P_CT_GROUP"].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "1hf0xBOe73",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rmjo2jBJuI": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "eqGr_o4d0r",
            "hidden": false,
            "nodes": [
                "ZFQURXX-cN"
            ],
            "linkedNodes": {}
        },
        "ZFQURXX-cN": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["COP_CT_GROUP"].NAME,
                    "type": "points",
                    "point": [
                        source?.["COP_CT_GROUP"].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "rmjo2jBJuI",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "n0TzbNA-cV": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "WjE5WGRXQ8",
            "hidden": false,
            "nodes": [
                "twZnMhcZpk",
                "uQvXtg25Mj",
                "syQi1VakX8"
            ],
            "linkedNodes": {}
        },
        "twZnMhcZpk": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 9,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "n0TzbNA-cV",
            "hidden": false,
            "nodes": [
                "KN-PA2th7K"
            ],
            "linkedNodes": {}
        },
        "KN-PA2th7K": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "制冷站",
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "twZnMhcZpk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "uQvXtg25Mj": {
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "n0TzbNA-cV",
            "hidden": false,
            "nodes": [
                "9GIQPHr2yH"
            ],
            "linkedNodes": {}
        },
        "9GIQPHr2yH": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind": source?.["P_PLANT"].NAME,
                    "type": "points",
                    "point": [
                        source?.["P_PLANT"].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "uQvXtg25Mj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "syQi1VakX8": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "n0TzbNA-cV",
            "hidden": false,
            "nodes": [
                "u8Zr5Ul-Pk"
            ],
            "linkedNodes": {}
        },
        "u8Zr5Ul-Pk": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "value": {
                    "bind":  source?.['COP_PLANT'].NAME,
                    "type": "points",
                    "point": [
                         source?.['COP_PLANT'].NAME
                    ]
                },
                "decimalSeparator": 1,
                "percent": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "Kw"
                },
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
                    "color": "rgba(74, 173, 100, 1)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "syQi1VakX8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}
export const pageLayout = (parentid, source, tag) => {
    const drawerbtnid = nanoid(10);
    const drawercontentid = nanoid(10);
    const drawertitleid = nanoid(10);
    const drawertitlechildid = nanoid(10);
    const drawercontentchildid = nanoid(10);
    const tab1 = nanoid(10);
    const tab2 = nanoid(10);
    const tab3 = nanoid(10);
    const settingparent = nanoid(10); // 优化边界设置
    const openparent = nanoid(10); // 优化参数开关盒子
    const controlparent = nanoid(10); // 控制参数
    const drawMap = drawmap();
    const setting = Array(7).fill(1).map((_, i) => {
        return drawthree(settingparent, tag ? ariMap[2]?.[i] : drawMap[i], source)
    });
    const open = Array(tag ? 8 : 7).fill(1).map((_, i) => {
        return drawtwo(openparent, tag ? ariMap[1]?.[i] : drawMap[i], source)
    });
    const control = Array(tag ? 8 : 7).fill(1).map((_, i) => {
        return drwacontrol(controlparent, tag ? ariMap[0]?.[i] : drawMap[i], source)
    });

    return {
        [drawerid]: {
            "id": drawerid,
            "type": {
                "resolvedName": "Drawer"
            },
            "displayName": "Drawer",
            "props": {
                "width": 378,
                "height": 378,
                "placement": "right",
                "size": "default",
                "isTitle": false,
                "isFooter": false,
                "mask": true,
                "isExtra": false,
                "closable": false,
                "maskClosable": true,
                "displayName": "Drawer",
                "style": {
                    "translateX": 0,
                    "translateY": 0,
                },
                "getContainer": "body",
                paddingTop: 0
            },
            "custom": {},
            "parent": parentid,
            "nodes": [],
            "linkedNodes": {
                "drawer-button": drawerbtnid,
                "drawer-title": drawertitleid,
                "drawer-content": drawercontentid
            },
            "hidden": false,
            "isCanvas": true
        },
        [drawerbtnid]: {
            "id": drawerbtnid,
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "",
                "icon": "icon-icon-log",
                "template": "default",
                "type": "text",
                "shape": "default",
                "events": {},
                "style": {
                    ...btnstyle,
                    "position": 'absolute',
                    "right": '0px',
                    'top': '4px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    "borderRadius": "5px 0 0 5px",
                    border: 'none',
                    background: "radial-gradient(194% 194% at 50% 164%, rgba(28, 91, 151, 0) 25%, #062B5F 100%)",
                    borderImage: "linear-gradient(66deg, rgba(255, 255, 255, 0.19) 3%, rgba(255, 255, 255, 0.02) 95%)",
                    width: "64px",
                    height: "42px",
                    marginTop: 16,

                }
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [drawertitleid]: {
            "id": drawertitleid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [
                drawertitlechildid
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [drawercontentid]: {
            "id": drawercontentid,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle
            },
            "custom": {},
            "parent": drawerid,
            "nodes": [
                drawercontentchildid
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        // 抽屉标题
        [drawertitlechildid]: {
            "id": drawertitlechildid,
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                // "value": "优化配置",
                "value": "",
                // "style": textborderstyle
            },
            "custom": {},
            "parent": drawertitleid,
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        // 抽屉 tabs
        [drawercontentchildid]: {
            "id": drawercontentchildid,
            "type": {
                "resolvedName": "Tabs"
            },
            "displayName": "Tabs",
            "props": {
                "displayName": "Tabs",
                "type": "line",
                "size": "middle",
                "defaultActiveKey": "",
                "tabBarGutter": 0,
                "tabPosition": "top",
                "centered": false,
                "destroyInactiveTabPane": false,
                "items": [
                    {
                        "id": "1",
                        "label": "优化控制",
                        "key": "1",
                        "children": "内容1",
                        "name": "优化控制",
                        "title": "优化控制"
                    },
                    {
                        "id": "3",
                        "label": "能耗能效",
                        "key": "3",
                        "children": "内容3",
                        "name": "能耗能效",
                        "title": "能耗能效"
                    },
                    {
                        "id": "2",
                        "label": "优化设置",
                        "key": "2",
                        "children": "内容2",
                        "name": "优化设置",
                        "title": "优化设置"
                    },

                ],
                "style": {
                    "translateX": 0,
                    "translateY": 0,
                    paddingTop: 10
                }
            },
            "custom": {},
            "parent": drawercontentid,
            "nodes": [],
            "linkedNodes": {
                "container-1": tab1,
                "container-2": tab2,
                "container-3": tab3
            },
            "hidden": false,
            "isCanvas": true
        },
        [tab1]: {
            "id": tab1,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": {
                    ...contentstyle,
                 
                },
                "children": "内容1"
            },
            "custom": {},
            "parent": drawercontentchildid,
            "nodes": [
                "n2Lt6nV2Um",
                "rSVhIgwusS",
                controlparent

            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [tab2]: {
            "id": tab2,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
                "children": "内容2"
            },
            "custom": {},
            "parent": drawercontentchildid,
            "nodes": [
                settingparent,
                openparent,
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [tab3]: {
            "id": tab3,
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": contentstyle,
                "children": "内容3"
            },
            "custom": {},
            "parent": drawercontentchildid,
            "nodes": [
                "WjE5WGRXQ8"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [settingparent]: {
            "id": settingparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab1,
            "nodes": [
                "q2CmQjoNPn",
                "Zbkajfwp-F",
                ...setting?.map(t => t.id)
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [openparent]: {
            "id": openparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colnoflex,
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab2,
            "nodes": [
                "Kfe6Qygbt1",
                "CeAzrInI_q",
                ...open?.map(t => t.id),
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "q2CmQjoNPn": {
            "id": "q2CmQjoNPn",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...titlestyle
                },
            },
            "custom": {},
            "parent": settingparent,
            "nodes": ['q2CmQjoNPB'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "q2CmQjoNPB": {
            "id": "q2CmQjoNPB",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化边界设置",
                "style": textborderstyle
            },
            "custom": {},
            "parent": 'q2CmQjoNPn',
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Zbkajfwp-F": {
            "id": "Zbkajfwp-F",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": {
                    ...contentstyle,
                    ...contentflexstyle
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": settingparent,
            "nodes": [
                "JVA9eTa-9g",
                "LE6jzWVNDz",
                "8J65JMXvkS"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        ...setting[0].page,
        ...setting[1].page,
        ...setting[2].page,
        ...setting[3].page,
        ...setting[4].page,
        ...setting[5].page,
        ...setting[6].page,
        "JVA9eTa-9g": {
            "id": "JVA9eTa-9g",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 14,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "xRza1S7rup"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "LE6jzWVNDz": {
            "id": "LE6jzWVNDz",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 5,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "5QTDRjPj5T"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "8J65JMXvkS": {
            "id": "8J65JMXvkS",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 5,
                "style": colrowstyle,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "Zbkajfwp-F",
            "nodes": [
                "DphdMxNUg_"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "xRza1S7rup": {
            "id": "xRza1S7rup",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化边界",
                "style": txtstyle
            },
            "custom": {},
            "parent": "JVA9eTa-9g",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "5QTDRjPj5T": {
            "id": "5QTDRjPj5T",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "下限",
                "style": txtstyle
            },
            "custom": {},
            "parent": "LE6jzWVNDz",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "DphdMxNUg_": {
            "id": "DphdMxNUg_",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "上限",
                "style": txtstyle
            },
            "custom": {},
            "parent": "8J65JMXvkS",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Kfe6Qygbt1": {
            "id": "Kfe6Qygbt1",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...titlestyle
                },
            },
            "custom": {},
            "parent": openparent,
            "nodes": ['Kfe6Qygbte'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "Kfe6Qygbte": {
            "id": "Kfe6Qygbte",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化参数开关",
                "style": textborderstyle
            },
            "custom": {},
            "parent": 'Kfe6Qygbt1',
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "CeAzrInI_q": {
            "id": "CeAzrInI_q",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "style": {
                    ...contentstyle,
                    ...contentflexstyle,
                },
                "displayName": "Container"
            },
            "custom": {},
            "parent": openparent,
            "nodes": [
                "rZE1-97vhc",
                "-3Iwqmmzml"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "rZE1-97vhc": {
            "id": "rZE1-97vhc",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 18,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "CeAzrInI_q",
            "nodes": [
                "snMF9SbO6z"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "-3Iwqmmzml": {
            "id": "-3Iwqmmzml",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 6,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "CeAzrInI_q",
            "nodes": [
                "96wSyPKmUh"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "snMF9SbO6z": {
            "id": "snMF9SbO6z",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "style": txtstyle
            },
            "custom": {},
            "parent": "rZE1-97vhc",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "96wSyPKmUh": {
            "id": "96wSyPKmUh",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "是否开启",
                "style": txtstyle
            },
            "custom": {},
            "parent": "-3Iwqmmzml",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        ...open[0].page,
        ...open[1].page,
        ...open[2].page,
        ...open[3].page,
        ...open[4].page,
        ...open[5].page,
        ...open?.[6]?.page,
        ...open?.[7]?.page,
        "n2Lt6nV2Um": {
            "id": "n2Lt6nV2Um",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": {
                    ...colrowstyle,
                    "alignItems": "flex-start",
                    "columnGap": 16
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": "30-TOBvNoT",
            "nodes": [
                "xYzNQ1ZE_z",
                "0YbA4GEXPo"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "rSVhIgwusS": {
            "id": "rSVhIgwusS",
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": colnoflex,
                "displayName": "Col"
            },
            "custom": {},
            "parent": "30-TOBvNoT",
            "nodes": [
                "YsCJaiTVu0",
                "6y7QJqNp0k"
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        [controlparent]: {
            "id": controlparent,
            "type": {
                "resolvedName": "Col"
            },
            "displayName": "Col",
            "props": {
                "span": 24,
                "style": {
                    ...txtstyle,
                    "padding": 8,
                },
                "displayName": "Col"
            },
            "custom": {},
            "parent": tab1,
            "nodes": [
                "NrvCv6U4Dm",
                "LHbHuHR2aE",
                ...control?.map(t => t.id),
            ],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": true
        },
        "xYzNQ1ZE_z": {
            "id": "xYzNQ1ZE_z",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "一键开机",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONECLICK_START?.NAME,
                            "value": "1"
                        }
                    }
                },
                "status": [
                    {
                        "id": "E7FX2YUMnt",
                        "label": "",
                        "value": "0",
                        "expression": {
                            "bind": "${" + source.ONECLICK_START?.NAME + "}==0?0:1",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_START?.NAME
                            ],
                        },
                        "color": "transparent"
                    },
                    {
                        "id": "gscdXE4Lbw",
                        "label": "",
                        "value": "1",
                        "expression": {
                            "bind": "${" + source.ONECLICK_START?.NAME + "}==1?1:0",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_START?.NAME
                            ],
                        },
                        "color": "rgb(46,142,251)"
                    }
                ],
                "style": {
                    ...txtstyle,
                    width: 'auto',
                    "paddingSide": "side",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "n2Lt6nV2Um",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "0YbA4GEXPo": {
            "id": "0YbA4GEXPo",
            "type": {
                "resolvedName": "Button"
            },
            "displayName": "Button",
            "props": {
                "children": "一键关机",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONECLICK_STOP?.NAME,
                            "value": "1"
                        }
                    }
                },
                "status": [
                    {
                        "id": "E7FX2YUMnt",
                        "label": "",
                        "value": "0",
                        "expression": {
                            "bind": "${" + source.ONECLICK_STOP?.NAME + "}",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_STOP?.NAME
                            ],
                        },
                        "color": "transparent"
                    },
                    {
                        "id": "gscdXE4Lbw",
                        "label": "",
                        "value": "1",
                        "expression": {
                            "bind": "${" + source.ONECLICK_STOP?.NAME + "}",
                            "type": "expressions",
                            "point": [
                                source.ONECLICK_STOP?.NAME
                            ],
                        },
                        "color": "rgb(46,142,251)"
                    }
                ],
                "style": {
                    ...txtstyle,
                    width: 'auto',
                    "paddingSide": "side",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                },
                "displayName": "Button"
            },
            "custom": {},
            "parent": "n2Lt6nV2Um",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "YsCJaiTVu0": {
            "id": "YsCJaiTVu0",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...titlestyle
                },
            },
            "custom": {},
            "parent": "rSVhIgwusS",
            "nodes": ['YsCJaiTVub'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "YsCJaiTVub": {
            "id": "YsCJaiTVub",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "优化控制建议信息",
                "style": textborderstyle
            },
            "custom": {},
            "parent": "YsCJaiTVu0",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        // 建议组件
        "6y7QJqNp0k": {
            "id": "6y7QJqNp0k",
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": false,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "200px",
                    "heightType": "fixed",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 4,
                    "paddingBottom": 0,
                    marginBottom: 16
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "rSVhIgwusS",
            "hidden": false,
            "nodes": [
                "KBi2yNmUny"
            ],
            "linkedNodes": {}
        },
        "KBi2yNmUny": {
            "type": {
                "resolvedName": "LogsRoller"
            },
            "isCanvas": true,
            "props": {
                "displayName": "LogRoller",
                "value": source?.HINT?.NAME && {
                    "bind": source?.HINT?.NAME,
                    "type": "points",
                    "point": [source?.HINT?.NAME]
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "200px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "heightUnit": "px"
                }
            },
            "displayName": "LogsRoller",
            "custom": {},
            "parent": "6y7QJqNp0k",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "NrvCv6U4Dm": {
            "id": "NrvCv6U4Dm",
            "type": {
                "resolvedName": "Container"
            },
            "displayName": "Container",
            "props": {
                "displayName": "Container",
                "style": {
                    ...contentstyle,
                    ...titlestyle
                },
            },
            "custom": {},
            "parent": controlparent,
            "nodes": ['NrvCv6U4DH'],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        "NrvCv6U4DH": {
            "id": "NrvCv6U4DH",
            "type": {
                "resolvedName": "TypographyText"
            },
            "displayName": "TypographyText",
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "style": textborderstyle
            },
            "custom": {},
            "parent": "NrvCv6U4Dm",
            "nodes": [],
            "linkedNodes": {},
            "hidden": false,
            "isCanvas": false
        },
        // 控制参数
        "LHbHuHR2aE": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    // "height": "50px",
                    "heightUnit": "px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    // "padding": 8,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "2a1_jDAqHs",
                "VPlbKn2dWO",
                "pv3jOlEtY5"
            ],
            "linkedNodes": {}
        },
        "2a1_jDAqHs": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 12,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "BG1SMbzlmA"
            ],
            "linkedNodes": {}
        },
        "VPlbKn2dWO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "zOqQGwIaA9"
            ],
            "linkedNodes": {}
        },
        "pv3jOlEtY5": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 6,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LHbHuHR2aE",
            "hidden": false,
            "nodes": [
                "D_ILDFFXhm"
            ],
            "linkedNodes": {}
        },
        "BG1SMbzlmA": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "控制参数",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "2a1_jDAqHs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zOqQGwIaA9": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设定值",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "VPlbKn2dWO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "D_ILDFFXhm": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "反馈值",
                "status": [
                    {
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "#8c8c8c"
                    },
                    {
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d"
                    },
                    {
                        "label": "故障",
                        "value": "1",
                        "key": "3",
                        "color": "#f5222d"
                    }
                ],
                "events": {},
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "pv3jOlEtY5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        ...control?.[0]?.page,
        ...control?.[1]?.page,
        ...control?.[2]?.page,
        ...control?.[3]?.page,
        ...control?.[4]?.page,
        ...control?.[5]?.page,
        ...control?.[6]?.page,
        ...control?.[7]?.page,
        // 能耗能效tab
        ...efficiencyTab(tab3,source)

    }
}
