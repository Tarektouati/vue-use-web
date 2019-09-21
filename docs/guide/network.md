# Network Information API

> The [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.). This can be used to select high definition content or low definition content based on the user's connection. The entire API consists of the addition of the NetworkInformation interface and a single property to the Navigator interface: Navigator.connection.

## State

The `useNetwork` function exposes the following reactive state:

```js
import { useNetwork } from 'vue-use-web';

const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork();
```

This is the TypeScript interface for the state:

```ts
type NetworkType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';

type NetworkEffectiveType = 'slow-2g' | '2g' | '3g' | '4g';

interface NetworkState {
  isOnline: boolean;
  offlineAt: Date | null;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: NetworkEffectiveType;
  saveData?: boolean;
  type?: NetworkType;
}
```

| State         | Type                 | Description                                 |
| ------------- | -------------------- | ------------------------------------------- |
| isOnline      | `boolean`            | If the user is currently connected.         |
| offlineAt     | `Date | undefined`   | The time since the user was last connected. |
| downlink      | `Number | undefined` | The download speed in Mbps.                 |
| downlinkMax   | `Number | undefined` | The max reachable download speed in Mbps.   |
| effectiveType | `string | undefined` | The detected effective speed type.          |
| saveData      | `boolean| undefined` | If the user activated data saver mode.      |
| type          | `string | undefined` | The detected connection/network type.       |

## Example

```vue
<template>
  <div>
    <ul>
      <li>You are currently {{ isOnline ? 'Online' : 'Offline' }}</li>
      <li v-if="!isOnline">You were disconnected: {{ seconds }} seconds ago.</li>
      <li>Your current download speed is: {{ downlink }}Mbps</li>
      <li>Your max download speed is: {{ downlink }}Mbps</li>
      <li>You seem to be using {{ type }} to connect.</li>
      <li>Your data saver is {{ saveData ? 'on' : 'off' }}.</li>
      <li>Your speed is similar to {{ effectiveType }} speeds.</li>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import { useNetwork } from 'vue-use-web';

export default {
  setup() {
    const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork();

    // build a computed prop around it.
    const seconds = computed(() => {
      if (!offlineAt.value) {
        return '0';
      }

      return ((Date.now() - offlineAt.getTime()) / 1000).toFixed(0);
    });

    return { isOnline, downlink, downlinkMax, effectiveType, saveData, type, seconds };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-intersection-observer-2bif2?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: network information API" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
