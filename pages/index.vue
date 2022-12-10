<template>
  <section />
  <section
    class="container px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]"
  >
    <HomeCard v-for="items in 8" :key="items" />
  </section>
</template>
