// 電影資訊

<template>
  <!-- nav prev -->
  <div class="absolute h-full w-0 cursor-left sm:w-12 md:w-24 lg:w-1/5" @click="nav(-1)"></div>
  <!-- nav prev -->

  <!-- nav next -->
  <div
    class="absolute right-0 h-full w-0 cursor-right sm:w-12 md:w-24 lg:w-1/5"
    @click="nav(1)"
  ></div>
  <!-- nav next -->

  <div class="flex h-full flex-col bg-stone-900 pb-12 text-primary-600 sm:pb-0 sm:pt-12">
    <!-- title -->
    <div class="text-9xl font-bold">
      <Vue3Marquee class="overflow-y-clip" :clone="true">
        <span class="flex-0 text-nowrap">{{ film.EName }}</span>
        <span class="flex-0 text-nowrap">{{ film.CName }}</span>
      </Vue3Marquee>
    </div>
    <!-- title -->

    <div class="flex h-full flex-col justify-between gap-y-6 overflow-clip sm:flex-row">
      <!-- img -->
      <div class="hidden max-w-fit flex-1 md:block">
        <img :src="poster" alt="film poster" class="h-full w-[40vw] object-cover" />
      </div>
      <!-- img -->

      <!-- 2nd column -->
      <div class="mr-2 flex w-full min-w-72 flex-col justify-between sm:w-1/4">
        <div class="flex flex-col">
          <!-- director -->
          <div class="mb-2">導演: {{ film.directors?.join() }}</div>
          <!-- director -->

          <!-- links to movie sites -->
          <div class="mb-2 flex items-center gap-2">
            <a
              v-for="(link, i) in outerLinks(searchQuery)"
              :key="i"
              :href="link.url"
              target="_blank"
              class="hover:text-stone-200"
            >
              <span
                v-if="link.icon === '豆'"
                class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary-500 text-center font-semibold hover:border-stone-200"
                >豆</span
              >
              <span
                v-else
                :class="link.icon"
                class="flex h-6 w-6 items-center justify-center"
              ></span>
            </a>
          </div>
          <!-- links to movie sites -->

          <!-- awards -->
          <div v-for="awards in film.awards" :key="awards">{{ awards }}</div>
          <!-- awards -->

          <!-- film info -->
          <div class="mb-2 flex flex-wrap items-center divide-x divide-primary-600 text-center">
            <div v-for="(info, i) in filmInfo" :key="i" class="flex-shrink-0 px-1 first:pl-0">
              {{ filmInfo[i] }}
            </div>
          </div>
          <!-- film info -->
        </div>
        <!-- 放映時間 -->
        <div class="flex flex-col">
          <ShowtimeList :screenings="screenings"></ShowtimeList>
        </div>
        <!-- 放映時間 -->
      </div>
      <!-- 2nd column -->
      <!-- 劇情簡介 -->
      <div class="flex w-full min-w-72 items-end sm:w-[28vw]">
        <div class="no-scrollbar max-h-full overflow-auto">
          {{ film.description }}
        </div>
      </div>
      <!-- 劇情簡介 -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useListStore } from '@/stores/listStore.js'
import useAxios from '@/utils/useAxios.js'

const { getFilmById, getScreeningsByFilmId } = useAxios()
const { getAdjacentIds } = useListStore()
const route = useRoute()
const router = useRouter()
const film = ref({})
const filmInfo = ref([])
const poster = ref('')
const screenings = ref([])

const nav = (direction) => {
  const id = getAdjacentIds(route.params.id, direction)
  if (id) {
    router.push(`/details/${id}`)
  } else {
    router.push('/categories')
  }
}

const searchQuery = computed(() => film.value.EName?.replace(' ', '+'))

const outerLinks = (query) => [
  {
    url: `https://search.douban.com/movie/subject_search?search_text=${query}&cat=1002`,
    icon: '豆'
  },
  {
    url: `https://letterboxd.com/search/${query}`,
    icon: 'icon-[fa6-brands--square-letterboxd]'
  },
  {
    url: `https://www.imdb.com/find?q=${query}&s=tt`,
    icon: 'icon-[fa6-brands--imdb]'
  },
  {
    url: `https://www.youtube.com/results?search_query=${query}+trailer`,
    icon: 'icon-[fa6-brands--youtube]'
  }
]

const setup = async () => {
  film.value = await getFilmById(route.params.id)
  poster.value = film.value.photos[0]
  filmInfo.value = [
    film.value.release_year,
    film.value.region,
    film.value.format,
    film.value.color,
    film.value.length,
    film.value.rating
  ]
  screenings.value = await getScreeningsByFilmId(route.params.id)
}
onMounted(() => {
  setup()
})

watch(
  () => route.params.id,
  () => setup()
)
</script>
