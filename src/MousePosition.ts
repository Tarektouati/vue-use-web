import { reactive, toRefs, onMounted, onUnmounted } from '@vue/composition-api';

export function useMousePosition() {
  const state = reactive({
    x: 0,
    y: 0
  });

  function handler(e: MouseEvent) {
    state.x = e.clientX;
    state.y = e.clientY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', handler, false);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handler, false);
  });

  return {
    ...toRefs(state)
  };
}
