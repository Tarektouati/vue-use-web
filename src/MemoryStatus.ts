import { ref, onMounted } from '@vue/composition-api';
import { hasWindow } from './utils';

export function useMemoryStatus() {
  const deviceMemory = ref(0);
  const unsupported = ref(false);
  const totalJSHeapSize = ref(null);
  const usedJSHeapSize = ref(null);
  const jsHeapSizeLimit = ref(null);

  function resolveMemory() {
    if (!hasWindow) {
      onMounted(resolveMemory);
    }

    if (!('deviceMemory' in window.navigator)) {
      unsupported.value = true;
      return;
    }

    deviceMemory.value = (window.navigator as any).deviceMemory;

    if ('memory' in window.performance) {
      const memory = (window.performance as any).memory;
      totalJSHeapSize.value = memory.totalJSHeapSize;
      usedJSHeapSize.value = memory?.usedJSHeapSize;
      jsHeapSizeLimit.value = memory?.jsHeapSizeLimit;
    }
  }

  resolveMemory();

  return { deviceMemory, unsupported };
}
