import Vue, { VueConstructor } from 'vue';
import { normalizeChildren } from './utils';

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

let isSetupDone = false;

const state: NetworkSlotProps = Vue.observable({
  isOnline: false,
  offlineAt: null,
  isListening: false,
  downlink: undefined,
  downlinkMax: undefined,
  effectiveType: undefined,
  saveData: undefined,
  type: undefined
});

let onOnline: EventListenerOrEventListenerObject;
let onOffline: EventListenerOrEventListenerObject;
let onChange: EventListenerOrEventListenerObject;

function removeListeners() {
  window.removeEventListener('offline', onOffline);
  window.removeEventListener('online', onOnline);
}

function updateConnectionProperties() {
  state.isOnline = window.navigator.onLine;
  state.offlineAt = state.isOnline ? null : new Date();
  state.downlink = (window.navigator as any).connection.downlink;
  state.downlinkMax = (window.navigator as any).connection.downlinkMax;
  state.effectiveType = (window.navigator as any).connection.effectiveType;
  state.saveData = (window.navigator as any).connection.saveData;
  state.type = (window.navigator as any).connection.type;
  isSetupDone = true;
}

function addListeners() {
  if (onOffline) return;

  onOffline = () => {
    state.isOnline = false;
    state.offlineAt = new Date();
  };

  onOnline = () => {
    state.isOnline = true;
  };

  window.addEventListener('offline', onOffline);
  window.addEventListener('online', onOnline);
  if ('connection' in window.navigator) {
    (window.navigator as any).connection.onchange = () => {
      updateConnectionProperties();
    };
  }
}

export const Network = Vue.extend({
  functional: true,
  render(_, ctx) {
    const children = normalizeChildren(ctx, state);
    // SSR Handling.
    if (typeof window === 'undefined') {
      return children;
    }

    if (!isSetupDone) {
      updateConnectionProperties();
      addListeners();
    }

    return children;
  }
});
