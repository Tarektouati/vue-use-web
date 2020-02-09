# vue-use-web

<p align="center">

![Codacy grade](https://img.shields.io/codacy/grade/887df16ab5c6455c8b14aba6133220ab?style=flat-square)
![npm](https://img.shields.io/npm/v/vue-use-web?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-use-web?style=flat-square)
![npm](https://img.shields.io/npm/dm/vue-use-web?style=flat-square)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7d4a75f9be634e94a220d062f75a2476)](https://app.codacy.com/manual/Tarektouati/vue-use-web?utm_source=github.com&utm_medium=referral&utm_content=Tarektouati/vue-use-web&utm_campaign=Badge_Grade_Dashboard)
[![GitHub license](https://img.shields.io/github/license/logaretm/vue-use-web?style=flat-square)](https://github.com/logaretm/vue-use-web/blob/master/LICENSE)

</p>

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

- [Battery Status API](https://logaretm.github.io/vue-use-web/functions/battery.html).
- [Clipboard API](https://logaretm.github.io/vue-use-web/functions/clipboard.html).
- [Device Light](https://logaretm.github.io/vue-use-web/functions/device-light.html).
- [Device Motion](https://logaretm.github.io/vue-use-web/functions/device-motion.html).
- [Device Orientation](https://logaretm.github.io/vue-use-web/functions/device-orientation.html).
- [Event Listener](https://logaretm.github.io/vue-use-web/functions/event-listener.html).
- [Fetch API](https://logaretm.github.io/vue-use-web/functions/fetch.html).
- [Full-screen](https://logaretm.github.io/vue-use-web/functions/fullscreen.html).
- [Geo-location API](https://logaretm.github.io/vue-use-web/functions/geolocation.html).
- [Hardware Concurrency](https://logaretm.github.io/vue-use-web/functions/hardware-concurrency.html)
- [Intersection Observer](https://logaretm.github.io/vue-use-web/functions/intersection-observer.html).
- [Localstorage API](https://logaretm.github.io/vue-use-web/functions/local-storage.html)
- [Media Query](https://logaretm.github.io/vue-use-web/functions/media-query.html)
- [Mouse Position](https://logaretm.github.io/vue-use-web/functions/mouse-position.html)
- [Network Information API](https://logaretm.github.io/vue-use-web/functions/network.html).
- [Preferred Color Scheme](https://logaretm.github.io/vue-use-web/functions/preferred-color-scheme.html).
- [Preferred Languages](https://logaretm.github.io/vue-use-web/functions/preferred-languages.html).
- [Script](https://logaretm.github.io/vue-use-web/functions/script.html).
- [WebSocket](https://logaretm.github.io/vue-use-web/functions/websocket.html).
- [Window Scroll Position](https://logaretm.github.io/vue-use-web/functions/scroll-position.html).
- [Window Size](https://logaretm.github.io/vue-use-web/functions/window-size.html).
- [Worker](https://logaretm.github.io/vue-use-web/functions/worker.html).
- Bluetooth (WIP).
- Notification (WIP).
- Share (WIP).

## Inspiration

This library is inspired by [the-platform](https://github.com/palmerhq/the-platform) and [standard-hooks](https://github.com/kripod/standard-hooks) for React.js.

## License

MIT
