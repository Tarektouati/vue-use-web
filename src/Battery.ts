import { reactive, onMounted, toRefs } from '@vue/composition-api';

let battery: any;

const state = reactive({
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

function initBatteryAPI() {
  if (!('getBattery' in navigator)) {
    return;
  }

  (navigator as any).getBattery().then((b: any) => {
    battery = b;
    updateBatteryInfo();
    addListeners();
  });
}

export function useBattery() {
  if (!battery) {
    onMounted(() => {
      initBatteryAPI();
    });
  }

  return {
    ...toRefs(state)
  };
}
