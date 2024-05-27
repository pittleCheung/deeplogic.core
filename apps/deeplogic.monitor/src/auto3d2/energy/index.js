/**
 * 能耗
 */
import { navigationButtonStyle } from '../pageNodeDefault';

export default (source, links, global, type) => {
    const isCAS = type === 'CAS';
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
                    "overflow": "auto",
                    "display": "flex",
                    "paddingTop": 12,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "heightUnit": "%"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "GDHzG-IR8C",
            "hidden": false,
            "nodes": [
                "fCCvPdf9zi"
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
                "isHighlight": "primary",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "navigateTo",
                        "link": links[2]
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
        "fCCvPdf9zi": {
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
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 0,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 0,
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "heightUnit": "%"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "P-sE-gyXN9",
            "hidden": false,
            "nodes": [
                "BscczQR28D"
            ],
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
        "BscczQR28D": {
            "type": {
                "resolvedName": "Tabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Tabs",
                "type": "line",
                "size": "small",
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
            "parent": "fCCvPdf9zi",
            "hidden": false,
            "nodes": [
                "koSMQHS_Yr",
                "dU2cDNPXHt",
                "_QV4qPC4Uu"
            ],
            "linkedNodes": {
                "container-1": "uR_kgNikoC",
                "container-2": "HRf4hmJZNx"
            }
        },
        "dU2cDNPXHt": {
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
            "parent": "BscczQR28D",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "_QV4qPC4Uu": {
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
            "parent": "BscczQR28D",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "uR_kgNikoC": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "100%",
                    "widthType": "relative",
                    "heightType": "relative",
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
                    "background": null,
                    "backgroundList": [],
                    "display": "flex",
                    "flexDirection": "row",
                    // "columnGap": 4,
                    "heightUnit": "%"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "BscczQR28D",
            "hidden": false,
            "nodes": [
                "lxsd0r4XB7"
            ],
            "linkedNodes": {}
        },
        "HRf4hmJZNx": {
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
            "parent": "BscczQR28D",
            "hidden": false,
            "nodes": [
                "0dI-AQA59j"
            ],
            "linkedNodes": {}
        },
        "koSMQHS_Yr": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "BscczQR28D",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0dI-AQA59j": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "HRf4hmJZNx",
            "hidden": false,
            "nodes": [
                "gFJPgLc9RF",
                "1qlLt_fPJC"
            ],
            "linkedNodes": {}
        },
        "gFJPgLc9RF": {
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
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "0dI-AQA59j",
            "hidden": false,
            "nodes": [
                "76xyNFsNct",
                "B41yXap_H9",
                "Ek_i6vBLqw"
            ],
            "linkedNodes": {}
        },
        "76xyNFsNct": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "gFJPgLc9RF",
            "hidden": false,
            "nodes": [
                "g2NDlXA5wZ",
                "itEUgTS5qP"
            ],
            "linkedNodes": {}
        },
        "g2NDlXA5wZ": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "76xyNFsNct",
            "hidden": false,
            "nodes": [
                "3WXwb5bfJb",
                "SacTLQ2HTJ"
            ],
            "linkedNodes": {}
        },
        "3WXwb5bfJb": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "系统总功率" : "系统COP",
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
            "parent": "g2NDlXA5wZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "SacTLQ2HTJ": {
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
                            "component": "6fie-_mCMM",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "g2NDlXA5wZ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "itEUgTS5qP": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "76xyNFsNct",
            "hidden": false,
            "nodes": [
                "6fie-_mCMM"
            ],
            "linkedNodes": {}
        },
        "6fie-_mCMM": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "avg",
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
                        "left": 30,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "kW" : "",
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": isCAS ? source?.P_CAS?.NAME : source?.COP_HVAC?.NAME,
                            "name": isCAS ? "系统总功率" : "系统COP",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": isCAS ? source?.P_CAS?.NAME : source?.COP_HVAC?.NAME,
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "itEUgTS5qP",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "B41yXap_H9": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "gFJPgLc9RF",
            "hidden": false,
            "nodes": [
                "jswZufAR5e",
                "qGY6Udpcef"
            ],
            "linkedNodes": {}
        },
        "jswZufAR5e": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "B41yXap_H9",
            "hidden": false,
            "nodes": [
                "XCMM42uN6q",
                "5kjjEaIaD4"
            ],
            "linkedNodes": {}
        },
        "XCMM42uN6q": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "系统气电比" : "系统总功率",
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
            "parent": "jswZufAR5e",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5kjjEaIaD4": {
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
                            "component": "7RRfNKJeLR",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "jswZufAR5e",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "qGY6Udpcef": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "B41yXap_H9",
            "hidden": false,
            "nodes": [
                "7RRfNKJeLR"
            ],
            "linkedNodes": {}
        },
        "7RRfNKJeLR": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "last",
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
                        "left": 30,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "kWh/Nm³" : "kW",
                        "nameTextStyle": {
                            padding: [0, isCAS ? 0 : 34, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": isCAS ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME,
                            "name": isCAS ? "系统气电比" : "系统总功率",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": isCAS ? source?.R_AIR_COMP?.NAME : source?.P_HVAC?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "qGY6Udpcef",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Ek_i6vBLqw": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "gFJPgLc9RF",
            "hidden": false,
            "nodes": [
                "Pt4LbDBERK",
                "Ekk50asg9p"
            ],
            "linkedNodes": {}
        },
        "Pt4LbDBERK": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "Ek_i6vBLqw",
            "hidden": false,
            "nodes": [
                "LiHhauOfBO",
                "yeWyLhyn-D"
            ],
            "linkedNodes": {}
        },
        "LiHhauOfBO": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "输入比功率" : "系统制冷量",
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
            "parent": "Pt4LbDBERK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "yeWyLhyn-D": {
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
                            "component": "YyzVL4r7n2",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "Pt4LbDBERK",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Ekk50asg9p": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "Ek_i6vBLqw",
            "hidden": false,
            "nodes": [
                "YyzVL4r7n2"
            ],
            "linkedNodes": {}
        },
        "YyzVL4r7n2": {
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
                        "left": 30,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "kW/(m³/min)" : "kW",
                        "nameTextStyle": {
                            padding: [0, isCAS ? -15 : 34, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": source?.[isCAS ? 'P_SPECIFIC' : 'LOAD']?.NAME,
                            "name": isCAS ? "输入比功率" : "系统制冷量",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[isCAS ? 'P_SPECIFIC' : 'LOAD']?.NAME,
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "Ekk50asg9p",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1qlLt_fPJC": {
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
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "0dI-AQA59j",
            "hidden": false,
            "nodes": [
                "4Nx5ZyKlkw",
                "SFD973yPKO",
                "jxq8J7mX5o"
            ],
            "linkedNodes": {}
        },
        "4Nx5ZyKlkw": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "1qlLt_fPJC",
            "hidden": false,
            "nodes": [
                "71LsES8HZy",
                "pYWXwTREyY"
            ],
            "linkedNodes": {}
        },
        "71LsES8HZy": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "4Nx5ZyKlkw",
            "hidden": false,
            "nodes": [
                "FhHueWGVpi",
                "2GAD1S8bu1"
            ],
            "linkedNodes": {}
        },
        "FhHueWGVpi": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "加载压力" : "系统总能耗",
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
            "parent": "71LsES8HZy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2GAD1S8bu1": {
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
                            "component": "SO6ZjbzzX3",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "71LsES8HZy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pYWXwTREyY": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "4Nx5ZyKlkw",
            "hidden": false,
            "nodes": [
                "SO6ZjbzzX3"
            ],
            "linkedNodes": {}
        },
        "SO6ZjbzzX3": {
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
                        "left": 40,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "Mpa" : "kW/h",
                        "nameTextStyle": {
                            padding: [0, 46, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": isCAS ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME,
                            "name": isCAS ? "加载压力" : "系统总能耗",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": isCAS ? source?.PR_LOAD?.NAME : source?.ELEC_HVAC?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "pYWXwTREyY",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "SFD973yPKO": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "1qlLt_fPJC",
            "hidden": false,
            "nodes": [
                "rWnYzHFsQT",
                "GGiT9B1KKH"
            ],
            "linkedNodes": {}
        },
        "rWnYzHFsQT": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "SFD973yPKO",
            "hidden": false,
            "nodes": [
                "e_AMMNQHeC",
                "lj4PbWjzOJ"
            ],
            "linkedNodes": {}
        },
        "e_AMMNQHeC": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "卸载压力" : "冷机出水温度",
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
            "parent": "rWnYzHFsQT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lj4PbWjzOJ": {
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
                            "component": "kzdMUYTIt4",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "rWnYzHFsQT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GGiT9B1KKH": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "SFD973yPKO",
            "hidden": false,
            "nodes": [
                "kzdMUYTIt4"
            ],
            "linkedNodes": {}
        },
        "kzdMUYTIt4": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "avg",
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
                        "left": 30,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "Mpa" : "℃",
                        "nameTextStyle": {
                            padding: [0, 25, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": source?.[isCAS ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME,
                            "name": isCAS ? "卸载压力" : "冷机出水温度",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[isCAS ? 'PR_UNLOAD' : 'T_CHW_S']?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "GGiT9B1KKH",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "jxq8J7mX5o": {
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
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "YE45pmf6mE",
                            "type": "color",
                            "key": "YE45pmf6mE",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "1qlLt_fPJC",
            "hidden": false,
            "nodes": [
                "Sc9gj3yE_4",
                "C6BJqfJP-I"
            ],
            "linkedNodes": {}
        },
        "Sc9gj3yE_4": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "space-between",
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "jxq8J7mX5o",
            "hidden": false,
            "nodes": [
                "2uygMyowme",
                "bhrIPmsixM"
            ],
            "linkedNodes": {}
        },
        "2uygMyowme": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": isCAS ? "排气压力" : "冷却回水温度",
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
            "parent": "Sc9gj3yE_4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bhrIPmsixM": {
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
                            "component": "DJdreT6HeX",
                            "props": "dateType"
                        }
                    }
                }
            },
            "displayName": "Segmented",
            "custom": {},
            "parent": "Sc9gj3yE_4",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "C6BJqfJP-I": {
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
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 12,
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "jxq8J7mX5o",
            "hidden": false,
            "nodes": [
                "DJdreT6HeX"
            ],
            "linkedNodes": {}
        },
        "DJdreT6HeX": {
            "type": {
                "resolvedName": "Line"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Line",
                "dateType": "",
                "ranges": "",
                "aggregate": "avg",
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
                        "left": 30,
                        "right": 7,
                        "bottom": 10,
                        "top": "15%",
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
                        "type": "value",
                        "name": isCAS ? "Mpa" : "℃",
                        "nameTextStyle": {
                            padding: [0, 25, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        {
                            "id": "FehDVpavZK",
                            "label": source?.[isCAS ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME,
                            "name": isCAS ? "排气压力" : "冷却回水温度",
                            "type": "line",
                            "stack": "总量",
                            "data": [],
                            "smooth": false,
                            "pointSource": source?.[isCAS ? 'PR_DISCHARGE' : 'T_CW_R']?.NAME
                        }
                    ]
                },
                "style": {
                    "width": "100%",
                    "widthType": "relative",
                    "height": "265px",
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
            "parent": "C6BJqfJP-I",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lxsd0r4XB7": {
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
                    "overflow": "hidden",
                    "flexWrap": "nowrap"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "uR_kgNikoC",
            "hidden": false,
            "nodes": [
                "VGS0vlFA8J",
                "OqFzP6-Dsk"
            ],
            "linkedNodes": {}
        },
        "VGS0vlFA8J": {
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
                    "paddingTop": 16,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "lxsd0r4XB7",
            "hidden": false,
            "nodes": [
                "Udzv1mYIQd",
                "pKHDBlOSvc"
            ],
            "linkedNodes": {}
        },
        "Udzv1mYIQd": {
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
            "parent": "VGS0vlFA8J",
            "hidden": false,
            "nodes": [
                "MHT3VgAdHt"
            ],
            "linkedNodes": {}
        },
        "MHT3VgAdHt": {
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
            "parent": "Udzv1mYIQd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pKHDBlOSvc": {
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
            "parent": "VGS0vlFA8J",
            "hidden": false,
            "nodes": [
                "yCMsmPIXV8"
            ],
            "linkedNodes": {}
        },
        "OqFzP6-Dsk": {
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
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 8,
                    "display": "flex",
                    "heightUnit": "%",
                    "flexDirection": "row",
                    "justifyContent": "",
                    "alignItems": "",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": 0,
                    "columnGap": 0,
                    "justifyItems": "",
                    "widthUnit": "%",
                    "overflow": "hidden",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "JJWvWZ_j6-",
                            "type": "color",
                            "key": "JJWvWZ_j6-",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 8,
                    "paddingBottom": 0
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "lxsd0r4XB7",
            "hidden": false,
            "nodes": [
                "ozLkwy5ofs"
            ],
            "linkedNodes": {}
        },
        "yCMsmPIXV8": {
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
                "type": "SUBENTRY",
                "events": {
                    "onCheck": {
                        "action": "linkTo",
                        "link": {
                            "component": [
                                "uFqCbPR6jP",
                                "pw9ucLWV3E"
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
            "parent": "pKHDBlOSvc",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ozLkwy5ofs": {
            "type": {
                "resolvedName": "SegmentedTabs"
            },
            "isCanvas": true,
            "props": {
                "displayName": "SegmentedTabs",
                "position": "right",
                "segmented": {
                    "value": "1",
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
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "widthUnit": "%",
                    "background": "unset",
                    "backgroundList": []
                },
                "isTitle": true
            },
            "displayName": "SegmentedTabs",
            "custom": {},
            "parent": "OqFzP6-Dsk",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "container-1": "hDhFekfHpT",
                "container-2": "jF_76-Oa3j",
                "title": "nM2clxdxJx"
            }
        },
        "hDhFekfHpT": {
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
                    "marginSide": "all",
                    "margin": 0,
                    "background": "unset",
                    "backgroundList": []
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ozLkwy5ofs",
            "hidden": false,
            "nodes": [
                "uFqCbPR6jP"
            ],
            "linkedNodes": {}
        },
        "uFqCbPR6jP": {
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
                        "trigger": "axis",
                        "backgroundColor": "rgb(255, 255, 255)",
                        "borderColor": "unset"
                    },
                    "legend": {
                        "data": [
                            // "系列1",
                            // "系列2",
                            // "系列3"
                        ]
                    },
                    "grid": {
                        "left": 30,
                        "right": 7,
                        "bottom": 30,
                        "top": "15%",
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
                        "type": "value",
                        "name": "kW",
                        "nameTextStyle": {
                            padding: [0, 34, 0, 0], // 调整这个值以根据需要定位
                        },
                    },
                    "series": [
                        // {
                        //     "name": "系列1",
                        //     "type": "line",
                        //     "stack": "总量",
                        //     "data": []
                        // },
                        // {
                        //     "name": "系列2",
                        //     "type": "line",
                        //     "stack": "总量",
                        //     "data": []
                        // },
                        // {
                        //     "name": "系列3",
                        //     "type": "line",
                        //     "stack": "总量",
                        //     "data": []
                        // }
                    ],
                    "title": {
                        "show": false
                    }
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
                    "margin": 0,
                    "background": "unset",
                    "backgroundList": []
                }
            },
            "displayName": "Line",
            "custom": {},
            "parent": "hDhFekfHpT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "jF_76-Oa3j": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "position": "relative",
                    "width": "100%",
                    "height": "69vh",
                    "widthType": "relative",
                    "heightType": "viewport",
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
                    "background": "unset",
                    "backgroundList": [],
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
            "parent": "ozLkwy5ofs",
            "hidden": false,
            "nodes": [
                "pw9ucLWV3E"
            ],
            "linkedNodes": {}
        },
        "pw9ucLWV3E": {
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
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "widthType": "relative",
                    "width": "100%",
                    "widthUnit": "%"
                }
            },
            "displayName": "Table",
            "custom": {},
            "parent": "jF_76-Oa3j",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "nM2clxdxJx": {
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
                    "paddingLeft": 10,
                    "paddingBottom": 0,
                    "borderRadius": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "alignItems": "center",
                    "justifyContent": "space-between"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ozLkwy5ofs",
            "hidden": false,
            "nodes": [
                "EXCI0UQWBb",
                "NHSFAw3rBv"
            ],
            "linkedNodes": {}
        },
        "gzwgYwIs1Y": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "查询能耗",
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
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 12,
                    "paddingBottom": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EXCI0UQWBb",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EXCI0UQWBb": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "15%",
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
                    "padding": 8,
                    "widthUnit": "%"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "nM2clxdxJx",
            "hidden": false,
            "nodes": [
                "gzwgYwIs1Y"
            ],
            "linkedNodes": {}
        },
        "NHSFAw3rBv": {
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
            "parent": "nM2clxdxJx",
            "hidden": false,
            "nodes": [
                "P-O_a7xTbl",
                "Zoz2KrS2qF"
            ],
            "linkedNodes": {}
        },
        "P-O_a7xTbl": {
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
                                "uFqCbPR6jP",
                                "pw9ucLWV3E"
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
            "parent": "NHSFAw3rBv",
            "hidden": false,
            "nodes": [
                "E2OzKmaufM",
                "6vzMxXK62B",
                "osQrqcseyD",
                "fhpAVG7rXd",
                "JcjWVnBQtS"
            ],
            "linkedNodes": {}
        },
        "E2OzKmaufM": {
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
            "parent": "P-O_a7xTbl",
            "hidden": false,
            "nodes": [
                "iT6MlxAS5m"
            ],
            "linkedNodes": {}
        },
        "iT6MlxAS5m": {
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
                                "uFqCbPR6jP",
                                "pw9ucLWV3E"
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
            "parent": "E2OzKmaufM",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "6vzMxXK62B": {
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
            "parent": "P-O_a7xTbl",
            "hidden": false,
            "nodes": [
                "zqJRkgE8er"
            ],
            "linkedNodes": {}
        },
        "zqJRkgE8er": {
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
            "parent": "6vzMxXK62B",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "osQrqcseyD": {
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
            "parent": "P-O_a7xTbl",
            "hidden": false,
            "nodes": [
                "X1KqYddJFg"
            ],
            "linkedNodes": {}
        },
        "X1KqYddJFg": {
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
            "parent": "osQrqcseyD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "fhpAVG7rXd": {
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
            "parent": "P-O_a7xTbl",
            "hidden": false,
            "nodes": [
                "mVPGlrX5Wr"
            ],
            "linkedNodes": {}
        },
        "mVPGlrX5Wr": {
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
            "parent": "fhpAVG7rXd",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "JcjWVnBQtS": {
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
                    "margin": 0,
                    marginRight: 40
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "P-O_a7xTbl",
            "hidden": false,
            "nodes": [
                "5D_Vhqj4Uw"
            ],
            "linkedNodes": {}
        },
        "5D_Vhqj4Uw": {
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
            "parent": "JcjWVnBQtS",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Zoz2KrS2qF": {
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
            "parent": "NHSFAw3rBv",
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