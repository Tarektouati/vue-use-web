import Vue, { VNode, RenderContext } from 'vue';

type RenderCtx = Vue | RenderContext;

export function normalizeChildren(ctx: RenderCtx, slotProps: any): VNode[] {
  return normalizeSlot(ctx, 'default', slotProps);
}

export function normalizeSlot(ctx: RenderCtx, slotName: string, slotProps: any): VNode[] {
  const scopes = (ctx as Vue).$scopedSlots || (ctx as RenderContext).scopedSlots;
  const slot = scopes[slotName];
  if (slot) {
    return slot(slotProps) || [];
  }

  const slots = (ctx as Vue).$slots || (ctx as RenderContext).slots();

  return slots[slotName] || [];
}
