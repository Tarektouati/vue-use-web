import { reactive, toRefs, onMounted, onUnmounted } from '@vue/composition-api';

export function useGeolocation(options: PositionOptions) {
  const data: {
    error: string;
    coords?: Position['coords'];
    locatedAt?: Date;
  } = {
    coords: undefined,
    locatedAt: undefined,
    error: ''
  };

  const state = reactive(data);

  function updatePosition(position: Position) {
    state.locatedAt = new Date(position.timestamp);
    const coords = position.coords;
    state.coords = {
      accuracy: coords.accuracy,
      altitude: coords.altitude,
      altitudeAccuracy: coords.altitudeAccuracy,
      heading: coords.heading,
      latitude: coords.latitude,
      longitude: coords.longitude,
      speed: coords.speed
    };
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

  return { ...toRefs(state) };
}
