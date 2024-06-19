/**
 * 冷却塔
 */
import { contentpaddingstyle, contentstyle, statsuMap } from '../pageNodeDefault';
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
                "fontSize": 18,
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
                        "id": "Ep2YwR6nig",
                        "type": "color",
                        "key": "Ep2YwR6nig",
                        "value": "rgba(11, 65, 122, 1)",
                        "disabled": false
                    }
                ],
                "widthUnit": "%",
                "minHeight": "100%"
            },
            "events": {
                "onLoad": null
            },
            "projId": "Gy3dmClBqavaG0Aeccdvzu",
            points: {
              [source.P.NAME]: 0,
              [source.COP.NAME]: 0,
              [source.ONOFF.NAME]: 0,
              [source.FAULT.NAME]: 0,
              [source.AM.NAME]: 0,
              [source.FREQ.NAME]: 0,
              [source.EB.NAME]: 0,
              [source.ONOFF_SP.NAME]: 0,
              [source.FREQ_SP.NAME]: 0
            }
        },
        "displayName": "Page",
        "custom": {},
        "hidden": false,
        "nodes": [
            "UgKQR9rJ5i"
        ],
        "linkedNodes": {}
    },
    "UgKQR9rJ5i": {
        "type": {
            "resolvedName": "Flex"
        },
        "isCanvas": true,
        "props": {
            "displayName": "Flex",
            "gap": 20,
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
            "fCURUHyuK9",
            "HQFOuYdSzN"
        ],
        "linkedNodes": {}
    },
    "fCURUHyuK9": {
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
                "padding": null,
                "display": "flex"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "UgKQR9rJ5i",
        "hidden": false,
        "nodes": [
            "tlc9XtK9ZT",
            "yr5trLFvm7",
            "vMMUMWR2Xc",
            "N6mF8mxXlb"
        ],
        "linkedNodes": {}
    },
    "tlc9XtK9ZT": {
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
                "padding": 24,
                "display": "flex",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "FKM_4fWmcG",
                        "type": "color",
                        "key": "FKM_4fWmcG",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fCURUHyuK9",
        "hidden": false,
        "nodes": [
            "TpRyLNXjS6",
            "A-fiQ-7yPG"
        ],
        "linkedNodes": {}
    },
    "TpRyLNXjS6": {
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
                "fontSize": 18,
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
        "parent": "tlc9XtK9ZT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "A-fiQ-7yPG": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            value: {
              bind: source.ONOFF.NAME,
              type: 'points'
            },
            "status": [
                {
                    "id": "1",
                    "label": "停止",
                    "value": "0",
                    "key": "1",
                    "color": "rgb(255, 255, 255)",
                    "expression": {
                      bind: source.ONOFF.NAME,
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
                      bind: source.ONOFF.NAME,
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
                "lineHeight": 2.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "padding": 0,
                "marginSide": "all",
                "margin": 0,
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "tlc9XtK9ZT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "yr5trLFvm7": {
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
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all",
                "padding": 12,
                "display": "flex",
                "flexDirection": "column",
                "rowGap": 0,
                "columnGap": 0,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "tEEVEib_YM",
                        "type": "color",
                        "key": "tEEVEib_YM",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fCURUHyuK9",
        "hidden": false,
        "nodes": [
            "aeG5TjD-Hb",
            "QnWFrmMStS"
        ],
        "linkedNodes": {}
    },
    "aeG5TjD-Hb": {
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
                "fontSize": 18,
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
        "parent": "yr5trLFvm7",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "QnWFrmMStS": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            value: {
              bind: source.AM.NAME,
              type: 'points'
            },
            "status": [
                {
                    "id": "1",
                    "label": "远程",
                    "value": "1",
                    "key": "1",
                    "color": "#73d13d",
                    "expression": {
                      bind: source.AM.NAME,
                        "type": "points"
                    }
                },
                {
                    "id": "2",
                    "label": "就地",
                    "value": "0",
                    "key": "2",
                    "color": "rgb(255, 255, 255)",
                    "expression": {
                      bind: source.AM.NAME,
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
                "lineHeight": 2.5,
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
        "parent": "yr5trLFvm7",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "vMMUMWR2Xc": {
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
                "flexDirection": "column",
                "rowGap": 12,
                "columnGap": 0,
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "VL2TPzTwGI",
                        "type": "color",
                        "key": "VL2TPzTwGI",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6,
                "paddingTop": 12,
                "paddingRight": 12,
                "paddingLeft": 12,
                "paddingBottom": 26
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fCURUHyuK9",
        "hidden": false,
        "nodes": [
            "GuexI82CoR",
            "jtWUT8zXFu"
        ],
        "linkedNodes": {}
    },
    "GuexI82CoR": {
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
                "fontSize": 18,
                "fontWeight": 400,
                "lineHeight": 2.5,
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
        "parent": "vMMUMWR2Xc",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "jtWUT8zXFu": {
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
                      component: source.EB.NAME
                    }
                }
            },
            "value": {
                "bind": source.EB.NAME,
                "type": "points",
            },
            "displayName": "Select",
            "style": {
                "width": "auto",
                "widthType": "fit-content",
                "fontSize": 18
            }
        },
        "displayName": "Select",
        "custom": {},
        "parent": "vMMUMWR2Xc",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "N6mF8mxXlb": {
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
                "flexDirection": "column",
                "rowGap": 8,
                "columnGap": 0,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center",
                "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                "backgroundList": [
                    {
                        "id": "CmIbkwGSYe",
                        "type": "color",
                        "key": "CmIbkwGSYe",
                        "value": "rgba(170, 175, 209, 0.1)",
                        "disabled": false
                    }
                ],
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fCURUHyuK9",
        "hidden": false,
        "nodes": [
            "aI64WKerTW",
            "9Bizx5Qrak"
        ],
        "linkedNodes": {}
    },
    "aI64WKerTW": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "启动",
            "template": "default",
            "type": "default",
            "shape": "default",
            "icon": "CaretRightOutlined",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            "events": {
                "onClick": {
                    "action": "pushData",
                    "link": {
                      component: source.ONOFF_SP.NAME,
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
                "fontSize": 18,
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
                "background": "linear-gradient(rgba(6, 43, 95, 1), rgba(6, 43, 95, 1))",
                "backgroundList": [
                    {
                        "id": "sE1fJo9SxI",
                        "type": "color",
                        "key": "sE1fJo9SxI",
                        "value": "rgba(6, 43, 95, 1)",
                        "disabled": false
                    }
                ],
                "color": "rgba(117, 253, 244, 1)",
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            },
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "N6mF8mxXlb",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "9Bizx5Qrak": {
        "type": {
            "resolvedName": "Button"
        },
        "isCanvas": false,
        "props": {
            "children": "停止",
            "template": "default",
            "type": "default",
            "shape": "default",
            "icon": "PauseOutlined",
            "htmlType": "button",
            "isHighlight": "default",
            "status": [],
            "events": {
                "onClick": {
                    "action": "pushData",
                    "link": {
                      component: source.ONOFF_SP.NAME,
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
                "fontSize": 18,
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
                "background": "linear-gradient(rgba(6, 43, 95, 1), rgba(6, 43, 95, 1))",
                "backgroundList": [
                    {
                        "id": "sE1fJo9SxI",
                        "type": "color",
                        "key": "sE1fJo9SxI",
                        "value": "rgba(6, 43, 95, 1)",
                        "disabled": false
                    }
                ],
                "color": "rgba(117, 253, 244, 1)",
                "borderWidth": 0,
                "borderStyle": "solid",
                "borderColor": "rgba(0,0,0,1)",
                "borderSide": "all",
                "borderRadius": 6
            },
            "displayName": "Button"
        },
        "displayName": "Button",
        "custom": {},
        "parent": "N6mF8mxXlb",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "HQFOuYdSzN": {
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
        "parent": "UgKQR9rJ5i",
        "hidden": false,
        "nodes": [
            "dzp6q9hTrO",
            "LJrTskfnpp",
            "fTjUhmeSId"
        ],
        "linkedNodes": {}
    },
    "dzp6q9hTrO": {
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
                "fontSize": 18,
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
        "parent": "HQFOuYdSzN",
        "hidden": false,
        "nodes": [
            "PhoeuGF3jj",
            "rb1i6yTlHc",
            "N_giVwpYWu"
        ],
        "linkedNodes": {}
    },
    "PhoeuGF3jj": {
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
        "parent": "dzp6q9hTrO",
        "hidden": false,
        "nodes": [
            "cpFfSHZVf7"
        ],
        "linkedNodes": {}
    },
    "cpFfSHZVf7": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "参数",
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
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "PhoeuGF3jj",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "rb1i6yTlHc": {
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
                "fontSize": 18,
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
        "parent": "dzp6q9hTrO",
        "hidden": false,
        "nodes": [
            "zAn2IcrqV1",
            "4b7BAunroT"
        ],
        "linkedNodes": {}
    },
    "zAn2IcrqV1": {
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
                "fontSize": 18,
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
        "parent": "rb1i6yTlHc",
        "hidden": false,
        "nodes": [
            "8pUVcBpC4J"
        ],
        "linkedNodes": {}
    },
    "8pUVcBpC4J": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "频率（Hz）",
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
                "paddingSide": "all",
                "padding": 0,
                "marginSide": "all",
                "margin": 0
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "zAn2IcrqV1",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "4b7BAunroT": {
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
                "fontSize": 18,
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
        "parent": "rb1i6yTlHc",
        "hidden": false,
        "nodes": [
            "PoCQ5m4cWk"
        ],
        "linkedNodes": {}
    },
    "PoCQ5m4cWk": {
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
            value: {
              bind: source.FREQ.NAME,
              type: 'points'
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
                "fontSize": 18,
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "4b7BAunroT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "N_giVwpYWu": {
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
                "fontSize": 18,
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
        "parent": "dzp6q9hTrO",
        "hidden": false,
        "nodes": [
            "TPcBm4mz0E",
            "0JpT_scEYm"
        ],
        "linkedNodes": {}
    },
    "TPcBm4mz0E": {
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
                "fontSize": 18,
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
        "parent": "N_giVwpYWu",
        "hidden": false,
        "nodes": [
            "VYzit2nbP4"
        ],
        "linkedNodes": {}
    },
    "VYzit2nbP4": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "频率设置（Hz）",
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
                "paddingSide": "all",
                "padding": 0,
                "marginSide": "all",
                "margin": 0
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "TPcBm4mz0E",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "0JpT_scEYm": {
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
                "fontSize": 18,
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
        "parent": "N_giVwpYWu",
        "hidden": false,
        "nodes": [
            "2dAuShn8s8"
        ],
        "linkedNodes": {}
    },
    "LJrTskfnpp": {
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
                "fontSize": 18,
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
                "borderBottomLeftRadius": 6,
                "key": "centerCenter",
                "justifyContent": "center",
                "alignItems": "center"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "HQFOuYdSzN",
        "hidden": false,
        "nodes": [
            "JqjPdXUuHJ"
        ],
        "linkedNodes": {}
    },
    "JqjPdXUuHJ": {
        "type": {
            "resolvedName": "Image"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Image",
            "src": "/assets/images/tower.png",
            "events": {},
            "style": {
                "position": "relative",
                "width": "100px",
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
                "widthUnit": "px"
            }
        },
        "displayName": "Image",
        "custom": {},
        "parent": "LJrTskfnpp",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "fTjUhmeSId": {
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
        "parent": "HQFOuYdSzN",
        "hidden": false,
        "nodes": [
            "n9KfmJ2t0J",
            "Umbzn0OjCO"
        ],
        "linkedNodes": {}
    },
    "n9KfmJ2t0J": {
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
        "parent": "fTjUhmeSId",
        "hidden": false,
        "nodes": [
            "K9FgtlXB4A"
        ],
        "linkedNodes": {}
    },
    "K9FgtlXB4A": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "能耗",
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
                "lineHeight": 1.5,
                "textAlign": "center",
                "spacing": 0,
                "paddingSide": "all",
                "marginSide": "all"
            }
        },
        "displayName": "TypographyText",
        "custom": {},
        "parent": "n9KfmJ2t0J",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Umbzn0OjCO": {
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
                "display": "flex"
            }
        },
        "displayName": "Flex",
        "custom": {},
        "parent": "fTjUhmeSId",
        "hidden": false,
        "nodes": [
            "uL2uFVCTdT",
            "fNo9V1vNVz"
        ],
        "linkedNodes": {}
    },
    "uL2uFVCTdT": {
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
                "fontSize": 18,
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
        "parent": "Umbzn0OjCO",
        "hidden": false,
        "nodes": [
            "y7TQjFd0nl",
            "axnPv7yiQc"
        ],
        "linkedNodes": {}
    },
    "y7TQjFd0nl": {
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
                "fontSize": 18,
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
        "parent": "uL2uFVCTdT",
        "hidden": false,
        "nodes": [
            "n2iVcb-wg2"
        ],
        "linkedNodes": {}
    },
    "n2iVcb-wg2": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "功率",
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
        "parent": "y7TQjFd0nl",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "axnPv7yiQc": {
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
                "fontSize": 18,
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
        "parent": "uL2uFVCTdT",
        "hidden": false,
        "nodes": [
            "oMYitdK80D"
        ],
        "linkedNodes": {}
    },
    "oMYitdK80D": {
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
              bind: source.P.NAME,
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
                "fontSize": 18,
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "axnPv7yiQc",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "fNo9V1vNVz": {
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
                "fontSize": 18,
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
        "parent": "Umbzn0OjCO",
        "hidden": false,
        "nodes": [
            "bYzhkNTGwA",
            "vFZIpjzY2r"
        ],
        "linkedNodes": {}
    },
    "bYzhkNTGwA": {
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
                "fontSize": 18,
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
        "parent": "fNo9V1vNVz",
        "hidden": false,
        "nodes": [
            "J9s0bAa_V6"
        ],
        "linkedNodes": {}
    },
    "J9s0bAa_V6": {
        "type": {
            "resolvedName": "TypographyText"
        },
        "isCanvas": false,
        "props": {
            "displayName": "Typography.Text",
            "value": "效率",
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
        "parent": "bYzhkNTGwA",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "vFZIpjzY2r": {
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
                "fontSize": 18,
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
        "parent": "fNo9V1vNVz",
        "hidden": false,
        "nodes": [
            "CEz-v_71pp"
        ],
        "linkedNodes": {}
    },
    "CEz-v_71pp": {
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
            value: {
              bind: source.COP.NAME,
              type: 'points'
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
                "fontSize": 18,
                "color": "rgb(255, 255, 255)"
            }
        },
        "displayName": "StateText",
        "custom": {},
        "parent": "vFZIpjzY2r",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "2dAuShn8s8": {
        "type": {
            "resolvedName": "InputKb"
        },
        "isCanvas": false,
        "props": {
            "displayName": "InputKb",
            value: {
              bind: source.FREQ_SP.NAME,
              type: 'points'
            },
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
                      component: source.FREQ_SP.NAME
                    }
                }
            },
            "style": {
                "position": "relative",
                "width": "70px",
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
                "widthUnit": "px"
            }
        },
        "displayName": "InputKb",
        "custom": {},
        "parent": "0JpT_scEYm",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    }
}
};