<template>
  <div class="text-base group cursor-pointer">
    <div class="relative">
      <div
        ref="container"
        class="aspect-[20/19] rounded-2xl snap-mandatory snap-x flex overflow-auto scrollbar-hide"
      >
        <div
          v-for="(image, i) in images"
          :ref="el => itemRefs.push(el)"
          :key="i"
          class="h-full w-full snap-start flex-shrink-0 bg-gray-200"
        >
          <img loading="lazy" class="h-full w-full object-cover" :src="image">
        </div>
      </div>

      <div class="absolute top-0 right-0 md:left-0 md:h-full md:w-full p-3 grid md:grid-rows-3">
        <div class="flex justify-end">
          <BaseIcon
            name="heart"
            category="outline"
            class="h-[24px] text-white fill-black/40 aspect-square"
          />
        </div>

        <div
          class="justify-between items-center opacity-0 group-hover:opacity-100 duration-150 hidden md:flex"
        >
          <!-- :class="[{ 'invisible': currentIndex <= 0 }]" -->
          <div
            class="p-2 bg-white/80 hover:bg-white hover:scale-105 active:scale-100 duration-200 rounded-full"
            @click="goTo('back')"
          >
            <BaseIcon name="chevron-left" category="outline" class="h-[20px] aspect-square" />
          </div>
          <!-- :class="[{ 'invisible': currentIndex >= images.length - 1 }]" -->
          <div
            class="p-2 bg-white/80 hover:bg-white hover:scale-105 active:scale-100 duration-200 rounded-full"
            @click="goTo('next')"
          >
            <BaseIcon name="chevron-right" category="outline" class="h-[20px] aspect-square" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-3 items-start select-none">
      <div>
        <p class="font-medium">
          {{ title }}
        </p>
        <p class="text-gray-500">
          {{ $t(`homeCard.description.${type}`, { ...meta }) }}
        </p>
        <p class="text-gray-500">
          {{
            $dayjs(availability.start).format('MMM D') }} &#8211; {{
            $dayjs(availability.end).format('MMM D')
          }}
        </p>
        <p>
          ${{ price }} USD <span class="text-gray-500">{{ $t('general.night').toLocaleLowerCase()
          }}</span>
        </p>
      </div>

      <div class="flex gap-2 items-center">
        <BaseIcon name="star" category="solid" class="h-[15px] aspect-square" />
        {{ rate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { set, get } from '@vueuse/core'
import { DescType } from '@/enums/home-card.enum'

const { $gsap } = useNuxtApp()

const props = defineProps<{
  title: string,
  images: Array<string>,
  rate: number | string,
  type: DescType,
  meta: any,
  availability: { start: string | Date, end: string | Date },
  price: number
}>()

const currentIndex = ref(0)
const container = ref()
const itemRefs = ref<Element[] | any>([])

const preloadImage = () => {
  if (get(currentIndex) + 1 > props.images.length - 1) { return }

  // Load n + 1 image
  const image: HTMLImageElement = new Image()
  image.src = props.images[get(currentIndex) + 1]
}

const goTo = (action: 'next' | 'back') => {
  if (action.includes('next')) {
    if (get(currentIndex) >= props.images.length - 1) { return }
    set(currentIndex, get(currentIndex) + 1)
    preloadImage()
  } else {
    if (get(currentIndex) <= 0) { return }
    set(currentIndex, get(currentIndex) - 1)
  }

  $gsap.to(get(container), { ease: 'power2.out', scrollTo: get(itemRefs)[get(currentIndex)] })
}

let observer: IntersectionObserver
onMounted(() => {
  preloadImage()
  observer = new IntersectionObserver((entries) => {
    const { target } = entries[0]
    const indexOfTarget = get(itemRefs).findIndex((el: any) => el === target) || 0
    set(currentIndex, indexOfTarget)
  }, { threshold: 1, root: get(container) })

  for (const slide of get(itemRefs)) {
    observer.observe(slide)
  }
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>
