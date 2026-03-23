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
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { CalendarAnimation } from '@/animation/animation.js'
import { ScreeningCardAnimation } from '@/animation/animation.js'
import { useGeneralStore } from '@/stores/generalStore'
import useAxios from '@/axios/useAxios.js'

const state = useGeneralStore()
const { getScreeningsByDate } = useAxios()
const screenTimes = ref({})
const route = useRoute()
const hasApiBase = Boolean(import.meta.env.VITE_API)
const loadedDate = ref(null)

const loadScreenings = async (date) => {
  if (!hasApiBase || typeof date !== 'string' || !date.trim()) {
    screenTimes.value = {}
    state.isLoading = false
    return
  }

  screenTimes.value = (await getScreeningsByDate(date)) ?? {}
  state.isLoading = false

  nextTick(() => {
    if (loadedDate.value === null) {
      CalendarAnimation()
    } else {
      ScreeningCardAnimation()
    }

    loadedDate.value = date
  })
}

watch(
  () => route.params.date,
  async (date) => {
    await loadScreenings(date)
  },
  { immediate: true }
)
</script>
