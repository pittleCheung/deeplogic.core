import { contentstyle, contentpaddingstyle, statsuMap } from '../pageNodeDefault';
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
                            "id": "Q7esXnlJZx",
                            "type": "color",
                            "key": "Q7esXnlJZx",
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
                "points": {
                    [source.AM.NAME]: 0,
                    [source.ONOFF.NAME]: 0,
                    [source.POS.NAME]: 0,
                    [source.POS_SP.NAME]: 0,
                    [source.EB.NAME]: 0,
                    [source.ONOFF_SP.NAME]: 0
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "nvh4JT8jaz"
            ],
            "linkedNodes": {}
        },
        "nvh4JT8jaz": {
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
                "_za49X9bbb",
                "vT3e6TjIyk"
            ],
            "linkedNodes": {}
        },
        "_za49X9bbb": {
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
            "parent": "nvh4JT8jaz",
            "hidden": false,
            "nodes": [
                "Jp5EuSkHsL",
                "2GuiBsSRQt",
                "m2bE_gtgTh",
                "LC2-lZRiwy"
            ],
            "linkedNodes": {}
        },
        "Jp5EuSkHsL": {
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
            "parent": "_za49X9bbb",
            "hidden": false,
            "nodes": [
                "fwAs0Go_sX",
                "bZsENkIQ2z"
            ],
            "linkedNodes": {}
        },
        "fwAs0Go_sX": {
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
            "parent": "Jp5EuSkHsL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "bZsENkIQ2z": {
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
                        "label": "关闭",
                        "value": "0",
                        "key": "1",
                        "color": "rgb(255, 255, 255)",
                        "expression": {
                            "bind": source.ONOFF.NAME,
                            "type": "points"
                        },
                        "backgroundColor": ""
                    },
                    {
                        "id": "2",
                        "label": "开启",
                        "value": "1",
                        "key": "2",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.ONOFF.NAME,
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
                    "margin": 0,
                    "color": "rgb(255, 255, 255)"
                },
                "expression": ""
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "Jp5EuSkHsL",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "2GuiBsSRQt": {
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
            "parent": "_za49X9bbb",
            "hidden": false,
            "nodes": [
                "R-G3t9Bndm",
                "CH2YjgwPbQ"
            ],
            "linkedNodes": {}
        },
        "R-G3t9Bndm": {
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
            "parent": "2GuiBsSRQt",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "CH2YjgwPbQ": {
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
                        "value": "1",
                        "key": "1",
                        "color": "#73d13d",
                        "expression": {
                            "bind": source.AM.NAME,
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
            "parent": "2GuiBsSRQt",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "m2bE_gtgTh": {
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
            "parent": "_za49X9bbb",
            "hidden": false,
            "nodes": [
                "xVUX9oX0CM",
                "FKuqyFuJZb"
            ],
            "linkedNodes": {}
        },
        "xVUX9oX0CM": {
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
            "parent": "m2bE_gtgTh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "FKuqyFuJZb": {
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
                    "width": "auto",
                    "widthType": "fit-content",
                    "fontSize": 18
                }
            },
            "displayName": "Select",
            "custom": {},
            "parent": "m2bE_gtgTh",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "LC2-lZRiwy": {
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
            "parent": "_za49X9bbb",
            "hidden": false,
            "nodes": [
                "G91_7_QEjH",
                "pZoLwr3PaY"
            ],
            "linkedNodes": {}
        },
        "G91_7_QEjH": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "开启",
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
                            "component": source.ONOFF_SP.NAME,
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
            "parent": "LC2-lZRiwy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "pZoLwr3PaY": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": "关闭",
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
            "parent": "LC2-lZRiwy",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "vT3e6TjIyk": {
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
            "parent": "nvh4JT8jaz",
            "hidden": false,
            "nodes": [
                "_XqvH33DDN",
                "pBxukLSYZM"
            ],
            "linkedNodes": {}
        },
        "_XqvH33DDN": {
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
            "parent": "vT3e6TjIyk",
            "hidden": false,
            "nodes": [
                "bvfvvCzD7S",
                "lp8HDlOVkf",
                "BQBtM96eqL"
            ],
            "linkedNodes": {}
        },
        "bvfvvCzD7S": {
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
            "parent": "_XqvH33DDN",
            "hidden": false,
            "nodes": [
                "QwTGlbjWKS"
            ],
            "linkedNodes": {}
        },
        "QwTGlbjWKS": {
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
            "parent": "bvfvvCzD7S",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "lp8HDlOVkf": {
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
            "parent": "_XqvH33DDN",
            "hidden": false,
            "nodes": [
                "2YfJXIxiG3",
                "UX57kPGplD"
            ],
            "linkedNodes": {}
        },
        "2YfJXIxiG3": {
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
            "parent": "lp8HDlOVkf",
            "hidden": false,
            "nodes": [
                "pyY3Qtz_Be"
            ],
            "linkedNodes": {}
        },
        "pyY3Qtz_Be": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "开度（%）",
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
            "parent": "2YfJXIxiG3",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "UX57kPGplD": {
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
            "parent": "lp8HDlOVkf",
            "hidden": false,
            "nodes": [
                "kwNmoUBUf6"
            ],
            "linkedNodes": {}
        },
        "kwNmoUBUf6": {
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
                    "bind": source.POS.NAME,
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
                    "fontSize": 18,
                    "color": "rgb(255, 255, 255)"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "UX57kPGplD",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "BQBtM96eqL": {
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
            "parent": "_XqvH33DDN",
            "hidden": false,
            "nodes": [
                "M49jL5495N",
                "CexcoTXBS3"
            ],
            "linkedNodes": {}
        },
        "M49jL5495N": {
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
            "parent": "BQBtM96eqL",
            "hidden": false,
            "nodes": [
                "13BX5fGnw-"
            ],
            "linkedNodes": {}
        },
        "13BX5fGnw-": {
            "type": {
                "resolvedName": "TypographyText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Typography.Text",
                "value": "开度设置（%）",
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
            "parent": "M49jL5495N",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "CexcoTXBS3": {
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
            "parent": "BQBtM96eqL",
            "hidden": false,
            "nodes": [
                "5364_PUJ23"
            ],
            "linkedNodes": {}
        },
        "pBxukLSYZM": {
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
            "parent": "vT3e6TjIyk",
            "hidden": false,
            "nodes": [
                "KO5CjfUM7L"
            ],
            "linkedNodes": {}
        },
        "KO5CjfUM7L": {
            "type": {
                "resolvedName": "Image"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Image",
                "src": "/assets/images/values.png",
                "events": {},
                "style": {
                    "position": "relative",
                    "width": "auto",
                    "height": "100px",
                    "widthType": "fit-content",
                    "heightType": "fixed",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18,
                    "fontWeight": 400,
                    "lineHeight": 1.5,
                    "textAlign": "left",
                    "spacing": 0,
                    "paddingSide": "all",
                    "marginSide": "all",
                    "heightUnit": "px"
                }
            },
            "displayName": "Image",
            "custom": {},
            "parent": "pBxukLSYZM",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "5364_PUJ23": {
            "type": {
                "resolvedName": "InputKb"
            },
            "isCanvas": false,
            "props": {
                "displayName": "InputKb",
                "value": {
                    "bind": source.POS_SP.NAME,
                    "type": "points"
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
                            "component": source.POS_SP.NAME
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
            "parent": "CexcoTXBS3",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        }
    }

}