# Navigator Languages API

> The [Navigator Languages](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages) provides web developers with information about the user's preferred languages. For example this may be useful to adjust the language of the user interface based on the user's preferred languages in order to provide better experience.

## State

The `usePreferredLanguages` function exposes the following reactive state:

```js
import { usePreferredLanguages } from 'vue-use-web';

const languages = usePreferredLanguages();
```

| State     | Type       | Description                          |
| --------- | ---------- | ------------------------------------ |
| languages | `String[]` | An array of user preferred languages |

## Example

```vue
<template>
  <h1>Preferred Languages: </h1>
  <ul>
    <li :key="language" v-for="language of languages">{{language}}</li>
  </ul>
</template>

<script>
import { usePreferredLanguages } from 'vue-use-web';

export default {
  setup() {
    const languages = usePreferredLanguages();

    return { languages };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-template-i3md2?fontsize=14" title="Vue-use-web preferred Languages" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
