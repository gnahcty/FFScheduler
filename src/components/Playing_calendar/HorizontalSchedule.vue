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
import { reactive, onMounted, onUnmounted, ref } from 'vue'
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

const scrollContainer = ref(null)

// Function to handle horizontal scrolling
const handleWheel = (event) => {
  if (!event.deltaY) return
  event.preventDefault() // Prevent the default vertical scroll
  scrollContainer.value.scrollLeft += event.deltaY * 0.75 // Horizontal scroll by the vertical scroll amount
}

// mounted時加滑鼠監聽
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

// unmounted時移除滑鼠監聽
onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('wheel', handleWheel)
  }
})
</script>

<style scoped>
.no-scrollbar {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
</style>
