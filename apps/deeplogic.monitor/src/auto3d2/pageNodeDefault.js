import { nanoid } from 'nanoid';
export const rootPointMap = (source) => {
    return {
        [source['COP_PLANT']?.NAME]: 0,
        [source['P_PLANT']?.NAME]: 0,
        [source['P_CH_GROUP']?.NAME]: 0,
        [source['P_CHWP_GROUP']?.NAME]: 0,
        [source['P_CWP_GROUP']?.NAME]: 0,
        [source['P_CT_GROUP']?.NAME]: 0,
        [source.T_CW_R?.NAME]: 0,
        [source.T_CW_S?.NAME]: 0,
        [source.T_CHW_R?.NAME]: 0,
        [source.T_CHW_S?.NAME]: 0,
    }
}
export const rootPointAirMap = (source) => {
    return {
        [source?.['MODE_SYS']?.NAME]: 0,
        [source['COP_PLANT']?.NAME]: 0,
        [source['P_PLANT']?.NAME]: 0,
        [source['P_CH_GROUP']?.NAME]: 0,
        [source['P_CHWP_GROUP']?.NAME]: 0,
        [source['P_CWP_GROUP']?.NAME]: 0,
        [source.P_CT_GROUP?.NAME]: 0,
    }
}
export const statsuMap = [
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
]

export const pageStyle = {
    "position": "relative",
    "width": 984,
    "height": 613,
    "widthType": "fixed",
    "heightType": "fixed",
    "fontFamily": "PingFang SC",
    "fontSize": 14,
    "fontWeight": 400,
    "lineHeight": 1.5,
    "textAlign": "left",
    "spacing": 0,
    "paddingSide": "all",
    "padding": 16,
    "marginSide": "all",
    "margin": 0,
    "background": null,
    "borderRadius": 0,
    "backgroundList": [],
    "widthUnit": "px",
    "heightUnit": "px",
    "minHeight": '100%'
}

