// 首頁
<template>
  <div class="h-full bg-stone-900 py-16">
    <div
      class="mx-8 h-full rounded-3xl"
      :style="`background:center 35%/ cover no-repeat url(${bgImg})`"
    >
      <div
        class="noise flex h-full items-center px-6 text-primary-600 backdrop-grayscale lg:px-8 lg:pt-14"
      >
        <div class="mx-auto max-w-2xl py-10 sm:py-32">
          <div class="text-center">
            <h1
              class="cursor-pointer text-4xl font-bold uppercase tracking-tight sm:text-6xl"
              @click="change"
            >
              some slogan here
            </h1>
            <p class="mt-6 text-lg leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <RouterLink to="/login">
                <button class="border-main-yellow px-3.5 py-2.5 font-semibold hover:border-inherit">
                  馬上開始
                </button>
              </RouterLink>
              <RouterLink to="/categories">
                <span class="cursor-pointer text-sm font-semibold leading-6">
                  看片單 <span>→</span>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ex from '@/utils/temp_data.js'
import { ref } from 'vue'
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

const change = () => {
  bgImg.value = photos[i++]
}
</script>

<style></style>
