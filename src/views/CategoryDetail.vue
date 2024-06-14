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
      <div class="flex w-4/5 justify-center break-normal">
        <div class="relative w-fit overflow-hidden">
          <div class="animateMask absolute h-full bg-primary-600"></div>
          <div class="animateTitle text-balance text-8xl uppercase">
            {{ title }} <span class="underscore">_</span>
          </div>
        </div>
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
import useAxios from '@/utils/useAxios.js'
import { useHorizontalScroll } from '@/utils/sideScroller'
import { CategoryTitleAnimation, CategorySwitchAnimation } from '@/animation/animation'

const { getFilmsByCategory, getCategoryList } = useAxios()
const { scrollContainer } = useHorizontalScroll()
const title = ref('')
const route = useRoute()
const router = useRouter()
const categories = ref([])
let films = ref([])

const switchCategory = (direction) => {
  const currentIdx = categories.value.findIndex((category) => category.name === route.params.name)
  const index = currentIdx + direction
  const newIndex = (index + categories.value.length) % categories.value.length
  router.push(`/categories/${categories.value[newIndex].name}`)
}

onMounted(async () => {
  title.value = route.params.name
  categories.value = await getCategoryList()
  films.value = await getFilmsByCategory(route.params.name)
  CategoryTitleAnimation()
})

watch(
  () => route.params.name,
  async () => (
    (title.value = route.params.name),
    (films.value = await getFilmsByCategory(route.params.name)),
    CategorySwitchAnimation()
  )
)
</script>
