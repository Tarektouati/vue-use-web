# Script

This function allows you to add a custom third-party script to the DOM.

## State

The `useScript` function exposes the following reactive state:

```js
import { useScript } from 'vue-use-web';

const { isLoading, error } = useScript({
  src: '{script_url}'
});
```

| State     | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| isLoading | `Boolean` | If the script is still downloading.      |
| error     | `Boolean` | If the script didn't download correctly. |

## Config

`useScript` function takes an options object, the object must contain a `src` property.

```js
import { useScript } from 'vue-use-web';

const { isLoading, error } = useScript({
  src: 'script_url'
});
```

| Config | Type     | Description               |
| ------ | -------- | ------------------------- |
| src    | `String` | The 3rd party script URL. |

## Example

```
TODO
```
