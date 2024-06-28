// 排程頁面-行事曆元件（電腦版）
<template>
  <div class="relative mt-10 overflow-hidden rounded-lg border border-stone-600">
    <!-- header -->
    <div class="flex items-center justify-between px-6 py-2">
      <!-- 日期年份 -->
      <div>
        <span class="text-lg font-bold">{{ format(currentDate, 'MMMM') }}</span>
        <span class="ml-1 text-lg font-bold">{{ getYear(currentDate) }}</span>
      </div>
      <!-- 日期年份 -->
      <!-- 換月份 -->
      <div class="flex items-center rounded-lg px-1" style="padding-top: 2px">
        <button
          class="inline-flex cursor-pointer items-center rounded-lg p-1 leading-none transition duration-100 ease-in-out hover:bg-gray-200"
          @click="changeMonth(-1)"
        >
          <span class="pi pi-angle-left"></span>
        </button>
        <button
          class="inline-flex cursor-pointer items-center rounded-lg p-1 leading-none transition duration-100 ease-in-out hover:bg-gray-200"
          @click="changeMonth(1)"
        >
          <span class="pi pi-angle-right"></span>
        </button>
      </div>
      <!-- 換月份 -->
    </div>
    <!-- header -->

    <div class="-mx-1 -mb-1 grid grid-cols-7 border-t border-stone-600">
      <div class="absolute grid w-full grid-cols-7">
        <!-- 星期幾 -->
        <div v-for="day in days" :key="day" class="h-8 pt-[10px]">
          <div class="pl-2 text-center text-sm font-bold uppercase tracking-wide text-primary-800">
            {{ day }}
          </div>
        </div>
        <!-- 星期幾 -->
      </div>

      <!-- 每個月前幾天的空格 -->
      <div v-for="n in blankDays" :key="n">
        <div class="h-full min-h-32 border-b border-r border-stone-600"></div>
      </div>
      <!-- 每個月前幾天的空格 -->

      <!-- 日期 -->
      <div v-for="date in daysInMonth" :key="date.getDate()">
        <DateBlock :date="date" :dateRange="dateRange"></DateBlock>
      </div>
      <!-- 日期 -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  format,
  getDay,
  startOfMonth,
  eachDayOfInterval,
  endOfMonth,
  addMonths,
  getYear
} from 'date-fns'
import useAxios from '@/axios/useAxios'
import { useGeneralStore } from '@/stores/generalStore'

const state = useGeneralStore()
const { getFFDateRange } = useAxios()
const dateRange = ref(null)
const currentDate = ref(new Date())
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// 本月第一天日期 (str)
const startDay = computed(() => startOfMonth(currentDate.value))

// 本月最後一天日期 (str)
const endDay = computed(() => endOfMonth(currentDate.value))

// 本月所有日期 (array)
const daysInMonth = computed(() => eachDayOfInterval({ start: startDay.value, end: endDay.value }))

// 每個月第一天是星期幾 (0= sunday)
const blankDays = computed(() => (getDay(startDay.value) + 6) % 7)

function changeMonth(step) {
  currentDate.value = addMonths(currentDate.value, step)
}

onMounted(async () => {
  dateRange.value = await getFFDateRange()
  currentDate.value = new Date(dateRange.value.start)
  state.isLoading = false
})
</script>
