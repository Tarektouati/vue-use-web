# Resize Observer

> The [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) provides a performant mechanism by which code can monitor an element for changes to its size, with notifications being delivered to the observer each time the size changes.

## State

The `useResizeObserver` function exposes the following reactive state:

```js
import { ref } from '@vue/composition-api';
import { useResizeObserver } from 'vue-use-web';

// reference to the element being observed.
const elem = ref(null);

const { origin, size, rect } = useResizeObserver(elem);
```

| State             | Type     | Description                                                      |
| ----------------- | -------- | ---------------------------------------------------------------- |
| origin.x          | `number` | The x-coordinate of the top-left point of the element            |
| origin.y          | `number` | The y-coordinate of the top-left point of the element            |
| size.width        | `number` | The width of the element                                         |
| size.height       | `number` | The height of the element                                        |
| rect.top          | `number` | The distance from the top of the container to the element        |
| rect.right        | `number` | The distance from the right side of the container to the element |
| rect.bottom       | `number` | The distance from the bottom of the container to the element     |
| rect.left         | `number` | The distance from the left side of the container to the element  |

## Methods

The `useResizeObserver` function exposes the following methods to give you fine control over the observation state:

```js
import { ref } from '@vue/composition-api';
import { useResizeObserver } from 'vue-use-web';

const elem = ref(null);

const { observe, unobserve } = useIntersectionObserver(elem);
```

| Signature         | Description                           |
| ----------------- | ------------------------------------- |
| `observe(void)`   | Starts/Resumes observing the element. |
| `unobserve(void)` | Stops/Pauses observing the element.   |

## Config

`useResizeObserver` function takes a required parameter that is a ref to the observed element and [optional config](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver#Parameters).

```js
import { ref } from '@vue/composition-api';
import { useResizeObserver } from 'vue-use-web';
const elem = ref(null);

const { size } = useResizeObserver(elem, {
  box: "border-box",
});
```

## Example

```vue
<template>
  <div class="container">
    <div class="blue" ref="elem">
      <div>Is intersecting: {{ isIntersecting }}</div>
      <div>Is Fully in View: {{ isFullyInView }}</div>
      <div>How much of it is intersecting: {{ intersectionRatio }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useResizeObserver } from 'vue-use-web';

export default {
  setup() {
    const elem = ref(null);
    const { origin, size, rect } = useResizeObserver(elem);

    return { origin, size, rect, elem };
  }
};
</script>

<style>
.blue {
  top: 1200px;
  background: blue;
  width: 200px;
  height: 200px;
  color: white;
  font-size: 14px;
  font-weight: 600;
}

.container {
  height: 3000px;
}
</style>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-geolocation-api-c06xh?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: intersection observer" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
