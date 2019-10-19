# Fetch

> The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch).

## State

The `useFetch` function exposes the following reactive state:

```js
import { useFetch } from 'vue-use-web';

const { isLoading, json, text, error, success } = useFetch('http://myurl.com');
```

| State      | Type                     | Description                                                                      |
| ---------- | ------------------------ | -------------------------------------------------------------------------------- |
| error      | `Boolean`                | If the request resulted in a non 200 status code.                                |
| headers    | `Record<string, string>` | The response headers.                                                            |
| isLoading  | `Boolean`                | If the request is pending.                                                       |
| json       | `any`                    | The response body as JSON.                                                       |
| status     | `number`                 | The HTTP status code.                                                            |
| statusText | `number`                 | The HTTP status text, eg: "OK" for 200.                                          |
| success    | `Boolean`                | If the request is successful. i.e resulted in 200 status code.                   |
| text       | `string`                 | The raw response body as a string.                                               |
| type       | `string`                 | [Response type](https://developer.mozilla.org/en-US/docs/Web/API/Response/type). |

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
import { useFetch } from 'vue-use-web';

export default {
  setup() {
    const { isLoading, error, success, cancel, text, blob, json, cancelled } = useFetch('/data.json');

    return { isLoading, error, success, cancel, text, blob, json, cancelled };
  }
};
</script>
```

TODO: useFetch example
