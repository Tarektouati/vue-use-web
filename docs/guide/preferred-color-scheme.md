# Preferred Color Scheme

> The [matchMedia preferred-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is used to detect the user's preference for a `light` or `dark` theme. This can be useful when you should adapt your UI depending on the user preference.

```js
import { usePreferredColorScheme } from 'vue-use-web';

const scheme = usePreferredColorScheme();
```

| State     | Type       | Description                           |
| --------- | ---------- | ------------------------------------- |
| theme     | `String`   | Current user color scheme preferrence |

## Example

```vue
<template>
  <h1>User's preference: {{ theme  }}</h1>
</template>

<script>
  import { usePreferredColorScheme } from 'vue-use-web';

  export default {
    setup() {
      const theme = usePreferredColorScheme();

      return { theme };
    }
  };
</script>
```
