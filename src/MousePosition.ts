import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function handler(e: MouseEvent) {
    x.value = e.clientX;
    x.value = e.clientY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', handler, false);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handler, false);
  });

  return {
    x,
    y
  };
}
