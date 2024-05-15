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
                    "algorithm": "darkBlue",
                    "token": {
                        "colorPrimary": "#1677ff"
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100vh",
                    "widthType": "relative",
                    "heightType": "viewport",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "background": "url(/_api/tfile/Q_HGofj55Lc0MwMOAwxklr) 50% 50% / 100% 100% no-repeat,linear-gradient(rgba(27, 91, 153, 1), rgba(27, 91, 153, 1))",
                    "padding": 0,
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "4Kfm-g48OS",
                            "type": "image",
                            "key": "4Kfm-g48OS",
                            "value": {
                                "backgroundImage": "Q_HGofj55Lc0MwMOAwxklr",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "100% 100%",
                                "backgroundPosition": "50% 50%"
                            },
                            "disabled": false
                        },
                        {
                            "id": "ys161mSUSN",
                            "key": "ys161mSUSN",
                            "disabled": false,
                            "value": "rgba(27, 91, 153, 1)"
                        }
                    ],
                    "heightUnit": "vh"
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectId": global.ProjectId,
                    "ProjectName": global.ProjectName,
                    "ProjectImage": global.ProjectImage,
                    "BuildingArea": global.BuildingArea,
                    "DeviceNum": global.DeviceNum,
                    "TagNum": global.TagNum,
                    "LogicNum": global.LogicNum,
                    "AlarmIndexNum": global.AlarmIndexNum,
                    "Temp": global.Temp,
                    "Hum": global.Hum,
                    "Weather": global.Weather,
                    "Wind": global.Wind,
                    "UserId": global.UserId,
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "jn76bkDM8P"
            ],
            "linkedNodes": {}
        },
        "jn76bkDM8P": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "heightUnit": "%"
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "Dxd9Tt9RbR",
                "zjt3Re-odF",
                "1mLt5zuoZk"
            ],
            "linkedNodes": {}
        },
        "Dxd9Tt9RbR": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "jn76bkDM8P",
            "hidden": false,
            "nodes": [
                "H8NlHwZPAF"
            ],
            "linkedNodes": {}
        },
        "H8NlHwZPAF": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-0",
                "span": 23,
                "style": {
                    "heightType": "fixed",
                    "height": "51px",
                    "heightUnit": "px"
                },
                "type": "flex",
                "flex": "none"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Dxd9Tt9RbR",
            "hidden": false,
            "nodes": [
                "tdygbnOlCU"
            ],
            "linkedNodes": {}
        },
        "zjt3Re-odF": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "jn76bkDM8P",
            "hidden": false,
            "nodes": [
                "HI7xVZM1Ya"
            ],
            "linkedNodes": {}
        },
        "HI7xVZM1Ya": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-1",
                "span": 8,
                "style": {
                    "widthType": "relative",
                    "width": "100%",
                    "widthUnit": "%",
                    "display": "",
                    "flexDirection": "",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "overflow": "auto"
                },
                "flex": "auto",
                "type": "flex"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "zjt3Re-odF",
            "hidden": false,
            "nodes": [
                "UZHJAQDr_M"
            ],
            "linkedNodes": {}
        },
        "1mLt5zuoZk": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "jn76bkDM8P",
            "hidden": false,
            "nodes": [
                "m6OLsp8USG"
            ],
            "linkedNodes": {}
        },
        "m6OLsp8USG": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-2",
                "span": 8,
                "type": "flex",
                "style": {
                    "heightType": "fixed",
                    "height": "80px",
                    "heightUnit": "px",
                    "padding": 0,
                    "paddingSide": "side",
                    "paddingTop": 4,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                },
                "flex": "none"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "1mLt5zuoZk",
            "hidden": false,
            "nodes": [
                "gLvpVR-2fO"
            ],
            "linkedNodes": {}
        },
        "tdygbnOlCU": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "51px",
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
                    "padding": 0,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "paddingTop": 0,
                    "paddingRight": 16,
                    "paddingLeft": 24,
                    "paddingBottom": 10,
                    "heightUnit": "px",
                    "marginBottom": 0,
                    "marginTop": 0,
                    "background": "url(/_api/tfile/tpWrCQK4yROnt3bSnXenLy) 50% 50% / 100% 100% no-repeat",
                    "backgroundList": [
                        {
                            "id": "DuWRW3ln4I",
                            "type": "image",
                            "key": "DuWRW3ln4I",
                            "value": {
                                "backgroundImage": "tpWrCQK4yROnt3bSnXenLy",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "100% 100%",
                                "backgroundPosition": "50% 50%"
                            },
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "H8NlHwZPAF",
            "hidden": false,
            "nodes": [
                "DPMApaHf9h",
                "GjB1koaIae"
            ],
            "linkedNodes": {}
        },
        "DPMApaHf9h": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "60%",
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
                    "key": "bottomLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "flex-end",
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "tdygbnOlCU",
            "hidden": false,
            "nodes": [
                "CkLH2j-lBG"
            ],
            "linkedNodes": {}
        },
        "CkLH2j-lBG": {
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
            "parent": "DPMApaHf9h",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GjB1koaIae": {
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 8,
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "columnGap": 0,
                    "paddingTop": 4,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "tdygbnOlCU",
            "hidden": false,
            "nodes": [
                "yWo45JL5RD",
                "MCrKNbxiTk",
                "ER7kBXnZFH",
                "9aKQ8UEG4a",
                "GbHpqoRiOu",
                "z95RQd0Ep8",
                "Y03g0uoisM"
            ],
            "linkedNodes": {}
        },
        "yWo45JL5RD": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "86px",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "fTWJN46YRG",
                "LGWhv2BToP"
            ],
            "linkedNodes": {}
        },
        "fTWJN46YRG": {
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
            "parent": "yWo45JL5RD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LGWhv2BToP": {
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
            "parent": "yWo45JL5RD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "MCrKNbxiTk": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "86px",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "IJh1IEiD4n",
                "VwsMkBsgV0"
            ],
            "linkedNodes": {}
        },
        "IJh1IEiD4n": {
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
            "parent": "MCrKNbxiTk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "VwsMkBsgV0": {
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
            "parent": "MCrKNbxiTk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ER7kBXnZFH": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "94px",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 8,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "LRtmPBaLg6",
                "EL6pCHj5X8"
            ],
            "linkedNodes": {}
        },
        "LRtmPBaLg6": {
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
            "parent": "ER7kBXnZFH",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EL6pCHj5X8": {
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
                    "value": ""
                },
                "color": "rgba(117, 253, 244, 1)"
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "ER7kBXnZFH",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "9aKQ8UEG4a": {
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
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "UV77l294H1"
            ],
            "linkedNodes": {}
        },
        "UV77l294H1": {
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
            "parent": "9aKQ8UEG4a",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GbHpqoRiOu": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "154px",
                    "height": "42px",
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
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "YCO5FQA4ad"
            ],
            "linkedNodes": {}
        },
        "YCO5FQA4ad": {
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
            "parent": "GbHpqoRiOu",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z95RQd0Ep8": {
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
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "D-ryOjkD_Y"
            ],
            "linkedNodes": {}
        },
        "D-ryOjkD_Y": {
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
            "parent": "z95RQd0Ep8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Y03g0uoisM": {
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
            "parent": "GjB1koaIae",
            "hidden": false,
            "nodes": [
                "bCJIgYkUei"
            ],
            "linkedNodes": {}
        },
        "bCJIgYkUei": {
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
                    "fontSize": 14,
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
            "parent": "Y03g0uoisM",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gLvpVR-2fO": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "justify": "start",
                "wrap": false,
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
                    "marginSide": "side",
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "marginTop": 0
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "m6OLsp8USG",
            "hidden": false,
            "nodes": [
                "lOXdlFChu9",
                "U3ZvZgTzhK",
                "6pZXMx4sjD"
            ],
            "linkedNodes": {}
        },
        "lOXdlFChu9": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "gLvpVR-2fO",
            "hidden": false,
            "nodes": [
                "InIvsaLwTa"
            ],
            "linkedNodes": {}
        },
        "InIvsaLwTa": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-0",
                "span": 4,
                "style": {
                    "heightType": "fixed",
                    "height": "40px",
                    "heightUnit": "px",
                    "paddingSide": "all",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8,
                    "padding": 0
                }
            },
            "displayName": "Col",
            "custom": {},
            "parent": "lOXdlFChu9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "U3ZvZgTzhK": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "gLvpVR-2fO",
            "hidden": false,
            "nodes": [
                "dgcqZdAM0i"
            ],
            "linkedNodes": {}
        },
        "dgcqZdAM0i": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-1",
                "span": 16
            },
            "displayName": "Col",
            "custom": {},
            "parent": "U3ZvZgTzhK",
            "hidden": false,
            "nodes": [
                "YfF_4hgAD5"
            ],
            "linkedNodes": {}
        },
        "YfF_4hgAD5": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 5,
                "align": "middle",
                "gutter": 12,
                "justify": "end",
                "wrap": false,
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
                    "padding": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "dgcqZdAM0i",
            "hidden": false,
            "nodes": [
                "2AgZy-3Giz",
                "PuV7f1IrwW",
                "4NrQUz5QW9",
                "iSe2b7kzB6",
                "Qdt_J-1qZ7"
            ],
            "linkedNodes": {}
        },
        "2AgZy-3Giz": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "YfF_4hgAD5",
            "hidden": false,
            "nodes": [
                "V9zY1UTv_P"
            ],
            "linkedNodes": {}
        },
        "V9zY1UTv_P": {
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
                    "background": "unset",
                    "backgroundList": []
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "2AgZy-3Giz",
            "hidden": false,
            "nodes": [
                "EpfXoTSxJU"
            ],
            "linkedNodes": {}
        },
        "EpfXoTSxJU": {
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
            "parent": "V9zY1UTv_P",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "PuV7f1IrwW": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "YfF_4hgAD5",
            "hidden": false,
            "nodes": [
                "-b0vbnP-qa"
            ],
            "linkedNodes": {}
        },
        "-b0vbnP-qa": {
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
                    "background": "unset",
                    "backgroundList": []
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "PuV7f1IrwW",
            "hidden": false,
            "nodes": [
                "QBGYasufrV"
            ],
            "linkedNodes": {}
        },
        "QBGYasufrV": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "监控",
                "template": "navigation",
                "type": "link",
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
            "parent": "-b0vbnP-qa",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4NrQUz5QW9": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "YfF_4hgAD5",
            "hidden": false,
            "nodes": [
                "F7MATqkV-a"
            ],
            "linkedNodes": {}
        },
        "F7MATqkV-a": {
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
                    "background": "unset",
                    "backgroundList": []
                },
                "id": "col-2"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "4NrQUz5QW9",
            "hidden": false,
            "nodes": [
                "fTIHSHaXNG"
            ],
            "linkedNodes": {}
        },
        "fTIHSHaXNG": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "能耗",
                "template": "navigation",
                "type": "link",
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
            "parent": "F7MATqkV-a",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "iSe2b7kzB6": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "YfF_4hgAD5",
            "hidden": false,
            "nodes": [
                "t973i3AL55"
            ],
            "linkedNodes": {}
        },
        "t973i3AL55": {
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
                    "background": "unset",
                    "backgroundList": []
                },
                "id": "col-3"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "iSe2b7kzB6",
            "hidden": false,
            "nodes": [
                "57twbu33zF"
            ],
            "linkedNodes": {}
        },
        "57twbu33zF": {
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
            "parent": "t973i3AL55",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Qdt_J-1qZ7": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "YfF_4hgAD5",
            "hidden": false,
            "nodes": [
                "snqJ4mF01n"
            ],
            "linkedNodes": {}
        },
        "snqJ4mF01n": {
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
                    "background": "unset",
                    "backgroundList": []
                },
                "id": "col-4"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "Qdt_J-1qZ7",
            "hidden": false,
            "nodes": [
                "CwZRLoTJDo"
            ],
            "linkedNodes": {}
        },
        "CwZRLoTJDo": {
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
            "parent": "snqJ4mF01n",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6pZXMx4sjD": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "gLvpVR-2fO",
            "hidden": false,
            "nodes": [
                "6pG1GutYrO"
            ],
            "linkedNodes": {}
        },
        "6pG1GutYrO": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-2",
                "span": 4,
                "style": {
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "padding": 24,
                    "paddingSide": "side",
                    "paddingTop": 0,
                    "paddingRight": 8,
                    "paddingLeft": 24,
                    "paddingBottom": 0
                }
            },
            "displayName": "Col",
            "custom": {},
            "parent": "6pZXMx4sjD",
            "hidden": false,
            "nodes": [
                "PR2NMRPlzd",
                "v5n7_q8evp",
                "Py2OAai5tN",
                "ItMuWwkO32"
            ],
            "linkedNodes": {}
        },
        "PR2NMRPlzd": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "37px",
                    "height": 34,
                    "widthType": "fixed",
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
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 0,
                    "paddingLeft": 8,
                    "paddingBottom": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6pG1GutYrO",
            "hidden": false,
            "nodes": [
                "hECnuN1WdR"
            ],
            "linkedNodes": {}
        },
        "hECnuN1WdR": {
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
            "parent": "PR2NMRPlzd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "v5n7_q8evp": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "50px",
                    "height": "34px",
                    "widthType": "fixed",
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
                    "widthUnit": "px",
                    "heightUnit": "px",
                    "paddingTop": 8,
                    "paddingRight": null,
                    "paddingLeft": 0,
                    "paddingBottom": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6pG1GutYrO",
            "hidden": false,
            "nodes": [
                "qA4cnuo1C6"
            ],
            "linkedNodes": {}
        },
        "qA4cnuo1C6": {
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
                    "width": "80%",
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
            "parent": "v5n7_q8evp",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Py2OAai5tN": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 19,
                    "height": 43,
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
            "parent": "6pG1GutYrO",
            "hidden": false,
            "nodes": [
                "hdIBO0jacM"
            ],
            "linkedNodes": {}
        },
        "hdIBO0jacM": {
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
            "parent": "Py2OAai5tN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ItMuWwkO32": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": 36,
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
                    "heightUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6pG1GutYrO",
            "hidden": false,
            "nodes": [
                "MS3P5Im9mX"
            ],
            "linkedNodes": {}
        },
        "MS3P5Im9mX": {
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
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "paddingTop": 4
                }
            },
            "displayName": "GenericIcon",
            "custom": {},
            "parent": "ItMuWwkO32",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "__o-zG_0jB": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "children": "内容1"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dKYJms3bCn",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UZHJAQDr_M": {
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
                    "paddingSide": "side",
                    "marginSide": "side",
                    "padding": 8,
                    "heightUnit": "px",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.1)",
                    "borderSide": "all",
                    "marginTop": 13,
                    "borderRadius": 6,
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8,
                    "marginRight": 24,
                    "marginLeft": 24
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HI7xVZM1Ya",
            "hidden": false,
            "nodes": [
                "R9JVaoGA8B"
            ],
            "linkedNodes": {}
        },
        "R9JVaoGA8B": {
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
            "parent": "UZHJAQDr_M",
            "hidden": false,
            "nodes": [
                "lwZkvHCu2p",
                "rHj5HbPcxo"
            ],
            "linkedNodes": {}
        },
        "lwZkvHCu2p": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "R9JVaoGA8B",
            "hidden": false,
            "nodes": [
                "byCBIV0Jk4"
            ],
            "linkedNodes": {}
        },
        "byCBIV0Jk4": {
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
            "parent": "lwZkvHCu2p",
            "hidden": false,
            "nodes": [
                "3p0w4yYx0p"
            ],
            "linkedNodes": {}
        },
        "3p0w4yYx0p": {
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
            "parent": "byCBIV0Jk4",
            "hidden": false,
            "nodes": [
                "6hfYe7nVxP",
                "YxvAGDHJfc",
                "Lf0LGZeYC6",
                "HUgFCaQMK3",
                "y89I5uKnTj",
                "FZD_tLn5HV",
                "dCx0GriJ8k",
                "KUVIh645sD"
            ],
            "linkedNodes": {}
        },
        "6hfYe7nVxP": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "2tg67ZiXkV"
            ],
            "linkedNodes": {}
        },
        "2tg67ZiXkV": {
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
            "parent": "6hfYe7nVxP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "YxvAGDHJfc": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "MvziYYB-Qv",
                "lV4MKuQ6AI"
            ],
            "linkedNodes": {}
        },
        "MvziYYB-Qv": {
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
            "parent": "YxvAGDHJfc",
            "hidden": false,
            "nodes": [
                "5-a1duSYfj"
            ],
            "linkedNodes": {}
        },
        "5-a1duSYfj": {
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
            "parent": "MvziYYB-Qv",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lV4MKuQ6AI": {
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
            "parent": "YxvAGDHJfc",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Lf0LGZeYC6": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "PMl84_MdTq"
            ],
            "linkedNodes": {}
        },
        "PMl84_MdTq": {
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
            "parent": "Lf0LGZeYC6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "HUgFCaQMK3": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "TLg43WZ0Ht",
                "4TmqLbcwRD",
                "UOVkXkC1Ik"
            ],
            "linkedNodes": {}
        },
        "TLg43WZ0Ht": {
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
            "parent": "HUgFCaQMK3",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "4TmqLbcwRD": {
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
            "parent": "HUgFCaQMK3",
            "hidden": false,
            "nodes": [
                "E_TLCyD51e"
            ],
            "linkedNodes": {}
        },
        "E_TLCyD51e": {
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
            "parent": "4TmqLbcwRD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UOVkXkC1Ik": {
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
            "parent": "HUgFCaQMK3",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "y89I5uKnTj": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "jpZxWVknkg"
            ],
            "linkedNodes": {}
        },
        "jpZxWVknkg": {
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
            "parent": "y89I5uKnTj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "FZD_tLn5HV": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "EomM89ic1q",
                "nvy3Q8MLF1",
                "vkA75FlmXl"
            ],
            "linkedNodes": {}
        },
        "EomM89ic1q": {
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
            "parent": "FZD_tLn5HV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "nvy3Q8MLF1": {
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
            "parent": "FZD_tLn5HV",
            "hidden": false,
            "nodes": [
                "nnNtj2GM_a"
            ],
            "linkedNodes": {}
        },
        "nnNtj2GM_a": {
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
            "parent": "nvy3Q8MLF1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "vkA75FlmXl": {
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
            "parent": "FZD_tLn5HV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "dCx0GriJ8k": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "j89cR2xD-Z"
            ],
            "linkedNodes": {}
        },
        "j89cR2xD-Z": {
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
            "parent": "dCx0GriJ8k",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "KUVIh645sD": {
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
            "parent": "3p0w4yYx0p",
            "hidden": false,
            "nodes": [
                "QHMwU2TfuN",
                "WlInumCWnb",
                "RY2_70i0-f"
            ],
            "linkedNodes": {}
        },
        "QHMwU2TfuN": {
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
            "parent": "KUVIh645sD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "WlInumCWnb": {
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
            "parent": "KUVIh645sD",
            "hidden": false,
            "nodes": [
                "6EYv4Y-uAS"
            ],
            "linkedNodes": {}
        },
        "6EYv4Y-uAS": {
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
            "parent": "WlInumCWnb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "RY2_70i0-f": {
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
            "parent": "KUVIh645sD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rHj5HbPcxo": {
            "type": {
                "resolvedName": "CustomNode"
            },
            "isCanvas": false,
            "props": {},
            "displayName": "CustomNode",
            "custom": {},
            "parent": "R9JVaoGA8B",
            "hidden": false,
            "nodes": [
                "JFnCFeWesT"
            ],
            "linkedNodes": {}
        },
        "JFnCFeWesT": {
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
            "parent": "rHj5HbPcxo",
            "hidden": false,
            "nodes": [
                "hjf2V7p7x5"
            ],
            "linkedNodes": {}
        },
        "hjf2V7p7x5": {
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
                "isScroll": true,
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
            "parent": "JFnCFeWesT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
} 
