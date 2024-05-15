/**
 * 制冷机弹窗
 */
import { pageStyle, contentstyle, statsuMap, colGrid, contentpaddingstyle, colnoflex, txtstyle } from '../pageNodeDefault';
export default (source) => {
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
                    "padding": 12,
                    "marginSide": "all",
                    "margin": 0,
                    "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
                    "borderRadius": 0,
                    "backgroundList": [
                        {
                            "id": "Ui6JXmls7Z",
                            "type": "color",
                            "key": "Ui6JXmls7Z",
                            "value": "rgba(11, 65, 122, 1)",
                            "disabled": false
                        }
                    ],
                    "widthUnit": "%",
                    "minHeight": "100%",
                    "color": "rgba(255, 255, 255, 0.6)"
                },
                "events": {
                    "onLoad": null
                },
                "projId": "Gy3dmClBqavaG0Aeccdvzu",
                "points": {
                    [source.PR_COND.NAME]: 0,
                    [source.T_COND.NAME]: 0,
                    [source.T_EVAP_LEV.NAME]: 0,
                    [source.T_EVAP_ENT.NAME]: 0,
                    [source.PR_EVAP.NAME]: 0,
                    [source.T_EVAP.NAME]: 0,
                    [source.I_PCT.NAME]: 0,
                    [source.I_PCT_MAX_SP.NAME]: 0,
                    [source.DPR_OIL.NAME]: 0,
                    [source.T_OIL.NAME]: 0,
                    [source.P.NAME]: 0,
                    [source.COP.NAME]: 0,
                    [source.ONOFF.NAME]: 0,
                    [source.FAULT.NAME]: 0,
                    [source.AM.NAME]: 0,
                    [source.ONOFF_SP.NAME]: 0,
                    [source.T_CHW_S_SP.NAME]: 0,
                    [source.EB.NAME]: 0,
                    [source.T_COND_ENT.NAME]: 0,
                    [source.T_COND_LEV.NAME]: 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "C0mWrCCjhx"
            ],
            "linkedNodes": {}
        },
        "PIMR1_sust": {
            "type": {
                "resolvedName": "Image"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Image",
                "src": "/assets/images/chiller.png",
                "events": {},
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
                    "marginSide": "all"
                }
            },
            "displayName": "Image",
            "custom": {},
            "parent": "mJcFdC9is5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "04cXEf6bK-": {
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
                    "key": "centerCenter"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "C0mWrCCjhx",
            "hidden": false,
            "nodes": [
                "P8HxqtrGNj",
                "EhouMGytvh",
                "UZ_nOV_-vx",
                "OD_7QW0aAA",
                "0wzSnVbAgD",
                "3aEuy7ga5c"
            ],
            "linkedNodes": {}
        },
        "P8HxqtrGNj": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "7DXJvHM_qm",
                "ocPkPQJJwi"
            ],
            "linkedNodes": {}
        },
        "7DXJvHM_qm": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "运行状态",
                "status": [],
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "P8HxqtrGNj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "ocPkPQJJwi": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": source.ONOFF.NAME,
                    "type": "points"
                },
                "status": [
                    {
                        "id": "1",
                        "label": "停止",
                        "value": "0",
                        "key": "1",
                        "color": "rgba(255, 255, 255, 1)",
                        "expression": {
                            "bind": source.ONOFF.NAME,
                            "type": "points"
                        },
                        "backgroundColor": ""
                    },
                    {
                        "id": "2",
                        "label": "运行",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.ONOFF.NAME,
                            "type": "points"
                        }
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
                    "fontSize": 18,
                    "fontWeight": "bold",
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "color": "rgba(0, 251, 40, 1)",
                    "paddingTop": 13,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "P8HxqtrGNj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "OD_7QW0aAA": {
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "Q3BPYm9Ggw",
                "MWsDJEtusr"
            ],
            "linkedNodes": {}
        },
        "0wzSnVbAgD": {
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "iB4YE2Xg-O",
                "KlGhmhTYXS"
            ],
            "linkedNodes": {}
        },
        "3aEuy7ga5c": {
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "t6mkGwlrdE",
                "odkfr25wMX"
            ],
            "linkedNodes": {}
        },
        "C0mWrCCjhx": {
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
                "04cXEf6bK-",
                "JeaYsZrVEq",
                "BGG4jrBvX3"
            ],
            "linkedNodes": {}
        },
        "JeaYsZrVEq": {
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
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "C0mWrCCjhx",
            "hidden": false,
            "nodes": [
                "vk8aO-LfkI",
                "mJcFdC9is5",
                "p6191kqKsp"
            ],
            "linkedNodes": {}
        },
        "vk8aO-LfkI": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 1,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 1,
                    "paddingRight": 1,
                    "paddingLeft": 1,
                    "paddingBottom": 1,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "borderRadiusSide": "all",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "JeaYsZrVEq",
            "hidden": false,
            "nodes": [
                "nOz-405eTm",
                "z53RHAhzYo",
                "C3sMKJRIFg",
                "f6zYvZL2nK",
                "1kXufULuoQ"
            ],
            "linkedNodes": {}
        },
        "mJcFdC9is5": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "JeaYsZrVEq",
            "hidden": false,
            "nodes": [
                "PIMR1_sust"
            ],
            "linkedNodes": {}
        },
        "nOz-405eTm": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "rfIyVvL0qH",
                            "type": "color",
                            "key": "rfIyVvL0qH",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "borderRadiusSide": "side",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "paddingTop": 12,
                    "paddingRight": 12,
                    "paddingLeft": 12,
                    "paddingBottom": 12,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "vk8aO-LfkI",
            "hidden": false,
            "nodes": [
                "kxe_afEUoE"
            ],
            "linkedNodes": {}
        },
        "kxe_afEUoE": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器",
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
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "nOz-405eTm",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "p6191kqKsp": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 1,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 1,
                    "paddingRight": 1,
                    "paddingLeft": 1,
                    "paddingBottom": 1,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "borderRadiusSide": "all",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "JeaYsZrVEq",
            "hidden": false,
            "nodes": [
                "fHefiXp0P_",
                "hEH5gJs36L",
                "pBCDUPnQID",
                "i2oeRnw4Wk",
                "UG6W0LkIGW"
            ],
            "linkedNodes": {}
        },
        "fHefiXp0P_": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "rfIyVvL0qH",
                            "type": "color",
                            "key": "rfIyVvL0qH",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "borderRadiusSide": "side",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "paddingTop": 12,
                    "paddingRight": 12,
                    "paddingLeft": 12,
                    "paddingBottom": 12,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "p6191kqKsp",
            "hidden": false,
            "nodes": [
                "vAbBPk2y9_"
            ],
            "linkedNodes": {}
        },
        "vAbBPk2y9_": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器",
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
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "fHefiXp0P_",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "z53RHAhzYo": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "vk8aO-LfkI",
            "hidden": false,
            "nodes": [
                "5XlXiWXlT8",
                "xNL_49QSKV"
            ],
            "linkedNodes": {}
        },
        "5XlXiWXlT8": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 16,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "z53RHAhzYo",
            "hidden": false,
            "nodes": [
                "RYJ9IBFuvC"
            ],
            "linkedNodes": {}
        },
        "RYJ9IBFuvC": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器出水温度（℃）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "5XlXiWXlT8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "xNL_49QSKV": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "z53RHAhzYo",
            "hidden": false,
            "nodes": [
                "6mNH2opIUo"
            ],
            "linkedNodes": {}
        },
        "6mNH2opIUo": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "xNL_49QSKV",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "C3sMKJRIFg": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "vk8aO-LfkI",
            "hidden": false,
            "nodes": [
                "hTzX32v292",
                "cLD9J6vLxW"
            ],
            "linkedNodes": {}
        },
        "hTzX32v292": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 16,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "C3sMKJRIFg",
            "hidden": false,
            "nodes": [
                "OhhyFwwAka"
            ],
            "linkedNodes": {}
        },
        "OhhyFwwAka": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器进水温度（℃",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "hTzX32v292",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "cLD9J6vLxW": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "C3sMKJRIFg",
            "hidden": false,
            "nodes": [
                "qTONH879D7"
            ],
            "linkedNodes": {}
        },
        "qTONH879D7": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND_ENT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "cLD9J6vLxW",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "f6zYvZL2nK": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "vk8aO-LfkI",
            "hidden": false,
            "nodes": [
                "xAQfHF8EMs",
                "2b-G6T9mHW"
            ],
            "linkedNodes": {}
        },
        "xAQfHF8EMs": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "f6zYvZL2nK",
            "hidden": false,
            "nodes": [
                "DHy36cYT2a"
            ],
            "linkedNodes": {}
        },
        "DHy36cYT2a": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器冷媒压力（kPa）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "xAQfHF8EMs",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2b-G6T9mHW": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "f6zYvZL2nK",
            "hidden": false,
            "nodes": [
                "9HOfYoLe1x"
            ],
            "linkedNodes": {}
        },
        "9HOfYoLe1x": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.PR_COND.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "2b-G6T9mHW",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "1kXufULuoQ": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "vk8aO-LfkI",
            "hidden": false,
            "nodes": [
                "NJTYkKXJ79",
                "89MzCYCQT1"
            ],
            "linkedNodes": {}
        },
        "NJTYkKXJ79": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "1kXufULuoQ",
            "hidden": false,
            "nodes": [
                "Lc7IYq3LnL"
            ],
            "linkedNodes": {}
        },
        "Lc7IYq3LnL": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "冷凝器冷媒温度(℃)",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "NJTYkKXJ79",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "89MzCYCQT1": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "1kXufULuoQ",
            "hidden": false,
            "nodes": [
                "knPle0yj89"
            ],
            "linkedNodes": {}
        },
        "knPle0yj89": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_COND.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "89MzCYCQT1",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "hEH5gJs36L": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "p6191kqKsp",
            "hidden": false,
            "nodes": [
                "_E71TjZS6j",
                "IuW9n8GfA9"
            ],
            "linkedNodes": {}
        },
        "_E71TjZS6j": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "padding": 8,
                    "marginSide": "all",
                    "margin": 0,
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 16,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "hEH5gJs36L",
            "hidden": false,
            "nodes": [
                "wl7RSM6iRW"
            ],
            "linkedNodes": {}
        },
        "wl7RSM6iRW": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度（℃）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "_E71TjZS6j",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "IuW9n8GfA9": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "hEH5gJs36L",
            "hidden": false,
            "nodes": [
                "nnwbXrjGP4"
            ],
            "linkedNodes": {}
        },
        "nnwbXrjGP4": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "IuW9n8GfA9",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pBCDUPnQID": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "p6191kqKsp",
            "hidden": false,
            "nodes": [
                "ld4dh2GeGF",
                "Cvwd2zg5VB"
            ],
            "linkedNodes": {}
        },
        "ld4dh2GeGF": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pBCDUPnQID",
            "hidden": false,
            "nodes": [
                "Bo5t7VKres"
            ],
            "linkedNodes": {}
        },
        "Bo5t7VKres": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器进水温度（℃）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "ld4dh2GeGF",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Cvwd2zg5VB": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pBCDUPnQID",
            "hidden": false,
            "nodes": [
                "3bbfP9MG9T"
            ],
            "linkedNodes": {}
        },
        "3bbfP9MG9T": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_ENT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "Cvwd2zg5VB",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "i2oeRnw4Wk": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "p6191kqKsp",
            "hidden": false,
            "nodes": [
                "N5vIHc1yaL",
                "gxtLo9HZWc"
            ],
            "linkedNodes": {}
        },
        "N5vIHc1yaL": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "i2oeRnw4Wk",
            "hidden": false,
            "nodes": [
                "ye62i4KztN"
            ],
            "linkedNodes": {}
        },
        "ye62i4KztN": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器冷媒压力(kPa)",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "N5vIHc1yaL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "gxtLo9HZWc": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "i2oeRnw4Wk",
            "hidden": false,
            "nodes": [
                "-sePNdliU8"
            ],
            "linkedNodes": {}
        },
        "-sePNdliU8": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.PR_EVAP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "gxtLo9HZWc",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UG6W0LkIGW": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "p6191kqKsp",
            "hidden": false,
            "nodes": [
                "iDhBRkFvAC",
                "rvatJ-oINz"
            ],
            "linkedNodes": {}
        },
        "iDhBRkFvAC": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "UG6W0LkIGW",
            "hidden": false,
            "nodes": [
                "iApnPu5cNY"
            ],
            "linkedNodes": {}
        },
        "iApnPu5cNY": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器冷媒温度（℃）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "iDhBRkFvAC",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "rvatJ-oINz": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "UG6W0LkIGW",
            "hidden": false,
            "nodes": [
                "lp3FcSqYi5"
            ],
            "linkedNodes": {}
        },
        "lp3FcSqYi5": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "rvatJ-oINz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "MWsDJEtusr": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_EVAP_LEV.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
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
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "fontSize": 18,
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "OD_7QW0aAA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "KlGhmhTYXS": {
            "type": {
                "resolvedName": "InputKb"
            },
            "isCanvas": false,
            "props": {
                "displayName": "InputKb",
                "value": "78",
                "size": "middle",
                "type": "number",
                "placeholder": "",
                "disabled": false,
                "variant": "outlined",
                "allowClear": false,
                "showCount": false,
                "events": {
                    "onPressEnter": {
                        "action": "pushData",
                        "link": {
                            "component": source.T_EVAP_LEV.NAME
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "70px",
                    "height": "100%",
                    "widthType": "fixed",
                    "heightType": "relative",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "side",
                    "widthUnit": "px",
                    "heightUnit": "%",
                    "color": "rgb(255, 255, 255)",
                    "marginBottom": 0,
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
                }
            },
            "displayName": "InputKb",
            "custom": {},
            "parent": "0wzSnVbAgD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "t6mkGwlrdE": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "启动",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "CaretRightOutlined",
                "htmlType": "button",
                "isHighlight": "default",
                "status": [
                    {
                        "id": "w1NpXWbhnf",
                        "label": "停止",
                        "value": "0",
                        "expression": "$CH1#ONOFF",
                        "color": "rgb(255, 255, 255)"
                    },
                    {
                        "id": "1JuHubwaaz",
                        "label": "运行",
                        "value": "1",
                        "expression": "",
                        "color": "rgb(115, 209, 61)"
                    }
                ],
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": "CH1#OFF_SP",
                            "value": "1"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "initial",
                    "height": 32,
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 16,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                    "background": "linear-gradient(rgba(6, 43, 95, 0.5), rgba(6, 43, 95, 0.5))",
                    "backgroundList": [
                        {
                            "id": "MM5chbM_bv",
                            "type": "color",
                            "key": "MM5chbM_bv",
                            "value": "rgba(6, 43, 95, 0.5)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.2)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "color": "rgba(117, 253, 244, 1)"
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "3aEuy7ga5c",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "odkfr25wMX": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "停止",
                "template": "default",
                "type": "primary",
                "shape": "default",
                "icon": "PauseOutlined",
                "htmlType": "button",
                "isHighlight": "default",
                "status": [],
                "events": {
                    "onClick": {
                        "action": "pushData",
                        "link": {
                            "component": source.ONOFF_SP.NAME,
                            "value": "0"
                        }
                    }
                },
                "style": {
                    "position": "relative",
                    "width": "initial",
                    "height": 32,
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 16,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "side",
                    "marginSide": "all",
                    "padding": 4,
                    "paddingTop": 4,
                    "paddingRight": 15,
                    "paddingBottom": 4,
                    "paddingLeft": 15,
                    "background": "linear-gradient(rgba(6, 43, 95, 0.5), rgba(6, 43, 95, 0.5))",
                    "backgroundList": [
                        {
                            "id": "MM5chbM_bv",
                            "type": "color",
                            "key": "MM5chbM_bv",
                            "value": "rgba(6, 43, 95, 0.5)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(255, 255, 255, 0.2)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "color": "rgba(117, 253, 244, 1)"
                },
                "displayName": "Button"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "3aEuy7ga5c",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Q3BPYm9Ggw": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度（℃）",
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "OD_7QW0aAA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "iB4YE2Xg-O": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "蒸发器出水温度设置",
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "0wzSnVbAgD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EhouMGytvh": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "zt82mMgn1e",
                "0BMQzMIYXQ"
            ],
            "linkedNodes": {}
        },
        "zt82mMgn1e": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "远程/就地",
                "status": [],
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EhouMGytvh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "0BMQzMIYXQ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": {
                    "bind": source.AM.NAME,
                    "type": "points"
                },
                "status": [
                    {
                        "id": "1",
                        "label": "远程",
                        "value": "0",
                        "key": "1",
                        "color": "rgba(255, 255, 255, 1)",
                        "expression": {
                            "bind": source.AM.NAME,
                            "type": "points"
                        },
                        "backgroundColor": ""
                    },
                    {
                        "id": "2",
                        "label": "就地",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.AM.NAME,
                            "type": "points"
                        },
                        "backgroundColor": ""
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
                    "fontSize": 18,
                    "fontWeight": "bold",
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "side",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0,
                    "color": "rgba(0, 251, 40, 1)",
                    "paddingTop": 13,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                },
                "expression": ""
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "EhouMGytvh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UZ_nOV_-vx": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 10,
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "04cXEf6bK-",
            "hidden": false,
            "nodes": [
                "-Ey2-1vh0V",
                "VmoNLXHXCV"
            ],
            "linkedNodes": {}
        },
        "-Ey2-1vh0V": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "启用/禁用",
                "status": [],
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "UZ_nOV_-vx",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "VmoNLXHXCV": {
            "type": {
                "resolvedName": "Select"
            },
            "isCanvas": false,
            "props": {
                "placeholder": "请选择",
                "size": "middle",
                "mode": {},
                "optionType": "default",
                "disabled": false,
                "allowClear": false,
                "bordered": true,
                "options": [
                    {
                        "id": "oUN7ebnELU",
                        "label": "启用",
                        "value": "1",
                        "name": "启用",
                        "title": "启用"
                    },
                    {
                        "id": "POFnaWlLKZ",
                        "label": "禁用",
                        "value": "0",
                        "name": "禁用",
                        "title": "禁用"
                    }
                ],
                "events": {
                    "onChange": {
                        "action": "pushData",
                        "link": {
                            "component": source.EB.NAME
                        }
                    }
                },
                "displayName": "Select",
                "style": {
                    "fontSize": 18,
                    "textAlign": "center",
                    "heightType": "fit-content",
                    "height": "auto",
                    "display": "flex",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "columnGap": 0,
                    "padding": null,
                    "width": "92px",
                    "rowGap": 0,
                    "alignContent": "",
                    "flexWrap": "nowrap",
                    "gap": "",
                    "justifyItems": "",
                    "lineHeight": 2,
                    "widthType": "fixed",
                    "widthUnit": "px",
                    "paddingSide": "side",
                    "paddingTop": 8,
                    "paddingRight": null,
                    "paddingLeft": 0,
                    "paddingBottom": 0
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "UZ_nOV_-vx",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "BGG4jrBvX3": {
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
                    "display": "flex"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "C0mWrCCjhx",
            "hidden": false,
            "nodes": [
                "cWXRRFIXyN",
                "oWARJf_TjM",
                "4n_I5xLZow"
            ],
            "linkedNodes": {}
        },
        "cWXRRFIXyN": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 1,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 1,
                    "paddingRight": 1,
                    "paddingLeft": 1,
                    "paddingBottom": 1,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "borderRadiusSide": "all",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "BGG4jrBvX3",
            "hidden": false,
            "nodes": [
                "oxSpnWxgTj",
                "32YJYqrQKJ",
                "pZtz_IaxJU"
            ],
            "linkedNodes": {}
        },
        "oxSpnWxgTj": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "rfIyVvL0qH",
                            "type": "color",
                            "key": "rfIyVvL0qH",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "borderRadiusSide": "side",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "paddingTop": 12,
                    "paddingRight": 12,
                    "paddingLeft": 12,
                    "paddingBottom": 12,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "cWXRRFIXyN",
            "hidden": false,
            "nodes": [
                "pZ_YchOW9T"
            ],
            "linkedNodes": {}
        },
        "pZ_YchOW9T": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "压缩机",
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
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "oxSpnWxgTj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "oWARJf_TjM": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 24,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 24,
                    "paddingRight": 24,
                    "paddingLeft": 24,
                    "paddingBottom": 24,
                    "flexDirection": "row",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "BGG4jrBvX3",
            "hidden": false,
            "nodes": [
                "9QCDaZHEZY",
                "EJVKDKvDym"
            ],
            "linkedNodes": {}
        },
        "4n_I5xLZow": {
            "type": {
                "resolvedName": "Flex"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Flex",
                "gap": 6,
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
                    "padding": 1,
                    "display": "flex",
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "0h0qTqrn4e",
                            "type": "color",
                            "key": "0h0qTqrn4e",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "paddingTop": 1,
                    "paddingRight": 1,
                    "paddingLeft": 1,
                    "paddingBottom": 1,
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "borderRadiusSide": "all",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "BGG4jrBvX3",
            "hidden": false,
            "nodes": [
                "cpNqIrjPR5",
                "RLf7wcrV-o",
                "cA6YVi9HSG"
            ],
            "linkedNodes": {}
        },
        "cpNqIrjPR5": {
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
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "rfIyVvL0qH",
                            "type": "color",
                            "key": "rfIyVvL0qH",
                            "value": "rgba(170, 175, 209, 0.1)",
                            "disabled": false
                        }
                    ],
                    "borderWidth": 0,
                    "borderStyle": "solid",
                    "borderColor": "rgba(0,0,0,1)",
                    "borderSide": "all",
                    "borderRadius": 6,
                    "borderRadiusSide": "side",
                    "borderTopLeftRadius": 6,
                    "borderTopRightRadius": 6,
                    "borderBottomRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "paddingTop": 12,
                    "paddingRight": 12,
                    "paddingLeft": 12,
                    "paddingBottom": 12,
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            "displayName": "Flex",
            "custom": {},
            "parent": "4n_I5xLZow",
            "hidden": false,
            "nodes": [
                "MiV_08z0uZ"
            ],
            "linkedNodes": {}
        },
        "MiV_08z0uZ": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电机",
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
                    "lineHeight": 1.5,
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all"
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "cpNqIrjPR5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "32YJYqrQKJ": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "cWXRRFIXyN",
            "hidden": false,
            "nodes": [
                "1JanwbjR-8",
                "jKrpDQG_Zn"
            ],
            "linkedNodes": {}
        },
        "1JanwbjR-8": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "32YJYqrQKJ",
            "hidden": false,
            "nodes": [
                "z8a8j6pvDW"
            ],
            "linkedNodes": {}
        },
        "z8a8j6pvDW": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "油压（kPa）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "1JanwbjR-8",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "jKrpDQG_Zn": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "32YJYqrQKJ",
            "hidden": false,
            "nodes": [
                "qstsI8X1-g"
            ],
            "linkedNodes": {}
        },
        "qstsI8X1-g": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.DPR_OIL.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "kPa",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "jKrpDQG_Zn",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pZtz_IaxJU": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "cWXRRFIXyN",
            "hidden": false,
            "nodes": [
                "-DfUwu9rs7",
                "h1SjkQlJAj"
            ],
            "linkedNodes": {}
        },
        "-DfUwu9rs7": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pZtz_IaxJU",
            "hidden": false,
            "nodes": [
                "1E96ngOqHo"
            ],
            "linkedNodes": {}
        },
        "1E96ngOqHo": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "油温（℃）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "-DfUwu9rs7",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "h1SjkQlJAj": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "pZtz_IaxJU",
            "hidden": false,
            "nodes": [
                "XEiQk-efNU"
            ],
            "linkedNodes": {}
        },
        "XEiQk-efNU": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.T_OIL.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "℃",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "h1SjkQlJAj",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "RLf7wcrV-o": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4n_I5xLZow",
            "hidden": false,
            "nodes": [
                "0ft0Uy3Chh",
                "oDS4lw0km6"
            ],
            "linkedNodes": {}
        },
        "0ft0Uy3Chh": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 13,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "RLf7wcrV-o",
            "hidden": false,
            "nodes": [
                "Avwj1NgPBa"
            ],
            "linkedNodes": {}
        },
        "Avwj1NgPBa": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电流百分比（%）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "0ft0Uy3Chh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "oDS4lw0km6": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 11,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "RLf7wcrV-o",
            "hidden": false,
            "nodes": [
                "zsHqRiz-7u"
            ],
            "linkedNodes": {}
        },
        "zsHqRiz-7u": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.I_PCT.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "%",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "oDS4lw0km6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "cA6YVi9HSG": {
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
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "4n_I5xLZow",
            "hidden": false,
            "nodes": [
                "Bwbd9K3fnn",
                "n6cCzZNlC5"
            ],
            "linkedNodes": {}
        },
        "Bwbd9K3fnn": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 14,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "paddingLeft": 16
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "cA6YVi9HSG",
            "hidden": false,
            "nodes": [
                "IqYFKtniTO"
            ],
            "linkedNodes": {}
        },
        "IqYFKtniTO": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "电流百分比设定值（%）",
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
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Bwbd9K3fnn",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "n6cCzZNlC5": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "type": "span",
                "span": 10,
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
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerRight",
                    "justifyContent": "flex-end",
                    "alignItems": "center"
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "cA6YVi9HSG",
            "hidden": false,
            "nodes": [
                "zZXUCQnqGD"
            ],
            "linkedNodes": {}
        },
        "zZXUCQnqGD": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.I_PCT_MAX_SP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": false,
                "isAfter": false,
                "before": {
                    "value": "前缀"
                },
                "after": {
                    "value": "%",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "n6cCzZNlC5",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "9QCDaZHEZY": {
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
                    "margin": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "oWARJf_TjM",
            "hidden": false,
            "nodes": [
                "pdEpBOfWva",
                "GRjxQKkic6"
            ],
            "linkedNodes": {}
        },
        "pdEpBOfWva": {
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
                    "margin": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "9QCDaZHEZY",
            "hidden": false,
            "nodes": [
                "bTU9T-CvLS"
            ],
            "linkedNodes": {}
        },
        "bTU9T-CvLS": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "功率",
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "pdEpBOfWva",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "GRjxQKkic6": {
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
                    "height": "47px",
                    "heightType": "fixed",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 0,
                    "heightUnit": "px",
                    "alignItems": "flex-start",
                    "key": "topCenter",
                    "justifyContent": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 16,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "9QCDaZHEZY",
            "hidden": false,
            "nodes": [
                "n_QPIKWlVF"
            ],
            "linkedNodes": {}
        },
        "n_QPIKWlVF": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "20px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.P.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
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
                    "value": "kW",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)",
                    "fontSize": 18
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "GRjxQKkic6",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EJVKDKvDym": {
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
                    "margin": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "oWARJf_TjM",
            "hidden": false,
            "nodes": [
                "dKeL1wJfcI",
                "EzJxZEHQHR"
            ],
            "linkedNodes": {}
        },
        "dKeL1wJfcI": {
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
                    "margin": 0
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "EJVKDKvDym",
            "hidden": false,
            "nodes": [
                "g2OmchhToN"
            ],
            "linkedNodes": {}
        },
        "g2OmchhToN": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "效率",
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
                    "textAlign": "center",
                    "spacing": 0,
                    "paddingSide": "all",
                    "padding": 0,
                    "marginSide": "all",
                    "margin": 0
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "dKeL1wJfcI",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "EzJxZEHQHR": {
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
                    "height": "47px",
                    "heightType": "fixed",
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
                    "display": "flex",
                    "flexDirection": "row",
                    "columnGap": 0,
                    "heightUnit": "px",
                    "alignItems": "flex-start",
                    "key": "topCenter",
                    "justifyContent": "center",
                    "paddingTop": 8,
                    "paddingRight": 8,
                    "paddingLeft": 16,
                    "paddingBottom": 8
                },
                "displayName": "Col"
            },
            "displayName": "Col",
            "custom": {},
            "parent": "EJVKDKvDym",
            "hidden": false,
            "nodes": [
                "9yMMI2TdRo"
            ],
            "linkedNodes": {}
        },
        "9yMMI2TdRo": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "20px",
                "decimalSeparator": 1,
                "percent": false,
                "value": {
                    "bind": source.COP.NAME,
                    "type": "points"
                },
                "type": "",
                "strong": true,
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
                    "value": "kW",
                    "type": "secondary"
                },
                "style": {
                    "color": "rgb(255, 255, 255)",
                    "fontSize": 18
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "EzJxZEHQHR",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }

}