<template>
  <section />
  <section
    class="container px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]"
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

interface Description {
  type: string;
  value: number;
}

interface Availability {
  start: string;
  end: string;
}

interface Card {
  id: string;
  hosting_name: string;
  description: Description;
  rate: number;
  currency: string;
  availability: Availability;
  images: string[];
}

const homeItems = ref<_AsyncData<Card[], Error | null>>()

set(homeItems, await useAsyncData('home', () => $fetch('/api/hello')))

</script>
