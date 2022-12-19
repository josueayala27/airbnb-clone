<template>
  <button ref="target" :aria-hidden="!targetIsVisible" class="group cursor-pointer inline-flex flex-col gap-2 items-center py-4 relative">
    <img :class="[selected ? 'opacity-100' : 'opacity-[0.6425339366515838] group-hover:opacity-100']" v-bind="{src: image}" class="h-[24px] w-[24px]">
    <span :class="[selected ? 'text-black' : 'text-[#717171] group-hover:text-black']" class="text-xs whitespace-nowrap">{{ title }}</span>

    <!-- Border effect -->
    <div :class="[selected ? 'bg-black' : 'group-hover:bg-gray-300']" class="absolute bottom-0 left-0 w-full h-[2px]" />
  </button>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  title: string;
  image: string;
  selected?: boolean;
}>()

const target = ref<any>()
const targetIsVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  }
)
</script>
