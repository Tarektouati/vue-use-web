import { ref, onMounted, onUnmounted, Ref } from 'vue';

export function useGeolocation(options: PositionOptions) {
  const locatedAt: Ref<number | null> = ref(null);
  const error = ref('');
  const coords: Ref<Position['coords']> = ref({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });

  function updatePosition(position: Position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = '';
  }

  let watcher: number;
  onMounted(() => {
    if ('geolocation' in navigator) {
      watcher = window.navigator.geolocation.watchPosition(updatePosition, undefined, options);
    }
  });

  onUnmounted(() => {
    if (watcher) {
      window.navigator.geolocation.clearWatch(watcher);
    }
  });

  return {
    coords,
    locatedAt,
    error
  };
}
