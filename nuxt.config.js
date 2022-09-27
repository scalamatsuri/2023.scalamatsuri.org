module.exports = {
  srcDir: 'nuxt_src/',
  target: 'static',
  /** Global CSS */
  css: ['~/assets/vendor/sanitize.css/sanitize.css', '~/assets/scss/style.scss'],
  plugins: [
    { src: '~/plugins/vue2-google-maps', ssr: false },
    { src: '~/plugins/lazyload', ssr: false },
    { src: '~/plugins/firebase', ssr: false },
    { src: '~/plugins/toast', ssr: false },
    { src: '~/plugins/scalaMatsuriCommon', ssr: false },
    { src: '~/plugins/constants' },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-51559416-6',
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        baseUrl: 'http://scalamatsuri.org',
        locales: [
          {
            code: 'ja',
            iso: 'ja_JP',
            name: '日本語',
          },
          {
            code: 'en',
            iso: 'en_US',
            name: 'English',
          },
        ],
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'scalamatsuri_i18n_redirected',
          alwaysRedirect: false,
        },
        rootRedirect: 'en',
        vueI18nLoader: true,
        vueI18n: {
          fallbackLocale: 'en',
        },
        rules: [
          {
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            options: { asStream: true },
            loader: '@intlify/vue-i18n-loader',
          },
        ],
      },
    ],
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 600,
          lg: Infinity,
        },
      },
    ],
  ],
  axios: {},
  sentry: {
    dsn: 'https://0dc25f3d199249d7a209f4fd48cdc9a6@sentry.io/2211949',
    config: {},
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true },
        });
      }
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader', 'yaml-loader'],
      });
      config.module.rules.push({
        test: /\.yaml$/,
        use: ['js-yaml-loader'],
      });
    },
  },
  buildModules: ['@nuxt/typescript-build', '@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true,
  },
  generate: {
    fallback: '404.html',
  },
  render: {
    resourceHints: false,
    compressor: {
      threshold: 0,
      level: 9,
    },
  },
};
