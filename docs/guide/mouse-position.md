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

TODO: EXAMPLE
