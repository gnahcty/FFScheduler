// 排程頁面-行事曆元件（手機、平板）
<template>
  <!-- date nav -->
  <div class="mt-5 flex w-full items-center justify-center gap-5 font-bold">
    <Button @click="goToPreviousWeek" class="px-4 py-2" icon="pi pi-angle-left" text rounded />
    <div class="text-lg">{{ formattedMonthYear }}</div>
    <Button @click="goToNextWeek" class="px-4 py-2" icon="pi pi-angle-right" text rounded />
  </div>
  <!-- date nav -->

  <!-- week view -->
  <div
    class="mx-auto flex justify-center overflow-auto rounded-lg bg-white py-4 sm:justify-center sm:px-2 md:mx-12"
  >
    <div v-for="day in weekDays" :key="day.dateString">
      <!-- tab -->
      <div
        class="group hidden justify-center transition-all duration-300 hover:bg-primary-50 hover:shadow-lg sm:mx-1 sm:flex sm:w-16 sm:cursor-pointer sm:rounded-lg"
        @click="currentDate = new Date(day.dateString)"
        :class="{
          'border border-primary-400 bg-primary-50 font-bold text-primary-900':
            currentDate.getDate() === new Date(day.dateString).getDate()
        }"
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
      <div
        class="mx-1 flex flex-col justify-center gap-3 text-center text-gray-900 sm:hidden"
        @click="currentDate = new Date(day.dateString)"
      >
        <p class="text-sm">
          {{ day.day }}
        </p>
        <p
          class="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-emerald-100 hover:text-emerald-900 hover:shadow-lg"
          :class="{
            'border border-primary-400 bg-primary-50 font-bold text-primary-900':
              currentDate.getDate() === new Date(day.dateString).getDate()
          }"
        >
          {{ day.date }}
        </p>
      </div>
      <!-- mobile -->
    </div>
  </div>
  <!-- week view -->

  <!-- list -->

  <div class="flex flex-col">
    <div class="mr-6 self-end text-sm underline" @click="deleteAllFilmsToday">清除本日場次</div>
    <div class="flex flex-wrap px-5 sm:mt-10">
      <div class="flex flex-auto flex-col gap-1 rounded p-3">
        <div v-for="(film, i) in filmsForDate" :key="i">
          <EventChips v-model:film="filmsForDate[i]" :date="currentDate"></EventChips>
        </div>
      </div>
      <Divider class="sm:hidden" />
      <div class="w-full sm:w-64">
        <div class="text-center font-bold underline underline-offset-2 opacity-50">
          本日已刪除場次
        </div>
        <div class="mt-3 min-h-32 rounded-lg border border-dashed px-2 py-3">
          <div v-for="(film, i) in deletedFilms" :key="i">
            <EventChips
              v-model:film="deletedFilms[i]"
              :date="currentDate"
              :showDeleted="true"
            ></EventChips>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { startOfWeek, endOfWeek, addWeeks, format, eachDayOfInterval } from 'date-fns'
import { useUserList } from '@/stores/filmStore.js'
const { films } = useUserList()

const currentDate = ref(new Date())

const filmsForDate = computed(() => {
  return films.filter((film) =>
    film.times.some(
      (timeEntry) =>
        timeEntry.time.includes(`${format(currentDate.value, 'MM.dd')}`) &&
        timeEntry.deleted === false
    )
  )
})

const deletedFilms = computed(() => {
  return films.filter((film) =>
    film.times.some(
      (timeEntry) =>
        timeEntry.time.includes(`${format(currentDate.value, 'MM.dd')}`) &&
        timeEntry.deleted === true
    )
  )
})

const deleteAllFilmsToday = () => {
  for (const film of filmsForDate.value) {
    for (const screening of film.times) {
      if (screening.time.includes(`${format(currentDate.value, 'MM.dd')}`)) {
        screening.deleted = true
      }
    }
  }
}

// 本周第一天日期
const startOfCurrentWeek = computed(() => startOfWeek(currentDate.value, { weekStartsOn: 1 }))
// 本周最後一天日期
const endOfCurrentWeek = computed(() => endOfWeek(currentDate.value, { weekStartsOn: 1 }))
// MMMM yyyy
const formattedMonthYear = computed(() => format(currentDate.value, 'MMMM yyyy'))

// 本周日期
const weekDays = computed(() => {
  return eachDayOfInterval({
    start: startOfCurrentWeek.value,
    end: endOfCurrentWeek.value
  }).map((day) => ({
    day: format(day, 'EEE'), //wed
    date: format(day, 'dd'), //02
    dateString: format(day, 'yyyy-MM-dd') //2022-02-02
  }))
})

const goToNextWeek = () => {
  currentDate.value = addWeeks(currentDate.value, 1)
}

const goToPreviousWeek = () => {
  currentDate.value = addWeeks(currentDate.value, -1)
}
</script>
