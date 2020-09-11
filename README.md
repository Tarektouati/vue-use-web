# vue-use-web

<p align="center">

![Github Actions](https://img.shields.io/github/workflow/status/TarekTouati/vue-use-web/Lint%20and%20test/master?style=flat-square)
![Codacy grade](https://img.shields.io/codacy/grade/866989b53305443f9b1cdeb646b33d4c?style=flat-square)
![npm](https://img.shields.io/npm/v/vue-use-web?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-use-web?style=flat-square)
![npm](https://img.shields.io/npm/dm/vue-use-web?style=flat-square)
[![GitHub license](https://img.shields.io/github/license/Tarektouati/vue-use-web?style=flat-square)](https://github.com/Tarektouati/vue-use-web/blob/master/LICENSE)

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

[Kindly Check the documentation for examples](https://Tarektouati.github.io/vue-use-web/).

## APIs

Each composition function is designed to degrade gracefully so you can safely use them, but you should use these as a progressive enhancements for your apps. Check browsers compatibilities for each API.

- [Battery Status API](https://Tarektouati.github.io/vue-use-web/functions/battery.html).
- [Clipboard API](https://Tarektouati.github.io/vue-use-web/functions/clipboard.html).
- [Device Light](https://Tarektouati.github.io/vue-use-web/functions/device-light.html).
- [Device Motion](https://Tarektouati.github.io/vue-use-web/functions/device-motion.html).
- [Device Orientation](https://Tarektouati.github.io/vue-use-web/functions/device-orientation.html).
- [Event Listener](https://Tarektouati.github.io/vue-use-web/functions/event-listener.html).
- [Fetch API](https://Tarektouati.github.io/vue-use-web/functions/fetch.html).
- [Full-screen](https://Tarektouati.github.io/vue-use-web/functions/fullscreen.html).
- [Geo-location API](https://Tarektouati.github.io/vue-use-web/functions/geolocation.html).
- [Hardware Concurrency](https://Tarektouati.github.io/vue-use-web/functions/hardware-concurrency.html)
- [Intersection Observer](https://Tarektouati.github.io/vue-use-web/functions/intersection-observer.html).
- [Localstorage API](https://Tarektouati.github.io/vue-use-web/functions/local-storage.html)
- [Media Query](https://Tarektouati.github.io/vue-use-web/functions/media-query.html)
- [Mouse Position](https://Tarektouati.github.io/vue-use-web/functions/mouse-position.html)
- [Network Information API](https://Tarektouati.github.io/vue-use-web/functions/network.html).
- [Preferred Color Scheme](https://Tarektouati.github.io/vue-use-web/functions/preferred-color-scheme.html).
- [Preferred Languages](https://Tarektouati.github.io/vue-use-web/functions/preferred-languages.html).
- [Script](https://Tarektouati.github.io/vue-use-web/functions/script.html).
- [WebSocket](https://Tarektouati.github.io/vue-use-web/functions/websocket.html).
- [Window Scroll Position](https://Tarektouati.github.io/vue-use-web/functions/scroll-position.html).
- [Window Size](https://Tarektouati.github.io/vue-use-web/functions/window-size.html).
- [Worker](https://Tarektouati.github.io/vue-use-web/functions/worker.html).
- [Notification](https://Tarektouati.github.io/vue-use-web/functions/worker.html).
- [Media Devices](https://Tarektouati.github.io/vue-use-web/functions/device-media.html).
- Bluetooth (TODO).
- Share (TODO).
- ResizeObserver (WIP)

## Inspiration

This library is inspired by [the-platform](https://github.com/palmerhq/the-platform) and [standard-hooks](https://github.com/kripod/standard-hooks) for React.js.

## License

MIT
