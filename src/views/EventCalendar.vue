// 影展場次(月曆版)
<template>
  <div
    class="flex h-screen flex-col items-center justify-center bg-stone-900 py-16 uppercase text-primary-600 sm:pb-0"
  >
    <!-- Date Nav -->
    <TimelineNav></TimelineNav>
    <!-- Date Nav -->

    <!-- Schedule -->
    <EventSchedule :screenTimes="screenTimes"></EventSchedule>
    <!-- Schedule -->
  </div>
</template>
<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
// import { onMounted, nextTick } from 'vue'
import { CalendarAnimation } from '@/animation/animation.js'
import { ScreeningCardAnimation } from '@/animation/animation.js'
import useAxios from '@/utils/useAxios.js'

const { getScreeningsByDate } = useAxios()
const screenTimes = ref({})
const route = useRoute()

onMounted(async () => {
  screenTimes.value = await getScreeningsByDate(route.params.date)
  nextTick(() => CalendarAnimation())
})

watch(
  () => route.params.date,
  async () => {
    ;(screenTimes.value = await getScreeningsByDate(route.params.date)),
      nextTick(() => ScreeningCardAnimation())
  }
)
</script>
