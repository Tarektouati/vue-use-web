# Battery Status

> The [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

## State

The `useBattery` function exposes the following reactive state:

```js
import { useBattery } from 'vue-use-web';

const { isCharging, chargingTime, dischargingTime, level } = useBattery();
```

| State           | Type      | Description                                                       |
| --------------- | --------- | ----------------------------------------------------------------- |
| isCharging      | `Boolean` | If the device is currently charging.                              |
| chargingTime    | `Number`  | The number of seconds until the device becomes fully charged.     |
| dischargingTime | `Number`  | The number of seconds before the device becomes fully discharged. |
| level           | `Number`  | A number between 0 and 1 representing the current charge level.   |

## Use-cases

Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users.

- Trigger a special "dark-mode" battery saver theme settings.
- Stop auto playing videos in news feeds.
- Disable some background workers that are not critical.
- Limit network calls and reduce CPU/Memory consumption.

## Example

Try the following example with a device that has batteries and chrome browser.

```vue
<template>
  <div>
    <div>Your device is currently: {{ isCharging ? 'Charging' : 'Discharging' }}</div>
    <div v-if="isCharging">Time to fully charge: {{ chargingTime }}</div>
    <div v-else>Time to fully dis-charge: {{ dischargingTime }}</div>
    <div>Current Level: {{ level }}</div>
  </div>
</template>

<script>
import { useBattery } from 'vue-use-web';

export default {
  setup() {
    const { isCharging, chargingTime, dischargingTime, level } = useBattery();

    return { isCharging, chargingTime, dischargingTime, level };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-template-gdchw?fontsize=14&module=%2Fsrc%2FApp.vue" title="Vue Template" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
