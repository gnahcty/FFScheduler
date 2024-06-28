// 影展場次
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
import { CalendarAnimation } from '@/animation/animation.js'
import { ScreeningCardAnimation } from '@/animation/animation.js'
import { useGeneralStore } from '@/stores/generalStore'
import useAxios from '@/axios/useAxios.js'

const state = useGeneralStore()
const { getScreeningsByDate } = useAxios()
const screenTimes = ref({})
const route = useRoute()

onMounted(async () => {
  screenTimes.value = await getScreeningsByDate(route.params.date)
  state.isLoading = false
  nextTick(() => CalendarAnimation())
})

watch(
  () => route.params.date,
  async () => {
    state.isLoading = false
    screenTimes.value = await getScreeningsByDate(route.params.date)
    nextTick(() => ScreeningCardAnimation())
  }
)
</script>
