import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/api/hello']
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  vite: {
    plugins: [svgLoader()]
  }
})
