import gsap from 'gsap'
import * as ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default defineNuxtPlugin(() => {
  return { provide: { gsap } }
})
