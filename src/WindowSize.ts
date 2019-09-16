import { onMounted, onUnmounted, reactive, toRefs, onBeforeMount } from '@vue/composition-api';
import { throttle } from './utils';

interface WindowSizeOptions {
  throttleMs: number;
}

export function useWindowSize(options: WindowSizeOptions = { throttleMs: 100 }) {
  const state = reactive({ width: 0, height: 0 });

  function setSize() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
  }

  const onScroll = throttle(options.throttleMs, setSize);
  onBeforeMount(() => {
    setSize();
  });

  onMounted(() => {
    window.addEventListener('resize', onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onScroll);
  });

  return {
    ...toRefs(state)
  };
}
