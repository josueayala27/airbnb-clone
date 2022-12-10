
<template>
  <div v-html="items[props.category][props.name]" />
</template>

<script setup>
import StarSolidSvg from '@/assets/icons/solid/star.svg?raw'

const props = defineProps({
  category: { type: String, default: 'solid' },
  name: { type: String, default: 'star' }
})

const items = {
  solid: {
    star: StarSolidSvg
  }
}
</script>
