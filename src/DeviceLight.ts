import { onMounted, onUnmounted, ref, Ref } from '@vue/composition-api';

export function useDeviceLight() {
  const value: Ref<number | null> = ref(null);
  function handler(event: DeviceLightEvent) {
    value.value = event.value;
  }

  onMounted(() => {
    window.addEventListener('devicelight', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('devicelight', handler);
  });

  return {
    value
  };
}
