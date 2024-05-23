import { contentstyle, statsuMap, contentpaddingstyle } from '../pageNodeDefault';
export default (global) => {
    const currentyear = new Date().getFullYear();
    return {
        "ROOT": {
            "type": {
                "resolvedName": "Page"
            },
            "isCanvas": true,
            "props": {
                "title": "",
                "theme": {
                    "algorithm": "darkBlue",
                    "token": {
                        "colorPrimary": "#1677ff"
                    }
                },
                "style": {
                    "width": "100%",
                    "height": "auto",
                    "background": "url(/assets/images/bg-light.jpg) 50% 50% / 100% 100% no-repeat",
                    "padding": 16,
                    "borderRadius": 0,
                    "widthType": "relative",
                    "heightType": "fit-content",
                    "backgroundList": [
                        {
                            "id": "7uQ5C-F2G2",
                            "type": "image",
                            "key": "7uQ5C-F2G2",
                            "value": {
                                "backgroundImage": "be0BQEejGaivgUYpzwghif",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "100% 100%",
                                "backgroundPosition": "50% 50%"
                            },
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center"
                },
                "projId": global.ProjectId,
                "global": {
                    "ProjectId": global.ProjectId,
                    "ProjectName": global.ProjectName
                }
            },
            "displayName": "Page",
            "custom": {},
            "hidden": false,
            "nodes": [
                "UJd9CINgOJ"
            ],
            "linkedNodes": {}
        },
        "UJd9CINgOJ": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Container",
                "style": {
                    "position": "relative",
                    "width": "780px",
                    "height": "auto",
                    "widthType": "fixed",
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
                    "widthUnit": "px",
                    "display": "flex",
                    "flexDirection": "column",
                    "rowGap": 0,
                    "columnGap": 0,
                    "key": "topLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "flex-start",
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 0,
                    "paddingBottom": 0,
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "justifyItems": ""
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [
                "8J2_H_DWty",
                "Abn0_LuWLK",
                "AIQSEZso9o"
            ],
            "linkedNodes": {}
        },
        "8J2_H_DWty": {
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
                "status": statsuMap,
                "events": {},
                "style": {
                    ...contentstyle,
                    "color": "rgb(255, 255, 255)",
                    "fontSize": 24,
                    "textAlign": "center",
                }
            },
            "displayName": "TypographyText",
            "custom": {},
            "parent": "UJd9CINgOJ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Abn0_LuWLK": {
            "type": {
                "resolvedName": "Login"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Login",
                "style": contentstyle
            },
            "displayName": "Login",
            "custom": {},
            "parent": "UJd9CINgOJ",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "login-container": "JryTCgsZuU"
            }
        },
        "JryTCgsZuU": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "background": null,
                    "backgroundList": [],
                    "widthType": "fixed",
                    "width": "600px",
                    "widthUnit": "px"
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "Abn0_LuWLK",
            "hidden": false,
            "nodes": [
                "77ZDCxqdIC"
            ],
            "linkedNodes": {}
        },
        "C8tTZ9-Lq_": {
            "type": {
                "resolvedName": "StateText"
            },
            "isCanvas": false,
            "props": {
                "displayName": "StateText",
                "level": "5",
                "size": "14px",
                "decimalSeparator": 0,
                "percent": false,
                "value": currentyear,
                "type": "",
                "color": "rgb(255, 255, 255)",
                "strong": false,
                "italic": false,
                "underline": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "delete": false,
                "code": false,
                "isBefore": true,
                "isAfter": false,
                "before": {
                    "value": "Copyright Deepctrls @ ",
                    "color": "rgb(255, 255, 255)"
                },
                "after": {
                    "value": "Kw"
                }
            },
            "displayName": "StateText",
            "custom": {},
            "parent": "76UXDfDOxA",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "77ZDCxqdIC": {
            "type": {
                "resolvedName": "Login"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Login",
                "style": contentstyle
            },
            "displayName": "Login",
            "custom": {},
            "parent": "JryTCgsZuU",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
                "login-container": "7eFUPagsTT"
            }
        },
        "7eFUPagsTT": {
            "type": {
                "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {
                "style": {
                    "background": "linear-gradient(rgba(170, 175, 209, 0.1), rgba(170, 175, 209, 0.1))",
                    "backgroundList": [
                        {
                            "id": "-azssu-2hY",
                            "type": "color",
                            "key": "-azssu-2hY",
                            "value": "rgba(36, 66, 105, 0.5)",
                            "disabled": false
                        }
                    ],
                    "display": "flex",
                    "flexDirection": "row",
                    "key": "centerLeft",
                    "justifyContent": "flex-start",
                    "alignItems": "center",
                    "widthType": "fixed",
                    "width": "780px",
                    "widthUnit": "px",
                    "marginSide": "side",
                    "marginTop": 20,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 20,
                    "height": 280,
                    "heightUnit": "px",
                    "heightType": "fixed",
                    borderRadius: 4
                }
            },
            "displayName": "Container",
            "custom": {},
            "parent": "77ZDCxqdIC",
            "hidden": false,
            "nodes": [
                "Spt7jBWzbm",
                "Sv8Etz9ekG"
            ],
            "linkedNodes": {}
        },
        "Sv8Etz9ekG": {
            "type": {
                "resolvedName": "Form"
            },
            "isCanvas": true,
            "props": {
                "id": "login-form",
                "labelCol": {
                    "span": 6
                },
                "style": {
                    "background": "",
                    "backgroundList": [
                        {
                            "id": "-azssu-2hY",
                            "type": "color",
                            "key": "-azssu-2hY",
                            "value": "rgba(35, 38, 59, 1)",
                            "disabled": true
                        }
                    ],
                    "widthType": "fixed",
                    "width": "460px",
                    "widthUnit": "px",
                    "display": "flex",
                    "flexDirection": "column",
                    "key": "centerCenter",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "alignContent": "",
                    "flexWrap": "",
                    "gap": "",
                    "rowGap": 0,
                    "columnGap": 0,
                    "justifyItems": "",
                    "marginSide": "all",
                    "marginTop": 0,
                    "marginRight": 0,
                    "marginLeft": 0,
                    "marginBottom": 0
                },
                "wrapperCol": {
                    "offset": 1,
                    "span": null
                },
                "events": {
                    "onFinish": {
                        "action": "login"
                    }
                },
                "name": ""
            },
            "displayName": "Form",
            "custom": {},
            "parent": "7eFUPagsTT",
            "hidden": false,
            "nodes": [
                "XyH3kCrSVz",
                "FMfRQ4SK-S",
                "c3o_0uA9ul"
            ],
            "linkedNodes": {}
        },
        "XyH3kCrSVz": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "id": "login-form-username",
                "label": "用户名",
                "name": "userid",
                "rules": [
                    {
                        "required": true,
                        "message": "请输入用户名"
                    }
                ],
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "L7v6M3yij9",
                            "type": "color",
                            "key": "L7v6M3yij9",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ],
                    "paddingSide": "side",
                    "paddingTop": 0,
                    "paddingRight": 0,
                    "paddingLeft": 20,
                    "paddingBottom": 0,
                    "color": "rgb(255, 255, 255)",
                    "width": "320px",
                    "widthType": "fixed",
                    "widthUnit": "px"
                },
                "wrapperCol": {
                    "offset": 1
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "Sv8Etz9ekG",
            "hidden": false,
            "nodes": [
                "4PNxDJI28t"
            ],
            "linkedNodes": {}
        },
        "4PNxDJI28t": {
            "type": {
                "resolvedName": "Input"
            },
            "isCanvas": false,
            "props": {
                "id": "username-input",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                },
                "name": "userid"
            },
            "displayName": "Input",
            "custom": {},
            "parent": "XyH3kCrSVz",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "FMfRQ4SK-S": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "id": "login-form-password",
                "label": "密码",
                "name": "password",
                "rules": [
                    {
                        "required": true,
                        "message": "请输入密码"
                    }
                ],
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "L7v6M3yij9",
                            "type": "color",
                            "key": "L7v6M3yij9",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ],
                    "paddingLeft": 20,
                    "color": "rgb(255, 255, 255)",
                    "widthType": "fixed",
                    "width": "320px",
                    "widthUnit": "px"
                },
                "wrapperCol": {
                    "offset": 1
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "Sv8Etz9ekG",
            "hidden": false,
            "nodes": [
                "AhddUX6-H_"
            ],
            "linkedNodes": {}
        },
        "AhddUX6-H_": {
            "type": {
                "resolvedName": "Input"
            },
            "isCanvas": false,
            "props": {
                "id": "password-input",
                "type": "password",
                "form": {
                    "_init": true,
                    "__INTERNAL__": {
                        "name": ""
                    }
                },
                "value": "",
                "name": "password"
            },
            "displayName": "Input",
            "custom": {},
            "parent": "FMfRQ4SK-S",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "c3o_0uA9ul": {
            "type": {
                "resolvedName": "FormItem"
            },
            "isCanvas": true,
            "props": {
                "id": "submit",
                "wrapperCol": {
                    "offset": 4
                },
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "L7v6M3yij9",
                            "type": "color",
                            "key": "L7v6M3yij9",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "FormItem",
            "custom": {},
            "parent": "Sv8Etz9ekG",
            "hidden": false,
            "nodes": [
                "QsdCKfJq17"
            ],
            "linkedNodes": {}
        },
        "QsdCKfJq17": {
            "type": {
                "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
                "children": [
                    "登录"
                ],
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
                    "paddingLeft": 15
                },
                "id": "submit-button",
                "loading": false
            },
            "displayName": "Button",
            "custom": {},
            "parent": "c3o_0uA9ul",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "Spt7jBWzbm": {
            "type": {
                "resolvedName": "Image"
            },
            "isCanvas": false,
            "props": {
                "displayName": "Image",
                "height": 265,
                "width": 303.9930725097656,
                "events": {},
                "src": {
                    "bind": "ProjectImage",
                    "type": "global"
                },
                "style": {
                    "widthType": "fixed",
                    "width": "320px",
                    "widthUnit": "px",
                    "height": "280px",
                    "heightType": "fixed",
                    "heightUnit": "px",
                    "borderTopLeftRadius": 4,
                    "borderBottomLeftRadius": 4
                }
            },
            "displayName": "Image",
            "custom": {},
            "parent": "7eFUPagsTT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "AIQSEZso9o": {
            "type": {
                "resolvedName": "Columns"
            },
            "isCanvas": true,
            "props": {
                "displayName": "Columns",
                "columns": 3,
                "align": "top",
                "gutter": 12,
                "justify": "start",
                "wrap": false,
                "style": contentpaddingstyle
            },
            "displayName": "Columns",
            "custom": {},
            "parent": "UJd9CINgOJ",
            "hidden": false,
            "nodes": [
                "MRrn-Zk4pc",
                "76UXDfDOxA",
                "ZD8di0K4vB"
            ],
            "linkedNodes": {}
        },
        "MRrn-Zk4pc": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-0",
                "span": 8,
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "kOXXN92lpv",
                            "type": "color",
                            "key": "kOXXN92lpv",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Col",
            "custom": {},
            "parent": "AIQSEZso9o",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
        "76UXDfDOxA": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-1",
                "span": 8,
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "kOXXN92lpv",
                            "type": "color",
                            "key": "kOXXN92lpv",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ],
                    "display": 'flex',
                    "justifyContent": "center"
                }
            },
            "displayName": "Col",
            "custom": {},
            "parent": "AIQSEZso9o",
            "hidden": false,
            "nodes": [
                "C8tTZ9-Lq_"
            ],
            "linkedNodes": {}
        },
        "ZD8di0K4vB": {
            "type": {
                "resolvedName": "Col"
            },
            "isCanvas": true,
            "props": {
                "id": "col-2",
                "span": 8,
                "style": {
                    "background": "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
                    "backgroundList": [
                        {
                            "id": "kOXXN92lpv",
                            "type": "color",
                            "key": "kOXXN92lpv",
                            "value": "rgba(255, 255, 255, 0)",
                            "disabled": false
                        }
                    ]
                }
            },
            "displayName": "Col",
            "custom": {},
            "parent": "AIQSEZso9o",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
        },
    }
}