<template>
  <div class="my-4 flex w-full justify-center sm:my-10">
    <div class="relative overflow-hidden md:h-36">
      <div class="animateMask absolute h-full bg-primary-500"></div>
      <div class="animateTitle flex h-16 justify-center md:h-36">
        <!-- month -->
        <div class="hidden items-center text-5xl sm:flex md:text-7xl lg:text-9xl">april</div>
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
                  'scale-150 font-bold': i === startingSlideIndex
                }"
                :id="`slide${i}`"
                :style="`left:${offset * i}px; width:${offset}px`"
                @click="moveToDate(date.date, i)"
              >
                <div>{{ date.date }}</div>
                <div class="day ms-2" :class="{ hidden: i !== startingSlideIndex }">
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
import { computed, ref } from 'vue'
import gsap from 'gsap'
import { useElementSize } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'

const wrapper = ref(null)
const { width } = useElementSize(wrapper) //timeline width
const router = useRouter()
const route = useRoute()
const offset = computed(() => (width.value > 530 ? width.value / 7 : width.value / 5)) //日期間隔
const datesBefore = computed(() => (width.value > 530 ? 3 : 2)) //置中日期前有幾個日期
const dates = ref([
  { date: '14', day: 'SAT' },
  { date: '15', day: 'SUN' },
  { date: '16', day: 'MON' },
  { date: '17', day: 'TUE' },
  { date: '18', day: 'WED' },
  { date: '19', day: 'THU' },
  { date: '20', day: 'FRI' },
  { date: '21', day: 'SAT' },
  { date: '22', day: 'SUN' },
  { date: '23', day: 'MON' },
  { date: '24', day: 'TUE' },
  { date: '25', day: 'WED' },
  { date: '26', day: 'THU' },
  { date: '27', day: 'FRI' }
])
const month = '04'
const startingDate = ref(route.params.date.split('_')[1]) //進入頁面時的日期

const startingSlideIndex = computed(() =>
  dates.value.findIndex((date) => date.date === startingDate.value)
) //進入頁面時的日期在第幾個slide

const containerOffset = computed(() => {
  return `left:${-offset.value * (startingSlideIndex.value - datesBefore.value)}px`
})

const moveToDate = (date, n) => {
  const tl = gsap.timeline()
  tl.to('.container', {
    duration: 1,
    x: -offset.value * (n - startingSlideIndex.value),
    ease: 'power2.inOut'
  })
    .to('.slide', { duration: 0.5, scale: 1, fontWeight: 400, ease: 'power2.inOut' }, '<')
    .to(
      `#slide${n}`,
      {
        duration: 1,
        scale: 1.5,
        fontWeight: 700,
        ease: 'power2.inOut'
      },
      '<'
    )
    .to('.day', { display: 'none', duration: 0.5, ease: 'power2.inOut' }, '<')
    .to(
      [`#slide${n + 1}`, `#slide${n - 1}`],
      { duration: 0.5, scale: 1.3, ease: 'power2.inOut' },
      '<0.2'
    )
    .to(`#slide${n} .day`, { display: 'block', duration: 0.5, ease: 'power2.inOut' }, '<0.2')

  router.push(`${month}_${date}`)
}
</script>
