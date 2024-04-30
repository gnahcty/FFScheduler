<template>
  <!-- date nav -->
  <div class="mt-20 flex w-full items-center justify-center gap-5 font-bold">
    <Button @click="goToPreviousWeek" class="px-4 py-2" icon="pi pi-angle-left" text rounded />
    <div class="text-lg">{{ formattedMonthYear }}</div>
    <Button @click="goToNextWeek" class="px-4 py-2" icon="pi pi-angle-right" text rounded />
  </div>
  <!-- date nav -->
  <!-- week view -->
  <div
    class="mx-auto flex justify-center overflow-auto rounded-lg bg-white py-4 shadow-md sm:justify-center sm:px-2 md:mx-12"
  >
    <div v-for="day in weekDays" :key="day.dateString">
      <!-- tab -->
      <div
        class="group hidden justify-center transition-all duration-300 hover:bg-emerald-100 hover:shadow-lg sm:mx-1 sm:flex sm:w-16 sm:cursor-pointer sm:rounded-lg"
      >
        <div class="flex flex-col items-center px-4 py-4 text-center">
          <p class="text-sm group-hover:text-emerald-900">
            {{ day.day }}
          </p>
          <p class="mt-3 group-hover:font-bold group-hover:text-emerald-900">
            {{ day.date }}
          </p>
        </div>
      </div>
      <!-- tab -->

      <!-- mobile -->
      <div class="mx-1 flex flex-col justify-center gap-3 text-center text-gray-900 sm:hidden">
        <p class="text-sm">
          {{ day.day }}
        </p>
        <p
          class="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-emerald-100 hover:text-emerald-900 hover:shadow-lg"
        >
          {{ day.date }}
        </p>
      </div>
      <!-- mobile -->
    </div>
  </div>
  <!-- week view -->
</template>

<script setup>
import { ref, computed } from 'vue'
import { startOfWeek, endOfWeek, addWeeks, format, eachDayOfInterval } from 'date-fns'

const currentDate = ref(new Date())

const startOfCurrentWeek = computed(() => startOfWeek(currentDate.value, { weekStartsOn: 1 }))
const endOfCurrentWeek = computed(() => endOfWeek(currentDate.value, { weekStartsOn: 1 }))

const formattedMonthYear = computed(() => format(currentDate.value, 'MMMM yyyy'))

const weekDays = computed(() => {
  return eachDayOfInterval({
    start: startOfCurrentWeek.value,
    end: endOfCurrentWeek.value
  }).map((day) => ({
    day: format(day, 'EEE'),
    date: format(day, 'dd'),
    dateString: format(day, 'yyyy-MM-dd')
  }))
})

const goToNextWeek = () => {
  currentDate.value = addWeeks(currentDate.value, 1)
  console.log(currentDate.value)
}

const goToPreviousWeek = () => {
  currentDate.value = addWeeks(currentDate.value, -1)
}
</script>
