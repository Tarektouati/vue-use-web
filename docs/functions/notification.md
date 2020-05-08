# Web Notification

This functions provides simple web notifications that are displayed outside the page at the system level.

## Methods

`useNotification` exposes the following methods:

```js
import { useNotification } from 'vue-use-web';

const { showNotifcation } = useNotification('notification title', {
  icon: 'url of icon',
  body: 'body of the notification'
});
```

| Method          | Signature    | Description              |
| --------------- | ------------ | ------------------------ |
| showNotifcation | `() => void` | toggle the notification. |

## Config

`useNotification` function takes a required parameter that is the notification tilte and [optional config](https://developer.mozilla.org/en-US/docs/Web/API/Notification)

```js
import { useNotification } from 'vue-use-web';

const { showNotifcation } = useNotification(
  'notification title',
  {
    icon: 'url of icon',
    body: 'body of the notification'
  },
  {
    onClick: () => alert('Notification clicked'),
    onClose: () => alert('Notification closed')
  }
);
```

## Example

```vue
<template>
	<div>
		<button @click="showNotifcation">Toggle notification</button>
	</div>
</template>
<script>
import { useNotification } from 'vue-use-web';
import vueLogo from './logo.png'
export default {
	setup() {
		const { showNotifcation } = useNotification(
			'notification title',
			{
				icon: vueLogo,
				body: 'body of the notification',
			},
			{
				onClick: () => alert('Notification clicked'),
				onClose: () => alert('Notification closed'),
			}
		);
		return { showNotifcation };
	},
};
</script>
```