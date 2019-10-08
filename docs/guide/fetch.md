# Fetch

> The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch).

## State

The `useFetch` function exposes the following reactive state:

```js
import { useFetch } from 'vue-use-web';

const { isLoading, json, text, error, success } = useFetch('http://myurl.com');
```

| State     | Type      | Description                                                    |
| --------- | --------- | -------------------------------------------------------------- |
| isLoading | `Boolean` | If the request is pending.                                     |
| error     | `Boolean` | If the request resulted in a non 200 status code.              |
| success   | `Boolean` | If the request is successful. i.e resulted in 200 status code. |
| json      | `any`     | The response body as JSON.                                     |
| text      | `string`  | The raw response body as a string.                             |

## Methods

The `useFetch` function exposes the following methods:

```js
import { useFetch } from 'vue-use-web';

const { cancel } = useFetch(elem);
```

| Signature | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `cancel`  | Cancels the fetch request if browser supports `AbortController`, otherwise the request will complete but will not update the state. |

## Example

```vue
<template>
  <div>
    <div>{{ isLoading }}</div>
    <div>{{ success }}</div>
    <div>{{ text }}</div>
    <div>{{ blob }}</div>
    <div>{{ json }}</div>
    <div>{{ cancelled }}</div>
    <button @click="cancel">Cancel Request</button>
  </div>
</template>

<script>
// import { ref } from "@vue/composition-api";
import { useFetch } from "vue-use-web";

export default {
  setup() {
    const {
      isLoading,
      error,
      success,
      cancel,
      text,
      blob,
      json,
      cancelled
    } = useFetch("/data.json");

    return { isLoading, error, success, cancel, text, blob, json, cancelled };
  }
};
</script>
```

TODO: useFetch example
