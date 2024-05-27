// 首頁
<template>
  <div class="h-full">
    <div class="absolute -z-0 h-screen w-full bg-stone-900 px-4 py-16">
      <div class="h-full overflow-clip rounded-3xl">
        <img
          id="homeViewBg"
          :src="bgImg"
          class="h-full w-full rounded-3xl object-cover object-center brightness-50"
        />
      </div>
    </div>

    <div
      class="noise flex h-full select-none items-center px-6 text-primary-600 backdrop-grayscale lg:px-8 lg:pt-14"
    >
      <div class="mx-auto max-w-2xl py-10 sm:py-32">
        <div class="text-center">
          <h1
            class="flex flex-col items-center text-center text-4xl font-bold uppercase md:text-6xl"
          >
            <div class="relative flex overflow-hidden">
              <div class="animateMask absolute h-full bg-primary-500"></div>
              <div class="animateTitle leading-tight">your film festival,</div>
            </div>
            <div class="relative flex w-fit overflow-hidden">
              <div class="animateMask absolute h-full bg-primary-500"></div>
              <div class="animateTitle leading-tight">organized.</div>
            </div>
          </h1>
          <div class="m-0 mt-6 overflow-hidden text-lg leading-tight">
            <div class="animateTitle">
              Easily view and organize upcoming film festival screenings. Simplify your event
              scheduling and never miss a movie again!
            </div>
          </div>
          <div class="mt-10 flex items-center justify-center gap-x-6 overflow-hidden">
            <RouterLink to="/login">
              <div class="animateBtn px-3.5 py-2.5 text-sm font-semibold">馬上開始</div>
            </RouterLink>
            <RouterLink to="/categories">
              <div
                class="animateBtn group group flex cursor-pointer text-sm font-semibold leading-6"
              >
                <div>看片單</div>
                <div class="group-hover:shift-lr">→</div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ex from '@/utils/temp_data.js'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
const data = ex()
const photos = []
let i = 0
const bgImg = ref(
  'https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_50a811345c896a2b83c663b525eed5ee.jpeg'
)
data.map((film) => {
  Object.values(film.photos).forEach((photo) => {
    photos.push(photo)
  })
})

const changeImg = () => {
  i = (i + 1) % photos.length
  const img = new Image()
  img.src = photos[i]
  img.onload = () => {
    bgImg.value = photos[i]
  }
  img.onerror = () => {
    changeImg()
  }
}

const bgInterval = ref(null)

onMounted(() => {
  const tl = gsap.timeline()
  tl.to('.animateMask', { width: '100%', duration: 0.5, stagger: 0.2, ease: 'power3.inOut' })
    .to('.animateMask', { height: 0, duration: 0.5, stagger: 0.2, ease: 'power3.out' })
    .from('.animateTitle', { y: 100, duration: 1, stagger: 0.2, ease: 'power3.out' }, '<')
    .from('.animateBtn', { y: 100, duration: 1, stagger: 0, ease: 'power3.out' }, '<0.5')

  bgInterval.value = setInterval(() => {
    gsap.to('#homeViewBg', {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        changeImg()
        nextTick(() => {
          gsap.to('#homeViewBg', { opacity: 1, duration: 0.6 })
        })
      }
    })
  }, 4000)
})

onUnmounted(() => {
  clearInterval(bgInterval.value)
})
</script>
