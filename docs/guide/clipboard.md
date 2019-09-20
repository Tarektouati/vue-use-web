# Clipboard API

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

## Options

`useClipboard` doesn't take any parameters.
