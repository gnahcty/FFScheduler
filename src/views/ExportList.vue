<template>
  <div class="flex w-max flex-col items-center justify-center">
    <div class="overflow-hidden bg-black">
      <p class="animateTitle m-0 w-max bg-slate-300 leading-tight">aaaaa</p>
    </div>
    <div class="overflow-hidden bg-black">
      <p class="animateTitle m-0 w-max bg-slate-300 leading-tight">aaaaa</p>
    </div>
    <div class="overflow-hidden bg-black">
      <p class="animateTitle m-0 w-max bg-slate-300 leading-tight">aaaaa</p>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
// const tl = gsap.timeline()
onMounted(() => {
  gsap.from('.animateTitle', { y: 100, duration: 2, stagger: 0.2, ease: 'power3.out' })
})
</script>

<style scoped>
/* .slide-up
  animation: slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both */
</style>
