# Device Motion API

> The [DeviceMotionEvent](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent) provides web developers with information about the speed of changes for the device's position and orientation.

## State

The `useDeviceMotion` function exposes the following reactive state:

```js
import { useDeviceMotion } from 'vue-use-web';

const { acceleration, accelerationIncludingGravity, rotationRate, interval } = useDeviceMotion();
```

| State                        | Type     | Description                                                                                                          |
| ---------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| acceleration                 | `object` | An object giving the acceleration of the device on the three axis X, Y and Z.                                        |
| accelerationIncludingGravity | `object` | An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity.             |
| rotationRate                 | `object` | An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. |
| interval                     | `Number` | A number representing the interval of time, in milliseconds, at which data is obtained from the device..             |

You can find [more information about the state on the MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent#Properties).

## Example

```
TODO
```
