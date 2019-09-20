import { reactive, toRefs, onMounted, onUnmounted } from '@vue/composition-api';

export function useGeolocation(options: PositionOptions) {
  const data: {
    error: string;
    coords: Position['coords'];
    locatedAt: Date | undefined;
  } = {
    coords: {
      accuracy: 0,
      latitude: 0,
      longitude: 0,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null
    },
    locatedAt: undefined,
    error: ''
  };

  const state = reactive(data);

  function updatePosition(position: Position) {
    state.locatedAt = new Date(position.timestamp);
    state.coords = position.coords;
    state.error = '';
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
