// 影展場次-放映清單

<template>
  <!-- pc and tab -->
  <div
    class="no-scrollbar hidden h-full w-full flex-col justify-center overflow-x-auto text-stone-300 sm:flex"
    ref="scrollContainer"
  >
    <!-- 各影城場次 -->
    <div v-for="(theatre, key) in screenTimes" :key="key" class="flex-0 mt-7 flex h-1/3">
      <!-- 影城名稱 -->
      <div class="overflow-hidden">
        <div
          class="animateRiver flex aspect-4/3 h-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2"
        >
          <span>{{ key }}</span>
        </div>
      </div>
      <!-- 影城名稱 -->

      <!-- 電影 -->
      <div v-for="(screening, i) in theatre" :key="i" class="relative">
        <ScreeningCard
          :screening="screening"
          :film="screening.movie_id"
          :date="route.params.date"
        ></ScreeningCard>
      </div>
      <!-- 電影 -->
    </div>
    <!-- 各影城場次 -->
  </div>
  <!-- pc and tab -->

  <!-- mobile -->
  <div
    class="no-scrollbar flex h-full w-full justify-center gap-1 overflow-auto text-stone-300 sm:hidden"
  >
    <!-- 各影城場次 -->
    <div
      v-for="(theatre, key) in props.screenTimes.value"
      :key="key"
      class="flex-0 animateScreeningCard h-full w-full flex-col"
    >
      <!-- 影城名稱 -->
      <div
        class="flex h-20 w-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2 text-sm"
      >
        <span>{{ key }}</span>
      </div>
      <!-- 影城名稱 -->

      <!-- 電影 -->
      <div v-for="(screening, i) in theatre" :key="i" class="no-scrollbar relative">
        <ScreeningCard
          :screening="screening"
          :film="screening.movie_id"
          :date="route.params.date"
          :vertical="true"
        ></ScreeningCard>
      </div>
      <!-- 電影 -->
    </div>
    <!-- 各影城場次 -->
  </div>
  <!-- mobile -->
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHorizontalScroll } from '@/utils/sideScroller.js'

const { scrollContainer } = useHorizontalScroll()

const props = defineProps({
  screenTimes: {
    type: Object,
    default: () => {}
  }
})

const route = useRoute()
</script>
