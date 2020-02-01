import { onMounted, onUnmounted, ref, Ref } from 'vue';

export function useDeviceOrientation() {
  const isAbsolute = ref(false);
  const alpha: Ref<number | null> = ref(0);
  const beta: Ref<number | null> = ref(0);
  const gamma: Ref<number | null> = ref(0);

  function handler(event: DeviceOrientationEvent) {
    isAbsolute.value = event.absolute;
    alpha.value = event.alpha;
    beta.value = event.beta;
    gamma.value = event.gamma;
  }

  onMounted(() => {
    window.addEventListener('deviceorientation', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('deviceorientation', handler);
  });

  return {
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}
