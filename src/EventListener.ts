import { onMounted, onBeforeUnmount } from '@vue/composition-api';

export function useEventListener<T extends EventTarget>(
  target: T,
  type: string,
  handler: EventListener,
  options?: AddEventListenerOptions
) {
  onMounted(() => {
    target.addEventListener(type, handler, options);
  });

  onBeforeUnmount(() => {
    target.removeEventListener(type, handler, options);
  });
}
