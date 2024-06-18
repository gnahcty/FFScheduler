// 影展單元-輪播圖元件-電影卡片
<template>
  <div class="animateFilmCard group relative h-96 w-64 text-primary-600 sm:h-full">
    <router-link :to="`/details/${props.film._id}`">
      <!-- index -->
      <div
        class="absolute left-0 top-0 z-20 ps-4 pt-4 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-90"
      >
        <h1 class="text-shadow text-2xl font-light">
          {{ (props.filmIndex + 1).toString().padStart(2, '0') }}/
        </h1>
      </div>
      <!-- index -->
      <!-- cover photo -->
      <div
        class="z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out"
      >
        <img
          :src="props.film?.photos[0]"
          class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
          alt=""
        />
      </div>
      <!-- cover photo -->
      <!-- title -->
      <div
        class="absolute bottom-0 right-0 z-20 overflow-clip pb-4 pe-4 pl-8 text-end transition duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:scale-110"
      >
        <h1 class="text-shadow text-balance break-normal text-2xl font-bold">
          {{ props.film.CName }}
        </h1>
        <h1 class="text-sm font-light">{{ props.film?.EName }}</h1>
      </div>
      <!-- title -->
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { FilmCardAnimation } from '@/animation/animation.js'
const props = defineProps({
  film: {
    type: Object,
    default: () => {}
  },
  filmIndex: {
    type: Number,
    default: 0
  }
})
onMounted(() => {
  FilmCardAnimation()
})
watch(
  () => props.film,
  () => {
    FilmCardAnimation()
  }
)
</script>
