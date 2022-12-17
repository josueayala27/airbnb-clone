<template>
  <section />

  <!-- Filters section -->
  <section class="top-[81px] sticky z-50 bg-white">
    <HomeFilter />
  </section>

  <!-- Grid section -->
  <section
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-6"
  >
    <HomeCard
      v-for="(item, i) in homeItems?.data"
      v-bind="{ title: item.hosting_name, images: item.images }"
      :key="i"
    />
  </section>
</template>

<script lang="ts" setup>
import { set } from '@vueuse/core'
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'

const homeItems = ref<_AsyncData<any[], Error | null>>()

set(homeItems, await useAsyncData('home', () => $fetch('/api/hello')))

// Page metadata
definePageMeta({
  key: 'home'
  // keepalive: true
})
</script>
