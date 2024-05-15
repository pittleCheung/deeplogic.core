import dayjs from 'dayjs';

/**
 * 能耗
 */
export default (source, links, global, type) => {
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
                "isHighlight": "primary",
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
                    "padding": 24,
                    "heightUnit": "%",
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "HI7xVZM1Ya",
            "hidden": false,
            "nodes": [
                "OxVKE7jmXP"
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
        "OxVKE7jmXP": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "83vh",
                    "widthType": "relative",
                    "heightType": "viewport",
                    "fontFamily": "PingFang SC",
                    "fontSize": 14,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "side",
                    "padding": 16,
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "backgroundList": [
                        {
                            "id": "PUyXCWfLrC",
                            "type": "color",
                            "key": "PUyXCWfLrC",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "widthUnit": "%",
                    "display": "",
                    "flexDirection": "",
                    "rowGap": "",
                    "columnGap": "",
                    "key": "centerCenter",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": "",
                    "marginTop": 14,
                    "heightUnit": "vh",
                    "margin": null,
                    "paddingTop": 0,
                    "paddingRight": 16,
                    "paddingLeft": 16,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "rEq0J-S1fP",
            "hidden": false,
            "nodes": [
                "QITBet488r"
            ],
            "linkedNodes": {}
        },
        "QITBet488r": {
            "type": {
                "resolvedName": "Tabs"
            },
            "isCanvas": true,
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
                        "label": "能耗分项",
                        "key": "1",
                        "children": "内容1",
                        "name": "能耗分项",
                        "title": "能耗分项"
                    },
                    {
                        "id": "2",
                        "label": "能耗指标",
                        "key": "2",
                        "children": "内容2",
                        "name": "能耗指标",
                        "title": "能耗指标"
                    }
                ]
            },
            "displayName": "Tabs",
            "custom": {},
            "parent": "OxVKE7jmXP",
            "hidden": false,
            "nodes": [
                "GTmvanfg5b",
                "SP_AxqWYqM"
            ],
            "linkedNodes": {
                "container-1": "HJOnC7SkB_",
                "container-2": "o5lKkMSxAh"
            }
        },
        "GTmvanfg5b": {
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
                    "padding": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "QITBet488r",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "SP_AxqWYqM": {
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
                    "padding": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "QITBet488r",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "HJOnC7SkB_": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "80vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 4,
                    "heightUnit": "vh"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "QITBet488r",
            "hidden": false,
            "nodes": [
                "zgxMrG5rV1",
                "q1nTy-InAP"
            ],
            "linkedNodes": {}
        },
        "zgxMrG5rV1": {
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
                    "height": "75vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "heightUnit": "vh"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "HJOnC7SkB_",
            "hidden": false,
            "nodes": [
                "sqLauP9foN",
                "cpvt9LVTBX"
            ],
            "linkedNodes": {}
        },
        "sqLauP9foN": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(117, 253, 244, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 4,
                    "paddingBottom": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "zgxMrG5rV1",
            "hidden": false,
            "nodes": [
                "6Je8zAr0K-"
            ],
            "linkedNodes": {}
        },
        "6Je8zAr0K-": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "分项选择",
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
            "parent": "sqLauP9foN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "cpvt9LVTBX": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "marginSide": "side",
                    "margin": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "yAOP4-Kn2_",
                            "type": "color",
                            "key": "yAOP4-Kn2_",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "marginTop": 20,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "zgxMrG5rV1",
            "hidden": false,
            "nodes": [
                "VppqIo-LNk"
            ],
            "linkedNodes": {}
        },
        "VppqIo-LNk": {
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
                "type": "SUBENTRY",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "65vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                            "id": "ln7_pJo3zd",
                            "type": "color",
                            "key": "ln7_pJo3zd",
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
                                "GePZT1PvVz",
                                "3ZupCvWlw7"
                            ],
                            "props": "tags"
                        }
                    }
                }
            },
            "displayName": "Tree",
            "custom": {},
            "parent": "cpvt9LVTBX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "q1nTy-InAP": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 19,
                "flex": "",
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "75vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "heightUnit": "vh"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "HJOnC7SkB_",
            "hidden": false,
            "nodes": [
                "kB3BUcuwg-"
            ],
            "linkedNodes": {}
        },
        "kB3BUcuwg-": {
            "type": {
                "resolvedName": "SegmentedTabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "SegmentedTabs",
                "position": "right",
                "segmented": {
                    "value": "2",
                    "options": [
                        {
                            "id": "PJPA1lPAuO",
                            "label": "",
                            "value": "1",
                            "disabled": false,
                            "icon": "LineChartOutlined",
                            "name": "",
                            "title": ""
                        },
                        {
                            "id": "LQi_5f0Yv8",
                            "label": "",
                            "value": "2",
                            "disabled": false,
                            "icon": "TableOutlined"
                        }
                    ]
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                },
                "isTitle": true
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "q1nTy-InAP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "Gk5MHYWveX",
                "container-2": "hHMRBVugc8",
                "title": "fneKaJ9m_F"
            }
        },
        "Gk5MHYWveX": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "kB3BUcuwg-",
            "hidden": false,
            "nodes": [
                "ZfCj_029RX"
            ],
            "linkedNodes": {}
        },
        "ZfCj_029RX": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "",
                "timeType": "",
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
                    ],
                    "title": {
                        "show": false
                    }
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "70vh",
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
            "parent": "Gk5MHYWveX",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hHMRBVugc8": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "65vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                            "id": "TivRPwTRfY",
                            "type": "color",
                            "key": "TivRPwTRfY",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "vh",
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "kB3BUcuwg-",
            "hidden": false,
            "nodes": [
                "eHq8QoV8P1"
            ],
            "linkedNodes": {}
        },
        "eHq8QoV8P1": {
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
                },
                "style": {
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "hHMRBVugc8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fneKaJ9m_F": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(117, 253, 244, 1)",
                    "borderSide": "side",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 10,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "kB3BUcuwg-",
            "hidden": false,
            "nodes": [
                "14d5wIjDjy"
            ],
            "linkedNodes": {}
        },
        "14d5wIjDjy": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "查询能耗",
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
            "parent": "fneKaJ9m_F",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "o5lKkMSxAh": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "",
                    "flexDirection": "",
                    "rowGap": "",
                    "columnGap": "",
                    "key": "topRight",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "QITBet488r",
            "hidden": false,
            "nodes": [
                "EswztQsmGD",
                "pL_J8-8E4O"
            ],
            "linkedNodes": {}
        },
        "EswztQsmGD": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "marginSide": "side",
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 4,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 20
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "o5lKkMSxAh",
            "hidden": false,
            "nodes": [
                "nE5s8LTZ_s",
                "YpkFlhvzbg",
                "I-T_DE4Xz2"
            ],
            "linkedNodes": {}
        },
        "nE5s8LTZ_s": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "iY06fJ1TbI",
                            "type": "color",
                            "key": "iY06fJ1TbI",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "EswztQsmGD",
            "hidden": false,
            "nodes": [
                "Ea9jeKYl44",
                "WgJUfik19y"
            ],
            "linkedNodes": {}
        },
        "Ea9jeKYl44": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "nE5s8LTZ_s",
            "hidden": false,
            "nodes": [
                "LAJGzKzQid",
                "cN46ViZBQc"
            ],
            "linkedNodes": {}
        },
        "LAJGzKzQid": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "系统总功率" :"系统COP",
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
            "parent": "Ea9jeKYl44",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "cN46ViZBQc": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "nKc6HaTlIG",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "Ea9jeKYl44",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "WgJUfik19y": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "nE5s8LTZ_s",
            "hidden": false,
            "nodes": [
                "nKc6HaTlIG"
            ],
            "linkedNodes": {}
        },
        "nKc6HaTlIG": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "FehDVpavZK",
                            "label": type ? source?.P_CAS?.NAME : source?.COP_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.COP_HVAC?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
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
            "parent": "WgJUfik19y",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "YpkFlhvzbg": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "_L1oP77nKE",
                            "type": "color",
                            "key": "_L1oP77nKE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "EswztQsmGD",
            "hidden": false,
            "nodes": [
                "YqxNc0Vi4P",
                "D8Vlfbvfh1"
            ],
            "linkedNodes": {}
        },
        "YqxNc0Vi4P": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "YpkFlhvzbg",
            "hidden": false,
            "nodes": [
                "0ELChWEx3U",
                "Sjp5YptNqf"
            ],
            "linkedNodes": {}
        },
        "0ELChWEx3U": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type? "系统气电比" : "系统总功率",
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
            "parent": "YqxNc0Vi4P",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Sjp5YptNqf": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "gq4hH2fO36",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "YqxNc0Vi4P",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "D8Vlfbvfh1": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "YpkFlhvzbg",
            "hidden": false,
            "nodes": [
                "gq4hH2fO36"
            ],
            "linkedNodes": {}
        },
        "gq4hH2fO36": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "6Q_0e5XKui",
                            "label": type === 'CAS' ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": type === 'CAS' ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "D8Vlfbvfh1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "I-T_DE4Xz2": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "FHZvWXoNFB",
                            "type": "color",
                            "key": "FHZvWXoNFB",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "EswztQsmGD",
            "hidden": false,
            "nodes": [
                "Hv3XIafLFO",
                "YbyOY2TLwS"
            ],
            "linkedNodes": {}
        },
        "Hv3XIafLFO": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "I-T_DE4Xz2",
            "hidden": false,
            "nodes": [
                "C4E7K2LSUu",
                "EZ__WV96JO"
            ],
            "linkedNodes": {}
        },
        "C4E7K2LSUu": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "系统制冷量",
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
            "parent": "Hv3XIafLFO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EZ__WV96JO": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "CeScm4tVYB",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "Hv3XIafLFO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "YbyOY2TLwS": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "I-T_DE4Xz2",
            "hidden": false,
            "nodes": [
                "CeScm4tVYB"
            ],
            "linkedNodes": {}
        },
        "CeScm4tVYB": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "PT4ctFc21M",
                            "label": source?.[type? 'AIR_DU_RATIO' : 'LOAD']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.LOAD?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "YbyOY2TLwS",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pL_J8-8E4O": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 4,
                    "flexWrap": "nowrap",
                    "widthUnit": "%"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "o5lKkMSxAh",
            "hidden": false,
            "nodes": [
                "qDYNoixbqA",
                "UQWocxpinN",
                "dmtTZ09tdP"
            ],
            "linkedNodes": {}
        },
        "qDYNoixbqA": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "mWZtMhXpDT",
                            "type": "color",
                            "key": "mWZtMhXpDT",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "display": "",
                    "flexDirection": "",
                    "key": "topLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pL_J8-8E4O",
            "hidden": false,
            "nodes": [
                "l--pYdW3fF",
                "mmJYKX8oq1"
            ],
            "linkedNodes": {}
        },
        "l--pYdW3fF": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": 35,
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
                    "widthUnit": "%",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "topRight",
                    "justifyContent": "flex-end",
                    "alignItems": "flex-start"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qDYNoixbqA",
            "hidden": false,
            "nodes": [
                "WaCBRH8b07",
                "u1XYhOmuv3"
            ],
            "linkedNodes": {}
        },
        "WaCBRH8b07": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "加载压力" : "系统总能耗",
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
            "parent": "l--pYdW3fF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "u1XYhOmuv3": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "_4l8q0s9oI",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "l--pYdW3fF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "mmJYKX8oq1": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qDYNoixbqA",
            "hidden": false,
            "nodes": [
                "_4l8q0s9oI"
            ],
            "linkedNodes": {}
        },
        "_4l8q0s9oI": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "R5P9pj8D3H",
                            "label": type == 'CAS' ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": type == 'CAS' ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "mmJYKX8oq1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UQWocxpinN": {
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
                    "paddingSide": "side",
                    "padding": 8,
                    "marginSide": "side",
                    "margin": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "75hDBkAAg1",
                            "type": "color",
                            "key": "75hDBkAAg1",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "display": "",
                    "flexDirection": "",
                    "key": "topLeft",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": "",
                    "columnGap": "",
                    "justifyItems": "",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pL_J8-8E4O",
            "hidden": false,
            "nodes": [
                "WzjP9sew1w",
                "M0aPmgxfXK"
            ],
            "linkedNodes": {}
        },
        "WzjP9sew1w": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "UQWocxpinN",
            "hidden": false,
            "nodes": [
                "xi6sR5iJ71",
                "zoqIwaJVVb"
            ],
            "linkedNodes": {}
        },
        "xi6sR5iJ71": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "卸载压力" :"冷机出水温度",
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
            "parent": "WzjP9sew1w",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "zoqIwaJVVb": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "8Om-Mc8dLW",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "WzjP9sew1w",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "M0aPmgxfXK": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": []
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "UQWocxpinN",
            "hidden": false,
            "nodes": [
                "8Om-Mc8dLW"
            ],
            "linkedNodes": {}
        },
        "8Om-Mc8dLW": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "RHwYOdAsdF",
                            "label": source?.[type ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[type ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "M0aPmgxfXK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "dmtTZ09tdP": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "4XnXw2XkyJ",
                            "type": "color",
                            "key": "4XnXw2XkyJ",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pL_J8-8E4O",
            "hidden": false,
            "nodes": [
                "w7uYchnB7a",
                "gs7-fJgh7f"
            ],
            "linkedNodes": {}
        },
        "w7uYchnB7a": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                    "margin": 0,
                    "background": null,
                    "backgroundList": [],
                    "widthUnit": "%",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dmtTZ09tdP",
            "hidden": false,
            "nodes": [
                "e2V6qZY9lJ",
                "xXNlC1fkdF"
            ],
            "linkedNodes": {}
        },
        "e2V6qZY9lJ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": type ? "排气压力" : "冷却回水温度",
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
            "parent": "w7uYchnB7a",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "xXNlC1fkdF": {
            "type": {
                "resolvedName": "Segmented"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Segmented",
                "value": "day",
                "size": "middle",
                "disabled": false,
                "block": false,
                "options": [
                    {
                        "id": "m3tj7aI6ga",
                        "label": "日",
                        "value": "day",
                        "disabled": false,
                        "name": "日",
                        "title": "日",
                        "icon": ""
                    },
                    {
                        "id": "I-ELpElPa2",
                        "label": "周",
                        "value": "week",
                        "disabled": false,
                        "name": "周",
                        "title": "周",
                        "icon": ""
                    },
                    {
                        "id": "bkeGaewrbS",
                        "label": "月",
                        "value": "month",
                        "disabled": false,
                        "name": "月",
                        "title": "月",
                        "icon": ""
                    },
                    {
                        "id": "rLU_ww1cft",
                        "icon": "",
                        "label": "年",
                        "value": "year",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "linkTo",
                        "link": {
                            "component": "RwdWHgvsUQ",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "w7uYchnB7a",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gs7-fJgh7f": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
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
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dmtTZ09tdP",
            "hidden": false,
            "nodes": [
                "RwdWHgvsUQ"
            ],
            "linkedNodes": {}
        },
        "RwdWHgvsUQ": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "sum",
                "timeType": "",
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
                            "id": "UiBKiST1y3",
                            "label": source?.[type ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME,
                            "name": "系列1",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[type ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": 300,
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "gs7-fJgh7f",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}