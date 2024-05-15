
import ch_cert_alarm from '../__deviceImg__/ch_cert_alarm.png';
import ch_cert_fault from '../__deviceImg__/ch_cert_fault.png';
import ch_cert_on from '../__deviceImg__/ch_cert_on.gif';
import ch_cert_off from '../__deviceImg__/ch_cert_off.png';

import ct_alarm from '../__deviceImg__/ct_alarm.gif';
import ct_fault from '../__deviceImg__/ct_fault.png';
import ct_on from '../__deviceImg__/ct_on.png';
import ct_off from '../__deviceImg__/ct_off.png';


import pump_alarm from '../__deviceImg__/pump_alarm.png';
import pump_fault from '../__deviceImg__/pump_fault.png';
import pump_on from '../__deviceImg__/pump_on.gif';
import pump_off from '../__deviceImg__/pump_off.png';


import valve_off from '../__deviceImg__/valve_off.png';
import valve_on from '../__deviceImg__/valve_on.png';
export default {
  D0A1A: {
    alarm: ch_cert_alarm,
    fault: ch_cert_fault,
    on: ch_cert_on,
    off: ch_cert_off
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
  D0A1D: {
    alarm: ct_alarm,
    fault: ct_fault,
    on: ct_on,
    off: ct_off
  },
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
  }
};