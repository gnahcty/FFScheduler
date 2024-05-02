// 影展場次-放映清單(縱向)

<template>
  <div class="grid w-full grid-cols-3 gap-2">
    <div v-for="(theatre, key) in screenTimes" :key="key">
      <div class="dark:text-main-yellow text-center">{{ key }}</div>
      <div class="relative mt-5 grid grid-rows-subgrid">
        <screeningCard :films="theatre" vertical></screeningCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
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
