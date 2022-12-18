import svgLoader from 'vite-svg-loader'
import en from './locales/en.json'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  vite: { plugins: [svgLoader()] },
  build: { transpile: ['gsap'] },
  i18n: {
    defaultLocale: 'en',
    vueI18n: { messages: { en } }
  }
})
