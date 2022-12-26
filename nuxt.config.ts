import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import en from './locales/en.json'
import es from './locales/es.json'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  vite: {
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
    locales: ['en', 'es'],
    defaultLocale: 'en',
    customRoutes: 'config',
    vueI18n: { legacy: false, globalInjection: true, messages: { en, es } }
  }
})
