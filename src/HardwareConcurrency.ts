import { ref, onMounted } from '@vue/composition-api';
import { hasWindow } from './utils';

export function useHardwareConcurrency() {
  const logicalProcessors = ref(0);
  const unsupported = ref(false);

  function resolveConcurrency() {
    if (!hasWindow) {
      onMounted(resolveConcurrency);
    }

    if ('hardwareConcurrency' in window.navigator) {
      logicalProcessors.value = window.navigator.hardwareConcurrency;
    }

    unsupported.value = true;
  }

  resolveConcurrency();

  return { logicalProcessors, unsupported };
}
