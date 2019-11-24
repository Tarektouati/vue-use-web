# Clipboard

> The [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. Access to the contents of the clipboard is gated behind the Permissions API; without user permission, reading or altering the clipboard contents is not permitted.

:::tip Note!
This API is designed to supersede accessing the clipboard using document.execCommand().
:::

## State

The `useClipboard` function exposes the following reactive state:

```js
import { useClipboard } from 'vue-use-web';

const { text } = useClipboard();
```

| State | Type     | Description                        |
| ----- | -------- | ---------------------------------- |
| text  | `string` | the current text in the clipboard. |

## Methods

The `useClipboard` function exposes the following methods:

```js
import { useClipboard } from 'vue-use-web';

const { write } = useClipboard();

write('hello world!');
```

| Signature            | Description                                  |
| -------------------- | -------------------------------------------- |
| `write(str: string)` | Writes the given string it in the clipboard. |

## Use-cases

I'm sure you can think of multiple situations where you would like to copy the clipboard text or write some data into them. Mainly stuff like copying code in snippets, referral links, recovery codes or really any hard to remember text.

## Example

```vue
<template>
  <div>
    <div @click="copy('568781')">Click here to copy the code: <em>568781</em></div>
    <div>Detected code: {{ text }}</div>
  </div>
</template>

<script>
import { useClipboard } from 'vue-use-web';

export default {
  setup() {
    const { text, write } = useClipboard();

    return { text, copy: write };
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-template-8grre?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: Clipboard API" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
