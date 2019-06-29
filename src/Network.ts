import Vue, { VueConstructor } from 'vue';
import { normalizeChildren } from './utils';

interface NetworkSlotProps {
  isOnline: boolean;
  offlineAt: Date | null;
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
    isListening: false
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

      this.isListening = true;
    }
  },
  render(h) {
    const slotProps: NetworkSlotProps = {
      isOnline: this.isOnline,
      offlineAt: this.offlineAt
    };

    const children = normalizeChildren(this, slotProps);
    // SSR Handling.
    if (typeof window === 'undefined') {
      return h('div', children);
    }

    if (!this.isListening) {
      this.isOnline = window.navigator.onLine;
      this.offlineAt = this.isOnline ? null : new Date();
    }

    return h('div', children);
  }
});
