import { contentstyle, statsuMap, navigationButtonStyle } from '../pageNodeDefault';
/**
 * 报表
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
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "background": "url(/assets/images/bg-light.jpg) 50% 50% / 100% 100% no-repeat,linear-gradient(rgba(36, 66, 105, 1), rgba(36, 66, 105, 1))",
                    "padding": 0,
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "EnzfEc_Z30",
                            "type": "image",
                            "key": "EnzfEc_Z30",
                            "value": {
                                "backgroundImage": "9amN2wcWRb17XbWX_diPRu",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "100% 100%",
                                "backgroundPosition": "50% 50%"
                            },
                            "disabled": false
                        },
                        {
                            "id": "PZF0nxG2iR",
                            "key": "PZF0nxG2iR",
                            "disabled": false,
                            "value": "rgba(36, 66, 105, 1)"
                        }
                    ],
                    "heightUnit": "vh",
                    "overflow": "hidden"
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
                },
                "points": {
                    "ELEC_CH_GROUP": 0,
                    "T_OUTDOOR": 0,
                    "TW_OUTDOOR": 0,
                    "RH_OUTDOOR": 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "GDHzG-IR8C"
            ],
            "linkedNodes": {}
        },
        "GDHzG-IR8C": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 0,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "heightUnit": "%",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "_bu-P8Jd9v",
                "P-sE-gyXN9",
                "DzdF2lAXwy"
            ],
            "linkedNodes": {}
        },
        "P-sE-gyXN9": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 20,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 24,
                    "overflow": "hidden",
                    "display": "flex",
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "heightUnit": "%",
                    "widthUnit": "%"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "GDHzG-IR8C",
            "hidden": false,
            "nodes": [
                "hRI455hgsg"
            ],
            "linkedNodes": {}
        },
        "_bu-P8Jd9v": {
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
            "parent": "GDHzG-IR8C",
            "hidden": false,
            "nodes": [
                "XFwLiRnBzy",
                "Vgegb0evCV"
            ],
            "linkedNodes": {}
        },
        "DzdF2lAXwy": {
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
                    "fontSize": 18,
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
            "parent": "GDHzG-IR8C",
            "hidden": false,
            "nodes": [
                "ZGkmyN7vPM",
                "DMy1weqKdt",
                "beyViFlEr0",
                "MhDwkmPfCZ"
            ],
            "linkedNodes": {}
        },
        "XFwLiRnBzy": {
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
            "parent": "_bu-P8Jd9v",
            "hidden": false,
            "nodes": [
                "s6wPPycyt0"
            ],
            "linkedNodes": {}
        },
        "Vgegb0evCV": {
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
            "parent": "_bu-P8Jd9v",
            "hidden": false,
            "nodes": [
                "GWStC6RTwa",
                "IYG2vrPjFP",
                "fRndt4Fi6N",
                "N5LGzV-zwb",
                "Wz_NVc38d_"
            ],
            "linkedNodes": {}
        },
        "s6wPPycyt0": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "ProjectName",
                    "type": "global",
                    "point": [
                        "ProjectName"
                    ]
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
            "parent": "XFwLiRnBzy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fRndt4Fi6N": {
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
            "parent": "Vgegb0evCV",
            "hidden": false,
            "nodes": [
                "wjpleAA4r2",
                "uL1adOlJ06"
            ],
            "linkedNodes": {}
        },
        "IYG2vrPjFP": {
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
            "parent": "Vgegb0evCV",
            "hidden": false,
            "nodes": [
                "wDooRJiemw",
                "BYVc8MAM1c"
            ],
            "linkedNodes": {}
        },
        "GWStC6RTwa": {
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
            "parent": "Vgegb0evCV",
            "hidden": false,
            "nodes": [
                "6MiA1ob3-q",
                "3ZSKs2Yfd7"
            ],
            "linkedNodes": {}
        },
        "6MiA1ob3-q": {
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
            "parent": "GWStC6RTwa",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "3ZSKs2Yfd7": {
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
            "parent": "GWStC6RTwa",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wDooRJiemw": {
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
            "parent": "IYG2vrPjFP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "BYVc8MAM1c": {
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
            "parent": "IYG2vrPjFP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "uL1adOlJ06": {
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
            "parent": "fRndt4Fi6N",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "wjpleAA4r2": {
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
            "parent": "fRndt4Fi6N",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "N5LGzV-zwb": {
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
            "parent": "Vgegb0evCV",
            "hidden": false,
            "nodes": [
                "5co1ekEpaP",
                "_h_7tl7gnv"
            ],
            "linkedNodes": {}
        },
        "Wz_NVc38d_": {
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
            "parent": "Vgegb0evCV",
            "hidden": false,
            "nodes": [
                "ECpM6yjkCu"
            ],
            "linkedNodes": {}
        },
        "5co1ekEpaP": {
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
            "parent": "N5LGzV-zwb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "_h_7tl7gnv": {
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
            "parent": "N5LGzV-zwb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ECpM6yjkCu": {
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
            "parent": "Wz_NVc38d_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "DMy1weqKdt": {
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
                    "fontSize": 18,
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
            "parent": "DzdF2lAXwy",
            "hidden": false,
            "nodes": [
                "b06FtVv2Yr",
                "Vepct8x3rp",
                "uzR7gcKLqd",
                "bCnQN2qwa0",
                "qZtr-scBLD"
            ],
            "linkedNodes": {}
        },
        "beyViFlEr0": {
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
            "parent": "DzdF2lAXwy",
            "hidden": false,
            "nodes": [
                "PLy_2st3v1",
                "DRvwxf6NXD"
            ],
            "linkedNodes": {}
        },
        "qZtr-scBLD": {
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
            "parent": "DMy1weqKdt",
            "hidden": false,
            "nodes": [
                "54zjydAtBp"
            ],
            "linkedNodes": {}
        },
        "b06FtVv2Yr": {
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
            "parent": "DMy1weqKdt",
            "hidden": false,
            "nodes": [
                "LuMWvAGchW"
            ],
            "linkedNodes": {}
        },
        "Vepct8x3rp": {
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
            "parent": "DMy1weqKdt",
            "hidden": false,
            "nodes": [
                "oCpGYa3K6h"
            ],
            "linkedNodes": {}
        },
        "uzR7gcKLqd": {
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
            "parent": "DMy1weqKdt",
            "hidden": false,
            "nodes": [
                "ThUP9LMQIK"
            ],
            "linkedNodes": {}
        },
        "bCnQN2qwa0": {
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
            "parent": "DMy1weqKdt",
            "hidden": false,
            "nodes": [
                "z6Y_cRuRC-"
            ],
            "linkedNodes": {}
        },
        "PLy_2st3v1": {
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
            "parent": "beyViFlEr0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "DRvwxf6NXD": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": "UserId",
                    "type": "global",
                    "point": [
                        "UserId"
                    ]
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
            "parent": "beyViFlEr0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "MhDwkmPfCZ": {
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
            "parent": "DzdF2lAXwy",
            "hidden": false,
            "nodes": [
                "K569xjtztO"
            ],
            "linkedNodes": {}
        },
        "yzSiMli0GO": {
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
            "parent": "MhDwkmPfCZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LuMWvAGchW": {
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
                "style": navigationButtonStyle,
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "b06FtVv2Yr",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "oCpGYa3K6h": {
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
                "style": navigationButtonStyle,
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "Vepct8x3rp",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ThUP9LMQIK": {
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
                "style": navigationButtonStyle,
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "uzR7gcKLqd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z6Y_cRuRC-": {
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
                "style": navigationButtonStyle,
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "bCnQN2qwa0",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "54zjydAtBp": {
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
                    ...navigationButtonStyle,
                    fontWeight: 700
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "qZtr-scBLD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ZGkmyN7vPM": {
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
                    "fontSize": 18,
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
            "parent": "DzdF2lAXwy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fJGzt3RF13": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "children": "内容1"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "SAlXRzeGqy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "kzHbOpqE7y": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "children": "内容2"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "SAlXRzeGqy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hRI455hgsg": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 20,
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "heightUnit": "%",
                    "background": "unset",
                    "backgroundList": [],
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "overflow": "hidden"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "P-sE-gyXN9",
            "hidden": false,
            "nodes": [
                "MjbQccROaL",
                "lc2mxctcXZ"
            ],
            "linkedNodes": {}
        },
        "MjbQccROaL": {
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
                    "width": "280px",
                    "height": "100%",
                    "widthType": "fixed",
                    "heightType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "EhdyF4Cniw",
                            "type": "color",
                            "key": "EhdyF4Cniw",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "heightUnit": "%",
                    "widthUnit": "px",
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 32,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8,
                    "overflow": "auto"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "hRI455hgsg",
            "hidden": false,
            "nodes": [
                "wc3asneTx5",
                "r2mV2G36Wy"
            ],
            "linkedNodes": {}
        },
        "wc3asneTx5": {
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
                    "fontSize": 18,
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
                    "borderWidth": 0,
                    "borderStyle": "",
                    "borderColor": "transparent",
                    "borderSide": "",
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 3,
                    "borderBottomWidth": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 4,
                    "paddingBottom": 0,
                    "borderRadius": 0
                },
                "displayName": "Container"
            },
            "displayName": "Container",
            "custom": {},
            "parent": "MjbQccROaL",
            "hidden": false,
            "nodes": [
                "INttG6PgEU"
            ],
            "linkedNodes": {}
        },
        "INttG6PgEU": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "分项选择",
                "status": [],
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
                    "lineHeight": 1.1,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "borderWidth": 1,
                    "borderStyle": "solid",
                    "borderColor": "rgba(117, 253, 244, 1)",
                    "borderSide": "side",
                    "borderRadius": 0,
                    "borderTopWidth": 0,
                    "borderRightWidth": 0,
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingLeft": 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "wc3asneTx5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "r2mV2G36Wy": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "side",
                    "margin": 0,
                    "background": "unset",
                    "backgroundList": [],
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
            "parent": "MjbQccROaL",
            "hidden": false,
            "nodes": [
                "qlU6_-NWTS"
            ],
            "linkedNodes": {}
        },
        "qlU6_-NWTS": {
            "type": {
                "resolvedName": "Tree"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Tree",
                "checkable": true,
                "defaultExpandAll": true,
                "showLine": false,
                "disabled": false,
                "type": "DEVICE_TAG",
                "events": {
                    "onCheck": {
                        "action": "linkTo",
                        "link": {
                            "component": [
                                "qCUKHSXzrX",
                                "9rctmvTrZZ"
                            ],
                            "props": "tags"
                        }
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
            "displayName": "Tree",
            "custom": {},
            "parent": "r2mV2G36Wy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lc2mxctcXZ": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 0,
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
                    "padding": 0,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "mN41VG56Kd",
                            "type": "color",
                            "key": "mN41VG56Kd",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "paddingTop": 16,
                    "paddingRight": 12,
                    "paddingLeft": 12,
                    "paddingBottom": 0,
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "overflow": "hidden"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "hRI455hgsg",
            "hidden": false,
            "nodes": [
                "dEmI6w7k5C"
            ],
            "linkedNodes": {}
        },
        "dEmI6w7k5C": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "side",
                    "margin": 0,
                    "overflow": "hidden",
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "lc2mxctcXZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "Mv9VBX6jQC",
                "container-2": "kgXLi9rd8j",
                "title": "6r84BhuTLG"
            }
        },
        "Mv9VBX6jQC": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "71vh",
                    "overflow": "auto",
                    "heightType": "viewport",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "unset",
                    "backgroundList": [],
                    "heightUnit": "vh",
                    "paddingTop": 16,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dEmI6w7k5C",
            "hidden": false,
            "nodes": [
                "qCUKHSXzrX"
            ],
            "linkedNodes": {}
        },
        "qCUKHSXzrX": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "day",
                "ranges": Date(),
                "aggregate": "sum",
                "timeType": "1 hour",
                "option": {
                    "tooltip": {
                        "show": true,
                        "trigger": "axis"
                    },
                    "legend": {
                        "data": [
                            // "系列1",
                        ]
                    },
                    "grid": {
                    "left": 30,
                        "right": "10%",
                    "bottom": 30,
                        "top": "20%",
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
                        // {
                        //     "name": "系列1",
                        //     "type": "line",
                        //     "stack": "总量",
                        //     "data": []
                        // },
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "69vh",
                    "heightType": "viewport",
                    "heightUnit": "vh",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "Mv9VBX6jQC",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "kgXLi9rd8j": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "67vh",
                    "heightType": "viewport",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "heightUnit": "vh",
                    "widthUnit": "%",
                    "paddingTop": 16,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dEmI6w7k5C",
            "hidden": false,
            "nodes": [
                "9rctmvTrZZ"
            ],
            "linkedNodes": {}
        },
        "9rctmvTrZZ": {
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
                    "y": 530
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
                    "widthType": "relative",
                    "width": "100%",
                    "widthUnit": "%"
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "kgXLi9rd8j",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6r84BhuTLG": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "side",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter",
                    "flexWrap": "wrap",
                    "paddingTop": 0,
                    "paddingBottom": 0,
                    "marginTop": 2,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "dEmI6w7k5C",
            "hidden": false,
            "nodes": [
                "Ar0zEkaP8J",
                "9pCATOlagQ"
            ],
            "linkedNodes": {}
        },
        "Ar0zEkaP8J": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6r84BhuTLG",
            "hidden": false,
            "nodes": [
                "1ar_nRPnzK"
            ],
            "linkedNodes": {}
        },
        "1ar_nRPnzK": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "报表查询",
                "status": [],
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
                    "lineHeight": 1.1,
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
                    "borderLeftWidth": 2,
                    "borderBottomWidth": 0,
                    "paddingRight": 0,
                    "paddingLeft": 12
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Ar0zEkaP8J",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "9pCATOlagQ": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 0,
                    "widthUnit": "%",
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "columnGap": 8,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "6r84BhuTLG",
            "hidden": false,
            "nodes": [
                "FD-0RN4W7E",
                "gbsSSEYpKX"
            ],
            "linkedNodes": {}
        },
        "FD-0RN4W7E": {
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
                            "qCUKHSXzrX",
                            "9rctmvTrZZ"
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
                    "fontSize": 18,
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
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "columnGap": 2,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "flexWrap": "nowrap"
                }
            },
            "displayName": "Form",
            "custom": {},
            "parent": "9pCATOlagQ",
            "hidden": false,
            "nodes": [
                "JEVpezz0Fy",
                "qB1puSoaGz",
                "A15ZBSjAXe",
                "nFHaYW2wR_",
                "IJFAPSx-aB"
            ],
            "linkedNodes": {}
        },
        "JEVpezz0Fy": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "maxWidth": 280
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "FD-0RN4W7E",
            "hidden": false,
            "nodes": [
                "Nw7mHSyflR"
            ],
            "linkedNodes": {}
        },
        "Nw7mHSyflR": {
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
                                "qCUKHSXzrX",
                                "9rctmvTrZZ"
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
            "parent": "JEVpezz0Fy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qB1puSoaGz": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "maxWidth": 280
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "FD-0RN4W7E",
            "hidden": false,
            "nodes": [
                "TqhXNx9eRj"
            ],
            "linkedNodes": {}
        },
        "TqhXNx9eRj": {
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
                                "9rctmvTrZZ",
                                "qCUKHSXzrX"
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
            "parent": "qB1puSoaGz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "A15ZBSjAXe": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "maxWidth": 212
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "FD-0RN4W7E",
            "hidden": false,
            "nodes": [
                "zwM9gmPLfI"
            ],
            "linkedNodes": {}
        },
        "zwM9gmPLfI": {
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
                                "qCUKHSXzrX",
                                "9rctmvTrZZ"
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
                    "fontSize": 18,
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
            "parent": "A15ZBSjAXe",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "nFHaYW2wR_": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "maxWidth": 245
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "FD-0RN4W7E",
            "hidden": false,
            "nodes": [
                "4YmprN4RAn"
            ],
            "linkedNodes": {}
        },
        "4YmprN4RAn": {
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
                        "id": "M5j2W2AAa7",
                        "value": "5 seconds",
                        "label": "5秒",
                        "disabled": false
                    },
                    {
                        "id": "9QFvh2LqNa",
                        "value": "30 seconds",
                        "label": "30秒",
                        "disabled": false
                    },
                    {
                        "id": "glMxrZez4Z",
                        "value": "1 minutes",
                        "label": "1分钟",
                        "disabled": false
                    },
                    {
                        "id": "KbJ-36Sqhz",
                        "value": "5 minutes",
                        "label": "5分钟",
                        "disabled": false
                    },
                    {
                        "id": "RsV4CAu7HT",
                        "value": "30 minutes",
                        "label": "30分钟",
                        "disabled": false
                    },
                    {
                        "id": "0T_B04fY4r",
                        "label": "1小时",
                        "value": "1 hour",
                        "disabled": false
                    },
                    {
                        "id": "vuF1qFYDH5",
                        "label": "1天",
                        "value": "1 day",
                        "disabled": false
                    },
                    {
                        "id": "nN3loYpjWT",
                        "label": "1周",
                        "value": "1 week",
                        "disabled": false
                    },
                    {
                        "id": "cf2K9CAG62",
                        "label": "1月",
                        "value": "1 month",
                        "disabled": false
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "bindProperty",
                        "link": {
                            "component": [
                                "qCUKHSXzrX",
                                "9rctmvTrZZ"
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
                    "fontSize": 18,
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
            "parent": "nFHaYW2wR_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "IJFAPSx-aB": {
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
                    "width": "auto",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
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
            "parent": "FD-0RN4W7E",
            "hidden": false,
            "nodes": [
                "I-tmMmR9xn"
            ],
            "linkedNodes": {}
        },
        "I-tmMmR9xn": {
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
                "status": [],
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "auto",
                    "heightType": "fit-content",
                    "widthType": "relative",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
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
            "parent": "IJFAPSx-aB",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gbsSSEYpKX": {
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
            "parent": "9pCATOlagQ",
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
            "parent": "MhDwkmPfCZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }
}
