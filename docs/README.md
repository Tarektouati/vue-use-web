---
title: useWeb
lang: en-US
home: true
# heroImage:
actionText: Get Started →
actionLink: ./guide/
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

- [Battery Status API](./guide/battery.md).
- [Clipboard API](./guide/clipboard.md).
- [Device Light](./guide/device-light.md).
- [Device Motion](./guide/device-motion.md).
- [Device Orientation](./guide/device-orientation.md).
- [Fetch API](./guide/fetch.md).
- [Full-screen](./guide/fullscreen.md).
- [Geo-location API](./guide/geolocation.md).
- [Local-storage API](./guide/local-storage.md)
- [Intersection Observer](./guide/intersection-observer.md).
- [Media Query](./guide/media-query.md)
- [Mouse Position](./guide/mouse-position.md)
- [Network Information API](./guide/network.md).
- [Preferred Color Scheme](./guide/preferred-color-scheme.md).
- [Preferred Languages](./guide/preferred-languages.md).
- [Script](./guide/script.md).
- [WebSocket](./guide/websocket.md).
- [Window Scroll Position](./guide/scroll-position.md).
- [Window Size](./guide/window-size.md).
- Bluetooth <Badge text="WIP" type="warn" />.
- Notification <Badge text="WIP" type="warn" />.
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
