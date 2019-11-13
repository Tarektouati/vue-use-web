# Memory Status

This composition function exposes the `navigator.deviceMemory` value as well as some additional properties from the `performance.memory` which is only available in chrome as they are a non-standard.

## State

The `useMemoryStatus` function exposes the following reactive state:

```js
import { useMemoryStatus } from 'vue-use-web';

const { deviceMemory, unsupported, totalJSHeapSize, usedJSHeapSize, jsHeapSizeLimit } = useMemoryStatus();
```

| State           | Type                 | Description                                                               |
| --------------- | -------------------- | ------------------------------------------------------------------------- |
| deviceMemory    | `number`             | Approximate amount of device memory in gigabytes.                         |
| unsupported     | `Boolean`            | True if the API is supported an `deviceMemory` can be used.               |
| totalJSHeapSize | `number | undefined` | The total allocated heap size, in bytes.                                  |
| usedJSHeapSize  | `number | undefined` | usedJSHeapSize.                                                           |
| jsHeapSizeLimit | `number | undefined` | The maximum size of the heap, in bytes, that is available to the context. |

## Example

TODO: Probably a memory-intensive task and scale the algorithm depending on the memory available.
