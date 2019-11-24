# Window Scroll Position

This API provides access to the `x` and `y` of the scroll position.

## State

The `useWindowScrollPosition` function exposes the following reactive state:

```js
import { useWindowScrollPosition } from 'vue-use-web';

const { x, y } = useWindowScrollPosition();
```

| State | Type     | Description                           |
| ----- | -------- | ------------------------------------- |
| x     | `Number` | The scroll position along the x-axis. |
| y     | `Number` | The scroll position along the y-axis. |

:::tip Note!
By default the updates the state are throttled by 100ms to keep things snappy but you can configure that.
:::

## Config

`useWindowScrollPosition` function takes an options object as an optional parameter.

```js
import { useWindowScrollPosition } from 'vue-use-web';

const { x, y } = useWindowScrollPosition({
  throttleMs: 100
});
```

| Config     | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| throttleMs | `Number` | The debounce rate of the updates to the state. |

## Example

```vue
<template>
  <div class="scroll">
    <div class="values">
      <div>x: {{ x }}</div>
      <div>y: {{ y }}</div>
    </div>
  </div>
</template>

<script>
import { useWindowScrollPosition } from 'vue-use-web';

export default {
  setup() {
    const { x, y } = useWindowScrollPosition();

    return {
      x,
      y
    };
  }
};
</script>

<style scoped>
.scroll {
  height: 3000px;
  width: 3000px;
}

.values {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-usescript-jv4mv?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: use scroll position" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
