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

## Inspiration

This library is inspired by [the-platform](https://github.com/palmerhq/the-platform) for React.js.

## License

MIT
