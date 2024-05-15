import {contentstyle, statsuMap, contentpaddingstyle} from '../pageNodeDefault';
/**
 * 报表
 */

export default (source, links, global) => {
    return  {
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
                "rEq0J-S1fP"
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
                "value": {
                    "bind": "Temp",
                    "type": "global",
                  },
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
                "value": "20",
                "value": {
                    "bind": "Hum",
                    "type": "global",
                },
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
                    paddingRight: 0,
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
                "isHighlight": "default",
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
                "isHighlight": "primary",
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
        "rEq0J-S1fP": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": 809,
                    "widthType": "relative",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "side",
                    "padding": 24,
                    "heightUnit": "px",
                    "paddingTop": 12,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 0,
                    "widthUnit": "%"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HI7xVZM1Ya",
            "hidden": false,
            "nodes": [
                "JOLs_Eilg4"
            ],
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
        "JOLs_Eilg4": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "columns": 2,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "j-luMoe0HI",
                            "type": "color",
                            "key": "j-luMoe0HI",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "columnGap": 16,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "widthUnit": "%",
                    "paddingTop": 0,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 0
                },
                "displayName": "Columns"
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "rEq0J-S1fP",
            "hidden": false,
            "nodes": [
                "Wk6xJNYodW",
                "C-RRdmxTIV"
            ],
            "linkedNodes": {}
        },
        "Wk6xJNYodW": {
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                "paddingSide": "side",
                    // "padding": 8,
                  
                    "marginSide": "all",
                    "margin": 0,
                    "background": "unset",
                    "backgroundList": [],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                   "borderRadius": 6,
                    paddingRight: 0,
	                "paddingTop": 8,
	                "paddingLeft": 8,
	                "paddingBottom": 8
                },
                "id": "col-0"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "JOLs_Eilg4",
            "hidden": false,
            "nodes": [
                "sTclY5Ka8o",
                "bIj14ue2WK"
            ],
            "linkedNodes": {}
        },
        "sTclY5Ka8o": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "设备指标",
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "side",
                    "margin": 0,
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(117, 253, 244, 1)",
                    "borderSide": "side",
                    "borderRadius": 0,
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingLeft": 8,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingBottom": 0,
                    "marginTop": 19,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Wk6xJNYodW",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bIj14ue2WK": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                     overflow:'auto',
                    "heightType": "fit-content",
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "DtUJGaPc7t",
                            "type": "color",
                            "key": "DtUJGaPc7t",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "marginTop": 20,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Wk6xJNYodW",
            "hidden": false,
            "nodes": [
                "8Oaiah7cyt"
            ],
            "linkedNodes": {}
        },
        "8Oaiah7cyt": {
            "type": {
                "resolvedName": "Tree"
            },
            "isCanvas": false,
            "props": {
                "autoExpandParent": false,
                "checkable": true,
                "defaultExpandAll": false,
                "showLine": false,
                "disabled": false,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "72vh",
                    "heightType": "viewport",
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "aS23UXJLex",
                            "type": "color",
                            "key": "aS23UXJLex",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                },
                "displayName": "Tree",
                "events": {
                    "onCheck": {
                        "action": "linkTo",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "tags"
                        }
                    }
                },
                "type": "DEVICE_TAG"
            },
            "displayName": "Tree",
            "custom": {},
            "parent": "bIj14ue2WK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "C-RRdmxTIV": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 18,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
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
                    "background": "unset",
                    "backgroundList": [],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "id": "col-1"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "JOLs_Eilg4",
            "hidden": false,
            "nodes": [
                "A-4n2CLcWD"
            ],
            "linkedNodes": {}
        },
        "A-4n2CLcWD": {
            "type": {
                "resolvedName": "SegmentedTabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "SegmentedTabs",
                "position": "right",
                "isTitle": true,
                "segmented": {
                    "value": "1",
                    "options": [
                        {
                            "id": "C9k9UEiPVi",
                            "label": "",
                            "value": "2",
                            "disabled": false,
                            "icon": "TableOutlined"
                        },
                        {
                            "id": "ncAlVjbbw5",
                            "label": "",
                            "value": "1",
                            "disabled": false,
                            "icon": "LineChartOutlined"
                        }
                    ]
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "C-RRdmxTIV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "U1ZjcijMFX",
                "container-2": "oVfQjCFmHx",
                "title": "x8bC-JNbyh"
            }
        },
        "U1ZjcijMFX": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    overflow:'auto',
                    "heightType": "fit-content",
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "8Zyneo1k-b",
                            "type": "color",
                            "key": "8Zyneo1k-b",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A-4n2CLcWD",
            "hidden": false,
            "nodes": [
                "9tKKb5Wjzx"
            ],
            "linkedNodes": {}
        },
        "9tKKb5Wjzx": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "day",
                "ranges": "Sun Apr 28 2024 19:51:43 GMT+0800 (中国标准时间)",
                "aggregate": "sum",
                "timeType": "1 hour",
                "option": {
                    "tooltip": {
                        "show": true,
                        "trigger": "axis"
                    },
                    "legend": {
                        "data": [
                            "系列1",
                            "系列2",
                            "系列3"
                        ]
                    },
                    "grid": {
                        "left": 7,
                        "right": 7,
                        "bottom": 10,
                        "top": 10,
                        "containLabel": true
                    },
                    "toolbox": {},
                    "xAxis": {
                        "type": "time",
                        "boundaryGap": false,
                        "data": [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ]
                    },
                    "yAxis": {
                        "type": "value"
                    },
                    "series": [
                        {
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        },
                        {
                            "name": "系列2",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        },
                        {
                            "name": "系列3",
                            "type": "line",
                            "stack": "总量",
                            "data": []
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "72vh",
                    "heightType": "viewport",
                    "heightUnit": "vh",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "U1ZjcijMFX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "oVfQjCFmHx": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "76vh",
                    "heightType": "viewport",
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
                    "heightUnit": "vh"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A-4n2CLcWD",
            "hidden": false,
            "nodes": [
                "eBzShETOdL"
            ],
            "linkedNodes": {}
        },
        "eBzShETOdL": {
            "type": {
                "resolvedName": "Table"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Table",
                "source": "point",
                "size": "middle",
                "loading": false,
                "bordered": false,
                "showHeader": true,
                "isPagination": true,
                "columns": [],
                "alarm": {
                    "startDate": "",
                    "endDate": "",
                    "subSystemId": "",
                    "level": "",
                    "durationFilter": ""
                },
                "scroll": {
                    "x": 1000,
                    "y": 600
                },
                "pagination": {
                    "pageSize": 20,
                    "page": 0
                },
                "point": {
                    "aggregate": "sum",
                    "timeType": "1 hour",
                    "begin": "",
                    "end": ""
                },
                "isScroll": true,
                "extra": {
                    "total": 0
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "oVfQjCFmHx",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "x8bC-JNbyh": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "A-4n2CLcWD",
            "hidden": false,
            "nodes": [
                "kGNn8RreSo",
                "oGfJlqidxI"
            ],
            "linkedNodes": {}
        },
        "kGNn8RreSo": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "10%",
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "x8bC-JNbyh",
            "hidden": false,
            "nodes": [
                "Oi3g4bchDL"
            ],
            "linkedNodes": {}
        },
        "Oi3g4bchDL": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报警查询",
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(117, 253, 244, 1)",
                    "borderSide": "side",
                    "borderRadius": 0,
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingRight": 0,
                    "paddingLeft": 8
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "kGNn8RreSo",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "oGfJlqidxI": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "90%",
                    "height": 52,
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
                    "padding": 0,
                    "widthUnit": "%",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "columnGap": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "x8bC-JNbyh",
            "hidden": false,
            "nodes": [
                "lah0DaxKYG"
            ],
            "linkedNodes": {}
        },
        "lah0DaxKYG": {
            "type": {
                "resolvedName": "Form"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Form",
                "name": "",
                "colon": true,
                "disabled": false,
                "labelWrap": false,
                "labelAlign": "right",
                "layout": "horizontal",
                "size": "middle",
                "labelCol": {},
                "wrapperCol": {
                    "offset": null
                },
                "events": {
                    "onFinish": {
                        "action": "formLinkage",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ]
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 2,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "Form",
            "custom": {},
            "parent": "oGfJlqidxI",
            "hidden": false,
            "nodes": [
                "BQgKcyrcD8",
                "pQJdn3Y8hj",
                "a4RgC5RPec",
                "W-dsc_y98a",
                "ketmJmivV4"
            ],
            "linkedNodes": {}
        },
        "BQgKcyrcD8": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "begin",
                "label": "开始时间",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "lah0DaxKYG",
            "hidden": false,
            "nodes": [
                "7vYtBP3vLW"
            ],
            "linkedNodes": {}
        },
        "7vYtBP3vLW": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "",
                "picker": "date",
                "size": "default",
                "format": "YYYY-MM-DD",
                "placement": "bottomLeft",
                "showNow": false,
                "showTime": false,
                "showToday": true,
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "begin"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "BQgKcyrcD8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pQJdn3Y8hj": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "end",
                "label": "结束时间",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "lah0DaxKYG",
            "hidden": false,
            "nodes": [
                "vWdjDZKJS1"
            ],
            "linkedNodes": {}
        },
        "vWdjDZKJS1": {
            "type": {
                "resolvedName": "DatePicker"
            },
            "isCanvas": false,
            "props": {
                "displayName": "DatePicker",
                "placeholder": "",
                "picker": "date",
                "size": "default",
                "format": "YYYY-MM-DD",
                "placement": "bottomLeft",
                "showNow": false,
                "showTime": false,
                "showToday": true,
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "end"
                        }
                    }
                },
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "DatePicker",
            "custom": {},
            "parent": "pQJdn3Y8hj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "a4RgC5RPec": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "aggregate",
                "label": "聚合",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "lah0DaxKYG",
            "hidden": false,
            "nodes": [
                "0ift6Ytglf"
            ],
            "linkedNodes": {}
        },
        "0ift6Ytglf": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "聚合方式",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": "sum",
                "options": [
                    {
                        "id": "2OMAGByevk",
                        "label": "首",
                        "value": "first",
                        "disabled": false
                    },
                    {
                        "id": "tpY-DxggRc",
                        "label": "尾",
                        "value": "last",
                        "disabled": false
                    },
                    {
                        "id": "jB-jKLRnnq",
                        "label": "平均值",
                        "value": "average",
                        "disabled": false
                    },
                    {
                        "id": "cNZp5JAGZW",
                        "label": "最小值",
                        "value": "minimum",
                        "disabled": false
                    },
                    {
                        "id": "gmBTxxwNCV",
                        "value": "maximum",
                        "label": "最大值",
                        "disabled": false
                    },
                    {
                        "id": "104zwp-y97",
                        "value": "sum",
                        "label": "求和",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "aggregate"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "a4RgC5RPec",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "W-dsc_y98a": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "timeType",
                "label": "聚合粒度",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "lah0DaxKYG",
            "hidden": false,
            "nodes": [
                "p6ryXzmoMh"
            ],
            "linkedNodes": {}
        },
        "p6ryXzmoMh": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "聚合粒度",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": true,
                "bordered": true,
                "defaultValue": "1 hour",
                "options": [
                    {
                        "id": "0T_B04fY4r",
                        "label": "时",
                        "value": "1 hour",
                        "disabled": false
                    },
                    {
                        "id": "vuF1qFYDH5",
                        "label": "天",
                        "value": "1 day",
                        "disabled": false
                    },
                    {
                        "id": "nN3loYpjWT",
                        "label": "周",
                        "value": "1 week",
                        "disabled": false
                    },
                    {
                        "id": "cf2K9CAG62",
                        "label": "月",
                        "value": "1 month",
                        "disabled": false
                    },
                    {
                        "id": "zBURoEIgYB",
                        "value": "1 year",
                        "label": "年",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "nYxFSEucY_",
                                "3ZupCvWlw7"
                            ],
                            "props": "timeType"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "150px",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fixed",
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
                    "widthUnit": "px"
                },
                "displayName": "Select",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "W-dsc_y98a",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ketmJmivV4": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "displayName": "FormItem",
                "name": "",
                "label": "",
                "wrapperCol": {},
                "rules": [],
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
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
                    "margin": 0
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "lah0DaxKYG",
            "hidden": false,
            "nodes": [
                "h0Umyvikag"
            ],
            "linkedNodes": {}
        },
        "h0Umyvikag": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "查询",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "",
                "htmlType": "submit",
                "isHighlight": "default",
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
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 4,
                    "marginSide": "all",
                    "margin": 0,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "ketmJmivV4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}
