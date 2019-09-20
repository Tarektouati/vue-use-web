import { onMounted, reactive, toRefs, onUnmounted } from '@vue/composition-api';
import { Writeable } from './types';

function initState() {
  const defaults = () => ({
    x: null,
    y: null,
    z: null
  });

  const data: Writeable<
    Pick<DeviceMotionEvent, 'acceleration' | 'accelerationIncludingGravity' | 'interval' | 'rotationRate'>
  > = {
    acceleration: defaults(),
    accelerationIncludingGravity: defaults(),
    rotationRate: {
      alpha: null,
      beta: null,
      gamma: null
    },
    interval: 0
  };

  return reactive(data);
}

export function useDeviceMotion() {
  const state = initState();

  function handler(event: DeviceMotionEvent) {
    state.acceleration = event.acceleration;
    state.accelerationIncludingGravity = event.accelerationIncludingGravity;
    state.rotationRate = event.rotationRate;
    state.interval = event.interval;
  }

  onMounted(() => {
    window.addEventListener('devicemotion', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('devicemotion', handler);
  });

  return {
    ...toRefs(state)
  };
}
