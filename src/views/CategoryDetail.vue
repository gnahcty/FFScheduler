// 影展單元詳細片單

<template>
  <!-- for pc & tab -->
  <div class="mb-16 hidden h-full flex-col bg-stone-900 pt-16 text-primary-600 sm:flex">
    <!-- 上半部標題 -->
    <div class="flex h-1/2 w-screen items-center justify-center gap-6">
      <!-- 上一個單元按鈕 -->
      <span
        class="icon-[formkit--left] text-3xl text-primary-800"
        @click="switchCategory(-1)"
      ></span>
      <!-- 上一個單元按鈕 -->

      <!-- 單元名稱 -->
      <div class="w-4/5 overflow-clip text-balance break-normal text-center text-8xl uppercase">
        {{ title }}_
      </div>
      <!-- 單元名稱 -->

      <!-- 下一個單元按鈕 -->
      <span
        class="icon-[formkit--right] text-3xl text-primary-800"
        @click="switchCategory(1)"
      ></span>
      <!-- 下一個單元按鈕 -->
    </div>
    <!-- 上半部標題 -->

    <!-- 下半部內容 -->
    <div class="h-1/2">
      <div class="no-scrollbar flex h-full w-screen overflow-auto" ref="scrollContainer">
        <div v-for="(film, i) in films" :key="film.name" class="h-full w-64">
          <FilmCardSquare :film="film" :filmIndex="i" />
        </div>
      </div>
    </div>
    <!-- 下半部內容 -->
  </div>
  <!-- for pc & tab -->

  <!-- for mobile -->
  <div class="mb-16 flex h-full justify-around bg-stone-900 sm:hidden">
    <div class="flex flex-col items-center justify-start gap-6 py-16 align-middle">
      <!-- 上一個單元按鈕 -->
      <span class="icon-[formkit--up] text-xs text-primary-800" @click="switchCategory(-1)"></span>
      <!-- 上一個單元按鈕 -->

      <!--title  -->
      <span
        class="max-h-[70vh] overflow-clip text-balance text-5xl uppercase text-primary-600"
        style="writing-mode: vertical-rl; text-orientation: mixed"
      >
        {{ title }}_
      </span>
      <!--title  -->

      <!-- 下一個單元按鈕 -->
      <span class="icon-[formkit--down] text-xs text-primary-800" @click="switchCategory(1)"></span>
      <!-- 下一個單元按鈕 -->
    </div>
    <div class="h-full">
      <div class="no-scrollbar flex h-full flex-col overflow-auto">
        <div v-for="(film, i) in films" :key="film.name">
          <FilmCardSquare :film="film" :filmIndex="i" />
        </div>
      </div>
    </div>
  </div>
  <!-- for mobile -->
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFilmsByCategory, categoryList } from '@/utils/temp_data.js'
import { useHorizontalScroll } from '@/utils/sideScroller'

const { scrollContainer } = useHorizontalScroll()
const title = ref('')
const route = useRoute()
const router = useRouter()
const categories = categoryList()
let films = ref([])

const switchCategory = (direction) => {
  const index = categories.indexOf(route.params.name) + direction
  const newIndex = (index + categories.length) % categories.length
  router.push(`/categories/${categories[newIndex]}`)
}

onMounted(() => {
  title.value = route.params.name
  films.value = getFilmsByCategory(route.params.name)
})

watch(
  () => route.params.name,
  () => ((title.value = route.params.name), (films.value = getFilmsByCategory(route.params.name)))
)
</script>
