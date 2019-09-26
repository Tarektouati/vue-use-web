# Local Storage API

> The read-only [localStorage property](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

## State

The `useLocalStorage` function exposes the following reactive state:

```js
import { useLocalStorage } from 'vue-use-web';

const { value } = useLocalStorage('mykey');
```

| State | Type  | Description                                                                                                                                                    |
| ----- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | `any` | The value stored in the localstorage object, this value will be synced with any changes from other tabs and will be persisted once the component is umnounted. |

:::tip
You can use any type as the value, the value will be automatically serialized using `JSON.stringify` and de-serialized when read using `JSON.parse`.
:::

## Config

`useLocalStorage` function takes a `key` which will be used as the storage key, and optionally accepts a default value in-case the key does not exist.

```js
import { useLocalStorage } from 'vue-use-web';

const { value } = useLocalStorage('mykey', 'default_value');
```

## Example

```vue
<template>
  <div class="container">
    value is: {{ value }}
    <button @click="value = 'ok'">Change</button>
  </div>
</template>

<script>
// import { ref } from "@vue/composition-api";
import { useLocalStorage } from 'vue-use-web';

export default {
  setup() {
    const { value } = useLocalStorage('test', 1);

    return { value };
  }
};
</script>
```
