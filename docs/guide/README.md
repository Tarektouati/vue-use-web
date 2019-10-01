# Introduction

`vue-use-web` is a collection of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) exposed as Vue.js composition hooks that's upcoming in Vue 3.0

You can use them with Vue 2.0 using [@vue/composition-api](https://github.com/vuejs/composition-api) until Vue 3.0 gets out.

## What and why

Web APIs are ever changing, this library aims to provide to Vue.js developers a stable interface that integrates well into the ecosystem. Also an interface that degrades gracefully when browsers do not support said features.

I initially was choosing to expose this as a [Stateful functional components](https://logaretm.com/blog/2019-06-29-stateful-functional-components/) but that isn't very handy and is not future proof. Implementing these APIs in Vue composition API (hooks) makes them ready for Vue 3.0 and beyond. Personally I think this is the perfect example to showcase the power of the Composition API.

## Features

- Reactive Web APIs APIs that is compatible with Vue.js.
- Graceful degradation for old browsers and denied permissions.
- Maintains similarities to the original APIs as close as possible.
- Written in TypeScript.

## Web APIs

These are the currently implemented Web APIs and the planned ones.

- [Battery Status API](./battery.md).
- [Clipboard API](./clipboard.md).
- [Device Light](./device-light.md).
- [Device Motion](./device-motion.md).
- [Device Orientation](./device-orientation.md).
- [Full-screen](./fullscreen.md).
- [Geo-location API](./geolocation.md).
- [Intersection Observer](./intersection-observer.md).
- [Local storage API](./local-storage.md).
- [Mouse Position](./guide/mouse-position.md).
- [Network Information API](./network.md).
- [Script](./script.md).
- [Window Scroll Position](./scroll-position.md).
- [Window Size](./window-size.md).
- [Preferred Languages](./preferred-languages.md).
- Bluetooth <Badge text="WIP" type="warn" />.
- Fetch <Badge text="WIP" type="warn" />.
- Local storage <Badge text="WIP" type="warn" />.
- Notification <Badge text="WIP" type="warn" />.
- Share <Badge text="WIP" type="warn" />.
