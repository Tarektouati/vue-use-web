# Device Light

> The [DeviceLightEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent) provides web developers with information from photo sensors or similar detectors about ambient light levels near the device. For example this may be useful to adjust the screen's brightness based on the current ambient light level in order to save energy or provide better readability.

## State

The `useDeviceLight` function exposes the following reactive state:

```js
import { useDeviceLight } from 'vue-use-web';

const { value } = useDeviceLight();
```

| State | Type     | Description                                                                 |
| ----- | -------- | --------------------------------------------------------------------------- |
| value | `Number` | The level of the ambient light in [lux](https://en.wikipedia.org/wiki/Lux). |

## Use-cases

Detecting the ambient light around user devices can have some applications:

- Toggling between themes to adjust to the light level like using a dark theme in dark environments.

## Example

You can test the following example on Firefox browser with an Andriod device with a light sensor. You should enable ambient light sensor in firefox's settings' `about:config`.

```vue
<template>
  <div>Current Value is: {{ value }}</div>
</template>

<script>
import { useDeviceLight } from "vue-use-web";

export default {
  setup() {
    const { value } = useDeviceLight();

    return { value };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-battery-status-api-0fsny?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: Device Light" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
