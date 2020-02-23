import { VNode, CreateElement } from 'vue';

export const mountCompositionFunc = (cb: () => any) => ({
  setup() {
    return cb();
  },
  render(h: CreateElement): VNode {
    return h('div');
  }
});
