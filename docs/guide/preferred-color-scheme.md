# Preferred Color Scheme

> The [matchMedia preferred-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is used to detect the user's preference for a `light` or `dark` theme. This can be useful when you should adapt your UI depending on the user preference.

```js
import { usePreferredColorScheme } from 'vue-use-web';

const scheme = usePreferredColorScheme();
```

| State | Type          | Description                                                                              |
| ----- | ------------- | ---------------------------------------------------------------------------------------- |
| theme | `Ref<String>` | Current user color scheme preference, will be one of 'dark', 'light' and 'no-preference' |

## Example

```vue
<template>
  <h1>User's preference: {{ theme }}</h1>
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

## Demo

<iframe src="https://codesandbox.io/embed/vue-use-web-use-mouse-position-j3vx5?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: use mouse position" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
