<template>
  <div class="text-base group cursor-pointer">
    <div class="relative">
      <div ref="container" class="aspect-[20/19] rounded-2xl snap-mandatory snap-x flex overflow-auto scroll__none">
        <div
          v-for="item in items"
          :ref="el => itemRefs.push(el)"
          :key="item.id"
          :class="[item.background]"
          class="h-full w-full snap-start flex-shrink-0"
        />
      </div>

      <div class="absolute top-0 right-0 md:left-0 md:h-full md:w-full p-3 grid md:grid-rows-3">
        <div class="flex justify-end">
          <BaseIcon name="heart" category="outline" class="h-[24px] text-white fill-black/40 aspect-square" />
        </div>

        <div class="justify-between items-center opacity-0 group-hover:opacity-100 duration-150 hidden md:flex">
          <div class="p-2 bg-white/80 hover:bg-white hover:scale-105 duration-200 rounded-full" @click="goTo('back')">
            <BaseIcon name="chevron-left" category="outline" class="h-[20px] aspect-square" />
          </div>
          <div class="p-2 bg-white/80 hover:bg-white hover:scale-105 duration-200 rounded-full" @click="goTo('next')">
            <BaseIcon name="chevron-right" category="outline" class="h-[20px] aspect-square" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-3 items-start select-none">
      <div>
        <p class="font-semibold">
          Tzununa, Guatemala
        </p>
        <p class="text-gray-500">
          Con vista a la bahía
        </p>
        <p class="text-gray-500">
          19 – 24 de ene
        </p>
        <p>$286 USD <span class="text-gray-500">noche</span> </p>
      </div>

      <div class="flex gap-2 items-center">
        <BaseIcon name="star" category="solid" class="h-[15px] aspect-square" />
        4.93
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { set, get } from '@vueuse/core'
import gsap from 'gsap'
import * as ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const currentIndex = ref(0)
const items = reactive([
  { id: 1, background: 'bg-red-500' },
  { id: 2, background: 'bg-green-500' },
  { id: 3, background: 'bg-purple-500' }
])

const container = ref()
const itemRefs = ref <Element[]>([])

const goTo = (action: string) => {
  if (action.includes('next')) {
    if (get(currentIndex) >= items.length - 1) { return }
    set(currentIndex, get(currentIndex) + 1)
  } else {
    if (get(currentIndex) <= 0) { return }
    set(currentIndex, get(currentIndex) - 1)
  }

  gsap.to(get(container), { ease: 'power2.out', scrollTo: get(itemRefs)[get(currentIndex)] })
}

let observer: IntersectionObserver
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const { target } = entries[0]
    const indexOfTarget = get(itemRefs).findIndex((el: any) => el === target) || 0
    set(currentIndex, indexOfTarget)
  }, { threshold: 1, root: container.value })

  for (const slide of get(itemRefs)) {
    observer.observe(slide)
  }
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style>
.scroll__none::-webkit-scrollbar {
  height: 0px;
}
</style>
