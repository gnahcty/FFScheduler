<template>
  <!-- for PC -->
  <div
    class="mt-1 hidden overflow-hidden rounded-lg border px-2 py-1 lg:block"
    :class="chipStyle"
    @click="deleteScreeningToggle(screening, true)"
    v-on-long-press="[() => lockScreeningToggle(screening), { modifiers: { stop: true } }]"
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
      @click="deleteScreeningToggle(screening, true)"
      v-on-long-press="[() => lockScreeningToggle(screening), { modifiers: { stop: true } }]"
      :class="chipStyle"
    >
      <p class="truncate">{{ film.CName }}</p>
      <p class="truncate">{{ film.EName }}</p>
    </div>
  </div>
  <!-- for tab and mobile -->
</template>

<script setup>
import { computed } from 'vue'
import { format, set, addMinutes } from 'date-fns'
import useScreeningManagement from '@/utils/useScreeningManagement.js'
import { vOnLongPress } from '@vueuse/components'

const film = defineModel('film')
const props = defineProps({
  date: {
    type: Object,
    default: null
  },
  showDeleted: {
    type: Boolean,
    default: false
  }
})
const { remainingScreening, deleteScreeningToggle, lockScreeningToggle } = useScreeningManagement(
  film.value
)

//  {"time": "04.14(日) 18:40", "place": "MUVIE TITAN", "locked": false, "deleted": false, "danger": false }
const screening = computed(() => {
  return film.value.times.find(
    (timeEntry) =>
      timeEntry.time.includes(`${format(props.date, 'MM.dd')}`) &&
      timeEntry.deleted === props.showDeleted
  )
})
// 計算場次開始時間
const startingTime = computed(() => {
  return screening.value.time.split(' ')[1]
})
// 計算場次結束時間
const endingTime = computed(() => {
  const startTimeFull = set(props.date, {
    hours: startingTime.value.split(':')[0],
    minutes: startingTime.value.split(':')[1]
  })
  const endTime = addMinutes(startTimeFull, film.value.length)

  return format(endTime, 'HH:mm')
})
// FIXME: locked &danger text should be white
const chipStyle = computed(() => {
  let bgColor, textColor, borderColor

  if (screening.value.locked === true) {
    bgColor = 'bg-gray-800'
    textColor = 'text-gray-100'
    borderColor = 'border-gray-800'
  } else if (remainingScreening.value <= 2) {
    bgColor = 'bg-orange-100'
    textColor = 'text-orange-800'
    borderColor = 'border-orange-200'
  } else {
    bgColor = 'bg-emerald-100'
    textColor = 'text-emerald-800'
    borderColor = 'border-emerald-200'
  }

  // 若衝堂，border及文字顏色設為紅色，加ring
  if (screening.value.danger) {
    return `${bgColor} border-red-400 ring-1 ring-red-400 text-red-800`
  } else {
    // 否則設為主題色，不加ring
    return `${bgColor} ${borderColor} ${textColor}`
  }
})
</script>
