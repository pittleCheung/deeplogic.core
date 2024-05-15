/**
 * 首页
 */
export default (source, links, global, type) => {
  console.log('sourcesource', location.hostname, location.port)
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "background": "url(/_api/tfile/9amN2wcWRb17XbWX_diPRu) 50% 50% / 100% 100% no-repeat,linear-gradient(rgba(36, 66, 105, 1), rgba(36, 66, 105, 1))",
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
                "AlarmNum": global.AlarmNum,
                "UserId": global.UserId,
            },
            "points": type === 'CAS' ? {
                [source.AIR_DISCHARGE_GROUP?.NAME]: 0,
                [source.AIR_USED_GROUP?.NAME]: 0
            } : {
                [source.ELEC_CH_GROUP?.NAME]: 0,
                [source.ELEC_CHWP_GROUP?.NAME]: 0,
                [source.ELEC_CWP_GROUP?.NAME]: 0,
                [source.ELEC_CT_GROUP?.NAME]: 0,
                [source.COP_HVAC?.NAME]: 0,
                [source.P_HVAC?.NAME]: 0,
                [source.T_OUTDOOR?.NAME]: 0,
                [source.TW_OUTDOOR?.NAME]: 0,
                [source.RH_OUTDOOR?.NAME]: 0,
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
                "fontSize": 14,
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
                "fontSize": 14,
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
            "l4Tn-xAIzu",
            "QErpYBs_Xd"
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "heightUnit": "px",
                "background": "url(/_api/tfile/sQcsYoiVl8GLBY2Hz2XpT7) 50% 50% / 100% 100% no-repeat",
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
                "min-height": "80px",
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
                "fontSize": 14,
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
                "fontSize": 20,
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
                "fontSize": 14,
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
            "before": {
                "value": "前缀"
            },
            "after": {
                "value": "℃"
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
                "fontSize": 14,
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
                "fontSize": 14,
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
                "fontSize": 14,
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
                "fontSize": 16,
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
                "fontSize": 16,
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
                "fontSize": 14,
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
                "fontSize": 14,
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
            "yzSiMli0GO"
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
                "fontSize": 16,
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
            "isHighlight": "primary",
            "status": [],
            "events": {
                "onClick": {
                    "action": "navigateTo",
                    "link": links[0]
                }
            },
            "style": {
                "position": "relative",
                "width": "auto",
                "height": "auto",
                "widthType": "fit-content",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 2,
                "textAlign": "center",
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
            "style": {
                "position": "relative",
                "width": "initial",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 2,
                "textAlign": "center",
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
            "style": {
                "position": "relative",
                "width": "initial",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 2,
                "textAlign": "center",
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
            "style": {
                "position": "relative",
                "width": "initial",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 2,
                "textAlign": "center",
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
            "style": {
                "position": "relative",
                "width": "initial",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 2,
                "textAlign": "center",
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
        "parent": "DzdF2lAXwy",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "QErpYBs_Xd": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "widthUnit": "%",
                "display": "flex",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "P-sE-gyXN9",
        "hidden": false,
        "nodes": [
            "7Na_UaCz4R",
            "YSEqA9Rmfr"
        ],
        "linkedNodes": {}
    },
    "l4Tn-xAIzu": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 20,
            "style": {
                "position": "relative",
                "width": "360px",
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
                "padding": 0,
                "widthUnit": "px",
                "background": "unset",
                "backgroundList": [],
                "display": "flex",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "P-sE-gyXN9",
        "hidden": false,
        "nodes": [
            "16yceTE6Xj",
            "oY8dqVwmG6"
        ],
        "linkedNodes": {}
    },
    "16yceTE6Xj": {
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
                "height": "366px",
                "widthType": "relative",
                "heightType": "fixed",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "heightUnit": "px"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "l4Tn-xAIzu",
        "hidden": false,
        "nodes": [
            "hjVRS7KxYO"
        ],
        "linkedNodes": {}
    },
    "oY8dqVwmG6": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "flexWrap": "wrap",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "l4Tn-xAIzu",
        "hidden": false,
        "nodes": [
            "vrFKZ59BOJ",
            "_E-Ue_53T7",
            "MJh8jJzFUC"
        ],
        "linkedNodes": {}
    },
    "hjVRS7KxYO": {
        "type": {
            "resolvedName": "Image"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Image",
            "events": {},
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "100%",
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
                "widthUnit": "%",
                "heightUnit": "%",
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            }
        },
        "displayName": "Image",
        "custom": {},
        "parent": "16yceTE6Xj",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "vrFKZ59BOJ": {
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
                "fontSize": 14,
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
        "parent": "oY8dqVwmG6",
        "hidden": false,
        "nodes": [
            "pmH-XYzHvz",
            "jHXja5JvP_"
        ],
        "linkedNodes": {}
    },
    "jHXja5JvP_": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "afxk9shSB-",
                        "type": "color",
                        "key": "afxk9shSB-",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "vrFKZ59BOJ",
        "hidden": false,
        "nodes": [
            "g86uSUqBoP",
            "gqyx8ve3Vu"
        ],
        "linkedNodes": {}
    },
    "pmH-XYzHvz": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "-z3iBzUeeK",
                        "type": "color",
                        "key": "-z3iBzUeeK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "vrFKZ59BOJ",
        "hidden": false,
        "nodes": [
            "dl4t8LSqK5",
            "ALCwaZbRdX"
        ],
        "linkedNodes": {}
    },
    "dl4t8LSqK5": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "BuildingArea",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 20,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "pmH-XYzHvz",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "g86uSUqBoP": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "TagNum",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 18,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "jHXja5JvP_",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "ALCwaZbRdX": {
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
            "value": "面积",
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
                "value": "m²",
                "color": "rgba(170, 175, 209, 0.6)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "pmH-XYzHvz",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "gqyx8ve3Vu": {
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
            "value": "点位",
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
                "value": "个",
                "color": "rgba(170, 175, 209, 0.5)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "jHXja5JvP_",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "_E-Ue_53T7": {
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
                "fontSize": 14,
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
        "parent": "oY8dqVwmG6",
        "hidden": false,
        "nodes": [
            "mxZSxKNc28",
            "smxt08lzzn"
        ],
        "linkedNodes": {}
    },
    "mxZSxKNc28": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "-z3iBzUeeK",
                        "type": "color",
                        "key": "-z3iBzUeeK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "_E-Ue_53T7",
        "hidden": false,
        "nodes": [
            "oO79Ptg7oN",
            "WUI61cXpWC"
        ],
        "linkedNodes": {}
    },
    "oO79Ptg7oN": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "LogicNum",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 20,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)",
                "translateX": 0
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "mxZSxKNc28",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "WUI61cXpWC": {
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
            "value": "策略",
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
                "color": "rgba(170, 175, 209, 0.6)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "mxZSxKNc28",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "smxt08lzzn": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "afxk9shSB-",
                        "type": "color",
                        "key": "afxk9shSB-",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "_E-Ue_53T7",
        "hidden": false,
        "nodes": [
            "ErqG5tIEIJ",
            "7Ei5Y9lua0"
        ],
        "linkedNodes": {}
    },
    "ErqG5tIEIJ": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "DeviceNum",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 18,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "smxt08lzzn",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "7Ei5Y9lua0": {
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
            "value": "报警",
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
                "color": "rgba(170, 175, 209, 0.5)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "smxt08lzzn",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "MJh8jJzFUC": {
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
                "fontSize": 14,
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
        "parent": "oY8dqVwmG6",
        "hidden": false,
        "nodes": [
            "uMS5XOCQtd",
            "HNSF3WYup-"
        ],
        "linkedNodes": {}
    },
    "uMS5XOCQtd": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                // "paddingTop": 12,
                // "paddingRight": 12,
                // "paddingLeft": 12,
                // "paddingBottom": 12,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "-z3iBzUeeK",
                        "type": "color",
                        "key": "-z3iBzUeeK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "MJh8jJzFUC",
        "hidden": false,
        "nodes": [
            "6Eif6yztPY",
            "wMYrlOzV_9"
        ],
        "linkedNodes": {}
    },
    "6Eif6yztPY": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "AlarmIndexNum",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 20,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "uMS5XOCQtd",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "wMYrlOzV_9": {
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
            "value": "报警指标",
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
                "value": "个",
                "color": "rgba(170, 175, 209, 0.6)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "uMS5XOCQtd",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "HNSF3WYup-": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 8,
            "style": {
                "position": "relative",
                "width": "50%",
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
                "padding": 24,
                "display": "flex",
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "afxk9shSB-",
                        "type": "color",
                        "key": "afxk9shSB-",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "MJh8jJzFUC",
        "hidden": false,
        "nodes": [
            "KA1QeKFrDz",
            "_9USoMa84N"
        ],
        "linkedNodes": {}
    },
    "KA1QeKFrDz": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": {
                "bind": "AlarmNum",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 18,
                "fontWeight": "bold",
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "HNSF3WYup-",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "_9USoMa84N": {
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
            "value": "报警数量",
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
                "value": "个",
                "color": "rgba(170, 175, 209, 0.5)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "HNSF3WYup-",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "YSEqA9Rmfr": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "heightUnit": "%",
                "key": "centerCenter"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "QErpYBs_Xd",
        "hidden": false,
        "nodes": [
            "fvgJakGZmK",
            "xl5xd36hWh"
        ],
        "linkedNodes": {}
    },
    "7Na_UaCz4R": {
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
                "height": "366px",
                "widthType": "relative",
                "heightType": "fixed",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "heightUnit": "px"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "QErpYBs_Xd",
        "hidden": false,
        "nodes": [
            "qepHwuo10E",
            "vp7etWk9yG"
        ],
        "linkedNodes": {}
    },
    "vp7etWk9yG": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 0,
            "style": {
                "position": "relative",
                "width": "520px",
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
                "padding": 0,
                "display": "flex",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "oK4RHckCYB",
                        "type": "color",
                        "key": "oK4RHckCYB",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8,
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "widthUnit": "px"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "7Na_UaCz4R",
        "hidden": false,
        "nodes": [
            "ot6_hHljj6",
            "QhjjAz0cHH"
        ],
        "linkedNodes": {}
    },
    "qepHwuo10E": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "zgkS2xXsdK",
                        "type": "color",
                        "key": "zgkS2xXsdK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8,
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "widthUnit": "%",
                "overflow": "unset"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "7Na_UaCz4R",
        "hidden": false,
        "nodes": [
            "rB9Hezcvq6",
            "Nc0AgnfHgK"
        ],
        "linkedNodes": {}
    },
    "Nc0AgnfHgK": {
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
                "height": "100%",
                "widthType": "fit-content",
                "heightType": "relative",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "overflow": "hidden",
                "heightUnit": "%"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "qepHwuo10E",
        "hidden": false,
        "nodes": [
            "iysMGp0yxL"
        ],
        "linkedNodes": {}
    },
    "rB9Hezcvq6": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "qepHwuo10E",
        "hidden": false,
        "nodes": [
            "np2kK2CWn8"
        ],
        "linkedNodes": {}
    },
    "np2kK2CWn8": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": type === 'CAS' ? "今日监控气电比趋势" :"今日系统能耗趋势",
            "status": [],
            "events": {},
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.1,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "rgb(54, 207, 201)",
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
        "parent": "rB9Hezcvq6",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "ot6_hHljj6": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "vp7etWk9yG",
        "hidden": false,
        "nodes": [
            "QxlPJPq_Cm"
        ],
        "linkedNodes": {}
    },
    "QxlPJPq_Cm": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "实时监测",
            "status": [],
            "events": {},
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.1,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "rgb(54, 207, 201)",
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
        "parent": "ot6_hHljj6",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "QhjjAz0cHH": {
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
                "height": "100%",
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
                "padding": 12,
                "display": "flex",
                "flexDirection": "row",
                "rowGap": 0,
                "columnGap": 0,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "heightUnit": "%"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "vp7etWk9yG",
        "hidden": false,
        "nodes": [
            "awDDK-6AW-",
            "pY9NHfoyqA"
        ],
        "linkedNodes": {}
    },
    "awDDK-6AW-": {
        "type": {
            "resolvedName": "Gauge"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Gauge",
            "option": {
                "series": [
                    {
                        "id": "m_R0Okff8K",
                        "label": "系统COP",
                        "type": "gauge",
                        "center": [
                            "50%",
                            "60%"
                        ],
                        "startAngle": 200,
                        "endAngle": -20,
                        "min": 0,
                        "max": 1000,
                        "splitNumber": 5,
                        "name": "系统COP",
                        "itemStyle": {
                            "color": "rgba(117, 253, 244, 0.52)"
                        },
                        "radius": "90%",
                        "progress": {
                            "show": true,
                            "width": "50"
                        },
                        "pointer": {
                            "show": false
                        },
                        "axisLine": {
                            "lineStyle": {
                                "width": 8
                            }
                        },
                        "axisTick": {
                            "distance": 8,
                            "splitNumber": 1,
                            "lineStyle": {
                                "width": 1,
                                "color": "#999"
                            }
                        },
                        "splitLine": {
                            "distance": 55,
                            "length": 0,
                            "lineStyle": {
                                "width": 5,
                                "color": "#999"
                            }
                        },
                        "axisLabel": {
                            "distance": -20,
                            "color": "#999",
                            "fontSize": 10
                        },
                        "anchor": {
                            "show": false
                        },
                        "title": {
                            "show": false
                        },
                        "detail": {
                            "formatter": "{value}",
                            "color": "rgb(255, 255, 255)",
                            "valueAnimation": true,
                            "width": "60%",
                            "lineHeight": 40,
                            "borderRadius": 8,
                            "offsetCenter": [
                                0,
                                "0"
                            ],
                            "fontSize": "1rem",
                            "fontWeight": "bolder"
                        },
                        "data": [
                            {
                                "value": 20,
                                "name": "系统COP"
                            }
                        ],
                        "value": 20
                    },
                    {
                        "id": "zQJRs3P1-6",
                        "label": {
                            "offsetCenter": [
                                0,
                                "50%"
                            ],
                            "color": "black"
                        },
                        "type": "gauge",
                        "center": [
                            "50%",
                            "60%"
                        ],
                        "startAngle": 200,
                        "endAngle": -20,
                        "min": 0,
                        "max": 1000,
                        "radius": "90%",
                        "itemStyle": {
                            "color": "#75FDF4"
                        },
                        "progress": {
                            "show": true,
                            "width": 8
                        },
                        "pointer": {
                            "show": false
                        },
                        "axisLine": {
                            "show": false
                        },
                        "axisTick": {
                            "show": false
                        },
                        "splitLine": {
                            "show": false
                        },
                        "axisLabel": {
                            "show": false
                        },
                        "detail": {
                            "show": false
                        },
                        "title": {
                            "offsetCenter": [
                                0,
                                "50%"
                            ],
                            "color": "fff"
                        },
                        "data": [
                            {
                                "value": 20,
                                "name": "系统COP"
                            }
                        ]
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
            },
            "value": {
                "bind": "COP_HVAC",
                "type": "points",
            }
        },
        "displayName": "Gauge",
        "custom": {},
        "parent": "QhjjAz0cHH",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "pY9NHfoyqA": {
        "type": {
            "resolvedName": "Gauge"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Gauge",
            "option": {
                "series": [
                    {
                        "id": "Hql7Cr4wte",
                        "label": "系统功率kW",
                        "type": "gauge",
                        "center": [
                            "50%",
                            "60%"
                        ],
                        "startAngle": 200,
                        "endAngle": -20,
                        "min": 0,
                        "max": 1000,
                        "splitNumber": 5,
                        "name": "系统功率kW",
                        "itemStyle": {
                            "color": "rgba(117, 253, 244, 0.52)"
                        },
                        "radius": "90%",
                        "progress": {
                            "show": true,
                            "width": "50"
                        },
                        "pointer": {
                            "show": false
                        },
                        "axisLine": {
                            "lineStyle": {
                                "width": 8
                            }
                        },
                        "axisTick": {
                            "distance": 8,
                            "splitNumber": 1,
                            "lineStyle": {
                                "width": 1,
                                "color": "#999"
                            }
                        },
                        "splitLine": {
                            "distance": 55,
                            "length": 0,
                            "lineStyle": {
                                "width": 5,
                                "color": "#999"
                            }
                        },
                        "axisLabel": {
                            "distance": -20,
                            "color": "#999",
                            "fontSize": 10
                        },
                        "anchor": {
                            "show": false
                        },
                        "title": {
                            "show": false
                        },
                        "detail": {
                            "formatter": "{value}",
                            "color": "rgb(255, 255, 255)",
                            "valueAnimation": true,
                            "width": "60%",
                            "lineHeight": 40,
                            "borderRadius": 8,
                            "offsetCenter": [
                                0,
                                "0"
                            ],
                            "fontSize": "1rem",
                            "fontWeight": "bolder"
                        },
                        "data": [
                            {
                                "value": 20,
                                "name": "系统功率kW"
                            }
                        ],
                        "value": 20
                    },
                    {
                        "id": "cN-GNpv3nD",
                        "label": {
                            "offsetCenter": [
                                0,
                                "50%"
                            ],
                            "color": "fff"
                        },
                        "type": "gauge",
                        "center": [
                            "50%",
                            "60%"
                        ],
                        "startAngle": 200,
                        "endAngle": -20,
                        "min": 0,
                        "max": 1000,
                        "radius": "90%",
                        "itemStyle": {
                            "color": "#75FDF4"
                        },
                        "progress": {
                            "show": true,
                            "width": 8
                        },
                        "pointer": {
                            "show": false
                        },
                        "axisLine": {
                            "show": false
                        },
                        "axisTick": {
                            "show": false
                        },
                        "splitLine": {
                            "show": false
                        },
                        "axisLabel": {
                            "show": false
                        },
                        "detail": {
                            "show": false
                        },
                        "title": {
                            "offsetCenter": [
                                0,
                                "50%"
                            ],
                            "color": "fff"
                        },
                        "data": [
                            {
                                "value": 20,
                                "name": "系统功率kW"
                            }
                        ]
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
                "widthUnit": "%"
            },
            "value": {
                "bind": "P_HVAC",
                "type": "points",
            }
        },
        "displayName": "Gauge",
        "custom": {},
        "parent": "QhjjAz0cHH",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "fvgJakGZmK": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "zgkS2xXsdK",
                        "type": "color",
                        "key": "zgkS2xXsdK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8,
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "widthUnit": "%",
                "overflow": "unset"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "YSEqA9Rmfr",
        "hidden": false,
        "nodes": [
            "vPYlUkt6YS",
            "dNIYMktquv"
        ],
        "linkedNodes": {}
    },
    "vPYlUkt6YS": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fvgJakGZmK",
        "hidden": false,
        "nodes": [
            "EbTNDgWj-7"
        ],
        "linkedNodes": {}
    },
    "EbTNDgWj-7": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": type === 'CAS' ? "供需平衡" :"分项能耗",
            "status": [],
            "events": {},
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.1,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "rgb(54, 207, 201)",
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
        "parent": "vPYlUkt6YS",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "dNIYMktquv": {
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
                "height": "100%",
                "widthType": "fit-content",
                "heightType": "relative",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "overflow": "hidden",
                "heightUnit": "%"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fvgJakGZmK",
        "hidden": false,
        "nodes": [
            "e61nm_cKkX"
        ],
        "linkedNodes": {}
    },
    "xl5xd36hWh": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 0,
                "display": "flex",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "zgkS2xXsdK",
                        "type": "color",
                        "key": "zgkS2xXsdK",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 8,
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "widthUnit": "%",
                "overflow": "unset"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "YSEqA9Rmfr",
        "hidden": false,
        "nodes": [
            "jWCP-GZgjF",
            "sfftPjz2xn"
        ],
        "linkedNodes": {}
    },
    "jWCP-GZgjF": {
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
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 12
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "xl5xd36hWh",
        "hidden": false,
        "nodes": [
            "QPi2QLFCMJ"
        ],
        "linkedNodes": {}
    },
    "QPi2QLFCMJ": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "报警信息",
            "status": [],
            "events": {},
            "style": {
                "position": "relative",
                "width": "100%",
                "height": "auto",
                "widthType": "relative",
                "heightType": "fit-content",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.1,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "side",
                "marginSide": "all",
                "borderWidth": 1,
                "borderStyle": "solid",
                "borderColor": "rgb(54, 207, 201)",
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
        "parent": "jWCP-GZgjF",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "sfftPjz2xn": {
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
                "height": "100%",
                "widthType": "fit-content",
                "heightType": "relative",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "overflow": "hidden",
                "heightUnit": "%"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "xl5xd36hWh",
        "hidden": false,
        "nodes": [
            "UlMO6fYa9x"
        ],
        "linkedNodes": {}
    },
    "UlMO6fYa9x": {
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
            "isPagination": false,
            "isScroll": false,
            "columns": [
                {
                    "id": "pUsMcWKoMJ",
                    "label": "F_LAST_TIME",
                    "title": "F_LAST_TIME",
                    "ellipsis": false,
                    "align": "left",
                    "fixed": "left"
                },
                {
                    "id": "Q0-vMLAPbx",
                    "label": "F_NAME",
                    "title": "F_NAME",
                    "ellipsis": false,
                    "align": "left",
                    "fixed": "left"
                }
            ],
            "alarm": {
                "needData": true
            },
            "point": {
                "begin": "2024-05-07T14:32:06+08:00",
                "end": "2024-05-07T14:32:06+08:00",
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
                "fontFamily": "Microsoft YaHei",
                "fontSize": 14,
                "fontWeight": 400,
                "lineHeight": 1.5,
                "textAlign": "left",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "widthUnit": "%"
            }
        },
        "displayName": "Table",
        "custom": {},
        "parent": "sfftPjz2xn",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "iysMGp0yxL": {
        "type": {
            "resolvedName": "Line"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Line",
            "dateType": "day",
            "ranges": [],
            "aggregate": "last",
            "timeType": "5 minutes",
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
                    "left": "10%",
                    "right": "10%",
                    "bottom": "10%",
                    "top": "20%",
                    "containLabel": true
                },
                "toolbox": {},
                "xAxis": {
                    "type": "category",
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
                        "id": "SLbgm1PLyO",
                        "label": "ELEC_HVAC",
                        "lineStyle": {
                            "width": 1
                        },
                        "name": "系列1",
                        "type": "line",
                        "stack": "总量",
                        "data": [
                            120,
                            132,
                            101,
                            134,
                            90,
                            230,
                            210
                        ],
                        "smooth": false,
                        "pointSource": "ELEC_HVAC"
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
        "parent": "Nc0AgnfHgK",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "e61nm_cKkX": {
        "type": {
            "resolvedName": "Bar"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Bar",
            "dateType": "day",
            "ranges": [],
            "aggregate": "last",
            "timeType": "5 minutes",
            "option": {
                "xAxis": {
                    "type": "category",
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
                        "id": "FtN-mSbHyb",
                        "label": "ELEC_CH_GROUP",
                        "data": [
                            120,
                            200,
                            150,
                            80,
                            70,
                            110,
                            130
                        ],
                        "type": "bar",
                        "showBackground": true,
                        "backgroundStyle": {
                            "color": "rgba(180, 180, 180, 0.2)"
                        },
                        "name": "",
                        "stack": "",
                        "stackStrategy": "samesign",
                        "barWidth": null,
                        "barGap": "30%",
                        "barCategoryGap": "20%",
                        "large": false,
                        "pointSource": "ELEC_CH_GROUP"
                    },
                    {
                        "id": "28uxp6v_ya",
                        "label": "ELEC_CHWP_GROUP",
                        "type": "bar",
                        "name": "",
                        "stack": "",
                        "stackStrategy": "samesign",
                        "barWidth": null,
                        "barGap": "30%",
                        "barCategoryGap": "20%",
                        "large": false,
                        "data": [],
                        "pointSource": "ELEC_CHWP_GROUP"
                    },
                    {
                        "id": "aPnoiRbDax",
                        "label": "ELEC_CWP_GROUP",
                        "type": "bar",
                        "name": "",
                        "stack": "",
                        "stackStrategy": "samesign",
                        "barWidth": null,
                        "barGap": "30%",
                        "barCategoryGap": "20%",
                        "large": false,
                        "data": [],
                        "pointSource": "ELEC_CWP_GROUP"
                    },
                    {
                        "id": "kmKrvTK59q",
                        "type": "bar",
                        "name": "",
                        "stack": "",
                        "stackStrategy": "samesign",
                        "barWidth": null,
                        "barGap": "30%",
                        "barCategoryGap": "20%",
                        "large": false,
                        "data": [],
                        "pointSource": "ELEC_CT_GROUP",
                        "label": "ELEC_CT_GROUP"
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
            },
            "pointSource": {
                "bind": "ELEC_CH_GROUP",
                "type": "points",
                "point": [
                    "ELEC_CH_GROUP"
                ]
            }
        },
        "displayName": "Bar",
        "custom": {},
        "parent": "dNIYMktquv",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    }
}








}