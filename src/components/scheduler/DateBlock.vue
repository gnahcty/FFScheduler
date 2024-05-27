<template>
  <div class="relative h-full min-h-32 border-b border-r border-stone-700 px-2 py-2">
    <div
      class="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-center leading-none transition duration-100 ease-in-out"
      :class="{
        'text-primary-500 underline underline-offset-4': isToday(props.date),
        'text-stone-200': airing() && !isToday(props.date),
        'text-stone-600': !isToday(props.date) && !airing()
      }"
    >
      {{ getDate(props.date) }}
    </div>
    <div v-for="(_, i) in filmsForDate" :key="i">
      <EventChips v-model:film="filmsForDate[i]"></EventChips>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { isToday, getDate, format, isBefore, isAfter } from 'date-fns'
import { useUserList } from '@/stores/filmStore.js'
import { FFEndDay, FFStartDay } from '@/utils/temp_data'

const props = defineProps({
  date: {
    type: Object,
    default: null
  }
})
const { screeningsOfTheDay } = useUserList()
let filmsForDate = screeningsOfTheDay(format(props.date, 'MM.dd'))
const airing = () => isAfter(props.date, FFStartDay) && isBefore(props.date, FFEndDay)
watch(
  () => props.date,
  () => {
    filmsForDate = screeningsOfTheDay(format(props.date, 'MM.dd'))
  }
)
</script>
