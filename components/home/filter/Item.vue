<template>
  <button ref="target" :aria-hidden="!targetIsVisible" class="group cursor-pointer inline-flex flex-col gap-2 items-center py-4 relative">
    <img v-bind="{src: image}" class="h-[24px] w-[24px] opacity-[0.6425339366515838] group-hover:opacity-100">
    <span class="text-xs text-[#717171] group-hover:text-black whitespace-nowrap">{{ title }}</span>

    <!-- Border effect -->
    <div class="absolute bottom-0 left-0 w-full h-[2px] group-hover:bg-gray-300" />
  </button>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  title: string;
  image: string;
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
