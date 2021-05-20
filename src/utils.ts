export function throttle<T extends (...args: any[]) => void>(wait: number, fn: T): T {
  if (wait === 0) {
    return fn;
  }

  let timeout: ReturnType<typeof setTimeout> || undefined;

  return ((...args: Parameters<T> ) => {
    const later = () => {
      timeout = undefined;

      // check if the fn call was cancelled.
      fn(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }) as T;
}


export const hasWindow = typeof window !== 'undefined';
