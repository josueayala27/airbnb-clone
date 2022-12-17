import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  vite: {
    plugins: [svgLoader()]
  },
  build: {
    transpile: ['gsap']
  }
})
