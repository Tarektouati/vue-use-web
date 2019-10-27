# vue-use-web

Web APIs implemented as Vue.js composition functions.

This is a collection of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) exposed as Vue.js composition hooks that's upcoming in Vue 3.0

You can use them with Vue 2.0 using [@vue/composition-api](https://github.com/vuejs/composition-api) until Vue 3.0 gets out.

## What and why

Web APIs are ever changing, this library aims to provide to Vue.js developers a stable interface that integrates well into the ecosystem. Also an interface that degrades gracefully when browsers do not support said features.

I initially was choosing to expose this as a [Stateful functional components](https://logaretm.com/blog/2019-06-29-stateful-functional-components/) but that isn't very handy and is not future proof. Implementing these APIs in Vue composition API (hooks) makes them ready for Vue 3.0 and beyond. Personally I think this is the perfect example to showcase the power of the Composition API.

## Installation

```bash
# install with yarn
yarn add @vue/composition-api vue-use-web

# install with npm
npm install @vue/composition-api vue-use-web
```

## Usage

[Kindly Check the documentation for examples](https://logaretm.github.io/vue-use-web/).

## APIs

Each composition function is designed to degrade gracefully so you can safely use them, but you should use these as a progressive enhancements for your apps. Check browsers compatibilities for each API.

- [Battery Status API](https://logaretm.github.io/vue-use-web/guide/battery.html).
- [Clipboard API](https://logaretm.github.io/vue-use-web/guide/clipboard.html).
- [Device Light](https://logaretm.github.io/vue-use-web/guide/device-light.html).
- [Device Motion](https://logaretm.github.io/vue-use-web/guide/device-motion.html).
- [Device Orientation](https://logaretm.github.io/vue-use-web/guide/device-orientation.html).
- [Fetch API](https://logaretm.github.io/vue-use-web/guide/fetch.html).
- [Full-screen](https://logaretm.github.io/vue-use-web/guide/fullscreen.html).
- [Geo-location API](https://logaretm.github.io/vue-use-web/guide/geolocation.html).
- [Localstorage API](https://logaretm.github.io/vue-use-web/guide/local-storage.html)
- [Intersection Observer](https://logaretm.github.io/vue-use-web/guide/intersection-observer.html).
- [Mouse Query](https://logaretm.github.io/vue-use-web/guide/media-query.html)
- [Mouse Position](https://logaretm.github.io/vue-use-web/guide/mouse-position.html)
- [Network Information API](https://logaretm.github.io/vue-use-web/guide/network.html).
- [Preferred Color Scheme](https://logaretm.github.io/vue-use-web/guide/preferred-color-scheme.html).
- [Preferred Languages](https://logaretm.github.io/vue-use-web/guide/preferred-languages.html).
- [Script](https://logaretm.github.io/vue-use-web/guide/script.html).
- [WebSocket](https://logaretm.github.io/vue-use-web/guide/websocket.md).
- [Window Scroll Position](https://logaretm.github.io/vue-use-web/guide/scroll-position.html).
- [Window Size](https://logaretm.github.io/vue-use-web/guide/window-size.html).
- Bluetooth (WIP).
- Notification (WIP).
- Share (WIP).

## Inspiration

This library is inspired by [the-platform](https://github.com/palmerhq/the-platform) and [standard-hooks](https://github.com/kripod/standard-hooks) for React.js.

## License

MIT
