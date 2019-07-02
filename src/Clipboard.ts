import Vue from 'vue';
import { normalizeChildren } from './utils';

const state = Vue.observable({
  text: '',
  copy: (text: string) => {
    state.text = text;

    return navigator.clipboard.writeText(text);
  }
});

let setup = false;

export const Clipboard = Vue.extend({
  functional: true,
  render(_, ctx) {
    const children = normalizeChildren(ctx, state);
    if (!setup && typeof window !== 'undefined') {
      window.addEventListener('copy', () => {
        Vue.nextTick(async () => {
          state.text = await navigator.clipboard.readText();
        });
      });

      setup = true;
    }

    return children;
  }
});
