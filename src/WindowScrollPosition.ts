import { onMounted, onUnmounted, reactive, toRefs } from '@vue/composition-api';
import { throttle } from './utils';

interface WindowScrollOptions {
  throttleMs: number;
}

export function useWindowScrollPosition(options: WindowScrollOptions = { throttleMs: 100 }) {
  const state = reactive({ x: 0, y: 0 });

  const setScrollPos = throttle(options.throttleMs, function onScroll() {
    state.x = window.pageXOffset;
    state.y = window.pageYOffset;
  });

  onMounted(() => {
    window.addEventListener('scroll', setScrollPos, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', setScrollPos);
  });

  return {
    ...toRefs(state)
  };
}
