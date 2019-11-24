# Event Listeners

> The [EventTarget method addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

This composition function adds a **managed** event listener to the given object, meaning it will automatically remove the listener when the component unmounts.

## State

`useEventListener` Doesn't return any state.

## Example

```vue
<template>
  <div>
    <input ref="el" type="text" />
  </div>
</template>

<script>
import { useEventListener } from 'vue-use-web';
import { watch } from '@vue/composition-api';

export default {
  setup() {
    const el = ref(null);

    useEventListener(el, 'input', e => {
      console.log(e.target.value);
    });

    return { el };
  }
};
</script>
```

## Demo

TODO: Add cool live example!
