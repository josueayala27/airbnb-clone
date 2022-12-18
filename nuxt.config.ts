import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import en from './locales/en.json'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  vite: {
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: true,
      __INTLIFY_PROD_DEVTOOLS__: false
    },
    plugins: [
      svgLoader(),
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  build: { transpile: ['gsap'] },
  i18n: {
    defaultLocale: 'en',
    vueI18n: { legacy: false, globalInjection: true, messages: { en } }
  }
})
