/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "94125221e7153c4b2e4a8bf618349d90"
  },
  {
    "url": "assets/css/0.styles.f0f6bd8a.css",
    "revision": "ebc010f1d0039abff4af84d82e77657f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.695051c7.js",
    "revision": "451347d9a2e5a830fac46cd7335ba9f8"
  },
  {
    "url": "assets/js/11.29abd341.js",
    "revision": "7515e3e75f2f4162ee6af263dbb658b3"
  },
  {
    "url": "assets/js/12.49dc9559.js",
    "revision": "1b5721be8a98a2c9ec704344461deb91"
  },
  {
    "url": "assets/js/13.b3a16645.js",
    "revision": "89e5ccd20fa21a64520cd3199418e048"
  },
  {
    "url": "assets/js/14.8c53840c.js",
    "revision": "d13309f3c90480aa00ad9da3e8aa938b"
  },
  {
    "url": "assets/js/15.eab9f379.js",
    "revision": "e481e0b1fc46485337063f8f25dafc75"
  },
  {
    "url": "assets/js/16.85567734.js",
    "revision": "e27e8f6719fc51bc9c293623f8ba6b76"
  },
  {
    "url": "assets/js/17.2d2cabf7.js",
    "revision": "6e19c52c6d28e6ed7c1b71f1f8800dc8"
  },
  {
    "url": "assets/js/18.ecc6496f.js",
    "revision": "845a76453e65ebb92fcd584d74845979"
  },
  {
    "url": "assets/js/19.c7ae47f7.js",
    "revision": "d81aab1e11f274c0f19dda5d7eca4425"
  },
  {
    "url": "assets/js/2.4c17dc52.js",
    "revision": "a9bfe90abf10b81d8989a3cea669f5df"
  },
  {
    "url": "assets/js/20.730f9910.js",
    "revision": "011fd55e0392fa137de7e84d3f94139b"
  },
  {
    "url": "assets/js/21.70b2d115.js",
    "revision": "d0f3a6cb535342a1851860f657118640"
  },
  {
    "url": "assets/js/22.28024029.js",
    "revision": "9e218727768157d4a5fd99e7b77c48a2"
  },
  {
    "url": "assets/js/23.645d50c8.js",
    "revision": "5d0bdd616bece4fe328505716924f997"
  },
  {
    "url": "assets/js/24.cef87339.js",
    "revision": "070b11472b76f52abb5e424c813fde0d"
  },
  {
    "url": "assets/js/25.a281ab71.js",
    "revision": "9e05713af8f9770b60b8232f1ed962d1"
  },
  {
    "url": "assets/js/26.9d61ed74.js",
    "revision": "96e15c638f81dd211eed26d40d02799a"
  },
  {
    "url": "assets/js/27.c6c27333.js",
    "revision": "3f50ec5a8bfbd40a054cc87bfd37669c"
  },
  {
    "url": "assets/js/28.f06cb0ad.js",
    "revision": "63e6777910c5e7f31e83f39650c0e5d6"
  },
  {
    "url": "assets/js/29.d4742293.js",
    "revision": "2d8ee0d71d1d3dbad1a88e15695cb9fb"
  },
  {
    "url": "assets/js/3.7b6e410c.js",
    "revision": "6702951f3cffd03e109d9b282bedfbb0"
  },
  {
    "url": "assets/js/30.df37821b.js",
    "revision": "a3a4993a9f1279f57398cc454de39467"
  },
  {
    "url": "assets/js/31.d8cc8a97.js",
    "revision": "89c345c7e13ff8e117c847e4b8435145"
  },
  {
    "url": "assets/js/32.11477f5e.js",
    "revision": "91614cd36c52cf885738721990d2c1e4"
  },
  {
    "url": "assets/js/33.b41b2d3c.js",
    "revision": "8b358e933fd02a77d36db3f19f2fccc4"
  },
  {
    "url": "assets/js/34.84c651c2.js",
    "revision": "2e421c4d54bf69ad703b2eeee185f275"
  },
  {
    "url": "assets/js/4.c77dbfce.js",
    "revision": "97e3e3b7e13c2cdecbae8f9b4deb7023"
  },
  {
    "url": "assets/js/5.9be479f1.js",
    "revision": "c10a32689f1da8bc91ba0aa5be766c96"
  },
  {
    "url": "assets/js/6.722be0dd.js",
    "revision": "27f0111d0b08d5ddceb63fbabfcebf0d"
  },
  {
    "url": "assets/js/7.8bb2f86c.js",
    "revision": "414f1fe0396f014852fccfbb818f9f15"
  },
  {
    "url": "assets/js/8.8f1b3089.js",
    "revision": "6b6a759169328a22b8cc51f23169935f"
  },
  {
    "url": "assets/js/9.d2403278.js",
    "revision": "95539661181882eb08097a33778aed7a"
  },
  {
    "url": "assets/js/app.e06d0b73.js",
    "revision": "740ef075ebc476d5c364cdc742236c8a"
  },
  {
    "url": "functions/battery.html",
    "revision": "da413668e7e4fbeb80b3803e57e93565"
  },
  {
    "url": "functions/clipboard.html",
    "revision": "ebb063417123b02c283705a6d74e5221"
  },
  {
    "url": "functions/device-light.html",
    "revision": "8e6c3608e3d990dba668de020668e7aa"
  },
  {
    "url": "functions/device-media.html",
    "revision": "1befc522b3c98e57a1b7554cf8f21432"
  },
  {
    "url": "functions/device-motion.html",
    "revision": "0b5a672934b17dc13d27d42a8bacfb94"
  },
  {
    "url": "functions/device-orientation.html",
    "revision": "df4dd2f9ddbd610a65e978cb6b7e4a37"
  },
  {
    "url": "functions/document-visibility.html",
    "revision": "de7eebc3c1e7089f7af529b976b94ff1"
  },
  {
    "url": "functions/event-listener.html",
    "revision": "8e2ab6a9d89fe7548c1ec08603d19b17"
  },
  {
    "url": "functions/fetch.html",
    "revision": "550ce5860496406816a63e5138f06f17"
  },
  {
    "url": "functions/fullscreen.html",
    "revision": "3c1dee10555747ff46e5a3a599c7f884"
  },
  {
    "url": "functions/geolocation.html",
    "revision": "3fb1b15611fd028b8f565c51b2bf3ce7"
  },
  {
    "url": "functions/hardware-concurrency.html",
    "revision": "cdf2cbfacb47e444148493c699710321"
  },
  {
    "url": "functions/index.html",
    "revision": "8119e9ec1e68ea9cce484c1a296569d1"
  },
  {
    "url": "functions/intersection-observer.html",
    "revision": "6269c7173cc4090c9fc527ba069460ad"
  },
  {
    "url": "functions/local-storage.html",
    "revision": "647565a005d1559b99119df9870d462f"
  },
  {
    "url": "functions/media-query.html",
    "revision": "f3a86a1f5c29e918cb698abb5a4dd6d0"
  },
  {
    "url": "functions/memory-status.html",
    "revision": "ddf7b5b265bbb860145229d3a1c08eba"
  },
  {
    "url": "functions/mouse-position.html",
    "revision": "26a82f15ddfaf974f0ec79619ab9c225"
  },
  {
    "url": "functions/network.html",
    "revision": "8d9b3dda3eb5b35d3053045860cb9528"
  },
  {
    "url": "functions/notification.html",
    "revision": "c12a850b5ebf7f4aab97f2d05cc4daf0"
  },
  {
    "url": "functions/preferred-color-scheme.html",
    "revision": "83183cf310c6dd1dee4eeed79aa2e199"
  },
  {
    "url": "functions/preferred-languages.html",
    "revision": "65f030a983f430e1094b515a36467d16"
  },
  {
    "url": "functions/script.html",
    "revision": "426b0fdfe00e47550c53756d56591789"
  },
  {
    "url": "functions/scroll-position.html",
    "revision": "0ac47daba6716ba6e1ed4761426b6ff3"
  },
  {
    "url": "functions/websocket.html",
    "revision": "f880bfd5f48f369a1d447fc7e903e359"
  },
  {
    "url": "functions/window-size.html",
    "revision": "1abff71dcc1757ddf0d56935d4b383af"
  },
  {
    "url": "functions/worker.html",
    "revision": "f12ab5fa4f1e76eedbae5a85e32ba9f1"
  },
  {
    "url": "index.html",
    "revision": "9d4a2c2474e6999346f23e912bda3b28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
