# Window Size

This API provides access to the `width` and `height` of the browser window.

## State

The `useWindowSize` function exposes the following reactive state:

```js
import { useWindowSize } from 'vue-use-web';

const { width, height } = useWindowSize();
```

| State  | Type     | Description                         |
| ------ | -------- | ----------------------------------- |
| width  | `Number` | The client window width in pixels.  |
| height | `Number` | The client window height in pixels. |

:::tip Note!
By default the updates the state are throttled by 100ms to keep things snappy but you can configure that.
:::

## Config

`useWindowSize` function takes an options object as an optional parameter.

```js
import { useWindowSize } from 'vue-use-web';

const { width, height } = useWindowSize({
  throttleMs: 100
});
```

| Config     | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| throttleMs | `Number` | The debounce rate of the updates to the state. |

## Example

```vue
<template>
  <div>
    <div>
      <div>width: {{ width }}</div>
      <div>height: {{ height }}</div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from 'vue-use-web';

export default {
  setup() {
    const { width, height } = useWindowSize();

    return {
      width,
      height
    };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-use-scroll-position-3orjx?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: use window size" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
