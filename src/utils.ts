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
  element: Document | Window | Element,
  type: string,
  listener: EventListenerOrEventListenerObject
) {
  onMounted(() => {
    element.addEventListener(type, listener);
  });

  onUnmounted(() => {
    element.removeEventListener(type, listener);
  });
}

export const useDocumentEventListener = (type: string, listener: EventListenerOrEventListenerObject) =>
  useEventListener(document, type, listener);

export const useWindowEventListener = (type: string, listener: EventListenerOrEventListenerObject) =>
  useEventListener(window, type, listener);
