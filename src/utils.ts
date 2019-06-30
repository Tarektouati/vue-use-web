import Vue, { VNode, RenderContext } from 'vue';

type RenderCtx = Vue | RenderContext;

export function normalizeChildren(ctx: RenderCtx, slotProps: any): VNode[] {
  const scopes = (ctx as Vue).$scopedSlots || (ctx as RenderContext).scopedSlots;
  if (scopes.default) {
    return scopes.default(slotProps) || [];
  }

  const slots = (ctx as Vue).$slots || (ctx as RenderContext).slots();

  return slots.default || [];
}
