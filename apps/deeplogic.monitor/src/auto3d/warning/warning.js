import { contentstyle, statsuMap, contentpaddingstyle } from '../pageNodeDefault';
/**
 * 自动生成报警页面
 */
export default (source, links, global) => {
    return {
        "ROOT": {
            "type": {
                "resolvedName": "Page"
            },
            "isCanvas": true,
            "props": {
                "title": "页面标题",
                "theme": {
                    "algorithm": "defaultAlgorithm",
                    "token": {
                        "colorPrimary": "#1677ff"
                    }
                },
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
                    "background": "url(/_api/tfile/HmcLe53pNmcHWz6qDmRwGK) 50% 50% / cover no-repeat",
                    "padding": 16,
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "bw8W2pRslq",
                            "type": "image",
                            "key": "bw8W2pRslq",
                            "value": {
                                "backgroundImage": "HmcLe53pNmcHWz6qDmRwGK",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "cover",
                                "backgroundPosition": "50% 50%"
                            },
                            "disabled": false
                        }
                    ]
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectId": global.ProjectId,
                    "ProjectName": global.ProjectName
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "Gdvev9pePi",
                "l9lHtaNgBp",
                "xpIiY8D9m_",
                "3SNjXIMRHj"
            ],
            "linkedNodes": {}
        },
        "Gdvev9pePi": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
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
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "g-WM-VuGw0",
                "K_a7Px04Xc"
            ],
            "linkedNodes": {}
        },
        "g-WM-VuGw0": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "60%",
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
                    "widthUnit": "%"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Gdvev9pePi",
            "hidden": false,
            "nodes": [
                "lFyMJjqxSc"
            ],
            "linkedNodes": {}
        },
        "lFyMJjqxSc": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "深度节能优化",
                "status": [],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 24,
                    "fontWeight": 400,
                    "lineHeight": 0,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "g-WM-VuGw0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "K_a7Px04Xc": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "40%",
                    "height": "30px",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "bottomRight",
                    "justifyContent": "flex-end",
                    "alignItems": "flex-end",
                    "heightUnit": "px",
                    "columnGap": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Gdvev9pePi",
            "hidden": false,
            "nodes": [
                "Y3zTUce1wV",
                "2-kobYB-P6",
                "wWYegtfD7e",
                "2FbLYroChU",
                "j1t8sS6vYz",
                "uPNrt0fJtM",
                "t7OIcOk6Z4"
            ],
            "linkedNodes": {}
        },
        "Y3zTUce1wV": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "82px",
                    "height": 38,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8,
                    "key": "topCenter",
                    "justifyContent": "center",
                    "alignItems": "flex-start"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "Cae-2OaOWL",
                "w4LNMgWPJJ"
            ],
            "linkedNodes": {}
        },
        "Cae-2OaOWL": {
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
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "Y3zTUce1wV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "w4LNMgWPJJ": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "Temp",
                    "type": "global",
                },
                "type": "",
                "color": "rgba(117, 253, 244, 1)",
                "strong": false,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": true,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "Y3zTUce1wV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2-kobYB-P6": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "82px",
                    "height": 39,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "0fR8HWKg5s",
                "69GKYyks-T"
            ],
            "linkedNodes": {}
        },
        "0fR8HWKg5s": {
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
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "2-kobYB-P6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "69GKYyks-T": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "Hum",
                    "type": "global",
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
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃"
                },
                "color": "rgba(117, 253, 244, 1)"
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "2-kobYB-P6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wWYegtfD7e": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "80px",
                    "height": 37,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "Hbk5cy61DZ"
            ],
            "linkedNodes": {}
        },
        "Hbk5cy61DZ": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "Weather",
                    "type": "global",
                },
                "type": "",
                "strong": false,
                "italic": false,
                "underline": false,
                "mark": false,
                "keyboard": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "%"
                },
                "color": "rgba(117, 253, 244, 1)"
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "wWYegtfD7e",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2FbLYroChU": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 17,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "FbvEkO1rC6"
            ],
            "linkedNodes": {}
        },
        "FbvEkO1rC6": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "2FbLYroChU",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "j1t8sS6vYz": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "158px",
                    "height": "39px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "color": "rgba(255, 255, 255, 1)"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "twJORMb_dM"
            ],
            "linkedNodes": {}
        },
        "uPNrt0fJtM": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 16,
                    "height": "35px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "KPW17DEGxq"
            ],
            "linkedNodes": {}
        },
        "KPW17DEGxq": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "uPNrt0fJtM",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "t7OIcOk6Z4": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 20,
                    "height": 41,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "K_a7Px04Xc",
            "hidden": false,
            "nodes": [
                "ypPx2LJkjw"
            ],
            "linkedNodes": {}
        },
        "ypPx2LJkjw": {
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
                    "fontFamily": "PingFang SC",
                    "fontSize": 20,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "t7OIcOk6Z4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "DeoEuYygfi": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 8,
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "paddingTop": 3,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "l9lHtaNgBp",
            "hidden": false,
            "nodes": [
                "PmOxqdx8K0",
                "b9vADZWnFc"
            ],
            "linkedNodes": {}
        },
        "PmOxqdx8K0": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "DeoEuYygfi",
            "hidden": false,
            "nodes": [
                "uUgaqOO7Jy"
            ],
            "linkedNodes": {}
        },
        "uUgaqOO7Jy": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "PmOxqdx8K0",
            "hidden": false,
            "nodes": [
                "XbVJXWRZHV"
            ],
            "linkedNodes": {}
        },
        "b9vADZWnFc": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "DeoEuYygfi",
            "hidden": false,
            "nodes": [
                "dLhvZriBPH"
            ],
            "linkedNodes": {}
        },
        "dLhvZriBPH": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 24,
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
                    "padding": 8
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "b9vADZWnFc",
            "hidden": false,
            "nodes": [
                "_TCuGfjhlp"
            ],
            "linkedNodes": {}
        },
        "_TCuGfjhlp": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "source": "alarm",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": true,
                "isPagination": true,
                "isScroll": false,
                "columns": [
                    {
                        "id": "uUg0P9sxzW",
                        "label": "F_ID",
                        "title": "F_ID",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "xukVx1P5W9",
                        "label": "F_STATE",
                        "title": "F_STATE",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "LgQk7MZ3RQ",
                        "label": "F_NAME",
                        "title": "F_NAME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "7yqagRhLP1",
                        "label": "F_FIRST_TIME",
                        "title": "F_FIRST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "YsvseImimS",
                        "label": "F_LAST_TIME",
                        "title": "F_LAST_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "mCUbnHbBSt",
                        "label": "F_NOTIFY_TIME",
                        "title": "F_NOTIFY_TIME",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "bpLnxC_TzU",
                        "label": "F_DES",
                        "title": "F_DES",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
                    },
                    {
                        "id": "8PVwkpVc-Z",
                        "title": "F_SUGGEST",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left",
                        "label": "F_SUGGEST"
                    }
                ],
                "alarm": {
                    "needData": true
                },
                "point": {
                    "begin": "2024-04-25T11:27:34+08:00",
                    "end": "2024-04-25T11:27:34+08:00",
                    "tags": [],
                    "aggregate": "last",
                    "timeType": "5 minutes"
                },
                "scroll": {
                    "x": 1000,
                    "y": 300
                },
                "pagination": {
                    "pageSize": 10,
                    "page": 0
                },
                "extra": {
                    "total": 0,
                    "Count": 0,
                    "PrevCount": 0,
                    "YOY": 0,
                    "AvgResponseSecond": 0,
                    "LevelMap": {
                        "LEVEL_HIGH": 0,
                        "LEVEL_MIDDLE": 0,
                        "LEVEL_LOW": 0
                    }
                },
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
                    "marginSide": "all"
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "dLhvZriBPH",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "xpIiY8D9m_": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "WaUMQYHYTU",
                "HjCg24OIDb"
            ],
            "linkedNodes": {}
        },
        "WaUMQYHYTU": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 5,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "50%",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "xpIiY8D9m_",
            "hidden": false,
            "nodes": [
                "NRGw_ETlxR",
                "jasaBbOdbF",
                "LYcnFAwERe",
                "n6Ao6CM9z5",
                "RE3PpEZP01"
            ],
            "linkedNodes": {}
        },
        "NRGw_ETlxR": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "WaUMQYHYTU",
            "hidden": false,
            "nodes": [
                "I-crU0EQs6"
            ],
            "linkedNodes": {}
        },
        "I-crU0EQs6": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 5,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "AmhxPMViOb",
                            "type": "color",
                            "key": "AmhxPMViOb",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ]
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "NRGw_ETlxR",
            "hidden": false,
            "nodes": [
                "tvGG4u0N86"
            ],
            "linkedNodes": {}
        },
        "tvGG4u0N86": {
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
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[0]
                    }
                },
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "I-crU0EQs6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "jasaBbOdbF": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "WaUMQYHYTU",
            "hidden": false,
            "nodes": [
                "NL1jqOqUfF"
            ],
            "linkedNodes": {}
        },
        "NL1jqOqUfF": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 5,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "eQqLLZwisY",
                            "type": "color",
                            "key": "eQqLLZwisY",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ]
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "jasaBbOdbF",
            "hidden": false,
            "nodes": [
                "PAERL4ufeq"
            ],
            "linkedNodes": {}
        },
        "PAERL4ufeq": {
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
                "isHighlight": "default",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[1]
                    }
                },
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "NL1jqOqUfF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LYcnFAwERe": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "WaUMQYHYTU",
            "hidden": false,
            "nodes": [
                "jMrnNZ7_Yq"
            ],
            "linkedNodes": {}
        },
        "jMrnNZ7_Yq": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 5,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "wKDBBbQGQb",
                            "type": "color",
                            "key": "wKDBBbQGQb",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ]
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "LYcnFAwERe",
            "hidden": false,
            "nodes": [
                "5k3c60oZEN"
            ],
            "linkedNodes": {}
        },
        "5k3c60oZEN": {
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
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[2]
                    }
                },
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "jMrnNZ7_Yq",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "n6Ao6CM9z5": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "WaUMQYHYTU",
            "hidden": false,
            "nodes": [
                "tgDp8ZTXDQ"
            ],
            "linkedNodes": {}
        },
        "tgDp8ZTXDQ": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 5,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "zeTCut4b_S",
                            "type": "color",
                            "key": "zeTCut4b_S",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ]
                },
                "id": "col-3"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "n6Ao6CM9z5",
            "hidden": false,
            "nodes": [
                "aNUcRtn1TL"
            ],
            "linkedNodes": {}
        },
        "aNUcRtn1TL": {
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
                "isHighlight": "primary",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[3]
                    }
                },
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "tgDp8ZTXDQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "RE3PpEZP01": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "WaUMQYHYTU",
            "hidden": false,
            "nodes": [
                "Tr7vXF58kz"
            ],
            "linkedNodes": {}
        },
        "Tr7vXF58kz": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 4,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "EIWlmJv1go",
                            "type": "color",
                            "key": "EIWlmJv1go",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ]
                },
                "id": "col-4"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "RE3PpEZP01",
            "hidden": false,
            "nodes": [
                "vUDpOmSid3"
            ],
            "linkedNodes": {}
        },
        "vUDpOmSid3": {
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
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[4]
                    }
                },
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "Tr7vXF58kz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "HjCg24OIDb": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 531,
                    "height": 71,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "right",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "xpIiY8D9m_",
            "hidden": false,
            "nodes": [
                "SMUA8U3wTo",
                "5Z4xhoxZYy",
                "33ilKWrHy0",
                "4FQl921cLL"
            ],
            "linkedNodes": {}
        },
        "SMUA8U3wTo": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 29,
                    "height": 34,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HjCg24OIDb",
            "hidden": false,
            "nodes": [
                "NIjEgj72TZ"
            ],
            "linkedNodes": {}
        },
        "NIjEgj72TZ": {
            "type": {
                "resolvedName": "GenericIcon"
            },
            "isCanvas": false,
            "props": {
                "displayName": "GenericIcon",
                "icon": "UserOutlined",
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
                    "marginSide": "all"
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "SMUA8U3wTo",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5Z4xhoxZYy": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 62,
                    "height": 33,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HjCg24OIDb",
            "hidden": false,
            "nodes": [
                "2F8PX7Q4A3"
            ],
            "linkedNodes": {}
        },
        "2F8PX7Q4A3": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                "bind": "UserId",
                "type": "global",
            },
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
                    "marginSide": "all",
                    "color": "rgba(170, 175, 209, 0.6)"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "5Z4xhoxZYy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "33ilKWrHy0": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 16,
                    "height": 30,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HjCg24OIDb",
            "hidden": false,
            "nodes": [
                "ZH7Ipimm7F"
            ],
            "linkedNodes": {}
        },
        "ZH7Ipimm7F": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "33ilKWrHy0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4FQl921cLL": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 16,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "key": "centerCenter"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HjCg24OIDb",
            "hidden": false,
            "nodes": [
                "Qywm7Zy9Is"
            ],
            "linkedNodes": {}
        },
        "Qywm7Zy9Is": {
            "type": {
                "resolvedName": "GenericIcon"
            },
            "isCanvas": false,
            "props": {
                "displayName": "GenericIcon",
                "icon": "icon-icon-exit",
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
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
            "parent": "4FQl921cLL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "XbVJXWRZHV": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "580px",
                    "height": "37px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "uUgaqOO7Jy",
            "hidden": false,
            "nodes": [
                "Lg6vUUTfY6",
                "FblkQBRuGG",
                "6mAt8iIR79",
                "-gYWv7tBoN",
                "seZGYSDUsb",
                "quMKMaPnma",
                "-1Szz5yiEh",
                "z6raFlZQ8M"
            ],
            "linkedNodes": {}
        },
        "Lg6vUUTfY6": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "31px",
                    "height": 37,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "5IwXNfj0Ci"
            ],
            "linkedNodes": {}
        },
        "5IwXNfj0Ci": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "Lg6vUUTfY6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6mAt8iIR79": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "40px",
                    "height": 37,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "s-Ow_RTK54"
            ],
            "linkedNodes": {}
        },
        "s-Ow_RTK54": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "6mAt8iIR79",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "FblkQBRuGG": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 95,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "IiQ3vF3WST",
                "N0PWSPRj-d"
            ],
            "linkedNodes": {}
        },
        "IiQ3vF3WST": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "72px",
                    "height": "49px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "FblkQBRuGG",
            "hidden": false,
            "nodes": [
                "B2rKGNTIwY"
            ],
            "linkedNodes": {}
        },
        "B2rKGNTIwY": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警条数",
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
                    "lineHeight": 2.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "IiQ3vF3WST",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "N0PWSPRj-d": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "_TCuGfjhlp.extra.total",
                    "type": "components",
                    "point": [
                        "_TCuGfjhlp.extra.total"
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
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "条"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "FblkQBRuGG",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3SNjXIMRHj": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 43,
                    "height": "37px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "g37jhl_6wJ"
            ],
            "linkedNodes": {}
        },
        "g37jhl_6wJ": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "3SNjXIMRHj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "-gYWv7tBoN": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 95,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "PAIkrVWm0U",
                "ry6NLXwSlw",
                "1WjNrJN5jI"
            ],
            "linkedNodes": {}
        },
        "PAIkrVWm0U": {
            "type": {
                "resolvedName": "SvgMaterial"
            },
            "isCanvas": false,
            "props": {
                "displayName": "SvgMaterial",
                "component": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 300 300\"><path d=\"m40.5,100l219,0m-108.99991,94.00006l107,105m-107.00009,-106.00006l-100,106m99.5,-231l0,125m33.24219,-158.75781c0,18.35916 -14.88303,33.24219 -33.24219,33.24219c-18.35916,0 -33.2422,-14.88303 -33.2422,-33.24219c0.00002,-18.35915 14.88304,-33.24219 33.2422,-33.24219c18.35916,0 33.24219,14.88304 33.24219,33.24219z\"/></svg>",
                "style": {
                    "translateX": 16,
                    "translateY": 19,
                    "scale": 1,
                    "width": 45,
                    "height": 45,
                    "fill": "rgb(245, 34, 45)",
                    "opacity": 1,
                    "borderRadius": 0
                }
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "-gYWv7tBoN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ry6NLXwSlw": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 44,
                    "height": "49px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "-gYWv7tBoN",
            "hidden": false,
            "nodes": [
                "JNwH5fc-LX"
            ],
            "linkedNodes": {}
        },
        "JNwH5fc-LX": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "紧急",
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
                    "lineHeight": 2.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "ry6NLXwSlw",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1WjNrJN5jI": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "_TCuGfjhlp.extra.LevelMap.LEVEL_HIGH",
                    "type": "components",
                    "point": [
                        "_TCuGfjhlp.extra.LevelMap.LEVEL_HIGH"
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
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "条"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "-gYWv7tBoN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "seZGYSDUsb": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "44px",
                    "height": 37,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "n7gCgYnhN6"
            ],
            "linkedNodes": {}
        },
        "n7gCgYnhN6": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "seZGYSDUsb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "quMKMaPnma": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 95,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "LonnriG1ci",
                "1APfWFUF4V",
                "N8ybQGJ1oY"
            ],
            "linkedNodes": {}
        },
        "LonnriG1ci": {
            "type": {
                "resolvedName": "SvgMaterial"
            },
            "isCanvas": false,
            "props": {
                "displayName": "SvgMaterial",
                "component": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 300 300\"><path d=\"m40.5,100l219,0m-108.99991,94.00006l107,105m-107.00009,-106.00006l-100,106m99.5,-231l0,125m33.24219,-158.75781c0,18.35916 -14.88303,33.24219 -33.24219,33.24219c-18.35916,0 -33.2422,-14.88303 -33.2422,-33.24219c0.00002,-18.35915 14.88304,-33.24219 33.2422,-33.24219c18.35916,0 33.24219,14.88304 33.24219,33.24219z\"/></svg>",
                "style": {
                    "translateX": 16,
                    "translateY": 19,
                    "scale": 1,
                    "width": 45,
                    "height": 45,
                    "fill": "rgb(255, 236, 61)",
                    "opacity": 1,
                    "borderRadius": 0
                }
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "quMKMaPnma",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1APfWFUF4V": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 44,
                    "height": "49px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "quMKMaPnma",
            "hidden": false,
            "nodes": [
                "WNqtCF2cDS"
            ],
            "linkedNodes": {}
        },
        "WNqtCF2cDS": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "警告",
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
                    "lineHeight": 2.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "1APfWFUF4V",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "N8ybQGJ1oY": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "_TCuGfjhlp.extra.LevelMap.LEVEL_MIDDLE",
                    "type": "components",
                    "point": [
                        "_TCuGfjhlp.extra.LevelMap.LEVEL_MIDDLE"
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
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "条"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "quMKMaPnma",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "-1Szz5yiEh": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "44px",
                    "height": 37,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "AeWv20GkD0"
            ],
            "linkedNodes": {}
        },
        "AeWv20GkD0": {
            "type": {
                "resolvedName": "Divider"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Divider",
                "type": "vertical",
                "orientation": "center",
                "children": "",
                "orientationMargin": 8,
                "dashed": false,
                "plain": false
            },
            "displayName": "Divider",
            "custom": {},
            "parent": "-1Szz5yiEh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z6raFlZQ8M": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 95,
                    "height": 35,
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "XbVJXWRZHV",
            "hidden": false,
            "nodes": [
                "N4rA0wnEuQ",
                "QRcbZJ3wi_",
                "6dTK9Xs3LT"
            ],
            "linkedNodes": {}
        },
        "N4rA0wnEuQ": {
            "type": {
                "resolvedName": "SvgMaterial"
            },
            "isCanvas": false,
            "props": {
                "displayName": "SvgMaterial",
                "component": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 300 300\"><path d=\"m40.5,100l219,0m-108.99991,94.00006l107,105m-107.00009,-106.00006l-100,106m99.5,-231l0,125m33.24219,-158.75781c0,18.35916 -14.88303,33.24219 -33.24219,33.24219c-18.35916,0 -33.2422,-14.88303 -33.2422,-33.24219c0.00002,-18.35915 14.88304,-33.24219 33.2422,-33.24219c18.35916,0 33.24219,14.88304 33.24219,33.24219z\"/></svg>",
                "style": {
                    "translateX": 16,
                    "translateY": 19,
                    "scale": 1,
                    "width": 45,
                    "height": 45,
                    "fill": "rgb(115, 209, 61)",
                    "opacity": 1,
                    "borderRadius": 0
                }
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "z6raFlZQ8M",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "QRcbZJ3wi_": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 44,
                    "height": "49px",
                    "widthType": "fixed",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "px",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "z6raFlZQ8M",
            "hidden": false,
            "nodes": [
                "iLmtVF-xsz"
            ],
            "linkedNodes": {}
        },
        "iLmtVF-xsz": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "普通",
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
                    "lineHeight": 2.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "QRcbZJ3wi_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6dTK9Xs3LT": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "",
                "decimalSeparator": 0,
                "percent": false,
                "value": {
                    "bind": "_TCuGfjhlp.extra.LevelMap.LEVEL_LOW",
                    "type": "components",
                    "point": [
                        "_TCuGfjhlp.extra.LevelMap.LEVEL_LOW"
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
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "条"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "z6raFlZQ8M",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "l9lHtaNgBp": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "750px",
                    "widthType": "fit-content",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 8,
                    "heightUnit": "px",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.19)",
                    "borderSide": "all"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "DeoEuYygfi"
            ],
            "linkedNodes": {}
        },
        "twJORMb_dM": {
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
                    "marginSide": "all"
                }
            },
            "displayName": "TimeText",
            "custom": {},
            "parent": "j1t8sS6vYz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
} 
