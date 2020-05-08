---
title: useWeb
lang: en-US
home: true
# heroImage:
actionText: Get Started →
actionLink: ./functions/
features:
  - title: Reactive
    details: All the APIs have been repurposed to be reactive so you can use them directly in your components.
  - title: Graceful Degradation
    details: Sensible fallbacks are in place if the browser does support an API or the user doesn't give the permission.
  - title: TypeScript Support
    details: Written in TypeScript.
footer: MIT Licensed | Copyright © 2019-present Abdelrahman Awad
description: Web APIs implemented as Vue.js composition functions
meta:
  - name: og:title
    content: useWeb
  - name: og:description
    content: Web APIs implemented as Vue.js composition functions
---

# Quick Setup

Web APIs implemented as Vue.js composition functions. currently usable with the `@vue/composition-api` adapter for Vue.js 2.x.

## Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-use-web

# install with npm
npm install @vue/composition-api vue-use-web
```

## Web APIs

- [Battery Status API](./functions/battery.md).
- [Clipboard API](./functions/clipboard.md).
- [Device Light](./functions/device-light.md).
- [Device Motion](./functions/device-motion.md).
- [Device Orientation](./functions/device-orientation.md).
- [Document Visibility](./functions/document-visibility.md).
- [Event Listener](./functions/event-listener).
- [Fetch API](./functions/fetch.md).
- [Full-screen](./functions/fullscreen.md).
- [Geo-location API](./functions/geolocation.md).
- [Hardware Concurrency](./functions/hardware-concurrency.md).
- [Intersection Observer](./functions/intersection-observer.md).
- [Local-storage API](./functions/local-storage.md)
- [Media Query](./functions/media-query.md)
- [Memory Status](./functions/memory-status.md).
- [Mouse Position](./functions/mouse-position.md)
- [Network Information API](./functions/network.md).
- [Preferred Color Scheme](./functions/preferred-color-scheme.md).
- [Preferred Languages](./functions/preferred-languages.md).
- [Script](./functions/script.md).
- [WebSocket](./functions/websocket.md).
- [Window Scroll Position](./functions/scroll-position.md).
- [Window Size](./functions/window-size.md).
- [Worker](./functions/worker.md).
- [Notification](./functions/worker.md).
- Bluetooth <Badge text="WIP" type="warn" />.
- Share <Badge text="WIP" type="warn" />.

## Usage

```vue
<template>
  <div>User position is: {{ coords.longitude }} {{ coords.latitude }}</div>
</template>

<script>
import { useGeolocation } from 'vue-use-web';

export default {
  setup() {
    const { coords } = useGeolocation();

    return { coords };
  }
};
</script>
```

<!-- TODO: Insert geolocation example -->
