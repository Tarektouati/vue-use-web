import { VNode, RenderContext } from 'vue';

export function normalizeChildren(ctx: RenderContext<Record<never, any>>, slotProps: any): VNode[] {
  if (ctx.scopedSlots.default) {
    return ctx.scopedSlots.default(slotProps) || [];
  }

  return ctx.slots().default || [];
}
