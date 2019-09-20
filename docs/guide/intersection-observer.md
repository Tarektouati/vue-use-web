# Intersection Observer

> The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

## State

The `useIntersectionObserver` function exposes the following reactive state:

```js
import { ref } from '@vue/composition-api';
import { useIntersectionObserver } from 'vue-use-web';

// reference to the element being observed.
const elem = ref(null);

const { isIntersecting, isFullyInView, intersectionRatio } = useIntersectionObserver(elem);
```

| State             | Type      | Description                                                                       |
| ----------------- | --------- | --------------------------------------------------------------------------------- |
| isIntersecting    | `Boolean` | If the element or a part of it is in the view port.                               |
| isFullyInView     | `Boolean` | If the element is fully contained within the viewport.                            |
| intersectionRatio | `Number`  | A number between 0 and 1 representing how much of the element is in the viewport. |

## Methods

The `useIntersectionObserver` function exposes the following methods to give you fine control over the observation state:

```js
import { ref } from '@vue/composition-api';
import { useIntersectionObserver } from 'vue-use-web';

const elem = ref(null);

const { observe, unobserve } = useIntersectionObserver(elem);
```

| Signature         | Description                           |
| ----------------- | ------------------------------------- |
| `observe(void)`   | Starts/Resumes observing the element. |
| `unobserve(void)` | Stops/Pauses observing the element.   |

## Config

`useIntersectionRatio` function takes a required parameter that is a ref to the observed element and [optional config](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters).

```js
import { ref } from '@vue/composition-api';
import { useIntersectionRatio } from 'vue-use-web';
const elem = ref(null);

const { isIntersecting } = useIntersectionObserver(elem, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: [0]
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
import { useIntersectionRatio } from 'vue-use-web';

export default {
  setup() {
    const elem = ref(null);
    const { isIntersecting, isFullyInView, intersectionRatio } = useIntersectionRatio(elem);

    return { isIntersecting, isFullyInView, intersectionRatio, elem };
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
