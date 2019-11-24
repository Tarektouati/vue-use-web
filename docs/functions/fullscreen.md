# Full Screen

> The [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) adds methods to present a specific Element (and its descendants) in full-screen mode, and to exit full-screen mode once it is no longer needed. This makes it possible to present desired content—such as an online game—using the user's entire screen, removing all browser user interface elements and other applications from the screen until full-screen mode is shut off.

## State

The `useFullscreen` function exposes the following reactive state:

```js
import { useFullscreen } from 'vue-use-web';
import { ref } from '@vue/composition-api';

const elem = ref(null);

const { isFullscreen } = useFullscreen(elem);
```

| State        | Type      | Description                                      |
| ------------ | --------- | ------------------------------------------------ |
| isFullscreen | `Boolean` | If the element is currently in full screen mode. |

## Methods

The `useFullscreen` function exposes the following methods:

```js
import { ref } from '@vue/composition-api';
import { useFullscreen } from 'vue-use-web';

const elem = ref(null);

const { enterFullscreen } = useFullscreen(elem);
```

| Signature               | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `enterFullscreen(void)` | Enters the fullscreen mode for the element.      |
| `exitFullscreen(void)`  | Exits the fullscreen mode from **all** elements. |

## Example

```vue
<template>
  <div>
    <video ref="el" src="https://vjs.zencdn.net/v/oceans.mp4" controls></video>
    <button @click="enterFullscreen">Go Full!</button>
  </div>
</template>

<script>
import { useFullscreen } from 'vue-use-web';
import { ref, onMounted } from '@vue/composition-api';

export default {
  setup() {
    const el = ref(null);
    const { enterFullscreen, exitFullscreen } = useFullscreen(el);

    onMounted(() => {
      setInterval(() => {
        exitFullscreen();
      }, 5000);
    });

    return {
      el,
      enterFullscreen
    };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-clipboard-api-zybgo?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: Fullscreen API" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
