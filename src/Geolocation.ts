import { reactive, toRefs } from '@vue/composition-api';

interface GeolocationProps {
  coords?: Coordinates;
  locatedAt?: Date;
  error?: string;
}

let STATE: ReturnType<typeof initState>;
function initState() {
  const data: GeolocationProps = {
    coords: undefined,
    locatedAt: undefined,
    error: ''
  };

  return reactive(data);
}

function updatePosition(position: Position) {
  STATE.locatedAt = new Date(position.timestamp);
  const coords = position.coords;
  STATE.coords = {
    accuracy: coords.accuracy,
    altitude: coords.altitude,
    altitudeAccuracy: coords.altitudeAccuracy,
    heading: coords.heading,
    latitude: coords.latitude,
    longitude: coords.longitude,
    speed: coords.speed
  };
}

function onError(err: PositionError) {
  if (err.code === 1) {
    console.log('Permission denied!');
  }

  if (err.code === 2) {
    console.log('Position unavailable!');
  }

  if (err.code === 3) {
    console.log('Timeout!');
  }

  // TODO: Handle error.
  console.log('Unsupported!');
  STATE.error = err.message;
}

function locate() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      STATE.error = 'Geolocation API is not supported';
      return;
    }

    window.navigator.geolocation.getCurrentPosition(
      pos => {
        updatePosition(pos);
        resolve(pos);
      },
      err => {
        onError(err);
        reject(err);
      }
    );
  });
}

export function useGeolocation() {
  if (!STATE) {
    STATE = initState();
  }

  return { ...toRefs(STATE), locate };
}
