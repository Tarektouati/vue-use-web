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
  - title: Configurable
    details: Config that doesn't get into your way, everything is optional.
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

- [x] Geo-location.
- [x] Battery.
- [x] Network.
- [x] Clipboard.
- [x] Fetch.
- [x] Device Motion.
- [x] Device Light.
- [x] Device Orientation.
- [x] Script.
- [x] Window Size.
- [x] Window Scroll Position.
- [x] Full-screen.
- [x] Intersection Observer.
- [ ] Bluetooth.
- [ ] Notification.
- [ ] Share.
- [ ] Local storage.

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
