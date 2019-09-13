import { reactive, onMounted, toRefs } from '@vue/composition-api';

let battery: any;
let STATE: ReturnType<typeof initState>;

function initState() {
  return reactive({
    isCharging: false,
    chargingTime: 0,
    dischargingTime: 0,
    level: 1
  });
}

function updateBatteryInfo() {
  if (!battery) return;

  STATE.isCharging = battery.charging;
  STATE.chargingTime = battery.chargingTime || 0;
  STATE.dischargingTime = battery.dischargingTime || 0;
  STATE.level = battery.level;
}

function addListeners() {
  if (!battery) return;

  battery.onchargingchange = () => {
    STATE.isCharging = battery.charging;
  };
  battery.onchargingtimechange = () => {
    STATE.chargingTime = battery.chargingTime;
  };
  battery.ondischargingtimechange = () => {
    STATE.dischargingTime = battery.dischargingTime;
  };
  battery.onlevelchange = () => {
    STATE.level = battery.level;
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
  if (!STATE) {
    STATE = initState();
  }

  if (!battery) {
    onMounted(() => {
      initBatteryAPI();
    });
  }

  return {
    ...toRefs(STATE)
  };
}
