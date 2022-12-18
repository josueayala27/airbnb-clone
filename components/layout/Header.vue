<template>
  <header class="sticky top-0 left-0 w-full z-50">
    <nav class="bg-white border-b">
      <div class="container mx-auto flex items-center">
        <!-- Logo -->
        <div class="w-[30%] h-[80px] flex items-center" @click="navigateTo('/')" v-html="fullLogo" />

        <!-- Navigation -->
        <div class="flex-1">
          <!-- Holi! -->
        </div>

        <!-- Actions -->
        <div class="w-[30%] flex items-center justify-end">
          <button class="p-3 hover:bg-gray-100 rounded-full text-sm font-medium" @click="navigateTo('/host')">
            Modo anfitrión
          </button>
          <button class="p-3 rounded-full hover:bg-gray-100 items-center">
            <BaseIcon name="localize" category="custom" class="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import fullLogo from '@/assets/svg/general/full-logo.svg?raw'
</script>
