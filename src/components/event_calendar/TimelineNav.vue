<template>
  <div class="my-4 flex w-full justify-center sm:my-10">
    <div class="relative overflow-hidden md:h-36">
      <div class="animateMask absolute h-full bg-primary-500"></div>
      <div class="animateTitle flex h-16 justify-center md:h-36">
        <!-- month -->
        <div class="hidden items-center text-5xl sm:flex md:text-7xl lg:text-9xl">
          {{ FFMonth }}
        </div>
        <!-- month -->

        <!-- timeline -->
        <div id="timeLine" class="flex w-full flex-col overflow-clip">
          <!-- dates -->
          <div
            class="no-scrollbar flex h-full items-center justify-center overflow-x-auto overflow-y-clip sm:h-1/2"
            ref="wrapper"
          >
            <div class="container relative h-full w-full" :style="containerOffset">
              <div
                v-for="(date, i) in dates"
                :key="i"
                class="slide absolute bottom-0 top-0 my-auto flex cursor-pointer items-center justify-center text-primary-600"
                :class="{
                  'scale-150 font-bold': i === currentSlideIndex
                }"
                :id="`slide${i}`"
                :style="`left:${offset * i}px; width:${offset}px`"
                @click="moveToDate(date.date, i)"
              >
                <div>{{ date.date }}</div>
                <div class="day ms-2" :class="{ hidden: i !== currentSlideIndex }">
                  {{ date.day }}
                </div>
              </div>
            </div>
          </div>
          <!-- dates -->

          <!-- line -->
          <div
            class="h-1/2 w-full border-t border-primary-600 sm:border-t-2 md:border-t-4 lg:border-t-8"
          ></div>
          <!-- line -->
        </div>
        <!-- timeline -->
        <!-- year -->
        <div class="hidden items-center text-5xl sm:flex md:text-7xl lg:text-9xl">2024</div>
        <!-- year -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { format, eachDayOfInterval } from 'date-fns'
import { moveTimeLine } from '@/animation/animation.js'
import useAxios from '@/utils/useAxios.js'

const { getFFDateRange } = useAxios()
const router = useRouter()
const route = useRoute()

const wrapper = ref(null)
const { width } = useElementSize(wrapper) //timeline width
const offset = computed(() => (width.value > 530 ? width.value / 7 : width.value / 5)) //日期間隔
const datesBefore = computed(() => (width.value > 530 ? 3 : 2)) //置中日期前有幾個日期
const FFStartDate = ref(null)
const FFEndDate = ref(null)
const FFMonth = ref(null)

const dates = ref([])

const renderDates = (start, end) =>
  eachDayOfInterval({ start, end }).map((date) => {
    return {
      date: format(date, 'dd'),
      day: format(date, 'eee')
    }
  })

const currentDate = ref(route.params.date.split('_')[1]) //進入頁面時的日期

const currentSlideIndex = computed(() =>
  dates.value.findIndex((date) => date.date === currentDate.value)
) //進入頁面時的日期在第幾個slide

const containerOffset = computed(() => {
  return `left:${-offset.value * (currentSlideIndex.value - datesBefore.value)}px`
})

const moveToDate = (date, n) => {
  moveTimeLine(offset.value, n, currentSlideIndex.value)
  router.push(`${FFMonth.value}_${date}`)
}

onMounted(async () => {
  const dateRange = await getFFDateRange()
  FFStartDate.value = dateRange.start
  FFEndDate.value = dateRange.end
  FFMonth.value = format(dateRange.start, 'MMMM')
  dates.value = renderDates(FFStartDate.value, FFEndDate.value)
})
</script>
