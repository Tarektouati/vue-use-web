# Geolocation API

> The [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

## State

The `useGeolocation` function exposes the following reactive state:

```js
import { useGeolocation } from 'vue-use-web';

const { coords, locatedAt, error } = useGeolocation();
```

| State     | Type                                                                        | Description                                                              |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| coords    | [Coordinates](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates) | information about the position retrieved like the latitude and longitude |
| locatedAt | `Date`                                                                      | The time of the last geolocation call                                    |
| error     | `string`                                                                    | An error message in case geolocation API fails.                          |

## Config

`useGeolocation` function takes [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object as an optional parameter.

```js
import { useGeolocation } from 'vue-use-web';

const { coords } = useGeolocation({
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
});
```

## Example

```vue
<template>
  <div>
    <div>User position is: {{ coords.longitude }} {{ coords.latitude }}</div>
    <div>Last updated: {{ locatedAt }}</div>
  </div>
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

<iframe src="https://codesandbox.io/embed/vue-use-web-fullscreen-api-ml79d?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: geolocation API" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
