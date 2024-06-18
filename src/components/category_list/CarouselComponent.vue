// 影展單元-輪播圖元件

<template>
  <div class="h-full w-full">
    <!-- PC Marquee -->
    <div class="relative hidden h-full w-full overflow-hidden sm:block">
      <div class="animateMask absolute z-30 h-full w-full bg-stone-900"></div>
      <Vue3Marquee pauseOnClick :duration="35" class="animateTitle min-h-full overflow-y-clip">
        <div v-for="(category, i) in categories" :key="i" class="h-full w-64">
          <CategoryCard :category="category" :categoryIndex="i" />
        </div>
      </Vue3Marquee>
    </div>
    <!-- PC Marquee -->

    <!-- Mobile Marquee -->
    <div class="h-full w-full sm:hidden">
      <Vue3Marquee pauseOnClick :duration="35" vertical class="max-h-full">
        <div v-for="(category, i) in categories" :key="i" class="h-96 w-64">
          <CategoryCard :category="category" :categoryIndex="i" />
        </div>
      </Vue3Marquee>
    </div>
    <!-- Mobile Marquee -->
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import { onMounted, ref } from 'vue'
import useAxios from '@/utils/useAxios'

const categories = ref([])
const { getCategoryList } = useAxios()

onMounted(async () => {
  categories.value = await getCategoryList()
})
</script>
