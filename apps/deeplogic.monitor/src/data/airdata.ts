

// 
// 空压机    acop
// 离心空压机 acop_cert
// 螺旋空压机 acop_screw
// 吸干机    des_dryer
// 气罐      tank
// 过滤器    filter
// 仪表      meter

export const re: any = {
  T_OUTDOOR: {
    NAME: "T_OUTDOOR",
  },
  RH_OUTDOOR: {
    NAME: "RH_OUTDOOR",
  },
  TW_OUTDOOR: {
    NAME: "TW_OUTDOOR",
  },
  H_OUTDOOR: {
    NAME: "H_OUTDOOR",
  },
  TD_OUTDOOR: {
    NAME: "TD_OUTDOOR",
  },
  CO2_OUTDOOR: {
    NAME: "CO2_OUTDOOR",
  },
  DPX_ONLINE: {
    NAME: "DPX_ONLINE",
  },
  HVAC_PLANTS: {},
  CAS_PLANTS: {
    GV8hE_SgzeEY3iDfupEq19: {
      MODE_SYS: {
        NAME: "MODE_SYS",
      },
      ONECLICK_START: {
        NAME: "ONECLICK_START",
      },
      ONECLICK_STOP: {
        NAME: "ONECLICK_STOP",
      },
      ONECLICK_CANCEL: {
        NAME: "ONECLICK_CANCEL",
      },
      PR_PLANT: {
        NAME: "PR_PLANT",
      },
      PR_TERMINAL: {
        NAME: "PR_TERMINAL",
      },
      T_DISCHARGE: {
        NAME: "T_DISCHARGE",
      },
      T_DISCHARGE_SP: {
        NAME: "T_DISCHARGE_SP",
      },
      R_AIR_COMP: {
        NAME: "R_AIR_COMP",
      },
      P_SPECIFIC: {
        NAME: "P_SPECIFIC",
      },
      FLOW_PLANT_AIR: {
        NAME: "FLOW_PLANT_AIR",
      },
      FLOW_TERMINAL_AIR: {
        NAME: "FLOW_TERMINAL_AIR",
      },
      PR_PLANT_MAX: {
        NAME: "PR_PLANT_MAX",
      },
      PR_PLANT_MIN: {
        NAME: "PR_PLANT_MIN",
      },
      DPR: {
        NAME: "DPR",
      },
      DPR_TERMINAL_SP: {
        NAME: "DPR_TERMINAL_SP",
      },
      DPR_TERMINAL_MAX: {
        NAME: "DPR_TERMINAL_MAX",
      },
      DPR_TERMINAL_MIN: {
        NAME: "DPR_TERMINAL_MIN",
      },
      DPR_BACKFLUSH: {
        NAME: "DPR_BACKFLUSH",
      },
      DPR_BACKFLUSH_SP: {
        NAME: "DPR_BACKFLUSH_SP",
      },
      T_POST_TX: {
        NAME: "T_POST_TX",
      },
      T_POST_TX_SP: {
        NAME: "T_POST_TX_SP",
      },
      PR_LOAD: {
        NAME: "PR_LOAD",
      },
      PR_LOAD_SP: {
        NAME: "PR_LOAD_SP",
      },
      PR_LOAD_MAX: {
        NAME: "PR_LOAD_MAX",
      },
      PR_LOAD_MIN: {
        NAME: "PR_LOAD_MIN",
      },
      PR_UNLOAD: {
        NAME: "PR_UNLOAD",
      },
      PR_UNLOAD_SP: {
        NAME: "PR_UNLOAD_SP",
      },
      PR_UNLOAD_MAX: {
        NAME: "PR_UNLOAD_MAX",
      },
      PR_UNLOAD_MIN: {
        NAME: "PR_UNLOAD_MIN",
      },
      PR_DISCHARGE: {
        NAME: "PR_DISCHARGE",
      },
      PR_DISCHARGE_SP: {
        NAME: "PR_DISCHARGE_SP",
      },
      PR_DISCHARGE_MAX: {
        NAME: "PR_DISCHARGE_MAX",
      },
      PR_DISCHARGE_MIN: {
        NAME: "PR_DISCHARGE_MIN",
      },
      T_DEW: {
        NAME: "T_DEW",
      },
      T_DEW_SP: {
        NAME: "T_DEW_SP",
      },
      T_DEW_MAX: {
        NAME: "T_DEW_MAX",
      },
      T_DEW_MIN: {
        NAME: "T_DEW_MIN",
      },
      T_CW_R: {
        NAME: "T_CW_R",
      },
      T_CW_R_SP: {
        NAME: "T_CW_R_SP",
      },
      T_CW_R_MAX: {
        NAME: "T_CW_R_MAX",
      },
      T_CW_R_MIN: {
        NAME: "T_CW_R_MIN",
      },
      FREQ_ACOP: {
        NAME: "FREQ_ACOP",
      },
      FREQ_ACOP_SP: {
        NAME: "FREQ_ACOP_SP",
      },
      FREQ_ACOP_MAX: {
        NAME: "FREQ_ACOP_MAX",
      },
      FREQ_ACOP_MIN: {
        NAME: "FREQ_ACOP_MIN",
      },
      FREQ_DRYER: {
        NAME: "FREQ_DRYER",
      },
      FREQ_DRYER_SP: {
        NAME: "FREQ_DRYER_SP",
      },
      FREQ_DRYER_MAX: {
        NAME: "FREQ_DRYER_MAX",
      },
      FREQ_DRYER_MIN: {
        NAME: "FREQ_DRYER_MIN",
      },
      FREQ_CWP: {
        NAME: "FREQ_CWP",
      },
      FREQ_PUMP_SP: {
        NAME: "FREQ_PUMP_SP",
      },
      FREQ_PUMP_MAX: {
        NAME: "FREQ_PUMP_MAX",
      },
      FREQ_PUMP_MIN: {
        NAME: "FREQ_PUMP_MIN",
      },
      FREQ_CT: {
        NAME: "FREQ_CT",
      },
      FREQ_CT_SP: {
        NAME: "FREQ_CT_SP",
      },
      FREQ_CT_MAX: {
        NAME: "FREQ_CT_MAX",
      },
      FREQ_CT_MIN: {
        NAME: "FREQ_CT_MIN",
      },
      TW_MAX: {
        NAME: "TW_MAX",
      },
      TW_MIN: {
        NAME: "TW_MIN",
      },
      T_INDOOR: {
        NAME: "T_INDOOR",
      },
      RH_INDOOR: {
        NAME: "RH_INDOOR",
      },
      TW_INDOOR: {
        NAME: "TW_INDOOR",
      },
      H_INDOOR: {
        NAME: "H_INDOOR",
      },
      TD_INDOOR: {
        NAME: "TD_INDOOR",
      },
      CO2_INDOOR: {
        NAME: "CO2_INDOOR",
      },
      ADDSUB_ACOP_EB: {
        NAME: "ADDSUB_ACOP_EB",
      },
      PR_LOAD_OPT_EB: {
        NAME: "PR_LOAD_OPT_EB",
      },
      PR_UNLOAD_OPT_EB: {
        NAME: "PR_UNLOAD_OPT_EB",
      },
      PR_DISCHARGE_OPT_EB: {
        NAME: "PR_DISCHARGE_OPT_EB",
      },
      T_CW_R_OPT_EB: {
        NAME: "T_CW_R_OPT_EB",
      },
      FREQ_ACOP_OPT_EB: {
        NAME: "FREQ_ACOP_OPT_EB",
      },
      FREQ_DRYER_OPT_EB: {
        NAME: "FREQ_DRYER_OPT_EB",
      },
      FREQ_CWP_OPT_EB: {
        NAME: "FREQ_CWP_OPT_EB",
      },
      FREQ_CT_OPT_EB: {
        NAME: "FREQ_CT_OPT_EB",
      },
      HINT: {
        NAME: "HINT",
      },
      P_CAS: {
        NAME: "P_CAS",
      },
      P_PLANT: {
        NAME: "P_PLANT",
      },
      P_ACOP_GROUP: {
        NAME: "P_ACOP_GROUP",
      },
      P_DRYER_GROUP: {
        NAME: "P_DRYER_GROUP",
      },
      P_CWP_GROUP: {
        NAME: "P_CWP_GROUP",
      },
      P_CT_GROUP: {
        NAME: "P_CT_GROUP",
      },
      P_TERMINAL_GROUP: {
        NAME: "P_TERMINAL_GROUP",
      },
      AIR_DISCHARGE_GROUP: {
        NAME: "AIR_DISCHARGE_GROUP",
      },
      AIR_USED_GROUP: {
        NAME: "AIR_USED_GROUP",
      },
      AIR_DU_RATIO: {
        NAME: "AIR_DU_RATIO",
      },
      ELEC_CAS: {
        NAME: "ELEC_CAS",
      },
      ELEC_PLANT: {
        NAME: "ELEC_PLANT",
      },
      ELEC_ACOP_GROUP: {
        NAME: "ELEC_ACOP_GROUP",
      },
      ELEC_DRYER_GROUP: {
        NAME: "ELEC_DRYER_GROUP",
      },
      ELEC_ACWP_GROUP: {
        NAME: "ELEC_ACWP_GROUP",
      },
      ELEC_ACT_GROUP: {
        NAME: "ELEC_ACT_GROUP",
      },
      ELEC_TERMINAL_GROUP: {
        NAME: "ELEC_TERMINAL_GROUP",
      },
      ACOPS: {
        KpdXsavFmUDYpGuGkuNtGq: {
          ONOFF_SP: {
            NAME: "ACOP1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "ACOP1#ONOFF",
          },
          ON: {
            NAME: "ACOP1#ON",
          },
          OFF: {
            NAME: "ACOP1#OFF",
          },
          ON_SP: {
            NAME: "ACOP1#ON_SP",
          },
          OFF_SP: {
            NAME: "ACOP1#OFF_SP",
          },
          AM: {
            NAME: "ACOP1#AM",
          },
          EB: {
            NAME: "ACOP1#EB",
          },
          FAULT: {
            NAME: "ACOP1#FAULT",
          },
          FAULT_CODE: {
            NAME: "ACOP1#FAULT_CODE",
          },
          CONTROL_MODE: {
            NAME: "ACOP1#CONTROL_MODE",
          },
          PR_LOAD: {
            NAME: "ACOP1#PR_LOAD",
          },
          PR_LOAD_SP: {
            NAME: "ACOP1#PR_LOAD_SP",
          },
          PR_UNLOAD: {
            NAME: "ACOP1#PR_UNLOAD",
          },
          PR_UNLOAD_SP: {
            NAME: "ACOP1#PR_UNLOAD_SP",
          },
          PR_DISCHARGE: {
            NAME: "ACOP1#PR_DISCHARGE",
          },
          PR_DISCHARGE_SP: {
            NAME: "ACOP1#PR_DISCHARGE_SP",
          },
          PR: {
            NAME: "ACOP1#PR",
          },
          PR_OIL: {
            NAME: "ACOP1#PR_OIL",
          },
          T_DISCHARGE: {
            NAME: "ACOP1#T_DISCHARGE",
          },
          T_SUCTION: {
            NAME: "ACOP1#T_SUCTION",
          },
          T_OIL: {
            NAME: "ACOP1#T_OIL",
          },
          T_OIL_ENT: {
            NAME: "ACOP1#T_OIL_ENT",
          },
          T_OIL_LEV: {
            NAME: "ACOP1#T_OIL_LEV",
          },
          FLOW_AIR_DIS: {
            NAME: "ACOP1#FLOW_AIR_DIS",
          },
          FLOW_AIR_DIS_RATED: {
            NAME: "ACOP1#FLOW_AIR_DIS_RATED",
          },
          P_SPECIFIC: {
            NAME: "ACOP1#P_SPECIFIC",
          },
          DPR_OIL: {
            NAME: "ACOP1#DPR_OIL",
          },
          DPR_BACKFLUSH: {
            NAME: "ACOP1#DPR_BACKFLUSH",
          },
          DPR_BACKFLUSH_SP: {
            NAME: "ACOP1#DPR_BACKFLUSH_SP",
          },
          POS_IGV: {
            NAME: "ACOP1#POS_IGV",
          },
          POS_IGV_SP: {
            NAME: "ACOP1#POS_IGV_SP",
          },
          POS_BOV: {
            NAME: "ACOP1#POS_BOV",
          },
          POS_BOV_SP: {
            NAME: "ACOP1#POS_BOV_SP",
          },
          FREQ: {
            NAME: "ACOP1#FREQ",
          },
          FREQ_SP: {
            NAME: "ACOP1#FREQ_SP",
          },
          IS_FREQ: {
            NAME: "ACOP1#IS_FREQ",
          },
          HRS_TOTAL: {
            NAME: "ACOP1#HRS_TOTAL",
          },
          HRS: {
            NAME: "ACOP1#HRS",
          },
          HRS_LOAD: {
            NAME: "ACOP1#HRS_LOAD",
          },
          HRS_TOTAL_LOAD: {
            NAME: "ACOP1#HRS_TOTAL_LOAD",
          },
          HRS_OIL_FILTER: {
            NAME: "ACOP1#HRS_OIL_FILTER",
          },
          HRS_OIL_SEPAR: {
            NAME: "ACOP1#HRS_OIL_SEPAR",
          },
          HRS_AIR_FILTER: {
            NAME: "ACOP1#HRS_AIR_FILTER",
          },
          HRS_LUB_OIL: {
            NAME: "ACOP1#HRS_LUB_OIL",
          },
          HRS_LUB_GREASE: {
            NAME: "ACOP1#HRS_LUB_GREASE",
          },
          P: {
            NAME: "ACOP1#P",
          },
          W: {
            NAME: "ACOP1#W",
          },
          I: {
            NAME: "ACOP1#I",
          },
          I_PCT: {
            NAME: "ACOP1#I_PCT",
          },
          PLR: {
            NAME: "ACOP1#PLR",
          },
          ELEC: {
            NAME: "ACOP1#ELEC",
          },
          FREQ_RATED: {
            NAME: "ACOP1#FREQ_RATED",
          },
          P_RATED: {
            NAME: "ACOP1#P_RATED",
          },
          ONOFF_FAN: {
            NAME: "ACOP1#ONOFF_FAN",
          },
          ONOFF_SP_FAN: {
            NAME: "ACOP1#ONOFF_SP_FAN",
          },
          FREQ_FAN: {
            NAME: "ACOP1#FREQ_FAN",
          },
          FREQ_SP_FAN: {
            NAME: "ACOP1#FREQ_SP_FAN",
          },
          P_FAN: {
            NAME: "ACOP1#P_FAN",
          },
          I_FAN: {
            NAME: "ACOP1#I_FAN",
          },
          DDRYS: [
            {
              ONOFF_SP: {
                NAME: "DDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY1#ONOFF",
              },
              ON: {
                NAME: "DDRY1#ON",
              },
              OFF: {
                NAME: "DDRY1#OFF",
              },
              ON_SP: {
                NAME: "DDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY1#OFF_SP",
              },
              AM: {
                NAME: "DDRY1#AM",
              },
              EB: {
                NAME: "DDRY1#EB",
              },
              FAULT: {
                NAME: "DDRY1#FAULT",
              },
              P: {
                NAME: "DDRY1#P",
              },
              W: {
                NAME: "DDRY1#W",
              },
              ELEC: {
                NAME: "DDRY1#ELEC",
              },
              COP: {
                NAME: "DDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY1#HRS",
              },
              ID: "z8Rh9d_2wFeGuwtRpq55R1",
              NO: 1,
              NAME: "吸干机#1",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY2#ONOFF",
              },
              ON: {
                NAME: "DDRY2#ON",
              },
              OFF: {
                NAME: "DDRY2#OFF",
              },
              ON_SP: {
                NAME: "DDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY2#OFF_SP",
              },
              AM: {
                NAME: "DDRY2#AM",
              },
              EB: {
                NAME: "DDRY2#EB",
              },
              FAULT: {
                NAME: "DDRY2#FAULT",
              },
              P: {
                NAME: "DDRY2#P",
              },
              W: {
                NAME: "DDRY2#W",
              },
              ELEC: {
                NAME: "DDRY2#ELEC",
              },
              COP: {
                NAME: "DDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY2#HRS",
              },
              ID: "JfOs6JcRE_HX2wb0ABzSfs",
              NO: 2,
              NAME: "吸干机#2",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY3#ONOFF",
              },
              ON: {
                NAME: "DDRY3#ON",
              },
              OFF: {
                NAME: "DDRY3#OFF",
              },
              ON_SP: {
                NAME: "DDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY3#OFF_SP",
              },
              AM: {
                NAME: "DDRY3#AM",
              },
              EB: {
                NAME: "DDRY3#EB",
              },
              FAULT: {
                NAME: "DDRY3#FAULT",
              },
              P: {
                NAME: "DDRY3#P",
              },
              W: {
                NAME: "DDRY3#W",
              },
              ELEC: {
                NAME: "DDRY3#ELEC",
              },
              COP: {
                NAME: "DDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY3#HRS",
              },
              ID: "uLBd69qqwJVqnkl0Xv70mf",
              NO: 3,
              NAME: "吸干机#3",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          RDRYS: [
            {
              ONOFF_SP: {
                NAME: "RDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY1#ONOFF",
              },
              ON: {
                NAME: "RDRY1#ON",
              },
              OFF: {
                NAME: "RDRY1#OFF",
              },
              ON_SP: {
                NAME: "RDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY1#OFF_SP",
              },
              AM: {
                NAME: "RDRY1#AM",
              },
              EB: {
                NAME: "RDRY1#EB",
              },
              FAULT: {
                NAME: "RDRY1#FAULT",
              },
              P: {
                NAME: "RDRY1#P",
              },
              W: {
                NAME: "RDRY1#W",
              },
              ELEC: {
                NAME: "RDRY1#ELEC",
              },
              COP: {
                NAME: "RDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY1#HRS",
              },
              ID: "Pdr83Myw2F4ClKeYES1NV3",
              NO: 1,
              NAME: "冷干机#1",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "z8Rh9d_2wFeGuwtRpq55R1",
                  NO: 1,
                  NAME: "吸干机#1",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY2#ONOFF",
              },
              ON: {
                NAME: "RDRY2#ON",
              },
              OFF: {
                NAME: "RDRY2#OFF",
              },
              ON_SP: {
                NAME: "RDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY2#OFF_SP",
              },
              AM: {
                NAME: "RDRY2#AM",
              },
              EB: {
                NAME: "RDRY2#EB",
              },
              FAULT: {
                NAME: "RDRY2#FAULT",
              },
              P: {
                NAME: "RDRY2#P",
              },
              W: {
                NAME: "RDRY2#W",
              },
              ELEC: {
                NAME: "RDRY2#ELEC",
              },
              COP: {
                NAME: "RDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY2#HRS",
              },
              ID: "wyLJYTHBXm_3z8XvCygEw4",
              NO: 2,
              NAME: "冷干机#2",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "JfOs6JcRE_HX2wb0ABzSfs",
                  NO: 2,
                  NAME: "吸干机#2",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY3#ONOFF",
              },
              ON: {
                NAME: "RDRY3#ON",
              },
              OFF: {
                NAME: "RDRY3#OFF",
              },
              ON_SP: {
                NAME: "RDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY3#OFF_SP",
              },
              AM: {
                NAME: "RDRY3#AM",
              },
              EB: {
                NAME: "RDRY3#EB",
              },
              FAULT: {
                NAME: "RDRY3#FAULT",
              },
              P: {
                NAME: "RDRY3#P",
              },
              W: {
                NAME: "RDRY3#W",
              },
              ELEC: {
                NAME: "RDRY3#ELEC",
              },
              COP: {
                NAME: "RDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY3#HRS",
              },
              ID: "exku6qdC5KiwDJiTcVAxoj",
              NO: 3,
              NAME: "冷干机#3",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "uLBd69qqwJVqnkl0Xv70mf",
                  NO: 3,
                  NAME: "吸干机#3",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ACWPS: [],
          ACTS: [],
          ARWTS: [
            {
              PR: {
                NAME: "ARWT1#PR",
              },
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT2#PR",
              },
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT3#PR",
              },
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ARDTS: [
            {
              PR: {
                NAME: "ARDT1#PR",
              },
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARDT2#PR",
              },
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "KpdXsavFmUDYpGuGkuNtGq",
          NO: 1,
          NAME: "空压机#1",
          TYPE: "D0C1A",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ACOP1#",
          SUITE_IDS: [],
          NEXT_NODE: [
            {
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        rmZ48XSm2xG2PfR32f8TbM: {
          ONOFF_SP: {
            NAME: "ACOP2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "ACOP2#ONOFF",
          },
          ON: {
            NAME: "ACOP2#ON",
          },
          OFF: {
            NAME: "ACOP2#OFF",
          },
          ON_SP: {
            NAME: "ACOP2#ON_SP",
          },
          OFF_SP: {
            NAME: "ACOP2#OFF_SP",
          },
          AM: {
            NAME: "ACOP2#AM",
          },
          EB: {
            NAME: "ACOP2#EB",
          },
          FAULT: {
            NAME: "ACOP2#FAULT",
          },
          FAULT_CODE: {
            NAME: "ACOP2#FAULT_CODE",
          },
          CONTROL_MODE: {
            NAME: "ACOP2#CONTROL_MODE",
          },
          PR_LOAD: {
            NAME: "ACOP2#PR_LOAD",
          },
          PR_LOAD_SP: {
            NAME: "ACOP2#PR_LOAD_SP",
          },
          PR_UNLOAD: {
            NAME: "ACOP2#PR_UNLOAD",
          },
          PR_UNLOAD_SP: {
            NAME: "ACOP2#PR_UNLOAD_SP",
          },
          PR_DISCHARGE: {
            NAME: "ACOP2#PR_DISCHARGE",
          },
          PR_DISCHARGE_SP: {
            NAME: "ACOP2#PR_DISCHARGE_SP",
          },
          PR: {
            NAME: "ACOP2#PR",
          },
          PR_OIL: {
            NAME: "ACOP2#PR_OIL",
          },
          T_DISCHARGE: {
            NAME: "ACOP2#T_DISCHARGE",
          },
          T_SUCTION: {
            NAME: "ACOP2#T_SUCTION",
          },
          T_OIL: {
            NAME: "ACOP2#T_OIL",
          },
          T_OIL_ENT: {
            NAME: "ACOP2#T_OIL_ENT",
          },
          T_OIL_LEV: {
            NAME: "ACOP2#T_OIL_LEV",
          },
          FLOW_AIR_DIS: {
            NAME: "ACOP2#FLOW_AIR_DIS",
          },
          FLOW_AIR_DIS_RATED: {
            NAME: "ACOP2#FLOW_AIR_DIS_RATED",
          },
          P_SPECIFIC: {
            NAME: "ACOP2#P_SPECIFIC",
          },
          DPR_OIL: {
            NAME: "ACOP2#DPR_OIL",
          },
          DPR_BACKFLUSH: {
            NAME: "ACOP2#DPR_BACKFLUSH",
          },
          DPR_BACKFLUSH_SP: {
            NAME: "ACOP2#DPR_BACKFLUSH_SP",
          },
          POS_IGV: {
            NAME: "ACOP2#POS_IGV",
          },
          POS_IGV_SP: {
            NAME: "ACOP2#POS_IGV_SP",
          },
          POS_BOV: {
            NAME: "ACOP2#POS_BOV",
          },
          POS_BOV_SP: {
            NAME: "ACOP2#POS_BOV_SP",
          },
          FREQ: {
            NAME: "ACOP2#FREQ",
          },
          FREQ_SP: {
            NAME: "ACOP2#FREQ_SP",
          },
          IS_FREQ: {
            NAME: "ACOP2#IS_FREQ",
          },
          HRS_TOTAL: {
            NAME: "ACOP2#HRS_TOTAL",
          },
          HRS: {
            NAME: "ACOP2#HRS",
          },
          HRS_LOAD: {
            NAME: "ACOP2#HRS_LOAD",
          },
          HRS_TOTAL_LOAD: {
            NAME: "ACOP2#HRS_TOTAL_LOAD",
          },
          HRS_OIL_FILTER: {
            NAME: "ACOP2#HRS_OIL_FILTER",
          },
          HRS_OIL_SEPAR: {
            NAME: "ACOP2#HRS_OIL_SEPAR",
          },
          HRS_AIR_FILTER: {
            NAME: "ACOP2#HRS_AIR_FILTER",
          },
          HRS_LUB_OIL: {
            NAME: "ACOP2#HRS_LUB_OIL",
          },
          HRS_LUB_GREASE: {
            NAME: "ACOP2#HRS_LUB_GREASE",
          },
          P: {
            NAME: "ACOP2#P",
          },
          W: {
            NAME: "ACOP2#W",
          },
          I: {
            NAME: "ACOP2#I",
          },
          I_PCT: {
            NAME: "ACOP2#I_PCT",
          },
          PLR: {
            NAME: "ACOP2#PLR",
          },
          ELEC: {
            NAME: "ACOP2#ELEC",
          },
          FREQ_RATED: {
            NAME: "ACOP2#FREQ_RATED",
          },
          P_RATED: {
            NAME: "ACOP2#P_RATED",
          },
          ONOFF_FAN: {
            NAME: "ACOP2#ONOFF_FAN",
          },
          ONOFF_SP_FAN: {
            NAME: "ACOP2#ONOFF_SP_FAN",
          },
          FREQ_FAN: {
            NAME: "ACOP2#FREQ_FAN",
          },
          FREQ_SP_FAN: {
            NAME: "ACOP2#FREQ_SP_FAN",
          },
          P_FAN: {
            NAME: "ACOP2#P_FAN",
          },
          I_FAN: {
            NAME: "ACOP2#I_FAN",
          },
          DDRYS: [
            {
              ONOFF_SP: {
                NAME: "DDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY1#ONOFF",
              },
              ON: {
                NAME: "DDRY1#ON",
              },
              OFF: {
                NAME: "DDRY1#OFF",
              },
              ON_SP: {
                NAME: "DDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY1#OFF_SP",
              },
              AM: {
                NAME: "DDRY1#AM",
              },
              EB: {
                NAME: "DDRY1#EB",
              },
              FAULT: {
                NAME: "DDRY1#FAULT",
              },
              P: {
                NAME: "DDRY1#P",
              },
              W: {
                NAME: "DDRY1#W",
              },
              ELEC: {
                NAME: "DDRY1#ELEC",
              },
              COP: {
                NAME: "DDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY1#HRS",
              },
              ID: "z8Rh9d_2wFeGuwtRpq55R1",
              NO: 1,
              NAME: "吸干机#1",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY2#ONOFF",
              },
              ON: {
                NAME: "DDRY2#ON",
              },
              OFF: {
                NAME: "DDRY2#OFF",
              },
              ON_SP: {
                NAME: "DDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY2#OFF_SP",
              },
              AM: {
                NAME: "DDRY2#AM",
              },
              EB: {
                NAME: "DDRY2#EB",
              },
              FAULT: {
                NAME: "DDRY2#FAULT",
              },
              P: {
                NAME: "DDRY2#P",
              },
              W: {
                NAME: "DDRY2#W",
              },
              ELEC: {
                NAME: "DDRY2#ELEC",
              },
              COP: {
                NAME: "DDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY2#HRS",
              },
              ID: "JfOs6JcRE_HX2wb0ABzSfs",
              NO: 2,
              NAME: "吸干机#2",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY3#ONOFF",
              },
              ON: {
                NAME: "DDRY3#ON",
              },
              OFF: {
                NAME: "DDRY3#OFF",
              },
              ON_SP: {
                NAME: "DDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY3#OFF_SP",
              },
              AM: {
                NAME: "DDRY3#AM",
              },
              EB: {
                NAME: "DDRY3#EB",
              },
              FAULT: {
                NAME: "DDRY3#FAULT",
              },
              P: {
                NAME: "DDRY3#P",
              },
              W: {
                NAME: "DDRY3#W",
              },
              ELEC: {
                NAME: "DDRY3#ELEC",
              },
              COP: {
                NAME: "DDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY3#HRS",
              },
              ID: "uLBd69qqwJVqnkl0Xv70mf",
              NO: 3,
              NAME: "吸干机#3",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          RDRYS: [
            {
              ONOFF_SP: {
                NAME: "RDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY1#ONOFF",
              },
              ON: {
                NAME: "RDRY1#ON",
              },
              OFF: {
                NAME: "RDRY1#OFF",
              },
              ON_SP: {
                NAME: "RDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY1#OFF_SP",
              },
              AM: {
                NAME: "RDRY1#AM",
              },
              EB: {
                NAME: "RDRY1#EB",
              },
              FAULT: {
                NAME: "RDRY1#FAULT",
              },
              P: {
                NAME: "RDRY1#P",
              },
              W: {
                NAME: "RDRY1#W",
              },
              ELEC: {
                NAME: "RDRY1#ELEC",
              },
              COP: {
                NAME: "RDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY1#HRS",
              },
              ID: "Pdr83Myw2F4ClKeYES1NV3",
              NO: 1,
              NAME: "冷干机#1",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "z8Rh9d_2wFeGuwtRpq55R1",
                  NO: 1,
                  NAME: "吸干机#1",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY2#ONOFF",
              },
              ON: {
                NAME: "RDRY2#ON",
              },
              OFF: {
                NAME: "RDRY2#OFF",
              },
              ON_SP: {
                NAME: "RDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY2#OFF_SP",
              },
              AM: {
                NAME: "RDRY2#AM",
              },
              EB: {
                NAME: "RDRY2#EB",
              },
              FAULT: {
                NAME: "RDRY2#FAULT",
              },
              P: {
                NAME: "RDRY2#P",
              },
              W: {
                NAME: "RDRY2#W",
              },
              ELEC: {
                NAME: "RDRY2#ELEC",
              },
              COP: {
                NAME: "RDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY2#HRS",
              },
              ID: "wyLJYTHBXm_3z8XvCygEw4",
              NO: 2,
              NAME: "冷干机#2",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "JfOs6JcRE_HX2wb0ABzSfs",
                  NO: 2,
                  NAME: "吸干机#2",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY3#ONOFF",
              },
              ON: {
                NAME: "RDRY3#ON",
              },
              OFF: {
                NAME: "RDRY3#OFF",
              },
              ON_SP: {
                NAME: "RDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY3#OFF_SP",
              },
              AM: {
                NAME: "RDRY3#AM",
              },
              EB: {
                NAME: "RDRY3#EB",
              },
              FAULT: {
                NAME: "RDRY3#FAULT",
              },
              P: {
                NAME: "RDRY3#P",
              },
              W: {
                NAME: "RDRY3#W",
              },
              ELEC: {
                NAME: "RDRY3#ELEC",
              },
              COP: {
                NAME: "RDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY3#HRS",
              },
              ID: "exku6qdC5KiwDJiTcVAxoj",
              NO: 3,
              NAME: "冷干机#3",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "uLBd69qqwJVqnkl0Xv70mf",
                  NO: 3,
                  NAME: "吸干机#3",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ACWPS: [],
          ACTS: [],
          ARWTS: [
            {
              PR: {
                NAME: "ARWT1#PR",
              },
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT2#PR",
              },
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT3#PR",
              },
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ARDTS: [
            {
              PR: {
                NAME: "ARDT1#PR",
              },
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARDT2#PR",
              },
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "rmZ48XSm2xG2PfR32f8TbM",
          NO: 2,
          NAME: "空压机#2",
          TYPE: "D0C1A",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ACOP2#",
          SUITE_IDS: [],
          NEXT_NODE: [
            {
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        dO0iw_2KrfkCerlRk6Yf6S: {
          ONOFF_SP: {
            NAME: "ACOP3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "ACOP3#ONOFF",
          },
          ON: {
            NAME: "ACOP3#ON",
          },
          OFF: {
            NAME: "ACOP3#OFF",
          },
          ON_SP: {
            NAME: "ACOP3#ON_SP",
          },
          OFF_SP: {
            NAME: "ACOP3#OFF_SP",
          },
          AM: {
            NAME: "ACOP3#AM",
          },
          EB: {
            NAME: "ACOP3#EB",
          },
          FAULT: {
            NAME: "ACOP3#FAULT",
          },
          FAULT_CODE: {
            NAME: "ACOP3#FAULT_CODE",
          },
          CONTROL_MODE: {
            NAME: "ACOP3#CONTROL_MODE",
          },
          PR_LOAD: {
            NAME: "ACOP3#PR_LOAD",
          },
          PR_LOAD_SP: {
            NAME: "ACOP3#PR_LOAD_SP",
          },
          PR_UNLOAD: {
            NAME: "ACOP3#PR_UNLOAD",
          },
          PR_UNLOAD_SP: {
            NAME: "ACOP3#PR_UNLOAD_SP",
          },
          PR_DISCHARGE: {
            NAME: "ACOP3#PR_DISCHARGE",
          },
          PR_DISCHARGE_SP: {
            NAME: "ACOP3#PR_DISCHARGE_SP",
          },
          PR: {
            NAME: "ACOP3#PR",
          },
          PR_OIL: {
            NAME: "ACOP3#PR_OIL",
          },
          T_DISCHARGE: {
            NAME: "ACOP3#T_DISCHARGE",
          },
          T_SUCTION: {
            NAME: "ACOP3#T_SUCTION",
          },
          T_OIL: {
            NAME: "ACOP3#T_OIL",
          },
          T_OIL_ENT: {
            NAME: "ACOP3#T_OIL_ENT",
          },
          T_OIL_LEV: {
            NAME: "ACOP3#T_OIL_LEV",
          },
          FLOW_AIR_DIS: {
            NAME: "ACOP3#FLOW_AIR_DIS",
          },
          FLOW_AIR_DIS_RATED: {
            NAME: "ACOP3#FLOW_AIR_DIS_RATED",
          },
          P_SPECIFIC: {
            NAME: "ACOP3#P_SPECIFIC",
          },
          DPR_OIL: {
            NAME: "ACOP3#DPR_OIL",
          },
          DPR_BACKFLUSH: {
            NAME: "ACOP3#DPR_BACKFLUSH",
          },
          DPR_BACKFLUSH_SP: {
            NAME: "ACOP3#DPR_BACKFLUSH_SP",
          },
          POS_IGV: {
            NAME: "ACOP3#POS_IGV",
          },
          POS_IGV_SP: {
            NAME: "ACOP3#POS_IGV_SP",
          },
          POS_BOV: {
            NAME: "ACOP3#POS_BOV",
          },
          POS_BOV_SP: {
            NAME: "ACOP3#POS_BOV_SP",
          },
          FREQ: {
            NAME: "ACOP3#FREQ",
          },
          FREQ_SP: {
            NAME: "ACOP3#FREQ_SP",
          },
          IS_FREQ: {
            NAME: "ACOP3#IS_FREQ",
          },
          HRS_TOTAL: {
            NAME: "ACOP3#HRS_TOTAL",
          },
          HRS: {
            NAME: "ACOP3#HRS",
          },
          HRS_LOAD: {
            NAME: "ACOP3#HRS_LOAD",
          },
          HRS_TOTAL_LOAD: {
            NAME: "ACOP3#HRS_TOTAL_LOAD",
          },
          HRS_OIL_FILTER: {
            NAME: "ACOP3#HRS_OIL_FILTER",
          },
          HRS_OIL_SEPAR: {
            NAME: "ACOP3#HRS_OIL_SEPAR",
          },
          HRS_AIR_FILTER: {
            NAME: "ACOP3#HRS_AIR_FILTER",
          },
          HRS_LUB_OIL: {
            NAME: "ACOP3#HRS_LUB_OIL",
          },
          HRS_LUB_GREASE: {
            NAME: "ACOP3#HRS_LUB_GREASE",
          },
          P: {
            NAME: "ACOP3#P",
          },
          W: {
            NAME: "ACOP3#W",
          },
          I: {
            NAME: "ACOP3#I",
          },
          I_PCT: {
            NAME: "ACOP3#I_PCT",
          },
          PLR: {
            NAME: "ACOP3#PLR",
          },
          ELEC: {
            NAME: "ACOP3#ELEC",
          },
          FREQ_RATED: {
            NAME: "ACOP3#FREQ_RATED",
          },
          P_RATED: {
            NAME: "ACOP3#P_RATED",
          },
          ONOFF_FAN: {
            NAME: "ACOP3#ONOFF_FAN",
          },
          ONOFF_SP_FAN: {
            NAME: "ACOP3#ONOFF_SP_FAN",
          },
          FREQ_FAN: {
            NAME: "ACOP3#FREQ_FAN",
          },
          FREQ_SP_FAN: {
            NAME: "ACOP3#FREQ_SP_FAN",
          },
          P_FAN: {
            NAME: "ACOP3#P_FAN",
          },
          I_FAN: {
            NAME: "ACOP3#I_FAN",
          },
          DDRYS: [
            {
              ONOFF_SP: {
                NAME: "DDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY1#ONOFF",
              },
              ON: {
                NAME: "DDRY1#ON",
              },
              OFF: {
                NAME: "DDRY1#OFF",
              },
              ON_SP: {
                NAME: "DDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY1#OFF_SP",
              },
              AM: {
                NAME: "DDRY1#AM",
              },
              EB: {
                NAME: "DDRY1#EB",
              },
              FAULT: {
                NAME: "DDRY1#FAULT",
              },
              P: {
                NAME: "DDRY1#P",
              },
              W: {
                NAME: "DDRY1#W",
              },
              ELEC: {
                NAME: "DDRY1#ELEC",
              },
              COP: {
                NAME: "DDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY1#HRS",
              },
              ID: "z8Rh9d_2wFeGuwtRpq55R1",
              NO: 1,
              NAME: "吸干机#1",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY2#ONOFF",
              },
              ON: {
                NAME: "DDRY2#ON",
              },
              OFF: {
                NAME: "DDRY2#OFF",
              },
              ON_SP: {
                NAME: "DDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY2#OFF_SP",
              },
              AM: {
                NAME: "DDRY2#AM",
              },
              EB: {
                NAME: "DDRY2#EB",
              },
              FAULT: {
                NAME: "DDRY2#FAULT",
              },
              P: {
                NAME: "DDRY2#P",
              },
              W: {
                NAME: "DDRY2#W",
              },
              ELEC: {
                NAME: "DDRY2#ELEC",
              },
              COP: {
                NAME: "DDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY2#HRS",
              },
              ID: "JfOs6JcRE_HX2wb0ABzSfs",
              NO: 2,
              NAME: "吸干机#2",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "DDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "DDRY3#ONOFF",
              },
              ON: {
                NAME: "DDRY3#ON",
              },
              OFF: {
                NAME: "DDRY3#OFF",
              },
              ON_SP: {
                NAME: "DDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "DDRY3#OFF_SP",
              },
              AM: {
                NAME: "DDRY3#AM",
              },
              EB: {
                NAME: "DDRY3#EB",
              },
              FAULT: {
                NAME: "DDRY3#FAULT",
              },
              P: {
                NAME: "DDRY3#P",
              },
              W: {
                NAME: "DDRY3#W",
              },
              ELEC: {
                NAME: "DDRY3#ELEC",
              },
              COP: {
                NAME: "DDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "DDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "DDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "DDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "DDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "DDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "DDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "DDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "DDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "DDRY3#HRS",
              },
              ID: "uLBd69qqwJVqnkl0Xv70mf",
              NO: 3,
              NAME: "吸干机#3",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          RDRYS: [
            {
              ONOFF_SP: {
                NAME: "RDRY1#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY1#ONOFF",
              },
              ON: {
                NAME: "RDRY1#ON",
              },
              OFF: {
                NAME: "RDRY1#OFF",
              },
              ON_SP: {
                NAME: "RDRY1#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY1#OFF_SP",
              },
              AM: {
                NAME: "RDRY1#AM",
              },
              EB: {
                NAME: "RDRY1#EB",
              },
              FAULT: {
                NAME: "RDRY1#FAULT",
              },
              P: {
                NAME: "RDRY1#P",
              },
              W: {
                NAME: "RDRY1#W",
              },
              ELEC: {
                NAME: "RDRY1#ELEC",
              },
              COP: {
                NAME: "RDRY1#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY1#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY1#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY1#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY1#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY1#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY1#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY1#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY1#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY1#HRS",
              },
              ID: "Pdr83Myw2F4ClKeYES1NV3",
              NO: 1,
              NAME: "冷干机#1",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "z8Rh9d_2wFeGuwtRpq55R1",
                  NO: 1,
                  NAME: "吸干机#1",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY2#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY2#ONOFF",
              },
              ON: {
                NAME: "RDRY2#ON",
              },
              OFF: {
                NAME: "RDRY2#OFF",
              },
              ON_SP: {
                NAME: "RDRY2#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY2#OFF_SP",
              },
              AM: {
                NAME: "RDRY2#AM",
              },
              EB: {
                NAME: "RDRY2#EB",
              },
              FAULT: {
                NAME: "RDRY2#FAULT",
              },
              P: {
                NAME: "RDRY2#P",
              },
              W: {
                NAME: "RDRY2#W",
              },
              ELEC: {
                NAME: "RDRY2#ELEC",
              },
              COP: {
                NAME: "RDRY2#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY2#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY2#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY2#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY2#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY2#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY2#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY2#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY2#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY2#HRS",
              },
              ID: "wyLJYTHBXm_3z8XvCygEw4",
              NO: 2,
              NAME: "冷干机#2",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "JfOs6JcRE_HX2wb0ABzSfs",
                  NO: 2,
                  NAME: "吸干机#2",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ONOFF_SP: {
                NAME: "RDRY3#ONOFF_SP",
              },
              ONOFF: {
                NAME: "RDRY3#ONOFF",
              },
              ON: {
                NAME: "RDRY3#ON",
              },
              OFF: {
                NAME: "RDRY3#OFF",
              },
              ON_SP: {
                NAME: "RDRY3#ON_SP",
              },
              OFF_SP: {
                NAME: "RDRY3#OFF_SP",
              },
              AM: {
                NAME: "RDRY3#AM",
              },
              EB: {
                NAME: "RDRY3#EB",
              },
              FAULT: {
                NAME: "RDRY3#FAULT",
              },
              P: {
                NAME: "RDRY3#P",
              },
              W: {
                NAME: "RDRY3#W",
              },
              ELEC: {
                NAME: "RDRY3#ELEC",
              },
              COP: {
                NAME: "RDRY3#COP",
              },
              T_AIR_ENT: {
                NAME: "RDRY3#T_AIR_ENT",
              },
              T_AIR_LEV: {
                NAME: "RDRY3#T_AIR_LEV",
              },
              T_DEW: {
                NAME: "RDRY3#T_DEW",
              },
              T_DEW_SP: {
                NAME: "RDRY3#T_DEW_SP",
              },
              FLOW_AIR_ENT: {
                NAME: "RDRY3#FLOW_AIR_ENT",
              },
              DRAINAGE_ONOFF: {
                NAME: "RDRY3#DRAINAGE_ONOFF",
              },
              P_RATED: {
                NAME: "RDRY3#P_RATED",
              },
              HRS_TOTAL: {
                NAME: "RDRY3#HRS_TOTAL",
              },
              HRS: {
                NAME: "RDRY3#HRS",
              },
              ID: "exku6qdC5KiwDJiTcVAxoj",
              NO: 3,
              NAME: "冷干机#3",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "uLBd69qqwJVqnkl0Xv70mf",
                  NO: 3,
                  NAME: "吸干机#3",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ACWPS: [],
          ACTS: [],
          ARWTS: [
            {
              PR: {
                NAME: "ARWT1#PR",
              },
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT2#PR",
              },
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARWT3#PR",
              },
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ARDTS: [
            {
              PR: {
                NAME: "ARDT1#PR",
              },
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              PR: {
                NAME: "ARDT2#PR",
              },
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          ID: "dO0iw_2KrfkCerlRk6Yf6S",
          NO: 3,
          NAME: "空压机#3",
          TYPE: "D0C1A",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ACOP3#",
          SUITE_IDS: [],
          NEXT_NODE: [
            {
              ID: "acmIl5lHJOEgFONJZqFjZZ",
              NO: 1,
              NAME: "储气湿罐#1",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "Pdr83Myw2F4ClKeYES1NV3",
                  NO: 1,
                  NAME: "冷干机#1",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "z8Rh9d_2wFeGuwtRpq55R1",
                      NO: 1,
                      NAME: "吸干机#1",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "MfoohXgfn00rOaSWOX04Lf",
              NO: 2,
              NAME: "储气湿罐#2",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "wyLJYTHBXm_3z8XvCygEw4",
                  NO: 2,
                  NAME: "冷干机#2",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "JfOs6JcRE_HX2wb0ABzSfs",
                      NO: 2,
                      NAME: "吸干机#2",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "uBcBrzLpayRrdhkgDidqSA",
              NO: 3,
              NAME: "储气湿罐#3",
              TYPE: "D0C1D",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARWT3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "exku6qdC5KiwDJiTcVAxoj",
                  NO: 3,
                  NAME: "冷干机#3",
                  TYPE: "D0C1B",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "RDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "uLBd69qqwJVqnkl0Xv70mf",
                      NO: 3,
                      NAME: "吸干机#3",
                      TYPE: "D0C1C",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "DDRY3#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [
                        {
                          ID: "vuOFZJhNfSN8TWQi7NOWX0",
                          NO: 1,
                          NAME: "储气干罐#1",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT1#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                        {
                          ID: "o8IEBbvPjCwvWp58h803La",
                          NO: 2,
                          NAME: "储气干罐#2",
                          TYPE: "D0C1E",
                          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                          STATION_PREFIX_ORG: "CAS1#",
                          DEVICE_PREFIX: "ARDT2#",
                          SUITE_IDS: [
                            "KpdXsavFmUDYpGuGkuNtGq",
                            "rmZ48XSm2xG2PfR32f8TbM",
                            "dO0iw_2KrfkCerlRk6Yf6S",
                          ],
                          NEXT_NODE: [],
                          VALVES: [],
                          OTHERS: {},
                          CAP_NUM: 0,
                        },
                      ],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      DDRYS: {
        z8Rh9d_2wFeGuwtRpq55R1: {
          ONOFF_SP: {
            NAME: "DDRY1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "DDRY1#ONOFF",
          },
          ON: {
            NAME: "DDRY1#ON",
          },
          OFF: {
            NAME: "DDRY1#OFF",
          },
          ON_SP: {
            NAME: "DDRY1#ON_SP",
          },
          OFF_SP: {
            NAME: "DDRY1#OFF_SP",
          },
          AM: {
            NAME: "DDRY1#AM",
          },
          EB: {
            NAME: "DDRY1#EB",
          },
          FAULT: {
            NAME: "DDRY1#FAULT",
          },
          P: {
            NAME: "DDRY1#P",
          },
          W: {
            NAME: "DDRY1#W",
          },
          ELEC: {
            NAME: "DDRY1#ELEC",
          },
          COP: {
            NAME: "DDRY1#COP",
          },
          T_AIR_ENT: {
            NAME: "DDRY1#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "DDRY1#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "DDRY1#T_DEW",
          },
          T_DEW_SP: {
            NAME: "DDRY1#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "DDRY1#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "DDRY1#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "DDRY1#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "DDRY1#HRS_TOTAL",
          },
          HRS: {
            NAME: "DDRY1#HRS",
          },
          ID: "z8Rh9d_2wFeGuwtRpq55R1",
          NO: 1,
          NAME: "吸干机#1",
          TYPE: "D0C1C",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "DDRY1#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        JfOs6JcRE_HX2wb0ABzSfs: {
          ONOFF_SP: {
            NAME: "DDRY2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "DDRY2#ONOFF",
          },
          ON: {
            NAME: "DDRY2#ON",
          },
          OFF: {
            NAME: "DDRY2#OFF",
          },
          ON_SP: {
            NAME: "DDRY2#ON_SP",
          },
          OFF_SP: {
            NAME: "DDRY2#OFF_SP",
          },
          AM: {
            NAME: "DDRY2#AM",
          },
          EB: {
            NAME: "DDRY2#EB",
          },
          FAULT: {
            NAME: "DDRY2#FAULT",
          },
          P: {
            NAME: "DDRY2#P",
          },
          W: {
            NAME: "DDRY2#W",
          },
          ELEC: {
            NAME: "DDRY2#ELEC",
          },
          COP: {
            NAME: "DDRY2#COP",
          },
          T_AIR_ENT: {
            NAME: "DDRY2#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "DDRY2#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "DDRY2#T_DEW",
          },
          T_DEW_SP: {
            NAME: "DDRY2#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "DDRY2#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "DDRY2#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "DDRY2#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "DDRY2#HRS_TOTAL",
          },
          HRS: {
            NAME: "DDRY2#HRS",
          },
          ID: "JfOs6JcRE_HX2wb0ABzSfs",
          NO: 2,
          NAME: "吸干机#2",
          TYPE: "D0C1C",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "DDRY2#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        uLBd69qqwJVqnkl0Xv70mf: {
          ONOFF_SP: {
            NAME: "DDRY3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "DDRY3#ONOFF",
          },
          ON: {
            NAME: "DDRY3#ON",
          },
          OFF: {
            NAME: "DDRY3#OFF",
          },
          ON_SP: {
            NAME: "DDRY3#ON_SP",
          },
          OFF_SP: {
            NAME: "DDRY3#OFF_SP",
          },
          AM: {
            NAME: "DDRY3#AM",
          },
          EB: {
            NAME: "DDRY3#EB",
          },
          FAULT: {
            NAME: "DDRY3#FAULT",
          },
          P: {
            NAME: "DDRY3#P",
          },
          W: {
            NAME: "DDRY3#W",
          },
          ELEC: {
            NAME: "DDRY3#ELEC",
          },
          COP: {
            NAME: "DDRY3#COP",
          },
          T_AIR_ENT: {
            NAME: "DDRY3#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "DDRY3#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "DDRY3#T_DEW",
          },
          T_DEW_SP: {
            NAME: "DDRY3#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "DDRY3#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "DDRY3#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "DDRY3#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "DDRY3#HRS_TOTAL",
          },
          HRS: {
            NAME: "DDRY3#HRS",
          },
          ID: "uLBd69qqwJVqnkl0Xv70mf",
          NO: 3,
          NAME: "吸干机#3",
          TYPE: "D0C1C",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "DDRY3#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "vuOFZJhNfSN8TWQi7NOWX0",
              NO: 1,
              NAME: "储气干罐#1",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
            {
              ID: "o8IEBbvPjCwvWp58h803La",
              NO: 2,
              NAME: "储气干罐#2",
              TYPE: "D0C1E",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "ARDT2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      RDRYS: {
        Pdr83Myw2F4ClKeYES1NV3: {
          ONOFF_SP: {
            NAME: "RDRY1#ONOFF_SP",
          },
          ONOFF: {
            NAME: "RDRY1#ONOFF",
          },
          ON: {
            NAME: "RDRY1#ON",
          },
          OFF: {
            NAME: "RDRY1#OFF",
          },
          ON_SP: {
            NAME: "RDRY1#ON_SP",
          },
          OFF_SP: {
            NAME: "RDRY1#OFF_SP",
          },
          AM: {
            NAME: "RDRY1#AM",
          },
          EB: {
            NAME: "RDRY1#EB",
          },
          FAULT: {
            NAME: "RDRY1#FAULT",
          },
          P: {
            NAME: "RDRY1#P",
          },
          W: {
            NAME: "RDRY1#W",
          },
          ELEC: {
            NAME: "RDRY1#ELEC",
          },
          COP: {
            NAME: "RDRY1#COP",
          },
          T_AIR_ENT: {
            NAME: "RDRY1#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "RDRY1#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "RDRY1#T_DEW",
          },
          T_DEW_SP: {
            NAME: "RDRY1#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "RDRY1#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "RDRY1#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "RDRY1#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "RDRY1#HRS_TOTAL",
          },
          HRS: {
            NAME: "RDRY1#HRS",
          },
          ID: "Pdr83Myw2F4ClKeYES1NV3",
          NO: 1,
          NAME: "冷干机#1",
          TYPE: "D0C1B",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "RDRY1#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "z8Rh9d_2wFeGuwtRpq55R1",
              NO: 1,
              NAME: "吸干机#1",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        wyLJYTHBXm_3z8XvCygEw4: {
          ONOFF_SP: {
            NAME: "RDRY2#ONOFF_SP",
          },
          ONOFF: {
            NAME: "RDRY2#ONOFF",
          },
          ON: {
            NAME: "RDRY2#ON",
          },
          OFF: {
            NAME: "RDRY2#OFF",
          },
          ON_SP: {
            NAME: "RDRY2#ON_SP",
          },
          OFF_SP: {
            NAME: "RDRY2#OFF_SP",
          },
          AM: {
            NAME: "RDRY2#AM",
          },
          EB: {
            NAME: "RDRY2#EB",
          },
          FAULT: {
            NAME: "RDRY2#FAULT",
          },
          P: {
            NAME: "RDRY2#P",
          },
          W: {
            NAME: "RDRY2#W",
          },
          ELEC: {
            NAME: "RDRY2#ELEC",
          },
          COP: {
            NAME: "RDRY2#COP",
          },
          T_AIR_ENT: {
            NAME: "RDRY2#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "RDRY2#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "RDRY2#T_DEW",
          },
          T_DEW_SP: {
            NAME: "RDRY2#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "RDRY2#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "RDRY2#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "RDRY2#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "RDRY2#HRS_TOTAL",
          },
          HRS: {
            NAME: "RDRY2#HRS",
          },
          ID: "wyLJYTHBXm_3z8XvCygEw4",
          NO: 2,
          NAME: "冷干机#2",
          TYPE: "D0C1B",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "RDRY2#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "JfOs6JcRE_HX2wb0ABzSfs",
              NO: 2,
              NAME: "吸干机#2",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        exku6qdC5KiwDJiTcVAxoj: {
          ONOFF_SP: {
            NAME: "RDRY3#ONOFF_SP",
          },
          ONOFF: {
            NAME: "RDRY3#ONOFF",
          },
          ON: {
            NAME: "RDRY3#ON",
          },
          OFF: {
            NAME: "RDRY3#OFF",
          },
          ON_SP: {
            NAME: "RDRY3#ON_SP",
          },
          OFF_SP: {
            NAME: "RDRY3#OFF_SP",
          },
          AM: {
            NAME: "RDRY3#AM",
          },
          EB: {
            NAME: "RDRY3#EB",
          },
          FAULT: {
            NAME: "RDRY3#FAULT",
          },
          P: {
            NAME: "RDRY3#P",
          },
          W: {
            NAME: "RDRY3#W",
          },
          ELEC: {
            NAME: "RDRY3#ELEC",
          },
          COP: {
            NAME: "RDRY3#COP",
          },
          T_AIR_ENT: {
            NAME: "RDRY3#T_AIR_ENT",
          },
          T_AIR_LEV: {
            NAME: "RDRY3#T_AIR_LEV",
          },
          T_DEW: {
            NAME: "RDRY3#T_DEW",
          },
          T_DEW_SP: {
            NAME: "RDRY3#T_DEW_SP",
          },
          FLOW_AIR_ENT: {
            NAME: "RDRY3#FLOW_AIR_ENT",
          },
          DRAINAGE_ONOFF: {
            NAME: "RDRY3#DRAINAGE_ONOFF",
          },
          P_RATED: {
            NAME: "RDRY3#P_RATED",
          },
          HRS_TOTAL: {
            NAME: "RDRY3#HRS_TOTAL",
          },
          HRS: {
            NAME: "RDRY3#HRS",
          },
          ID: "exku6qdC5KiwDJiTcVAxoj",
          NO: 3,
          NAME: "冷干机#3",
          TYPE: "D0C1B",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "RDRY3#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "uLBd69qqwJVqnkl0Xv70mf",
              NO: 3,
              NAME: "吸干机#3",
              TYPE: "D0C1C",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "DDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "vuOFZJhNfSN8TWQi7NOWX0",
                  NO: 1,
                  NAME: "储气干罐#1",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
                {
                  ID: "o8IEBbvPjCwvWp58h803La",
                  NO: 2,
                  NAME: "储气干罐#2",
                  TYPE: "D0C1E",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "ARDT2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      ACWPS: {},
      ACTS: {},
      DVS: {},
      ARWTS: {
        acmIl5lHJOEgFONJZqFjZZ: {
          PR: {
            NAME: "ARWT1#PR",
          },
          ID: "acmIl5lHJOEgFONJZqFjZZ",
          NO: 1,
          NAME: "储气湿罐#1",
          TYPE: "D0C1D",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ARWT1#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "Pdr83Myw2F4ClKeYES1NV3",
              NO: 1,
              NAME: "冷干机#1",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY1#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "z8Rh9d_2wFeGuwtRpq55R1",
                  NO: 1,
                  NAME: "吸干机#1",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY1#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        MfoohXgfn00rOaSWOX04Lf: {
          PR: {
            NAME: "ARWT2#PR",
          },
          ID: "MfoohXgfn00rOaSWOX04Lf",
          NO: 2,
          NAME: "储气湿罐#2",
          TYPE: "D0C1D",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ARWT2#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "wyLJYTHBXm_3z8XvCygEw4",
              NO: 2,
              NAME: "冷干机#2",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY2#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "JfOs6JcRE_HX2wb0ABzSfs",
                  NO: 2,
                  NAME: "吸干机#2",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY2#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        uBcBrzLpayRrdhkgDidqSA: {
          PR: {
            NAME: "ARWT3#PR",
          },
          ID: "uBcBrzLpayRrdhkgDidqSA",
          NO: 3,
          NAME: "储气湿罐#3",
          TYPE: "D0C1D",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ARWT3#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [
            {
              ID: "exku6qdC5KiwDJiTcVAxoj",
              NO: 3,
              NAME: "冷干机#3",
              TYPE: "D0C1B",
              STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
              STATION_PREFIX_ORG: "CAS1#",
              DEVICE_PREFIX: "RDRY3#",
              SUITE_IDS: [
                "KpdXsavFmUDYpGuGkuNtGq",
                "rmZ48XSm2xG2PfR32f8TbM",
                "dO0iw_2KrfkCerlRk6Yf6S",
              ],
              NEXT_NODE: [
                {
                  ID: "uLBd69qqwJVqnkl0Xv70mf",
                  NO: 3,
                  NAME: "吸干机#3",
                  TYPE: "D0C1C",
                  STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                  STATION_PREFIX_ORG: "CAS1#",
                  DEVICE_PREFIX: "DDRY3#",
                  SUITE_IDS: [
                    "KpdXsavFmUDYpGuGkuNtGq",
                    "rmZ48XSm2xG2PfR32f8TbM",
                    "dO0iw_2KrfkCerlRk6Yf6S",
                  ],
                  NEXT_NODE: [
                    {
                      ID: "vuOFZJhNfSN8TWQi7NOWX0",
                      NO: 1,
                      NAME: "储气干罐#1",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT1#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                    {
                      ID: "o8IEBbvPjCwvWp58h803La",
                      NO: 2,
                      NAME: "储气干罐#2",
                      TYPE: "D0C1E",
                      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
                      STATION_PREFIX_ORG: "CAS1#",
                      DEVICE_PREFIX: "ARDT2#",
                      SUITE_IDS: [
                        "KpdXsavFmUDYpGuGkuNtGq",
                        "rmZ48XSm2xG2PfR32f8TbM",
                        "dO0iw_2KrfkCerlRk6Yf6S",
                      ],
                      NEXT_NODE: [],
                      VALVES: [],
                      OTHERS: {},
                      CAP_NUM: 0,
                    },
                  ],
                  VALVES: [],
                  OTHERS: {},
                  CAP_NUM: 0,
                },
              ],
              VALVES: [],
              OTHERS: {},
              CAP_NUM: 0,
            },
          ],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      ARDTS: {
        vuOFZJhNfSN8TWQi7NOWX0: {
          PR: {
            NAME: "ARDT1#PR",
          },
          ID: "vuOFZJhNfSN8TWQi7NOWX0",
          NO: 1,
          NAME: "储气干罐#1",
          TYPE: "D0C1E",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ARDT1#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
        o8IEBbvPjCwvWp58h803La: {
          PR: {
            NAME: "ARDT2#PR",
          },
          ID: "o8IEBbvPjCwvWp58h803La",
          NO: 2,
          NAME: "储气干罐#2",
          TYPE: "D0C1E",
          STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
          STATION_PREFIX_ORG: "CAS1#",
          DEVICE_PREFIX: "ARDT2#",
          SUITE_IDS: [
            "KpdXsavFmUDYpGuGkuNtGq",
            "rmZ48XSm2xG2PfR32f8TbM",
            "dO0iw_2KrfkCerlRk6Yf6S",
          ],
          NEXT_NODE: [],
          VALVES: [],
          OTHERS: {},
          CAP_NUM: 0,
        },
      },
      ID: "GV8hE_SgzeEY3iDfupEq19",
      NO: 1,
      NAME: "空压系统1",
      TYPE: "D0C10",
      STATION_ID: "GV8hE_SgzeEY3iDfupEq19",
      STATION_PREFIX_ORG: "CAS1#",
      STATION_PREFIX_SET: "CAS1",
      OTHERS: {},
      CAP_NUM: 0,
    },
  },
  NO: 0,
  TYPE: "D0000",
  OTHERS: {},
  CAP_NUM: 0,
}

// export const deviceModelMap = {
//   ACOPS: {
//     KpdXsavFmUDYpGuGkuNtGq: "wuQe0IRRZ6hdsaQ4kKaKVd",
//     rmZ48XSm2xG2PfR32f8TbM: "GQ3wY_JNZDVxnLmHHV_Sdy",
//     dO0iw_2KrfkCerlRk6Yf6S: "nR4Q6D7E0L2ZGFE4oLWNBV",
//   },
//   DDRYS: {
//     z8Rh9d_2wFeGuwtRpq55R1: "p-H6jZfN5IQ_vpEbuiDySi",
//     JfOs6JcRE_HX2wb0ABzSfs: "TL4nz-5m5RUAWjmSHLtLGK",
//     uLBd69qqwJVqnkl0Xv70mf: "tZHVdnhmL9Rm6f_9Hxly0V",
//   },
//   RDRYS: {
//     Pdr83Myw2F4ClKeYES1NV3: "NqRQb9e1cz5clDWceMJqUK",
//     wyLJYTHBXm_3z8XvCygEw4: "awS0UdKCW43CQnb3_c23Fg",
//     exku6qdC5KiwDJiTcVAxoj: "mwxKGcJXP-jk1QRueBM99O",
//   },
// }

export const links = [
  "BohTibvpGhxBCLKdr2V6KX",
  "8AerqLCNEvxcxHwFIXptL2",
  "SU8B8JoBiE0F3wvVUKPxWh",
  "B30qAIobqpJ8iFPjins-mm",
  "DYOoNuhTPHYayxpZ6W7R3_",
]

export const global = {
  ProjectId: "xiNLadERS_zFtN0uiNzuHW",
  ProjectName: "空压test1",
  ProjectImage: null,
  BuildingArea: 22222,
  DeviceNum: 14,
  TagNum: 419,
  LogicNum: 8,
  AlarmIndexNum: 12,
  AlarmNum: 5,
  Temp: "28",
  Hum: "79",
  Weather: "阴",
  Wind: "南风 2",
  WeatherCode: "200",
  UserId: null,
}

const item = Object.keys(re?.CAS_PLANTS || {})?.[0]
// // 生成设备弹窗文件夹
// const modelid = await request(`/TEdPageType/save`, {
//   method: "POST",
//   data: jsonToFormData({
//     F_P_ID: projId,
//     F_PT_ID: "-1",
//     F_NAME: "设备弹窗",
//   }),
// })
// // 设备弹窗
const deviceModelMap:any = {}
const deviceNameMao = ["ACOPS", "DDRYS", "RDRYS"]
const deviceName = ["空压机", "吸干机", "冷干机"]
const deviceArr = []
// for (const item0 in re.CAS_PLANTS[item]) {
//   if (deviceNameMao.findIndex((t) => t === item0) == -1) continue
//   const n = deviceNameMao.indexOf(item0)
//   if (n > -1) {
//     deviceModelMap[item0] = {}
//     for (let i = 0; i < Object.keys(re.CAS_PLANTS[item][item0]).length; i++) {
//       const t = Object.keys(re.CAS_PLANTS[item][item0])[i]
//       // const sour = re.CAS_PLANTS[item][item0][t]
//       // const result = item0 == "ACOPS" ? acops(sour) : desdryer(sour)
//       const id = "nanoid(22)"
//       deviceArr.push({
//         F_P_ID: "projId",
//         F_PT_ID: "modelid",
//         F_PAGE_ID: id,
//         F_TITLE: deviceName[n] + (i + 1) + "页面",
//         // F_CONTENT: lz.encodeBase64(lz.compress(JSON.stringify(result))),
//         F_CONTENT:"result"
//       })
//       const mapname = item0 == "DVS" ? "VALVES" : item0
//       deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id }
//     }
//   }
// }

const source = re.CAS_PLANTS[item]
for (const prop in source) {
  const n = deviceNameMao.indexOf(prop)
  if (n === -1) continue;
  else {
    // 说明当前的prop存在于 定义好的deviceNameMao 中,那就新建一个对应的映射
    deviceModelMap[prop] = {}
    const deviceKeys =  Object.keys(source[prop])
    for (let i = 0; i < deviceKeys.length; i++) {
      // t使用后端定义好的设备的id
      const t = deviceKeys[i]
      // const sour = source[prop][t]
      // const result = prop == "ACOPS" ? acops(sour) : desdryer(sour)
      const id = "nanoid(22)"
      deviceArr.push({
        F_P_ID: "projId",
        F_PT_ID: "modelid",
        F_PAGE_ID: id,
        F_TITLE: deviceName[n] + (i + 1) + "页面",
        // F_CONTENT: lz.encodeBase64(lz.compress(JSON.stringify(result))),
        F_CONTENT: "result",
      })
      // 当前的prop若为DVS类型 那它就和VALVES 那它也是VALVES类型
      const mapname = prop == "DVS" ? "VALVES" : prop
      deviceModelMap[mapname] = { ...deviceModelMap[mapname], [t]: id }
    }
  }
}

// 按照NEXT_NODE的内容分类
const ACOPS = source?.ACOPS || {}; // 空压机
const ACOPSobj:any = {}
for (let key in ACOPS) {
  const { NEXT_NODE } = ACOPS?.[key] || {}
  if (NEXT_NODE) {
    // 防止 NEXT_NODE 不存在时去序列号导致报错
    const nextNode = JSON.stringify(NEXT_NODE)
    if (ACOPSobj[nextNode]) {
      ACOPSobj[nextNode].push(key)
    } else {
      ACOPSobj[nextNode] = [key]
    }
  }
}
// 目前一个三个ACOPS 根据ACOPS下的NEXT_NODE 分为了两类
// ;[
//   ["KpdXsavFmUDYpGuGkuNtGq"],
//   ["rmZ48XSm2xG2PfR32f8TbM", "dO0iw_2KrfkCerlRk6Yf6S"],
// ]
// console.log(Object.values(ACOPSobj))

//  for (let key in ACOPSobj) {
//    console.log( JSON.parse(key),ACOPSobj[key])
//  }
 // 说明第一个的 NEXT_NODE 是一类  后面两个的NEXT_NODE 是一类
//  (3) [{…}, {…}, {…}]  ['KpdXsavFmUDYpGuGkuNtGq'] 
//  (3) [{…}, {…}, {…}]  ['rmZ48XSm2xG2PfR32f8TbM', 'dO0iw_2KrfkCerlRk6Yf6S'] 

const ACOPSARR = Object.values(ACOPSobj)
// [['KpdXsavFmUDYpGuGkuNtGq'], ['rmZ48XSm2xG2PfR32f8TbM', 'dO0iw_2KrfkCerlRk6Yf6S'] ]

 ACOPSARR.forEach((item:any, index:any) => {
  //  console.log(item, index)
   // 总管是否在当前侧,就是多设定一个横管
   const len = item.length - 1
   let str = ""
   item.forEach((t0:any) => (str += `${"${" + ACOPS[t0].ONOFF.NAME + "}"}==1&&`))
   console.log(str)
 })

console.log(ACOPSARR)

// target  生成一组所需的设备映射 { 设备类型: {设备id1:随机id,设备id2:随机id,设备id3:随机id3,} }
// {
//   ACOPS: {
//     KpdXsavFmUDYpGuGkuNtGq: 'nanoid(22)',
//     rmZ48XSm2xG2PfR32f8TbM: 'nanoid(22)',
//     dO0iw_2KrfkCerlRk6Yf6S: 'nanoid(22)'
//   },
//   DDRYS: {
//     z8Rh9d_2wFeGuwtRpq55R1: 'nanoid(22)',
//     JfOs6JcRE_HX2wb0ABzSfs: 'nanoid(22)',
//     uLBd69qqwJVqnkl0Xv70mf: 'nanoid(22)'
//   },
//   RDRYS: {
//     Pdr83Myw2F4ClKeYES1NV3: 'nanoid(22)',
//     wyLJYTHBXm_3z8XvCygEw4: 'nanoid(22)',
//     exku6qdC5KiwDJiTcVAxoj: 'nanoid(22)'
//   }
// }



