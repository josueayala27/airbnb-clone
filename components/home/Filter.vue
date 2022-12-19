<template>
  <section class="top-[81px] sticky z-50 bg-white shadow-md">
    <div class="container mx-auto flex gap-6">
      <div class="relative flex-1 overflow-hidden">
        <div ref="scrollContent" class="scrollbar-hide overflow-auto lg:overflow-hidden flex gap-8 items-center">
          <HomeFilterItem id="filter-item" selected class="ml-6 lg:ml-0" :title="$t('filters.amazingPools')" image="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.cabins')" image="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.ruralHouses')" image="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.tropical')" image="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.fun')" image="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.sharedHouses')" image="https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.inFrontOfTheBeach')" image="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.incredibleViews')" image="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.lakeFront')" image="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.tinyHouses')" image="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.popular')" image="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.impressive')" image="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.treeHouses')" image="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.domes')" image="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.castles')" image="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.novelty')" image="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.nationalParks')" image="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.mansions')" image="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.famousCities')" image="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.isolated')" image="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.surf')" image="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" />
          <HomeFilterItem id="filter-item" :title="$t('filters.vineyards')" image="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" />
          <HomeFilterItem id="filter-item" class="mr-6 lg:mr-0" :title="$t('filters.bedAndBreakfast')" image="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" />
        </div>

        <!-- Left action button -->
        <div v-if="!arrivedState.left" class="absolute bg-gradient-to-r from-white via-white to-transparent pr-[3rem] top-0 h-full left-0 hidden lg:flex items-center" @click="goTo('back')">
          <button class="p-2 text-xs bg-white rounded-full inline-flex border">
            <BaseIcon name="chevron-left" category="outline" class="h-[12px] aspect-square" />
          </button>
        </div>

        <!-- Right action button -->
        <div v-if="!arrivedState.right" class="absolute bg-gradient-to-l from-white via-white to-transparent pl-[3rem] top-0 h-full right-0 hidden lg:flex items-center" @click="goTo('next')">
          <button class="p-2 text-xs bg-white rounded-full inline-flex border">
            <BaseIcon name="chevron-right" category="outline" class="h-[12px] aspect-square" />
          </button>
        </div>
      </div>

      <!-- Actions -->
      <div class="lg:flex items-center hidden">
        <button class="text-sm border rounded-xl p-3 flex items-center gap-2">
          <span class="h-[14px] w-[14px]" v-html="adjustmentIcon" />
          {{ $t('general.filters') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRefHistory, get, set, useScroll } from '@vueuse/core'
import adjustmentIcon from '@/assets/svg/filters/adjustment.svg?raw'

const { $gsap } = useNuxtApp()

const scrollContent = ref()
const { arrivedState } = useScroll(scrollContent, { behavior: 'smooth' })

const currentValue = ref(0)
const { undo } = useRefHistory(currentValue)

const goTo = (direction: 'next' | 'back') => {
  const items = Array.from(document.querySelectorAll("[id='filter-item']"))

  const totalShowed = items.filter(el => el.ariaHidden === 'false').length - 2
  const firstItem = items.findIndex(el => el.ariaHidden === 'false')

  set(currentValue, totalShowed + firstItem)
  if (direction.includes('next')) {
    $gsap.to(get(scrollContent), { ease: 'power2.out', scrollTo: items[get(currentValue)] })
    return
  }

  undo()
  $gsap.to(get(scrollContent), { ease: 'power2.out', scrollTo: items[get(currentValue)] })
}
</script>
