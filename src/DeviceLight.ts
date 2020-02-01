import { onMounted, onUnmounted, ref, Ref } from 'vue';

export function useDeviceLight() {
  const value: Ref<number | null> = ref(null);
  function handler(event: DeviceLightEvent) {
    value.value = event.value;
  }

  // TODO: Should we debounce/throttle the event?
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
