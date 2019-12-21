import { onMounted, reactive, toRefs, onUnmounted } from '@vue/composition-api';
import { Writeable } from './types';
import { throttle } from './utils';

function initState() {
  const defaults = () => ({
    x: null,
    y: null,
    z: null
  });

  const data: Writeable<Pick<
    DeviceMotionEvent,
    'acceleration' | 'accelerationIncludingGravity' | 'interval' | 'rotationRate'
  >> = {
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

interface DeviceMotionOptions {
  throttleMs: 10;
}

export function useDeviceMotion(options: DeviceMotionOptions = { throttleMs: 10 }) {
  const state = initState();

  function onDeviceMotion(event: DeviceMotionEvent) {
    state.acceleration = event.acceleration;
    state.accelerationIncludingGravity = event.accelerationIncludingGravity;
    state.rotationRate = event.rotationRate;
    state.interval = event.interval;
  }

  const handler = options.throttleMs ? throttle(options.throttleMs, onDeviceMotion) : onDeviceMotion;
  onMounted(() => {
    window.addEventListener('devicemotion', handler, false);
  });

  onUnmounted(() => {
    window.removeEventListener('devicemotion', handler, false);
  });

  return {
    ...toRefs(state)
  };
}
