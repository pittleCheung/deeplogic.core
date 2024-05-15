/**
 * 冷却泵、冷冻泵
 */
import { colnoflex, contentpaddingstyle, contentstyle, statsuMap } from '../pageNodeDefault';
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
          "padding": 18,
          "marginSide": "all",
          "margin": 0,
          "background": "linear-gradient(rgba(11, 65, 122, 1), rgba(11, 65, 122, 1))",
          "borderRadius": 0,
          "backgroundList": [
            {
              "id": "eNfbtmAPq_",
              "type": "color",
              "key": "eNfbtmAPq_",
              "value": "rgba(11, 65, 122, 1)",
              "disabled": false
            }
          ],
          "widthUnit": "%",
          "display": "grid",
          "flexDirection": "column",
          "rowGap": 0,
          "columnGap": 0,
          "paddingTop": 18,
          "paddingRight": 18,
          "paddingLeft": 18,
          "paddingBottom": 18,
          "minHeight": "100%",
          "key": "centerCenter"
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
        "QTMa4C_nre"
      ],
      "linkedNodes": {}
    },
    "5ogoonYkty": {
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
          "padding": null,
          "display": "flex"
        }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "QTMa4C_nre",
      "hidden": false,
      "nodes": [
        "JHMabBaaZ5",
        "xUEC_G9vfb",
        "LSGXdP4OSa",
        "qQDa8rgkJT"
      ],
      "linkedNodes": {}
    },
    "JHMabBaaZ5": {
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
      "parent": "5ogoonYkty",
      "hidden": false,
      "nodes": [
        "FuZtphGXCp",
        "r4Jv0-VSea"
      ],
      "linkedNodes": {}
    },
    "xUEC_G9vfb": {
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
      "parent": "5ogoonYkty",
      "hidden": false,
      "nodes": [
        "uzp0jOl-xt",
        "qEEZy5SoKe"
      ],
      "linkedNodes": {}
    },
    "LSGXdP4OSa": {
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
      "parent": "5ogoonYkty",
      "hidden": false,
      "nodes": [
        "7gSbj-WXyG",
        "9NxfGS3kwR"
      ],
      "linkedNodes": {}
    },
    "qQDa8rgkJT": {
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
      "parent": "5ogoonYkty",
      "hidden": false,
      "nodes": [
        "kZeF96EQrK",
        "GCjhhrgiv_"
      ],
      "linkedNodes": {}
    },
    "FuZtphGXCp": {
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
      "parent": "JHMabBaaZ5",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "r4Jv0-VSea": {
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
      "parent": "JHMabBaaZ5",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "uzp0jOl-xt": {
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
      "parent": "xUEC_G9vfb",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "qEEZy5SoKe": {
      "type": {
        "resolvedName": "TypographyText"
      },
      "isCanvas": false,
      "props": {
        "displayName": "Typography.Text",
        "value": {
          bind: source.AM.NAME,
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
      "parent": "xUEC_G9vfb",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "7gSbj-WXyG": {
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
      "parent": "LSGXdP4OSa",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "9NxfGS3kwR": {
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
        "displayName": "Select",
        "style": {
          "width": "92px",
          "widthType": "fixed",
          "widthUnit": "px",
          "fontSize": 18
        }
      },
      "displayName": "Select",
      "custom": {},
      "parent": "LSGXdP4OSa",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "QTMa4C_nre": {
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
        "5ogoonYkty",
        "qx9PBnYRsQ"
      ],
      "linkedNodes": {}
    },
    "qx9PBnYRsQ": {
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
      "parent": "QTMa4C_nre",
      "hidden": false,
      "nodes": [
        "lFUqkLFtJy",
        "D7IB0d6C8D",
        "cjLxilWyNc"
      ],
      "linkedNodes": {}
    },
    "D7IB0d6C8D": {
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
      "parent": "qx9PBnYRsQ",
      "hidden": false,
      "nodes": [
        "gbPiJdf-Vq"
      ],
      "linkedNodes": {}
    },
    "lFUqkLFtJy": {
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
      "parent": "qx9PBnYRsQ",
      "hidden": false,
      "nodes": [
        "peSp-3uTog",
        "V1DGQo7ac-",
        "SCTvGGHaYS"
      ],
      "linkedNodes": {}
    },
    "peSp-3uTog": {
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
      "parent": "lFUqkLFtJy",
      "hidden": false,
      "nodes": [
        "9HZz7G_Kv_"
      ],
      "linkedNodes": {}
    },
    "9HZz7G_Kv_": {
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
      "parent": "peSp-3uTog",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "V1DGQo7ac-": {
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
      "parent": "lFUqkLFtJy",
      "hidden": false,
      "nodes": [
        "b8tMuHZ-Lf",
        "50ghFX6HQA"
      ],
      "linkedNodes": {}
    },
    "b8tMuHZ-Lf": {
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
      "parent": "V1DGQo7ac-",
      "hidden": false,
      "nodes": [
        "CiKSEVDmRA"
      ],
      "linkedNodes": {}
    },
    "CiKSEVDmRA": {
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
      "parent": "b8tMuHZ-Lf",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "50ghFX6HQA": {
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
      "parent": "V1DGQo7ac-",
      "hidden": false,
      "nodes": [
        "ocwhLXd7sw"
      ],
      "linkedNodes": {}
    },
    "ocwhLXd7sw": {
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
      "parent": "50ghFX6HQA",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "SCTvGGHaYS": {
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
      "parent": "lFUqkLFtJy",
      "hidden": false,
      "nodes": [
        "Yi9jRXSqfy",
        "ySiS9BPwaM"
      ],
      "linkedNodes": {}
    },
    "Yi9jRXSqfy": {
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
      "parent": "SCTvGGHaYS",
      "hidden": false,
      "nodes": [
        "WjGPzeyslo"
      ],
      "linkedNodes": {}
    },
    "WjGPzeyslo": {
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
      "parent": "Yi9jRXSqfy",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "ySiS9BPwaM": {
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
      "parent": "SCTvGGHaYS",
      "hidden": false,
      "nodes": [
        "8SYTJtgkzw"
      ],
      "linkedNodes": {}
    },
    "gbPiJdf-Vq": {
      "type": {
        "resolvedName": "Image"
      },
      "isCanvas": false,
      "props": {
        "displayName": "Image",
        "src": "/assets/images/pump.png",
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
      "parent": "D7IB0d6C8D",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "kZeF96EQrK": {
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
        events: {
          onClick: {
            action: 'pushData',
            link: {
              component: source.ONOFF_SP.NAME,
              value: '1'
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
      "parent": "qQDa8rgkJT",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "GCjhhrgiv_": {
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
              value: '0'
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
      "parent": "qQDa8rgkJT",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "cjLxilWyNc": {
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
      "parent": "qx9PBnYRsQ",
      "hidden": false,
      "nodes": [
        "hJUQO5pzfI",
        "-AoRotWhz3"
      ],
      "linkedNodes": {}
    },
    "hJUQO5pzfI": {
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
      "parent": "cjLxilWyNc",
      "hidden": false,
      "nodes": [
        "2d2rF127wc"
      ],
      "linkedNodes": {}
    },
    "2d2rF127wc": {
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
      "parent": "hJUQO5pzfI",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "ZzIxFl6PT9": {
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
      "parent": "-AoRotWhz3",
      "hidden": false,
      "nodes": [
        "wdc_diKG1m",
        "2n1GxC7Wie"
      ],
      "linkedNodes": {}
    },
    "wdc_diKG1m": {
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
      "parent": "ZzIxFl6PT9",
      "hidden": false,
      "nodes": [
        "LdVKWj6Ndb"
      ],
      "linkedNodes": {}
    },
    "LdVKWj6Ndb": {
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
      "parent": "wdc_diKG1m",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "2n1GxC7Wie": {
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
      "parent": "ZzIxFl6PT9",
      "hidden": false,
      "nodes": [
        "cin-A2sZlU"
      ],
      "linkedNodes": {}
    },
    "cin-A2sZlU": {
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
          bind: source.P.NAME,
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
      "parent": "2n1GxC7Wie",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "M_LTEiejWr": {
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
      "parent": "-AoRotWhz3",
      "hidden": false,
      "nodes": [
        "lRJPPIEOTo",
        "ertJ7zJjOr"
      ],
      "linkedNodes": {}
    },
    "lRJPPIEOTo": {
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
      "parent": "M_LTEiejWr",
      "hidden": false,
      "nodes": [
        "ZZbXxJcuZk"
      ],
      "linkedNodes": {}
    },
    "ZZbXxJcuZk": {
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
      "parent": "lRJPPIEOTo",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "ertJ7zJjOr": {
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
      "parent": "M_LTEiejWr",
      "hidden": false,
      "nodes": [
        "RqhX22VbJX"
      ],
      "linkedNodes": {}
    },
    "RqhX22VbJX": {
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
      "parent": "ertJ7zJjOr",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "-AoRotWhz3": {
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
          "display": "flex"
        }
      },
      "displayName": "Flex",
      "custom": {},
      "parent": "cjLxilWyNc",
      "hidden": false,
      "nodes": [
        "ZzIxFl6PT9",
        "M_LTEiejWr"
      ],
      "linkedNodes": {}
    },
    "8SYTJtgkzw": {
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
        events: {
          onPressEnter: {
            action: 'pushData',
            link: {
              component: source.FREQ_SP.NAME
            }
          },
          onPush: {
            action: 'pushData',
            link: {
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
          "fontSize": 14,
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
      "parent": "ySiS9BPwaM",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    }
  }
};
