<template>
  <!-- for PC -->
  <div
    class="mt-1 hidden cursor-pointer overflow-hidden rounded-lg px-2 py-1 lg:block"
    :class="BtnStyle(film.times).value"
    @click="deleteScreeningToggle(film.times)"
    v-on-long-press="[() => lockScreeningToggle(film.times), { modifiers: { stop: true } }]"
    v-if="!film.times.deleted"
  >
    <p class="truncate text-xs leading-tight">{{ startingTime }} - {{ endingTime }}</p>
    <p class="truncate text-sm leading-tight">{{ film.CName }}</p>
    <p class="truncate text-xs leading-tight">{{ film.EName }}</p>
  </div>
  <!-- for PC -->

  <!-- for tab and mobile -->
  <div class="flex gap-3 lg:hidden">
    <div class="flex flex-col items-center text-sm">
      <span>{{ startingTime }}</span>
      <span>|</span>
      <span>{{ endingTime }}</span>
    </div>
    <div
      class="mt-1 flex-auto overflow-hidden rounded-lg border px-2 py-1"
      @click="deleteScreeningToggle(film.times)"
      v-on-long-press="[() => lockScreeningToggle(film.times), { modifiers: { stop: true } }]"
      :class="BtnStyle(film.times).value"
    >
      <p class="truncate">{{ film.CName }}</p>
      <p class="truncate">{{ film.EName }}</p>
    </div>
  </div>
  <!-- for tab and mobile -->
</template>

<script setup>
import { computed } from 'vue'
// import { format, set, addMinutes } from 'date-fns'
import useScreeningManagement from '@/utils/useScreeningManagement.js'
import { vOnLongPress } from '@vueuse/components'

const film = defineModel('film')

const { deleteScreeningToggle, lockScreeningToggle, BtnStyle } = useScreeningManagement(
  film.value.filmId
)

// 場次開始時間
const startingTime = computed(() => {
  return film.value.times.time.split(' ')[2]
})
// 場次結束時間
const endingTime = computed(() => {
  let h = startingTime.value?.split(':')[0] * 1
  let min = startingTime.value?.split(':')[1] * 1 + film.value?.length * 1
  while (min >= 60) {
    h++
    min = min - 60
  }
  return `${h}:${min}`
})
</script>
