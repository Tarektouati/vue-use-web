import Vue from 'vue';
import { normalizeChildren } from './utils';

let isSetupDone = false;

interface GeolocationProps {
  coords?: Coordinates;
  locatedAt?: Date;
  error?: string;
  locate: Function;
}

const state: GeolocationProps = Vue.observable({
  coords: undefined,
  locatedAt: undefined,
  error: '',
  locate: () => {
    window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
});

function onSuccess(position: Position) {
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
  state.error = err.message;
}

export const Geolocation = Vue.extend({
  functional: true,
  props: {
    watch: {
      type: Boolean,
      default: false
    }
  },
  render(_, ctx) {
    const children = normalizeChildren(ctx, state);
    // SSR Handling.
    if (typeof window === 'undefined') {
      return children;
    }

    if (!isSetupDone && 'geolocation' in window.navigator) {
      if (ctx.props.watch) {
        window.navigator.geolocation.watchPosition(onSuccess, onError);
      } else {
        state.locate();
      }

      isSetupDone = true;
    }

    return children;
  }
});
