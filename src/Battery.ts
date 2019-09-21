import { reactive, onMounted, toRefs, onUnmounted } from '@vue/composition-api';

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

type NavigatorWithBattery = Navigator & {
  getBattery: () => Promise<BatteryManager>;
};

const events = ['chargingchange', 'chargingtimechange', 'dischargingtimechange', 'levelchange'];

export function useBattery() {
  const state = reactive({
    isCharging: false,
    chargingTime: 0,
    dischargingTime: 0,
    level: 1
  });

  function updateBatteryInfo(this: BatteryManager) {
    state.isCharging = this.charging;
    state.chargingTime = this.chargingTime || 0;
    state.dischargingTime = this.dischargingTime || 0;
    state.level = this.level;
  }

  onMounted(() => {
    if (!('getBattery' in navigator)) {
      return;
    }

    (navigator as NavigatorWithBattery).getBattery().then(battery => {
      updateBatteryInfo.call(battery);
      events.forEach(evt => {
        battery.addEventListener(evt, updateBatteryInfo);
      });
    });
  });

  onUnmounted(() => {
    if (!('getBattery' in navigator)) {
      return;
    }

    (navigator as NavigatorWithBattery).getBattery().then(battery => {
      events.forEach(evt => {
        battery.removeEventListener(evt, updateBatteryInfo);
      });
    });
  });

  return {
    ...toRefs(state)
  };
}
