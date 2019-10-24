# Media Query

> The [`Document.visibilityState`](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState) read-only property returns the visibility of the document, that is in which context this element is now visible. It is useful to know if the document is in the background or an invisible tab, or only loaded for pre-rendering. Possible values are:

## State

```js
import { useDocumentVisibility } from 'vue-use-web';

const pageIsVisible = useDocumentVisibility();
```

`useDocumentVisibility` only returns a single value which is a boolean.

| State     | Type           | Description                                                |
| --------- | -------------- | ---------------------------------------------------------- |
| isVisible | `Ref<boolean>` | If the page is currently visible (not in a background tab) |

## Example

```vue
<template>
  <h1>Page is currently visible: {{ isVisible }}</h1>
</template>

<script>
import { useMedia } from 'vue-use-web';
import { watch } from '@vue/composition-api'


export default {
  setup() {
    const isVisible = useDocumentVisibility()

    watch(() => console.log(isVisible.value))

    return { isVisible }
  }
};
</script>
```

## Demo

TODO: Add cool live example!
