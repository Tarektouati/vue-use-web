import { reactive, onMounted, toRefs } from '@vue/composition-api';

type NetworkType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';

type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g';

interface NetworkSlotProps {
  isOnline: boolean;
  offlineAt: Date | null;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: NetworkEffectiveType;
  saveData?: boolean;
  type?: NetworkType;
}

let STATE: ReturnType<typeof initState>;

function initState() {
  const data: NetworkSlotProps = {
    isOnline: false,
    offlineAt: null,
    downlink: undefined,
    downlinkMax: undefined,
    effectiveType: undefined,
    saveData: undefined,
    type: undefined
  };

  return reactive(data);
}

function updateState() {
  STATE.isOnline = window.navigator.onLine;
  STATE.offlineAt = STATE.isOnline ? null : new Date();
  // skip for non supported browsers.
  if (!('connection' in window.navigator)) {
    return;
  }

  STATE.downlink = (window.navigator as any).connection.downlink;
  STATE.downlinkMax = (window.navigator as any).connection.downlinkMax;
  STATE.effectiveType = (window.navigator as any).connection.effectiveType;
  STATE.saveData = (window.navigator as any).connection.saveData;
  STATE.type = (window.navigator as any).connection.type;
}

let onOnline: EventListenerOrEventListenerObject;
let onOffline: EventListenerOrEventListenerObject;
const onChange: EventListenerOrEventListenerObject = () => updateState();

// function removeListeners() {
//   window.removeEventListener('offline', onOffline);
//   window.removeEventListener('online', onOnline);
// }

function addListeners() {
  onOffline = () => {
    STATE.isOnline = false;
    STATE.offlineAt = new Date();
  };

  onOnline = () => {
    STATE.isOnline = true;
  };

  window.addEventListener('offline', onOffline);
  window.addEventListener('online', onOnline);
  if ('connection' in window.navigator) {
    (window.navigator as any).connection.onchange = onChange;
  }
}

export function useNetwork() {
  if (!STATE) {
    STATE = initState();
    onMounted(() => {
      updateState();
      addListeners();
    });
  }

  return { ...toRefs(STATE) };
}
