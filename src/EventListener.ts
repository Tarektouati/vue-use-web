import { onMounted, onBeforeUnmount, Ref, isRef } from '@vue/composition-api';

export function useEventListener<T extends EventTarget>(
  target: T | Ref<T>,
  type: string,
  handler: EventListener,
  options?: AddEventListenerOptions
) {
  onMounted(() => {
    const t = isRef(target) ? target.value : target;

    t.addEventListener(type, handler, options);
  });

  onBeforeUnmount(() => {
    const t = isRef(target) ? target.value : target;

    t.removeEventListener(type, handler, options);
  });
}
