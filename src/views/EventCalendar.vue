// 影展場次(月曆版)
<template>
  <div
    class="flex h-screen flex-col items-center justify-center bg-stone-900 py-16 uppercase text-primary-600 sm:pb-0"
  >
    <!-- Date Nav -->
    <TimelineNav></TimelineNav>
    <!-- Date Nav -->

    <!-- Schedule -->
    <EventSchedule></EventSchedule>
    <!-- Schedule -->
  </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  nextTick(() => {
    gsap
      .timeline()
      .to('.animateMask', {
        width: '100%',
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.inOut'
      })
      .to('.animateMask', { height: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' })
      .from('.animateTitle', { y: 150, duration: 1, stagger: 0.2, ease: 'power3.out' }, '<')
      .to('.animateTitle', { width: '100vw', duration: 0.1, ease: 'power4.out' })
      .from('#timeLine', { width: 0, duration: 1, ease: 'power4.out' }, '>')
      .from('.animateRiver', { y: 200, duration: 1, stagger: 0.2, ease: 'power3.out' })
      .fromTo(
        '.animateScreeningCard',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.in' },
        '<0.5'
      )
  })
})
</script>