export const contentstyle = {
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

export const contentpaddingstyle = {
    ...contentstyle,
    "padding": 8,
    "paddingSide": "all",
}

export const textborderstyle = {
    "borderWidth": 1,
    "borderStyle": "solid",
    "borderColor": "#75FDF4",
    "borderSide": "side",
    "borderTopWidth": 0,
    "borderRightWidth": 0,
    "borderLeftWidth": 2,
    "borderBottomWidth": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingLeft": 8,
    "paddingBottom": 0,
    lineHeight: 1
}

export const titlestyle = {
    "position": "relative",
    "width": "100%",
    // "height": 30,
    "heightType": "fit-content",
    "widthType": "relative",
    "fontFamily": "PingFang SC",
    "fontSize": 14,
    "fontWeight": 400,
    "lineHeight": "30px",
    padding: "4px 0",
    background: 'rgba(0, 0, 0, 0.1)',
    color: '#fff'
}

export const contentflexstyle = {
    "translateX": 0,
    "translateY": 0,
    "background": null,
    "backgroundList": [],
    "display": "flex",
    "flexDirection": "row"
}

export const colstyle = {
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
    "translateX": 0,
    "translateY": 0,
    "background": null,
    "backgroundList": [],
    "heightUnit": "px",
    "display": "",
    "flexDirection": "",
    "flexWrap": "",
    "key": "topLeft",
    "justifyContent": "",
    "alignItems": "",
    "alignContent": "",
    "gap": "",
    "rowGap": "",
    "columnGap": "",
    "justifyItems": ""
}

export const colnoflex = {
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
    "translateX": 0,
    "translateY": 0,
    "background": null,
    "backgroundList": [],
    "heightUnit": "px"
}
export const colGrid = {
    ...contentstyle,
    "display": "grid",
    "flexDirection": "column",
    "rowGap": 0,
    "columnGap": 0
}
export const colrowstyle = {
    "position": "relative",
    "width": "100%",
    "height": "40px",
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
    "translateX": 0,
    "translateY": 0,
    "background": null,
    "backgroundList": [],
    "display": "flex",
    "flexDirection": "row",
    "key": "centerCenter",
    "justifyContent": "center",
    "alignItems": "center"
}

export const btnstyle = {
    "position": "relative",
    "width": "auto",
    "height": "32",
    "widthType": "relative",
    "heightType": "fit-content",
    "fontFamily": "PingFang SC",
    "fontSize": 18,
    "fontWeight": 400,
    "lineHeight": 1.5,
    "textAlign": "center",
    "spacing": 0,
    "paddingSide": "side",
    "padding": 4,
    "marginSide": "side",
    "margin": 0,
    "paddingTop": 4,
    "paddingRight": 15,
    "paddingBottom": 4,
    "paddingLeft": 15,
    "background": null,
    "backgroundList": [],
    "marginTop": 20,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0
}

export const txtstyle = {
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
    "translateX": 0,
    "translateY": 0
}

export const navigationButtonStyle = {
    "position": "relative",
    "width": "auto",
    "height": "auto",
    "widthType": "fit-content",
    "heightType": "fit-content",
    "fontFamily": "Microsoft YaHei",
    "fontSize": 20,
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
    "paddingLeft": 15,
    'z-index': 10,
}

export const inpProps = {
    "type": {
        "resolvedName": "Input"
    },
    "displayName": "Input",
    "props": {
        "placeholder": "",
        "disabled": false,
        "allowClear": false,
        "bordered": true,
        "maxLength": 0,
        "showCount": false,
        "size": "middle",
        "displayName": "Input",
        "style": {
            "translateX": 0,
            "translateY": 0
        }
    },
    "custom": {},
}
/**
 * 上限，下限，是否开启，设定值
 * @returns 
 */
export const drawmap = (source) => {
    return [{
        name: '冷冻水供水温度(℃)',
        point1: source?.['T_CHW_S_MAX']?.NAME || 'T_CHW_S_MAX',
        point2: source?.['T_CHW_S_MIN']?.NAME || 'T_CHW_S_MIN',
        point3: source?.['T_CHW_S_OPT_EB']?.NAME || 'T_CHW_S_OPT_EB',
        point4: source?.['T_CHW_S_SP']?.NAME || 'T_CHW_S_SP',
        val: source?.['T_CHW_S']?.NAME || 'T_CHW_S'
    }, {
        name: '冷冻泵频率(Hz)',
        point1: source?.['FREQ_CHWP_MAX']?.NAME || 'FREQ_CHWP_MAX',
        point2: source?.['FREQ_CHWP_MIN']?.NAME || 'FREQ_CHWP_MIN',
        point3: source?.['FREQ_CHWP_OPT_EB']?.NAME || 'FREQ_CHWP_OPT_EB',
        point4: source?.['FREQ_CHWP_SP']?.NAME || 'FREQ_CHWP_SP',
        val: source?.['FREQ_CHWP']?.NAME || 'FREQ_CHWP'
    }, {
        name: '冷却泵频率(Hz)',
        point1: source?.['FREQ_CWP_MAX']?.NAME || 'FREQ_CWP_MAX',
        point2: source?.['FREQ_CWP_MIN']?.NAME || 'FREQ_CWP_MIN',
        point3: source?.['FREQ_CWP_OPT_EB']?.NAME || 'FREQ_CWP_OPT_EB',
        point4: source?.['FREQ_CWP_SP']?.NAME || 'FREQ_CWP_SP',
        val: source?.['FREQ_CWP']?.NAME || 'FREQ_CWP'
    }, {
        name: '冷却塔频率(Hz)',
        point1: source?.['FREQ_CT_MAX']?.NAME || 'FREQ_CT_MAX',
        point2: source?.['FREQ_CT_MIN']?.NAME || 'FREQ_CT_MIN',
        point3: source?.['FREQ_CT_OPT_EB']?.NAME || 'FREQ_CT_OPT_EB',
        point4: source?.['FREQ_CT_SP']?.NAME || 'FREQ_CT_SP',
        val: source?.['FREQ_CT']?.NAME || 'FREQ_CT'
    }, {
        name: '冷却水回水温度(℃)',
        point1: source?.['T_CW_R_MAX']?.NAME || 'T_CW_R_MAX',
        point2: source?.['T_CW_R_MIN']?.NAME || 'T_CW_R_MIN',
        point3: source?.['T_CW_R_OPT_EB']?.NAME || 'T_CW_R_OPT_EB',
        point4: source?.['T_CW_R_SP']?.NAME || 'T_CW_R_SP',
        val: source?.['T_CW_R']?.NAME || 'T_CW_R'
    }, {
        name: '末端压差(kPa)',
        point1: source?.['DPR_CHW_MAX']?.NAME || 'DPR_CHW_MAX',
        point2: source?.['DPR_CHW_MIN']?.NAME || 'DPR_CHW_MIN',
        point3: source?.['DPR_CHW_OPT_EB']?.NAME || 'DPR_CHW_OPT_EB',
        point4: source?.['DPR_CHW_SP']?.NAME || 'DPR_CHW_SP',
        val: source?.['DPR_CHW']?.NAME || 'DPR_CHW'
    }, {
        name: '冷冻水温差(℃)',
        point1: source?.['DT_CHW_MAX']?.NAME || 'DT_CHW_MAX',
        point2: source?.['DT_CHW_MIN']?.NAME || 'DT_CHW_MIN',
        point3: source?.['DT_CHW_OPT_EB']?.NAME || 'DT_CHW_OPT_EB',
        point4: source?.['DT_CHW_SP']?.NAME || 'DT_CHW_SP',
        val: source?.['DT_CHW']?.NAME || 'DT_CHW'
    }];

}

// 空压
export const arimap = (source) => {
    return [
        [ // 控制
            {
                name: '空压机排气压力(Mpa)',
                point4: source?.['PR_DISCHARGE_SP']?.NAME || 'PR_DISCHARGE_SP',
                val: source?.['PR_DISCHARGE']?.NAME || 'PR_DISCHARGE'
            }, {
                name: '空压机加载压力(Mpa)',
                point4: source?.['PR_LOAD_SP']?.NAME || 'PR_LOAD_SP',
                val: source?.['PR_LOAD']?.NAME || 'PR_LOAD'
            }, {
                name: '空压机卸载压力(Mpa)',
                point4: source?.['PR_UNLOAD_SP']?.NAME || 'PR_UNLOAD_SP',
                val: source?.['PR_UNLOAD']?.NAME || 'PR_UNLOAD'
            }, {
                name: '空压机排气温度(℃)',
                point4: source?.['T_DISCHARGE_SP']?.NAME || 'T_DISCHARGE_SP',
                val: source?.['T_DISCHARGE']?.NAME || 'T_DISCHARGE'
            }, {
                name: '反吹触发压差(kPa)',
                point4: source?.['DPR_BACKFLUSH_SP']?.NAME || 'DPR_BACKFLUSH_SP',
                val: source?.['DPR_BACKFLUSH']?.NAME || 'DPR_BACKFLUSH'
            }, {
                name: '后处理温度(℃)',
                point4: source?.['T_POST_TX_SP']?.NAME || 'T_POST_TX_SP',
                val: source?.['T_POST_TX']?.NAME || 'T_POST_TX'
            }, {
                name: '最不利末端压差(kPa)',
                point4: source?.['DPR_TERMINAL_SP']?.NAME || 'DPR_TERMINAL_SP',
                val: source?.['DPR_TERMINAL']?.NAME || 'DPR_TERMINAL'
            }, {
                name: '冷却水回水温度(℃)',
                point4: source?.['T_CW_R_SP']?.NAME || 'T_CW_R_SP',
                val: source?.['T_CW_R']?.NAME || 'T_CW_R'
            }
        ], [ // 开关
            {
                name: '加载压力',
                point3: source?.['PR_LOAD_OPT_EB']?.NAME || 'PR_LOAD_OPT_EB'
            }, {
                name: '卸载压力',
                point3: source?.['PR_UNLOAD_OPT_EB']?.NAME || 'PR_UNLOAD_OPT_EB'
            }, {
                name: '目标压力',
                point3: source?.['PR_DISCHARGE_OPT_EB']?.NAME || 'PR_DISCHARGE_OPT_EB'
            }, {
                name: '冷却水回水温度',
                point3: source?.['T_CW_R_OPT_EB']?.NAME || 'T_CW_R_OPT_EB'
            }, {
                name: '空压机频率',
                point3: source?.['FREQ_ACOP_OPT_EB']?.NAME || 'FREQ_ACOP_OPT_EB'
            }, {
                name: '吸干机频率',
                point3: source?.['FREQ_DRYER_OPT_EB']?.NAME || 'FREQ_DRYER_OPT_EB'
            }, {
                name: '冷却泵频率',
                point3: source?.['FREQ_CWP_OPT_EB']?.NAME || 'FREQ_CWP_OPT_EB'
            }, {
                name: '冷却塔频率',
                point3: source?.['FREQ_CT_OPT_EB']?.NAME || 'FREQ_CT_OPT_EB'
            }
        ], [ // 设置
            {
                name: '空压机频率(Hz)',
                point2: source?.['FREQ_ACOP_MIN']?.NAME || 'FREQ_ACOP_MIN',
                point1: source?.['FREQ_ACOP_MAX']?.NAME || 'FREQ_ACOP_MAX'
            }, {
                name: '吸干机频率(Hz)',
                point2: source?.['FREQ_DRYER_MIN']?.NAME || 'FREQ_DRYER_MIN',
                point1: source?.['FREQ_DRYER_MAX']?.NAME || 'FREQ_DRYER_MAX'
            }, {
                name: '冷却泵频率(Hz)',
                point2: source?.['FREQ_CWP_MIN']?.NAME || 'FREQ_CWP_MIN',
                point1: source?.['FREQ_CWP_MAX']?.NAME || 'FREQ_CWP_MAX'
            }, {
                name: '冷却塔频率(Hz)',
                point2: source?.['FREQ_CT_MIN']?.NAME || 'FREQ_CT_MIN',
                point1: source?.['FREQ_CT_MAX']?.NAME || 'FREQ_CT_MAX'
            }, {
                name: '冷却水回水温度(℃)',
                point2: source?.['T_CW_R_MIN']?.NAME || 'T_CW_R_MIN',
                point1: source?.['T_CW_R_MAX']?.NAME || 'T_CW_R_MAX'
            }, {
                name: '末端压差(kPa)',
                point2: source?.['DPR_TERMINAL_MIN']?.NAME || 'DPR_TERMINAL_MIN',
                point1: source?.['DPR_TERMINAL_MAX']?.NAME || 'DPR_TERMINAL_MAX'
            }, {
                name: '冷冻水温差(℃)',
                point2: source?.['DT_CHW_MIN']?.NAME || 'DT_CHW_MIN',
                point1: source?.['DT_CHW_MAX']?.NAME || 'DT_CHW_MAX'
            }
        ]
    ]
    
}

export const drawpointmap = (source) => {
    const obj = {};
    drawmap(source).forEach(t => {
        for (const t0 in t) {
            if (t0 !== 'name') {
                obj[t[t0]] = 0;
            }
        }
    })
    return obj;
}

export const drwaitemair = (source) => {
    const obj = {};
    arimap(source).forEach(t => {
        t.forEach(t0 => {
            for (const tobj in t0) {
                if (tobj !== 'name') {
                    obj[t0[tobj]] = 0;
                }
            }
        })
    })
}

export const drawthree = (parentid, drawitem, source) => {
    const idbox = nanoid(10);
    const clbox1 = nanoid(10);
    const clcol1 = nanoid(10);
    const clbox2 = nanoid(10);
    const clcol2 = nanoid(10);
    const clbox3 = nanoid(10);
    const clcol3 = nanoid(10);
    return {
        id: idbox,
        page: {
            [idbox]: {
                "id": idbox,
                "type": {
                    "resolvedName": "Container"
                },
                "displayName": "Container",
                "props": {
                    "style": { ...contentstyle, ...contentflexstyle, },
                    "displayName": "Container"
                },
                "custom": {},
                "parent": parentid,
                "nodes": [
                    clbox1,
                    clbox2,
                    clbox3
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [clbox1]: {
                "id": clbox1,
                "type": {
                    "resolvedName": "Col"
                },
                "displayName": "Col",
                "props": {
                    "span": 14,
                    "style": colrowstyle,
                    "displayName": "Col"
                },
                "custom": {},
                "parent": parentid,
                "nodes": [
                    clcol1
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [clbox2]: {
                "id": clbox2,
                "type": {
                    "resolvedName": "Col"
                },
                "displayName": "Col",
                "props": {
                    "span": 5,
                    "style": colrowstyle,
                    "displayName": "Col"
                },
                "custom": {},
                "parent": idbox,
                "nodes": [
                    clcol2
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [clbox3]: {
                "id": clbox3,
                "type": {
                    "resolvedName": "Col"
                },
                "displayName": "Col",
                "props": {
                    "span": 5,
                    "style": colrowstyle,
                    "displayName": "Col"
                },
                "custom": {},
                "parent": idbox,
                "nodes": [
                    clcol3
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [clcol1]: {
                "id": clcol1,
                "type": {
                    "resolvedName": "TypographyText"
                },
                "displayName": "TypographyText",
                "props": {
                    "displayName": "Typography.Text",
                    "value": drawitem.name,
                    "style": txtstyle
                },
                "custom": {},
                "parent": clbox1,
                "nodes": [],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": false
            },
            [clcol2]: {
                "type": {
                    "resolvedName": "InputKb"
                },
                "isCanvas": false,
                "props": {
                    "value": source?.[drawitem.point2]?.NAME ? {
                        "bind": source?.[drawitem.point2]?.NAME || '',
                        "type": "points",
                        "point": [
                            source?.[drawitem.point2]?.NAME
                        ]
                    } : '',
                    "displayName": "InputKb",
                    "size": "middle",
                    "type": "number",
                    "placeholder": "",
                    "disabled": false,
                    "allowClear": false,
                    "bordered": true,
                    "showCount": false,
                    "isPush": true,
                    "isNumber": true,
                    "events": {
                        "onPressEnter": {
                            "action": "pushData",
                            "link": {
                                "component": source?.[drawitem.point2]?.NAME || ''
                            }
                        },
                        "onPush": {
                            "action": "pushData",
                            "link": {
                                "component": source?.[drawitem.point2]?.NAME || ''
                            }
                        }
                    },
                },
                "parent": clbox2,
                "nodes": [],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": false
            },
            [clcol3]: {
                "type": {
                    "resolvedName": "InputKb"
                },
                "isCanvas": false,
                "props": {
                    "value": source?.[drawitem.point1]?.NAME ? {
                        "bind": source?.[drawitem.point1]?.NAME || '',
                        "type": "points",
                        "point": [
                            source?.[drawitem.point1]?.NAME
                        ]
                    } : '',
                    "displayName": "InputKb",
                    "size": "middle",
                    "type": "number",
                    "placeholder": "",
                    "disabled": false,
                    "allowClear": false,
                    "bordered": true,
                    "showCount": false,
                    "isPush": true,
                    "isNumber": true,
                    "events": {
                        "onPressEnter": {
                            "action": "pushData",
                            "link": {
                                "component": source?.[drawitem.point1]?.NAME || ''
                            }
                        },
                        "onPush": {
                            "action": "pushData",
                            "link": {
                                "component": source?.[drawitem.point1]?.NAME || ''
                            }
                        }
                    },
                },
                "parent": clbox3,
                "nodes": [],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": false
            },
        }

    }
}

export const drawtwo = (parentid, drawitem, source) => {
    const idbox = nanoid(10);
    const box1 = nanoid(10);
    const boxclo1 = nanoid(10);
    const box2 = nanoid(10);
    const boxclo2 = nanoid(10);
    return {
        id: idbox,
        page: {
            [idbox]: {
                "id": idbox,
                "type": {
                    "resolvedName": "Container"
                },
                "displayName": "Container",
                "props": {
                    "style": {
                        ...contentstyle,
                        ...contentflexstyle
                    },
                    "displayName": "Container"
                },
                "custom": {},
                "parent": parentid,
                "nodes": [
                    box1,
                    box2
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [box1]: {
                "id": box1,
                "type": {
                    "resolvedName": "Col"
                },
                "displayName": "Col",
                "props": {
                    "span": 18,
                    "style": {
                        ...txtstyle,
                        "padding": 8,
                    },
                    "displayName": "Col"
                },
                "custom": {},
                "parent": idbox,
                "nodes": [
                    boxclo1
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [box2]: {
                "id": box2,
                "type": {
                    "resolvedName": "Col"
                },
                "displayName": "Col",
                "props": {
                    "span": 6,
                    "style": colrowstyle,
                    "displayName": "Col"
                },
                "custom": {},
                "parent": idbox,
                "nodes": [
                    boxclo2
                ],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": true
            },
            [boxclo1]: {
                "id": boxclo1,
                "type": {
                    "resolvedName": "TypographyText"
                },
                "displayName": "TypographyText",
                "props": {
                    "displayName": "Typography.Text",
                    "value": drawitem.name,
                    "style": txtstyle
                },
                "custom": {},
                "parent": box1,
                "nodes": [],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": false
            },
            [boxclo2]: {
                "type": {
                    "resolvedName": "Checkbox"
                },
                "displayName": "Checkbox",
                "props": {
                    "value": {
                        "bind": source[drawitem.point3]?.NAME || '0',
                        "type": "points",
                        "point": [
                            source[drawitem.point3]?.NAME
                        ]
                    },
                    "label": "开启",
                    "options": [],
                    "events": {
                        "onChange": {
                            "action": "pushData",
                            "link": {
                                "component": source[drawitem.point3]?.NAME
                            }
                        }
                    },
                    "displayName": "Checkbox",
                    "style": {
                        "translateX": 0,
                        "translateY": 0
                    },
                },
                "custom": {},
                "parent": box2,
                "nodes": [],
                "linkedNodes": {},
                "hidden": false,
                "isCanvas": false
            },
        }
    }
}

// 优化控制-控制参数
export const drwacontrol = (parentid, drawitem, source) => {
    const idbox = nanoid(10);
    const box1 = nanoid(10);
    const boxcol1 = nanoid(10);
    const box2 = nanoid(10);
    const boxcol2 = nanoid(10);
    const box3 = nanoid(10);
    const boxcol3 = nanoid(10);
    console.log('source[drawitem.val]?.NAMEsource[drawitem.val]?.NAME', source[drawitem.val]?.NAME)
    return {
        id: idbox,
        page: {
            [idbox]: {
                "type": {
                    "resolvedName": "Columns"
                },
                "isCanvas": true,
                "props": {
                    "displayName": "Columns",
                    "columns": 3,
                    "align": "middle",
                    "gutter": 12,
                    "justify": "center",
                    "wrap": false,
                    "style": {
                        "position": "relative",
                        "width": "100%",
                        // "height": "50px",
                        "heightUnit": "px",
                        "widthType": "relative",
                        "heightType": "fixed",
                        "fontFamily": "PingFang SC",
                        "fontSize": 14,
                        "fontWeight": 400,
                        "lineHeight": 1.5,
                        "textAlign": "left",
                        "spacing": 0,
                        "paddingSide": "all",
                        // "padding": 8,
                        "marginSide": "all",
                        "margin": 0
                    }
                },
                "displayName": "Columns",
                "custom": {},
                "parent": parentid,
                "hidden": false,
                "nodes": [
                    box1,
                    box2,
                    box3
                ],
                "linkedNodes": {}
            },
            [box1]: {
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
                        "margin": 0
                    },
                    "id": "col-0"
                },
                "displayName": "Col",
                "custom": {},
                "parent": idbox,
                "hidden": false,
                "nodes": [
                    boxcol1
                ],
                "linkedNodes": {}
            },
            [box2]: {
                "type": {
                    "resolvedName": "Col"
                },
                "isCanvas": true,
                "props": {
                    "type": "span",
                    "span": 6,
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
                        "margin": 0
                    },
                    "id": "col-1"
                },
                "displayName": "Col",
                "custom": {},
                "parent": idbox,
                "hidden": false,
                "nodes": [
                    boxcol2
                ],
                "linkedNodes": {}
            },
            [box3]: {
                "type": {
                    "resolvedName": "Col"
                },
                "isCanvas": true,
                "props": {
                    "type": "span",
                    "span": 6,
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
                        "margin": 0
                    },
                    "id": "col-2"
                },
                "displayName": "Col",
                "custom": {},
                "parent": idbox,
                "hidden": false,
                "nodes": [
                    boxcol3
                ],
                "linkedNodes": {}
            },
            [boxcol1]: {
                "type": {
                    "resolvedName": "TypographyText"
                },
                "isCanvas": false,
                "props": {
                    "displayName": "Typography.Text",
                    "value": drawitem.name,
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
                "parent": box1,
                "hidden": false,
                "nodes": [],
                "linkedNodes": {}
            },
            [boxcol2]: {
                "type": {
                    "resolvedName": "InputKb"
                },
                "isCanvas": false,
                "props": {
                    "value": source[drawitem.point4]?.NAME ? {
                        "bind": source[drawitem.point4]?.NAME || '',
                        "type": "points",
                        "point": [
                            source[drawitem.point4]?.NAME
                        ]
                    } : '',
                    "displayName": "InputKb",
                    "size": "middle",
                    "type": "number",
                    "placeholder": "",
                    "isNumber": true,
                    "disabled": false,
                    "variant": "outlined",
                    "allowClear": false,
                    "bordered": true,
                    "showCount": false,
                    "isPush": true,
                    "events": {
                        "onPressEnter": {
                            "action": "pushData",
                            "link": {
                                "component": source[drawitem.point4]?.NAME || ''
                            }
                        },
                        "onPush": {
                            "action": "pushData",
                            "link": {
                                "component": source[drawitem.point4]?.NAME || ''
                            }
                        }
                    },
                    "style": {
                        "width": "62px",
                    }
                },
                "displayName": "InputKb",
                "custom": {},
                "parent": box2,
                "hidden": false,
                "nodes": [],
                "linkedNodes": {}
            },
            [boxcol3]: {
                "type": {
                    "resolvedName": "StateText"
                },
                "isCanvas": false,
                "props": {
                    "displayName": "StateText",
                    "value": source[drawitem.val]?.NAME ? {
                        "bind": source[drawitem.val]?.NAME,
                        "type": "points",
                        "point": [
                            source[drawitem.val]?.NAME
                        ]
                    } : 0,
                    "level": "5",
                    "size": "14px",
                    "decimalSeparator": 1,
                    "percent": false,
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
                        "value": "kW",
                        "type": "secondary"
                    }
                },
                "displayName": "StateText",
                "custom": {},
                "parent": box3,
                "hidden": false,
                "nodes": [],
                "linkedNodes": {}
            },
        }
    }
}