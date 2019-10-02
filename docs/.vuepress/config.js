module.exports = {
  title: 'useWeb',
  description: 'Use the Web APIs as Vue.js composition functions',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: ''
      }
    ]
  ],
  base: '/vue-use-web/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#41b883' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { property: 'og:image', content: '' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/img/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/img/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/img/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/img/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/img/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/img/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/img/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'useWeb',
      description: 'Use the Web APIs as Vue.js composition functions'
    }
  },
  themeConfig: {
    repo: 'logaretm/vue-use-web',
    docsRepo: 'logaretm/vue-use-web',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        '',
        'battery',
        'clipboard',
        'device-light',
        'device-motion',
        'device-orientation',
        'fullscreen',
        'geolocation',
        'intersection-observer',
        'local-storage',
        'mouse-position',
        'network',
        'preferred-color-scheme',
        'script',
        'scroll-position',
        'window-size'
      ],
      '/examples/': []
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        nav: [{ text: 'Guide', link: '/guide/' }, { text: 'Examples', link: '/examples/' }]
      }
    }
  }
};
