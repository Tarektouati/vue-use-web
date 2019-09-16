import { onMounted, reactive, toRefs, onUnmounted } from '@vue/composition-api';

let STATE: ReturnType<typeof initState>;

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

function handler(event: DeviceOrientationEvent) {
  STATE.isAbsolute = event.absolute;
  STATE.alpha = event.alpha;
  STATE.beta = event.beta;
  STATE.gamma = event.gamma;
}

export function useDeviceOrientation() {
  if (!STATE) {
    STATE = initState();
  }

  onMounted(() => {
    window.addEventListener('deviceorientation', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('deviceorientation', handler);
  });

  return {
    ...toRefs(STATE)
  };
}
