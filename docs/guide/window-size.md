# Window Scroll Position

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
