# Device Media

> The MediaDevices interface provides access to connected [media input devices](https://developer.mozilla.org/fr/docs/Web/API/MediaDevices) like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data..

## State

```js
import { useDeviceMedia } from 'vue-use-web';

const { stream } = useUserMedia({ audio: false, video: true });
```

`useDeviceMedia` returns a 2 values:

| State  | Type               | Description                               |
| ------ | ------------------ | ----------------------------------------- |
| stream | `Ref<MediaStream>` | Audio and video stream.                   |
| error  | `Ref<Error>`       | An error message in case mediaDevices API |

## Example

```vue
<template>
  <video controls ref="videoElement"></video>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useDeviceMedia } from 'vue-use-web';

export default {
  setup() {
    const { stream, error } = useUserMedia({ audio: true, video: true });
    const videoElement = ref(null);
    return { stream, error, videoElement };
  }
};
</script>
```

## Demo

TODO: Add cool live example!
