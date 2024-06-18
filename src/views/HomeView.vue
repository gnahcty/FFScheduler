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
import { ref, onMounted } from 'vue'
import { api } from '@/axios/axios.js'
import { HomePageTitleAnimation, ChangeBGImages } from '@/animation/animation.js'

const bgImg = ref(
  'https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_307bd894dee72db53bf35e0f95a2b9da.jpeg'
)

onMounted(async () => {
  const { data } = await api.get('/film/pics')
  bgImg.value = data.result[0]
  HomePageTitleAnimation()
  ChangeBGImages(data.result)
})
</script>
