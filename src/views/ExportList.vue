<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="flex h-64 w-full items-center">
      <div class="">
        <div
          v-for="n in 15"
          :key="n"
          class="slide absolute bottom-0 top-0 my-auto flex h-32 w-32 items-center justify-center"
          :id="`slide${n}`"
          :style="`left:${145 * (n - 1)}px`"
          @click="move(n)"
        >
          {{ n }}
          {{ dates[n - 1] }}
        </div>
      </div>
    </div>
  </div>
</template>
//
<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

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
const move = (n) => {
  const tl = gsap.timeline()
  tl.to('.container', { duration: 1, x: -145 * (n - 5), ease: 'power2.inOut' })
    .to('.slide', { duration: 0.5, scale: 1, fontWeight: 400, ease: 'power2.inOut' }, '<')
    .to(`#slide${n}`, { duration: 1, scale: 1.5, fontWeight: 700, ease: 'power2.inOut' }, '<')
    .to(
      [`#slide${n + 1}`, `#slide${n - 1}`],
      { duration: 0.5, scale: 1.2, ease: 'power2.inOut' },
      '<'
    )
}
onMounted(() => {
  console.log('ExportList mounted')
})
</script>
