// 影展場次-放映清單(橫向)

<template>
  <!-- pc and tab -->
  <div
    class="no-scrollbar hidden h-full w-full flex-col justify-center overflow-x-auto text-stone-300 sm:flex"
    ref="scrollContainer"
  >
    <!-- 各影城場次 -->
    <div
      v-for="(theatre, key) in screenTimes"
      :key="key"
      class="flex-0 mt-7 flex h-1/3 overflow-hidden"
    >
      <!-- 影城名稱 -->
      <div
        class="animateRiver flex aspect-4/3 h-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2"
      >
        <span>{{ key }}</span>
      </div>
      <!-- 影城名稱 -->

      <!-- 電影 -->
      <div v-for="(film, i) in theatre" :key="i" class="relative">
        <ScreeningCard :film="film" :date="date"></ScreeningCard>
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
      v-for="(theatre, key) in screenTimes"
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
      <div v-for="(film, i) in theatre" :key="i" class="no-scrollbar relative">
        <ScreeningCard :film="film" :date="date" :vertical="true"></ScreeningCard>
      </div>
      <!-- 電影 -->
    </div>
    <!-- 各影城場次 -->
  </div>
  <!-- mobile -->
</template>

<script setup>
import { ref, onMounted, computed, reactive, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useHorizontalScroll } from '@/utils/sideScroller'
import { getFilmsByDate } from '@/utils/temp_data'
import gsap from 'gsap'

const films = reactive([])
const { scrollContainer } = useHorizontalScroll()
const route = useRoute()
const date = ref(route.params.date.split('_').join('.'))

let screenTimes = computed(() => {
  const screenTimes = {}
  films.forEach((film) => {
    film.times.forEach((screening) => {
      if (screening.time.includes(route.params.date.split('_').join('.'))) {
        if (!screenTimes[screening.place]) {
          screenTimes[screening.place] = []
        }
        screenTimes[screening.place].push(film)
      }
    })
  })
  return screenTimes
})

const renewFilmsArray = () => {
  const newFilmsArray = getFilmsByDate(route.params.date.split('_').join('.'))
  films.splice(0, films.length, ...newFilmsArray)
}

onMounted(() => {
  renewFilmsArray()
})

watch(
  () => route.params.date,
  () => {
    renewFilmsArray(), (date.value = route.params.date.split('_').join('.'))
    nextTick(() => {
      gsap.fromTo(
        '.animateScreeningCard',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.in' },
        '<0.5'
      )
    })
  }
)
</script>
