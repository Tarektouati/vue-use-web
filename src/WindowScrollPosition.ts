import { onMounted, onUnmounted, ref, onBeforeMount } from 'vue';
import { throttle } from './utils';

interface WindowScrollOptions {
  throttleMs: number;
}

export function useWindowScrollPosition(options: WindowScrollOptions = { throttleMs: 100 }) {
  const x = ref(0);
  const y = ref(0);

  function setScrollPos() {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
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
    x,
    y
  };
}
