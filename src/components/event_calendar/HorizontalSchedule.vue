// 影展場次-放映清單(橫向)

<template>
  <div
    class="no-scrollbar flex w-full max-w-[60vw] flex-col justify-center overflow-auto"
    ref="scrollContainer"
  >
    <div v-for="(theatre, key) in screenTimes" :key="key" class="h-36">
      <div class="fixed font-bold dark:text-amber-500">{{ key }}</div>
      <div class="relative mt-7">
        <ScreeningCard :films="theatre"></ScreeningCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useHorizontalScroll } from '@/utils/sideScroller'

const { scrollContainer } = useHorizontalScroll()
const props = defineProps({
  films: {
    type: Array,
    default: () => []
  }
})
const screenTimes = reactive({})

// Function to categorize films by screening place
;(function categorizeFilmsByPlace(films, date) {
  films.forEach((film) => {
    film.times.forEach((screening) => {
      if (screening.time.includes(date)) {
        // Ensure the place is set up in the map as an array
        if (!screenTimes[screening.place]) {
          screenTimes[screening.place] = []
        }
        // Push the film into the correct place array
        screenTimes[screening.place].push(film)
      }
    })
  })
})(props.films, '04.18')
</script>
