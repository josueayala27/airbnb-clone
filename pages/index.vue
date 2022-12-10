<template>
  <section />
  <section
    class="container px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]"
  >
    <div v-for="items in 8" :key="items" class="text-base">
      <div class="aspect-[20/19] bg-red-500 rounded-2xl" />
      <div class="flex justify-between mt-3 items-start">
        <!-- Card information text -->
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

        <!-- Card actions -->
        <div class="flex gap-2 items-center">
          <BaseIcon name="star" category="solid" class="h-[15px] aspect-square" />
          4.93
        </div>
      </div>
    </div>
  </section>
</template>
