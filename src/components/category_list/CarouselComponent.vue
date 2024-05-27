// 影展單元-輪播圖元件

<template>
  <div class="h-full w-full">
    <!-- PC Marquee -->
    <div class="relative hidden h-full w-full overflow-hidden sm:block">
      <div class="animateMask absolute z-30 h-full w-full bg-stone-900"></div>
      <Vue3Marquee pauseOnClick :duration="35" class="animateTitle min-h-full overflow-y-clip">
        <div v-for="(category, i) in categories" :key="category.name" class="h-full w-64">
          <CategoryCard :film="category" :filmIndex="i" />
        </div>
      </Vue3Marquee>
    </div>
    <!-- PC Marquee -->

    <!-- Mobile Marquee -->
    <div class="h-full w-full sm:hidden">
      <Vue3Marquee pauseOnClick :duration="35" vertical class="max-h-full">
        <div v-for="(category, i) in categories" :key="category.name" class="h-96 w-64">
          <CategoryCard :film="category" :filmIndex="i" />
        </div>
      </Vue3Marquee>
    </div>
    <!-- Mobile Marquee -->
  </div>
</template>

<script setup>
import { getCategories } from '@/utils/temp_data.js'
import { Vue3Marquee } from 'vue3-marquee'
const categories = getCategories()
</script>
