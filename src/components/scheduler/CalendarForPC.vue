<template>
  <div class="relative mt-10 overflow-hidden rounded-lg border bg-white shadow">
    <!-- header -->
    <div class="flex items-center justify-between px-6 py-2">
      <!-- 日期年份 -->
      <div>
        <span class="text-lg font-bold text-gray-800">{{ monthNames[month] }}</span>
        <span class="ml-1 text-lg font-normal text-gray-600">{{ year }}</span>
      </div>
      <!-- 日期年份 -->
      <!-- 換月份 -->
      <div class="rounded-lg border px-1" style="padding-top: 2px">
        <button
          class="inline-flex cursor-pointer items-center rounded-lg p-1 leading-none transition duration-100 ease-in-out hover:bg-gray-200"
          :class="{ 'cursor-not-allowed opacity-25': month === 0 }"
          :disabled="month === 0"
          @click="changeMonth(-1)"
        >
          <span class="pi pi-angle-left"></span>
        </button>
        <div class="inline-flex h-6 border-r"></div>
        <button
          class="inline-flex cursor-pointer items-center rounded-lg p-1 leading-none transition duration-100 ease-in-out hover:bg-gray-200"
          :class="{ 'cursor-not-allowed opacity-25': month === 11 }"
          :disabled="month === 11"
          @click="changeMonth(1)"
        >
          <span class="pi pi-angle-right"></span>
        </button>
      </div>
      <!-- 換月份 -->
    </div>
    <!-- header -->

    <div class="-mx-1 -mb-1 grid grid-cols-7 border-t">
      <div class="absolute grid w-full grid-cols-7">
        <!-- 星期幾 -->
        <div v-for="(day, index) in days" :key="index">
          <div class="h-8 py-2">
            <div class="pl-2 text-center text-sm font-bold uppercase tracking-wide text-gray-400">
              {{ day }}
            </div>
          </div>
        </div>
      </div>

      <!-- 每個月前幾天的空格 -->
      <div v-for="blankDay in blankDays" :key="blankDay">
        <div class="h-full min-h-32 border-b border-r"></div>
      </div>
      <!-- 日期 -->
      <div v-for="(date, dateIndex) in noOfDays" :key="dateIndex">
        <div class="relative min-h-32 border-b border-r px-2 py-2">
          <div
            class="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-center leading-none transition duration-100 ease-in-out"
            :class="{
              'bg-emerald-500 text-white': isToday(date),
              'text-gray-700 hover:bg-blue-200': !isToday(date)
            }"
          >
            {{ date }}
          </div>
          <EventChips danger></EventChips>
          <EventChips state="warning"></EventChips>
          <EventChips state="locked"></EventChips>
          <EventChips></EventChips>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const month = ref('') // Current month
const year = ref('') // Current year
const noOfDays = ref([]) // Array of days in the current month
const blankDays = ref([]) // Array of blank days before the first day of the month
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] // Array of day names
const eventDate = ref('') // Date of the event
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] // Array of month names

// Initialize the current date
function initDate() {
  const today = new Date()
  month.value = today.getMonth()
  year.value = today.getFullYear()
  eventDate.value = new Date(year.value, month.value, today.getDate()).toDateString()
}

// Check if the date is today
function isToday(date) {
  const today = new Date()
  const d = new Date(year.value, month.value, date)
  return today.toDateString() === d.toDateString()
}

// Get the number of days in the current month and the blank days before the first day
function getNoOfDays() {
  // 該月有幾天
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()

  // 該月是星期幾開始
  const dayOfWeek = new Date(year.value, month.value).getDay()

  //arr長度為該月第一天的星期數，數字為1,2,3...
  blankDays.value = Array.from({ length: dayOfWeek }, (_, i) => i + 1)
  //arr長度為該月日數，數字為1,2,3...
  noOfDays.value = Array.from({ length: daysInMonth }, (_, i) => i + 1)
}

// Change the month
function changeMonth(value) {
  month.value += value
  getNoOfDays()
}

onMounted(() => {
  initDate()
  getNoOfDays()
})
</script>
