import { onMounted, onUnmounted } from '@vue/composition-api';

export function throttle<T extends (...args: any[]) => void>(wait: number, fn: T): T {
  if (wait === 0) {
    return fn;
  }

  let timeout: number | undefined;

  return ((...args: any[]) => {
    const later = () => {
      timeout = undefined;

      // check if the fn call was cancelled.
      fn(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait) as any;
  }) as T;
}

export const hasWindow = typeof window !== 'undefined';

export function useEventListener(
  element: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: EventListenerOptions
) {
  onMounted(() => {
    element.addEventListener(type, listener, options);
  });

  onUnmounted(() => {
    element.removeEventListener(type, listener, options);
  });
}

export const useDocumentEventListener = (
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: EventListenerOptions
) => useEventListener(document, type, listener, options);

export const useWindowEventListener = (
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: EventListenerOptions
) => useEventListener(window, type, listener, options);
