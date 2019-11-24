# Web Sockets

This functions provides simple websocket client capabilities.

## State

The `useWebSocket` function exposes the following reactive state:

```js
import { useWebSocket } from 'vue-use-web';

const { state, data } = useWebSocket('ws://websocketurl');
```

| State | Type          | Description                                                                                             |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------- |
| state | `Ref<string>` | The current websocket state, can be only one of: 'OPEN', 'CONNECTING', 'CLOSING', 'CLOSED'              |
| data  | `Ref<object>` | Reference to the latest data received via the websocket, can be watched to respond to incoming messages |

## Methods

`useWebSocket` exposes the following methods:

```js
import { useWebSocket } from 'vue-use-web';

const { send, close } = useWebSocket('ws://websocketurl');
```

| Method | Signature                                  | Description                                  |
| ------ | ------------------------------------------ | -------------------------------------------- |
| send   | `(data: any) => void`                      | Sends data through the websocket connection. |
| close  | `(code?: number, reason?: string) => void` | Closes the websocket connection gracefully.  |

## Example

```vue
<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="send(message)">Send</button>
    <button @click="close()">Close</button>
    State: {{ state }}
    List of messages:
    <pre>{{ messages }}</pre>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { useWebSocket } from 'vue-use-web';

export default {
  setup() {
    const { data, state, send, close } = useWebSocket('ws://demos.kaazing.com/echo');
    const message = ref('');
    const messages = ref([]);
    watch(
      data,
      val => {
        messages.value.push(val);
      },
      { lazy: true }
    );

    return { state, send, close, data, message, messages };
  }
};
</script>
```

## Demo

TODO: Cool Chat app maybe
