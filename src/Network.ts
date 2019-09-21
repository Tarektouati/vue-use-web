import { reactive, onMounted, toRefs, onUnmounted } from '@vue/composition-api';

type NetworkType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';

type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g';

interface NetworkState {
  isOnline: boolean;
  offlineAt: Date | undefined;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: NetworkEffectiveType;
  saveData?: boolean;
  type?: NetworkType;
}

function makeState() {
  const data: NetworkState = {
    isOnline: false,
    offlineAt: undefined,
    downlink: undefined,
    downlinkMax: undefined,
    effectiveType: undefined,
    saveData: undefined,
    type: undefined
  };

  return reactive(data);
}

export function useNetwork() {
  const state = makeState();

  function updateNetworkInformation() {
    state.isOnline = window.navigator.onLine;
    state.offlineAt = state.isOnline ? undefined : new Date();
    // skip for non supported browsers.
    if (!('connection' in window.navigator)) {
      return;
    }

    state.downlink = (window.navigator as any).connection.downlink;
    state.downlinkMax = (window.navigator as any).connection.downlinkMax;
    state.effectiveType = (window.navigator as any).connection.effectiveType;
    state.saveData = (window.navigator as any).connection.saveData;
    state.type = (window.navigator as any).connection.type;
  }

  const onOffline = () => {
    state.isOnline = false;
    state.offlineAt = new Date();
  };

  const onOnline = () => {
    state.isOnline = true;
  };

  onMounted(() => {
    updateNetworkInformation();
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);
    if ('connection' in window.navigator) {
      (window.navigator as any).connection.addEventListener('change', updateNetworkInformation, false);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('offline', onOffline);
    window.removeEventListener('online', onOnline);
    if ('connection' in window.navigator) {
      (window.navigator as any).connection.removeEventListener('change', updateNetworkInformation, false);
    }
  });

  return { ...toRefs(state) };
}
