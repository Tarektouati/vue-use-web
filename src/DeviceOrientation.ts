import { onMounted, reactive, toRefs, onUnmounted } from '@vue/composition-api';

function initState() {
  const data: {
    isAbsolute: boolean;
    alpha: number | null;
    beta: number | null;
    gamma: number | null;
  } = {
    isAbsolute: false,
    gamma: 0,
    alpha: 0,
    beta: 0
  };

  return reactive(data);
}

export function useDeviceOrientation() {
  const state = initState();

  function handler(event: DeviceOrientationEvent) {
    state.isAbsolute = event.absolute;
    state.alpha = event.alpha;
    state.beta = event.beta;
    state.gamma = event.gamma;
  }

  onMounted(() => {
    window.addEventListener('deviceorientation', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('deviceorientation', handler);
  });

  return {
    ...toRefs(state)
  };
}
