import { onMounted, reactive, toRefs, onUnmounted } from '@vue/composition-api';
import { Writeable } from './types';

let STATE: ReturnType<typeof initState>;

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

function handler(event: DeviceMotionEvent) {
  STATE.acceleration = event.acceleration;
  STATE.accelerationIncludingGravity = event.accelerationIncludingGravity;
  STATE.rotationRate = event.rotationRate;
  STATE.interval = event.interval;
}

export function useDeviceMotion() {
  if (!STATE) {
    STATE = initState();
  }

  onMounted(() => {
    window.addEventListener('devicemotion', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('devicemotion', handler);
  });

  return {
    ...toRefs(STATE)
  };
}
