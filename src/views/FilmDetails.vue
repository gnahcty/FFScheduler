// 電影資訊

<template>
  <!-- nav prev -->
  <div class="cursor-left absolute h-full w-0 sm:w-12 md:w-24 lg:w-1/5" @click="nav(-1)"></div>
  <!-- nav prev -->

  <!-- nav next -->
  <div
    class="cursor-right absolute right-0 h-full w-0 sm:w-12 md:w-24 lg:w-1/5"
    @click="nav(1)"
  ></div>
  <!-- nav next -->

  <div class="flex h-full flex-col bg-black pb-12 text-primary-600 sm:pb-0 sm:pt-12">
    <!-- title -->
    <div class="flex w-screen overflow-x-clip text-9xl font-bold">
      <span class="flex-0 text-nowrap">{{ film.EName }}</span>
      <span class="flex-0 text-nowrap">{{ film.CName }}</span>
    </div>
    <!-- title -->

    <div class="flex h-full flex-col justify-between gap-y-6 overflow-clip sm:flex-row">
      <!-- img -->
      <div class="hidden max-w-fit flex-1 md:block">
        <img :src="film.photos?.photos2" alt="film poster" class="h-full w-[40vw] object-cover" />
      </div>
      <!-- img -->

      <!-- 2nd column -->
      <div class="mr-2 flex w-full min-w-72 flex-col justify-between sm:w-1/4">
        <div class="flex flex-col">
          <!-- awards -->
          <div v-for="awards in film.awards" :key="awards">{{ awards }}</div>
          <!-- awards -->
          <!-- film info -->
          <div class="mb-6 flex items-center">
            <div class="flex-shrink-0 pr-1">{{ film.year }}</div>
            <div class="text-pretty border-l border-orange-600 px-1 text-center">
              {{ film.region }}
            </div>
            <div class="flex-shrink-0 border-l border-orange-600 px-1">{{ film.format }}</div>
            <div class="flex-shrink-0 border-l border-orange-600 px-1">{{ film.color }}</div>
            <div class="flex-shrink-0 border-l border-orange-600 px-1">{{ film.length }}</div>
            <div class="flex-shrink-0 border-l border-orange-600 px-1">{{ film.rating }}</div>
          </div>
          <!-- film info -->
        </div>
        <!-- 放映時間 -->
        <div class="flex flex-col">
          <ShowtimeList :screenings="film.times"></ShowtimeList>
        </div>
        <!-- 放映時間 -->
      </div>
      <!-- 2nd column -->
      <!-- 劇情簡介 -->
      <div
        class="no-scrollbar flex w-full min-w-72 flex-col justify-between overflow-x-auto sm:w-[28vw]"
      >
        <div class="text-right text-sm">導演: {{ directors.join() }}</div>
        <div class="h-fit">
          {{ film.description }}
        </div>
      </div>
      <!-- 劇情簡介 -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFilm, getAdjacentIds } from '@/utils/temp_data.js'
const route = useRoute()
const router = useRouter()
const film = ref({})
const directors = ref([])
const nav = (direction) => {
  const id = getAdjacentIds(route.params.id, direction)
  router.push(`/details/${id}`)
}

onMounted(() => {
  film.value = getFilm(route.params.id)
  film.value.directors.map((director) =>
    directors.value.splice(0, directors.value.length, director.directorName)
  )
})

watch(
  () => route.params.id,
  () => (
    (film.value = getFilm(route.params.id)),
    film.value.directors.map((director) =>
      directors.value.splice(0, directors.value.length, director.directorName)
    )
  )
)
</script>
