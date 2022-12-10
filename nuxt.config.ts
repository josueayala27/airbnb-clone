import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [svgLoader()]
  }
})
