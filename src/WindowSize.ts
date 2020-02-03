import { onMounted, onUnmounted, ref, onBeforeMount } from '@vue/composition-api';
import { throttle } from './utils';

interface WindowSizeOptions {
  throttleMs: number;
}

export function useWindowSize(options: WindowSizeOptions = { throttleMs: 100 }) {
  const width = ref(0);
  const height = ref(0);

  function setSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  const onResize = throttle(options.throttleMs, setSize);
  onBeforeMount(() => {
    setSize();
  });

  onMounted(() => {
    window.addEventListener('resize', onResize, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  return {
    height,
    width
  };
}
