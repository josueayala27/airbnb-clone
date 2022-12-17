import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  vite: {
    plugins: [svgLoader()]
  },
  build: {
    transpile: ['gsap']
  }
})
