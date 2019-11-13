# Hardware Concurrency

> The [Hardware Concurrency API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency) The navigator.hardwareConcurrency read-only property returns the number of logical processors available to run threads on the user's computer.

## State

The `useHardWareConcurrency` function exposes the following **readonly** reactive state:

```js
import { useHardwareConcurrency } from 'vue-use-web';

const { logicalProcessors } = useHardwareConcurrency();
```

| State             | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| logicalProcessors | `Number`  | Number of logical processors available on the device. |
| unsupported       | `Boolean` | If the API is unsupported.                            |

## Example

TODO: Some cool example!
