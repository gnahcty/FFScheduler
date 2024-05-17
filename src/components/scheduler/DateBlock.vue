<template>
  <div class="relative h-full min-h-32 border-b border-r px-2 py-2">
    <div
      class="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-center leading-none transition duration-100 ease-in-out"
      :class="{
        'bg-emerald-500 text-white': isToday(props.date),
        'text-gray-700 hover:bg-blue-200': !isToday(props.date)
      }"
    >
      {{ getDate(props.date) }}
    </div>
    <div v-for="(film, i) in filmsForDate" :key="i">
      <EventChips v-model:film="filmsForDate[i]" :date="props.date"></EventChips>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isToday, getDate, format } from 'date-fns'
import { useUserList } from '@/stores/filmStore.js'

const props = defineProps({
  date: {
    type: Object,
    default: null
  }
})

const { films } = useUserList()
const filmsForDate = computed(() => {
  return films.filter((film) =>
    film.times.some(
      (timeEntry) =>
        timeEntry.time.includes(`${format(props.date, 'MM.dd')}`) && timeEntry.deleted === false
    )
  )
})
</script>
