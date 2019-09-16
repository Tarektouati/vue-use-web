import { onMounted, onUnmounted, reactive, toRefs, onBeforeMount } from '@vue/composition-api';
import { throttle } from './utils';

interface WindowScrollOptions {
  throttleMs: number;
}

export function useWindowScrollPosition(options: WindowScrollOptions = { throttleMs: 100 }) {
  const state = reactive({ x: 0, y: 0 });

  function setScrollPos() {
    state.x = window.pageXOffset;
    state.y = window.pageYOffset;
  }

  const onScroll = throttle(options.throttleMs, setScrollPos);

  onBeforeMount(() => {
    setScrollPos();
  });

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return {
    ...toRefs(state)
  };
}
