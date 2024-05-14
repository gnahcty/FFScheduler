<template>
  <div class="h-full w-full">
    <div class="h-full w-full" :style="src">
      <div
        class="bgg flex h-full w-full items-center justify-center text-center backdrop-grayscale"
      >
        <div class="noto-sans text-7xl font-bold text-orange-600" @click="change">
          CLICK TO CHANGE
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
const src = ref(
  'background:center/ cover no-repeat url(" https://storage.googleapis.com/tghff_outland/image/photo/2024/GHFF/huge/photo_50a811345c896a2b83c663b525eed5ee.jpeg")'
)
data.map((film) => {
  Object.values(film.photos).forEach((photo) => {
    photos.push(photo)
  })
})

const change = () => {
  src.value = `background:center 60%/ cover no-repeat url(${photos[i++]})`
}
</script>

<style>
.bgg {
  background-image: url('@/assets/noise.svg');
  background-blend-mode: overlay;
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  background-color: #777 35% url('https://picsum.photos/id/2/5000/3333');
}
</style>
