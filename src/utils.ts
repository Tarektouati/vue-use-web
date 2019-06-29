import Vue, { VNode } from 'vue';

export function normalizeChildren(context: Vue, slotProps: any): VNode[] {
  if (context.$scopedSlots.default) {
    return context.$scopedSlots.default(slotProps) || [];
  }

  return context.$slots.default || [];
}
