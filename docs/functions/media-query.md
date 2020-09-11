# Media Query

> the DOM provides features that can test the results of a media [query programmatically](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries), via the MediaQueryList interface and its methods and properties. Once you've created a MediaQueryList object, you can check the result of the query or receive notifications when the result changes.

## State

```js
import { useMedia } from 'vue-use-web';

const isLg = useMedia('(min-width: 1024px)');
```

`useMedia` only returns a single value which is a boolean.

| State   | Type           | Description                  |
| ------- | -------------- | ---------------------------- |
| matches | `Ref<boolean>` | If the query matches or not. |

## Example

```vue
<template>
  <h1>Is Desktop: {{ isLg }}</h1>
</template>

<script>
import { useMedia } from 'vue-use-web';

export default {
  setup() {
    const isLg = useMedia('(min-width: 1024px)');

    return { isLg };
  }
};
</script>
```

## Demo

TODO: Add cool live example!
