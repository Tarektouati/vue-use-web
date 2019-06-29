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

interface NetworkComponentData extends NetworkSlotProps {
  isListening: boolean;
}

type withNetworkNode = VueConstructor<
  Vue & {
    _onOnline: EventListenerOrEventListenerObject;
    _onOffline: EventListenerOrEventListenerObject;
  }
>;

export const Network = (Vue as withNetworkNode).extend({
  data: (): NetworkComponentData => ({
    isOnline: false,
    offlineAt: null,
    isListening: false,
    downlink: undefined,
    downlinkMax: undefined,
    effectiveType: undefined,
    saveData: undefined,
    type: undefined
  }),
  mounted() {
    // in-case it wasn't listening already.
    this.attachListeners();
  },
  beforeDestroy() {
    window.removeEventListener('offline', this._onOffline);
    window.removeEventListener('online', this._onOnline);
  },
  methods: {
    updateConnectionProperties() {
      this.downlink = (window.navigator as any).connection.downlink;
      this.downlinkMax = (window.navigator as any).connection.downlinkMax;
      this.effectiveType = (window.navigator as any).connection.effectiveType;
      this.saveData = (window.navigator as any).connection.saveData;
      this.type = (window.navigator as any).connection.type;
    },
    attachListeners() {
      if (this.isListening) return;

      this._onOffline = () => {
        this.isOnline = false;
        this.offlineAt = new Date();
        this.$emit('offline');
      };

      this._onOnline = () => {
        this.isOnline = true;
        this.$emit('online');
      };

      window.addEventListener('offline', this._onOffline);
      window.addEventListener('online', this._onOnline);
      if ('connection' in window.navigator) {
        (window.navigator as any).connection.onchange = () => {
          this.updateConnectionProperties();
        };
      }

      this.isListening = true;
    }
  },
  render(h) {
    const slotProps: NetworkSlotProps = {
      isOnline: this.isOnline,
      offlineAt: this.offlineAt,
      downlink: this.downlink,
      downlinkMax: this.downlinkMax,
      effectiveType: this.effectiveType,
      saveData: this.saveData,
      type: this.type
    };

    const children = normalizeChildren(this, slotProps);
    // SSR Handling.
    if (typeof window === 'undefined') {
      return h('div', children);
    }

    if (!this.isListening) {
      this.isOnline = window.navigator.onLine;
      this.offlineAt = this.isOnline ? null : new Date();
      if ((window.navigator as any).connection) {
        this.updateConnectionProperties();
      }
    }

    return h('div', children);
  }
});
