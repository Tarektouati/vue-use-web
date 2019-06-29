import Vue from 'vue';
import { normalizeChildren } from './utils';

let battery: any;
let isSetupDone = false;

const state = Vue.observable({
  isCharging: false,
  chargingTime: 0,
  dischargingTime: 0,
  level: 1
});

function updateBatteryInfo() {
  if (!battery) return;

  state.isCharging = battery.charging;
  state.chargingTime = battery.chargingTime || 0;
  state.dischargingTime = battery.dischargingTime || 0;
  state.level = battery.level;
  isSetupDone = true;
}

function addListeners() {
  if (!battery) return;

  battery.onchargingchange = () => {
    state.isCharging = battery.charging;
  };
  battery.onchargingtimechange = () => {
    state.chargingTime = battery.chargingTime;
  };
  battery.ondischargingtimechange = () => {
    state.dischargingTime = battery.dischargingTime;
  };
  battery.onlevelchange = () => {
    state.level = battery.level;
  };
}

export const Battery = Vue.extend({
  functional: true,
  render(_, ctx) {
    const children = normalizeChildren(ctx, state);
    // SSR Handling.
    if (typeof window === 'undefined') {
      return children;
    }

    if (!isSetupDone && 'getBattery' in navigator) {
      (navigator as any).getBattery().then((b: any) => {
        battery = b;
        updateBatteryInfo();
        addListeners();
      });
    }

    return children;
  }
});
