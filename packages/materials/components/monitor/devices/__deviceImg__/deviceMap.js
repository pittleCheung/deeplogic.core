
import ch_cert_alarm from '../__deviceImg__/ch_cert_alarm.png';
import ch_cert_fault from '../__deviceImg__/ch_cert_fault.png';
import ch_cert_on from '../__deviceImg__/ch_cert_on.webp';
import ch_cert_off from '../__deviceImg__/ch_cert_off.png';
import pump_alarm from '../__deviceImg__/pump_alarm.png';
import pump_fault from '../__deviceImg__/pump_fault.png';
import pump_on from '../__deviceImg__/pump_on.webp';
import pump_off from '../__deviceImg__/pump_off.png';
import ct_alarm from '../__deviceImg__/ct_alarm.png';
import ct_fault from '../__deviceImg__/ct_fault.png';
import ct_on from '../__deviceImg__/ct_on.webp';
import ct_off from '../__deviceImg__/ct_off.png';
import valve_off from '../__deviceImg__/valve_off.png';
import valve_on from '../__deviceImg__/valve_on.png';

import acop_screw_alarm from "../__deviceImg__/acop_screw_alarm.png"
import acop_screw_fault from "../__deviceImg__/acop_screw_fault.png"
import acop_screw_on  from "../__deviceImg__/acop_screw_on.webp"
import acop_screw_off from '../__deviceImg__/acop_screw_off.png';

import des_dryer_alarm from '../__deviceImg__/des_dryer_alarm.png';
import des_dryer_fault from '../__deviceImg__/des_dryer_fault.png';
import des_dryer_on from '../__deviceImg__/des_dryer_on.webp';
import des_dryer_off from '../__deviceImg__/des_dryer_off.png';

import ref_dryer_alarm from '../__deviceImg__/ref_dryer_alarm.png';
import ref_dryer_fault from '../__deviceImg__/ref_dryer_fault.png';
import ref_dryer_on from '../__deviceImg__/ref_dryer_on.webp';
import ref_dryer_off from '../__deviceImg__/ref_dryer_off.png';

import tank_alarm from '../__deviceImg__/tank_alarm.png';
import tank_fault from '../__deviceImg__/tank_fault.png';
import tank_on from '../__deviceImg__/tank_on.webp';
import tank_off from '../__deviceImg__/tank_off.png';

export default {
  // 1. 空调系统
  // 空调主机
  D0A1A: {
    alarm: ch_cert_alarm,
    fault: ch_cert_fault,
    on: ch_cert_on,
    off: ch_cert_off
  },
  // 水泵
  D0A1B: {
    alarm: pump_alarm,
    fault: pump_fault,
    on: pump_on,
    off: pump_off
  },
  D0A1C: {
    alarm: pump_alarm,
    fault: pump_fault,
    on: pump_on,
    off: pump_off
  },
  // 冷却塔
  D0A1D: {
    alarm: ct_alarm,
    fault: ct_fault,
    on: ct_on,
    off: ct_off
  },
  // 阀门
  D0A30: {
    off: valve_off,
    on: valve_on
  },
  D0A3A: {
    off: valve_off,
    on: valve_on
  },
  D0A3B: {
    off: valve_off,
    on: valve_on
  },
  D0A3C: {
    off: valve_off,
    on: valve_on
  },

  // 2. 空压系统
  // 空压机
  D0C1A: {
    alarm: acop_screw_alarm,
    fault: acop_screw_fault,
    on: acop_screw_on,
    off: acop_screw_off
  },
  //冷干机
  D0C1B: {
    alarm: ref_dryer_alarm,
    fault: ref_dryer_fault,
    on: ref_dryer_on,
    off: ref_dryer_off
  },
  // 吸干机
  D0C1C: {
    alarm: des_dryer_alarm,
    fault: des_dryer_fault,
    on: des_dryer_on,
    off: des_dryer_off
  },
  // 储气湿罐
  D0C1D: {
    alarm: tank_alarm,
    fault: tank_fault,
    on: tank_on,
    off: tank_off
  },
  // 储气干罐
  D0C1E: {
    alarm: tank_alarm,
    fault: tank_fault,
    on: tank_on,
    off: tank_off
  }
};