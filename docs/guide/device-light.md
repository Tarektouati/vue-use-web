# Device Light API

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

## Example

```
TODO
```
