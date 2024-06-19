// 排程頁面-行事曆元件（手機、平板）
<template>
  <!-- week view -->
  <div
    class="mx-auto mt-5 flex justify-center overflow-auto py-4 sm:justify-center sm:px-2 md:mx-12"
  >
    <div v-for="day in weekDays" :key="day.dateString">
      <!-- tab -->
      <div
        class="hidden justify-center sm:mx-1 sm:flex sm:w-16 sm:cursor-pointer sm:rounded-lg"
        @click="currentDate = new Date(day.dateString)"
        :class="{
          ' border border-primary-700 font-bold ':
            currentDate.getDate() === new Date(day.dateString).getDate(),
          'text-primary-500': isAiring(day.dateString),
          'text-primary-50': !isAiring(day.dateString)
        }"
      >
        <div class="flex flex-col items-center px-4 py-4 text-center">
          <p class="text-sm">
            {{ day.day }}
          </p>
          <p class="mt-3">
            {{ day.date }}
          </p>
        </div>
      </div>
      <!-- tab -->

      <!-- mobile -->
      <div
        class="mx-1 flex flex-col justify-center gap-3 text-center sm:hidden"
        @click="currentDate = new Date(day.dateString)"
        :class="{
          'text-primary-500': isAiring(day.dateString),
          'text-primary-50': !isAiring(day.dateString)
        }"
      >
        <p class="text-sm">
          {{ day.day }}
        </p>
        <p
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          :class="{
            'border border-primary-600 font-bold ':
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
  <!-- date nav -->
  <div class="flex w-full items-center justify-center gap-5 font-bold text-white">
    <Button @click="goToPreviousWeek" class="px-4 py-2" icon="pi pi-angle-left" text rounded />
    <div class="text-lg">{{ formattedMonthYear }}</div>
    <Button @click="goToNextWeek" class="px-4 py-2" icon="pi pi-angle-right" text rounded />
  </div>
  <!-- date nav -->

  <!-- list -->
  <div class="flex flex-col">
    <!-- <div
      class="mr-6 self-end text-sm underline"
    >
      清除本日場次
    </div> -->
    <div class="flex flex-wrap px-5 sm:mt-10">
      <div class="flex flex-auto flex-col gap-1 rounded p-3">
        <div v-for="(list, i) in lists" :key="list._id">
          <EventChips v-model:list="lists[i]"></EventChips>
        </div>
      </div>
      <Divider class="sm:hidden" />
      <div class="w-full sm:w-64">
        <div class="text-center font-bold underline underline-offset-2 opacity-50">
          本日已刪除場次
        </div>
        <div class="mt-3 min-h-32 rounded-lg border border-dashed px-2 py-3">
          <div v-for="(list, i) in lists" :key="list._id">
            <EventChips v-model:list="lists[i]" showHidden></EventChips>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  format,
  eachDayOfInterval,
  isWithinInterval,
  isSameDay
} from 'date-fns'
import useAxios from '@/axios/useAxios'
import { useListStore } from '@/stores/listStore'

const dateRange = ref(null)
const lists = ref([])
const currentDate = ref(new Date())
const { getFFDateRange } = useAxios()
const useList = useListStore()

//是否在影展播映期間
const isAiring = (date) =>
  computed(
    () =>
      isWithinInterval(date, {
        start: new Date(dateRange.value.start),
        end: new Date(dateRange.value.end)
      }) || isSameDay(date, new Date(dateRange.value.start))
  )

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

watch(
  () => currentDate.value,
  () => {
    lists.value = useList.getListByDate(currentDate.value)
  }
)

onMounted(async () => {
  dateRange.value = await getFFDateRange()
  currentDate.value = new Date(dateRange.value.start)
  lists.value = useList.getListByDate(currentDate.value)
})
</script>
