
<template>
  <div v-html="items[props.category][props.name]" />
</template>

<script setup>
// Solid
import StarSolidSvg from '@/assets/icons/solid/star.svg?raw'

// Outline
import ChebronRightOutlineSvg from '@/assets/icons/outline/chevron-right.svg?raw'
import ChebronLeftOutlineSvg from '@/assets/icons/outline/chevron-left.svg?raw'
import HeartOutlineSvg from '@/assets/icons/outline/heart.svg?raw'

// Custom
import localizeCustomSvg from '@/assets/icons/custom/localize.svg?raw'

const props = defineProps({
  category: { type: String, default: 'solid' | 'outline' | 'custom' },
  name: { type: String, default: 'star' }
})

const items = {
  outline: {
    'chevron-right': ChebronRightOutlineSvg,
    'chevron-left': ChebronLeftOutlineSvg,
    heart: HeartOutlineSvg
  },
  solid: {
    star: StarSolidSvg
  },
  custom: {
    localize: localizeCustomSvg
  }
}
</script>
