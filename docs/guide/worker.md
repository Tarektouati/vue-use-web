# Web Worker

This functions provides simple web worker registration and communication.

## State

The `useWorker` function exposes the following reactive state:

```js
import { useWorker } from 'vue-use-web';

const { data } = useWorker('/path/to/worker.js');
```

| State | Type       | Description                                                                                          |
| ----- | ---------- | ---------------------------------------------------------------------------------------------------- |
| data  | `Ref<any>` | Reference to the latest data received via the worker, can be watched to respond to incoming messages |

## Methods

`useWorker` exposes the following methods:

```js
import { useWorker } from 'vue-use-web';

const { post, terminate } = useWorker('/path/to/worker.js');
```

| Method    | Signature             | Description                      |
| --------- | --------------------- | -------------------------------- |
| post      | `(data: any) => void` | Sends data to the worker thread. |
| terminate | `() => void`          | Stops and terminates the worker. |

## Example

```vue
<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="post(message)">Send</button>
    <button @click="close()">Close</button>
    State: {{ state }}
    Worker messages:
    <pre>{{ messages }}</pre>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { useWorker } from 'vue-use-web';

export default {
  setup() {
    const { data, post } = useWorker('/path/to/worker.js');
    const message = ref('');
    const messages = ref([]);
    watch(
      data,
      val => {
        messages.value.push(val);
      },
      { lazy: true }
    );

    return { post, message, messages };
  }
};
</script>
```

## Demo

TODO: Cool Chat app maybe
