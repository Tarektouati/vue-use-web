import { onMounted, ref, onUnmounted, Ref } from '@vue/composition-api';
import { throttle } from './utils';

interface DeviceMotionOptions {
  throttleMs: 10;
}

export function useDeviceMotion(options: DeviceMotionOptions = { throttleMs: 10 }) {
  const acceleration: Ref<DeviceMotionEvent['acceleration']> = ref({ x: null, y: null, z: null });
  const rotationRate: Ref<DeviceMotionEvent['rotationRate']> = ref({ alpha: null, beta: null, gamma: null });
  const interval = ref(0);
  const accelerationIncludingGravity: Ref<DeviceMotionEvent['accelerationIncludingGravity']> = ref({
    x: null,
    y: null,
    z: null
  });

  function onDeviceMotion(event: DeviceMotionEvent) {
    acceleration.value = event.acceleration;
    accelerationIncludingGravity.value = event.accelerationIncludingGravity;
    rotationRate.value = event.rotationRate;
    interval.value = event.interval;
  }

  const handler = options.throttleMs ? throttle(options.throttleMs, onDeviceMotion) : onDeviceMotion;

  onMounted(() => {
    window.addEventListener('devicemotion', handler, false);
  });

  onUnmounted(() => {
    window.removeEventListener('devicemotion', handler, false);
  });

  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}
