# Mouse Position

This API provides access to the `x` and `y` of the mouse cursor position.

## State

The `useMousePosition` function exposes the following reactive state:

```js
import { useMousePosition } from 'vue-use-web';

const { x, y } = useMousePosition();
```

| State | Type     | Description                                 |
| ----- | -------- | ------------------------------------------- |
| x     | `Number` | The mouse cursor position along the x-axis. |
| y     | `Number` | The mouse cursor position along the y-axis. |

:::tip Note!
By default the updates the state are throttled by 100ms to keep things snappy but you can configure that.
:::

## Config

`useMousePosition` function takes an options object as an optional parameter.

```js
import { useMousePosition } from 'vue-use-web';

const { x, y } = useMousePosition();
```

## Example

```vue
<template>
  <div>x: {{ x }} y: {{ y }}</div>
</template>

<script>
// import { ref } from "@vue/composition-api";
import { useMousePosition } from 'vue-use-web';

export default {
  setup() {
    const { x, y } = useMousePosition();

    return { x, y };
  }
};
</script>
```

### Demo

<iframe src="https://codesandbox.io/embed/vue-use-web-use-scroll-position-jb5sz?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: use mouse position" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

> Credits: [Codepen by Chuloo](https://codepen.io/Chuloo/pen/RQYbvm)
