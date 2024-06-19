import { contentstyle, statsuMap, navigationButtonStyle } from '../pageNodeDefault';
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
                    "padding": 24,
                    "heightUnit": "%",
                    "overflow": "auto",
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "GDHzG-IR8C",
            "hidden": false,
            "nodes": [
                "Xa1ys_RWE8"
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
                "isHighlight": "primary",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[3]
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
                "isHighlight": "default",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[4]
                    }
                },
                "style": navigationButtonStyle,
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
        "Xa1ys_RWE8": {
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
                    "height": "fit-content",
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
                    "padding": 16,
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "8oHC0NjGsn",
                            "type": "color",
                            "key": "8oHC0NjGsn",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 0,
                    "paddingRight": 18,
                    "paddingLeft": 18,
                    "paddingBottom": 0
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "P-sE-gyXN9",
            "hidden": false,
            "nodes": [
                "ccCPGUK5AP",
                "o2DWfIXNIs"
            ],
            "linkedNodes": {}
        },
        "o2DWfIXNIs": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "display": "flex",
                    "background": "unset",
                    "backgroundList": []
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "Xa1ys_RWE8",
            "hidden": false,
            "nodes": [
                "km4D8AdKKL"
            ],
            "linkedNodes": {}
        },
        "ccCPGUK5AP": {
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
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "paddingTop": 12,
                    "paddingRight": 0,
                    "paddingLeft": 6,
                    "paddingBottom": 12
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "Xa1ys_RWE8",
            "hidden": false,
            "nodes": [
                "qIUq4_Qolq"
            ],
            "linkedNodes": {}
        },
        "qIUq4_Qolq": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "37px",
                    "widthType": "fit-content",
                    "heightType": "fixed",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "heightUnit": "px",
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 8
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ccCPGUK5AP",
            "hidden": false,
            "nodes": [
                "9Vb6P3AyuQ",
                "TtPO53x9OH",
                "AuN5lX8FUs",
                "Ph08zIXOw7",
                "vproIeI6_b",
                "IitPLxd9at",
                "OX4gonaD8o",
                "L7Ey4QYLrF"
            ],
            "linkedNodes": {}
        },
        "9Vb6P3AyuQ": {
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
                    "fontSize": 18,
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
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "-aTqtR7kcf"
            ],
            "linkedNodes": {}
        },
        "-aTqtR7kcf": {
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
            "parent": "9Vb6P3AyuQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "TtPO53x9OH": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 0
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "NQz-39Ycyh",
                "SzPa2fb4yx"
            ],
            "linkedNodes": {}
        },
        "NQz-39Ycyh": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "TtPO53x9OH",
            "hidden": false,
            "nodes": [
                "0-Z58wtTis"
            ],
            "linkedNodes": {}
        },
        "0-Z58wtTis": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 2,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "NQz-39Ycyh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "SzPa2fb4yx": {
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
                    "bind": "km4D8AdKKL.extra.total",
                    "type": "components",
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
                    "value": "条",
                    "size": "18px"
                },
                
                "style": {
                    "lineHeight": 1.5,
                    "heightType": "fit-content",
                    "height": "auto",
                    "paddingSide": "side",
                    "paddingTop": 2,
                    "paddingBottom": 0,
                    "fontSize": 18,
                    "marginSide": "all"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "TtPO53x9OH",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "AuN5lX8FUs": {
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
                    "fontSize": 18,
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
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "WFWhFO8R31"
            ],
            "linkedNodes": {}
        },
        "WFWhFO8R31": {
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
            "parent": "AuN5lX8FUs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Ph08zIXOw7": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "kZRseWaiaM",
                "dXomXuQauQ",
                "o9NFN2MESG"
            ],
            "linkedNodes": {}
        },
        "kZRseWaiaM": {
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
            },
            "inFill": "error"
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "Ph08zIXOw7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "dXomXuQauQ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Ph08zIXOw7",
            "hidden": false,
            "nodes": [
                "vOvkmtIkqK"
            ],
            "linkedNodes": {}
        },
        "vOvkmtIkqK": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 2,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "dXomXuQauQ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "o9NFN2MESG": {
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
                    "bind": "km4D8AdKKL.extra.LevelMap.LEVEL_HIGH",
                    "type": "components",
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
                    "value": "条",
                    "size": "18px"
                },
                
                "style": {
                    "fontSize": 18,
                    "paddingRight": null,
                    "paddingTop": 2
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "Ph08zIXOw7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "vproIeI6_b": {
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
                    "fontSize": 18,
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
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "jtQgM1vooK"
            ],
            "linkedNodes": {}
        },
        "jtQgM1vooK": {
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
            "parent": "vproIeI6_b",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "IitPLxd9at": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "LSAOsNUN4K",
                "JtIF9y8J9W",
                "2EuKZRKtxs"
            ],
            "linkedNodes": {}
        },
        "LSAOsNUN4K": {
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
            },
            "inFill": "warning"
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "IitPLxd9at",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "JtIF9y8J9W": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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

                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "IitPLxd9at",
            "hidden": false,
            "nodes": [
                "A0EE4gJKc3"
            ],
            "linkedNodes": {}
        },
        "A0EE4gJKc3": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 2,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "JtIF9y8J9W",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2EuKZRKtxs": {
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
                    "bind": "km4D8AdKKL.extra.LevelMap.LEVEL_MIDDLE",
                    "type": "components",
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
                    "value": "条",
                    "size": "18px"
                },
                
                "style": {
                    "fontSize": 18,
                    "paddingTop": 2
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "IitPLxd9at",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "OX4gonaD8o": {
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
                    "fontSize": 18,
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
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "_AxA43Biw2"
            ],
            "linkedNodes": {}
        },
        "_AxA43Biw2": {
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
            "parent": "OX4gonaD8o",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "L7Ey4QYLrF": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
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
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "qIUq4_Qolq",
            "hidden": false,
            "nodes": [
                "zBz5wHpTcU",
                "EBKGmnw6yS",
                "xRaxptBK0q"
            ],
            "linkedNodes": {}
        },
        "zBz5wHpTcU": {
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
            },
            "inFill": "success"
            },
            "displayName": "SvgMaterial",
            "custom": {},
            "parent": "L7Ey4QYLrF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EBKGmnw6yS": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "auto",
                    "widthType": "fit-content",
                    "heightType": "fit-content",
                    "fontFamily": "PingFang SC",
                    "fontSize": 18,
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
            "parent": "L7Ey4QYLrF",
            "hidden": false,
            "nodes": [
                "cWTWGNGelI"
            ],
            "linkedNodes": {}
        },
        "cWTWGNGelI": {
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 2,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EBKGmnw6yS",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "xRaxptBK0q": {
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
                    "bind": "km4D8AdKKL.extra.LevelMap.LEVEL_LOW",
                    "type": "components",
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
                    "value": "条",
                    "size": "18px"
                },
                
                "style": {
                    "fontSize": 18,
                    "paddingTop": 2
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "L7Ey4QYLrF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "km4D8AdKKL": {
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
                        "label": "F_INDEX",
                        "title": "F_INDEX",
                        "ellipsis": false,
                        "align": "center",
                        "fixed": "left"
                    },
                    {
                        "id": "Gl9UZT6zCh",
                        "label": "F_LEVEL",
                        "title": "F_LEVEL",
                        "ellipsis": false,
                        "align": "center",
                        "fixed": "left",
                        "status": [
                            {
                                "id": "zQzORgOJDp",
                                "label": "普通",
                                "inBackground": "success"
                            },
                            {
                                "id": "Fcwte4Xcoo",
                                "label": "警告",
                                "inBackground": "warning"
                            },
                            {
                                "id": "EJ8lWZ-IyM",
                                "label": "紧急",
                                "inBackground": "error"
                            }
                        ]
                    },
                    {
                        "id": "xukVx1P5W9",
                        "label": "F_STATE",
                        "title": "F_STATE",
                        "ellipsis": false,
                        "align": "center",
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
                        "label": "F_SUGGEST",
                        "title": "F_SUGGEST",
                        "ellipsis": false,
                        "align": "left",
                        "fixed": "left"
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
                    },
                    "components": [
                        "SzPa2fb4yx",
                        "2EuKZRKtxs",
                        "xRaxptBK0q",
                        "o9NFN2MESG"
                    ]
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
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "o2DWfIXNIs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },  "K569xjtztO": {
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
