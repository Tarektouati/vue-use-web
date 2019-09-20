# Geolocation API

> The [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

## State

The `useGeolocation` function exposes the following reactive state:

```js
import { useGeolocation } from 'vue-use-web';

const { coords, locatedAt, error } = useGeolocation();
```

- coords: A [coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) for the last position retrieved.
- locatedAt: A `Date` value representing the time of the last geolocation call.
- error: A `string` containing an error message in case geolocation API fails.

## Example

```vue
<template>
  <div>User position is: {{ coords.longitude }} {{ coords.latitude }}</div>
  <div>Last updated: {{ locatedAt }}</div>
</template>

<script>
import { useGeolocation } from 'vue-use-web';

export default {
  setup() {
    const { coords, locatedAt } = useGeolocation();

    return { coords, locatedAt };
  }
};
</script>
```

## Options

`useGeolocation` function takes [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object as an optional parameter.

```js
import { useGeolocation } from 'vue-use-web';

const { coords } = useGeolocation({
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
});
```
