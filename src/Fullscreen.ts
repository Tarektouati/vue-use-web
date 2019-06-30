import Vue from 'vue';
import { normalizeChildren } from './utils';

export const Fullscreen = Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    enter(mode: FullscreenNavigationUI = 'auto') {
      return this.$el.requestFullscreen({ navigationUI: mode }).then(() => {
        this.isActive = true;
      });
    },
    exit() {
      return window.document.exitFullscreen().then(() => {
        this.isActive = false;
      });
    }
  },
  render(h) {
    const children = normalizeChildren(this, {
      exit: this.exit,
      isActive: this.isActive,
      enter: this.enter
    });

    return h('span', children);
  }
});
