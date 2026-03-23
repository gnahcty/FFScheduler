// 影展場次-放映清單

<script setup>
import { computed, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import { useHorizontalScroll } from '@/utils/sideScroller.js'
import GroupedScreeningDialog from './GroupedScreeningDialog.vue'

const { scrollContainer } = useHorizontalScroll()

const props = defineProps({
  screenTimes: {
    type: Object,
    default: () => {}
  }
})

const route = useRoute()

const selectedSession = shallowRef(null)
const isSessionDialogOpen = shallowRef(false)

const getFilmDuration = (film) => {
  const duration = parseInt(String(film?.length ?? '').split(' ')[0], 10)
  return Number.isFinite(duration) ? duration : 0
}

const buildSession = (screenings, theatreName) => {
  const primaryScreening = screenings[0]
  return {
    id: screenings.map((screening) => screening._id).join('-'),
    screening: primaryScreening,
    film: primaryScreening?.film ?? {},
    screenings,
    theatreName,
    place: primaryScreening?.place ?? theatreName,
    time: primaryScreening?.time,
    duration: screenings.reduce((longest, screening) => {
      return Math.max(longest, getFilmDuration(screening.film))
    }, 0)
  }
}

const groupedScreenTimes = computed(() => {
  return Object.entries(props.screenTimes ?? {}).map(([theatreName, theatreScreenings]) => {
    const sessionsByKey = new Map()

    for (const screening of theatreScreenings ?? []) {
      const place = screening.place ?? theatreName
      const sessionKey = `${screening.time}__${place}`

      if (!sessionsByKey.has(sessionKey)) {
        sessionsByKey.set(sessionKey, [])
      }

      sessionsByKey.get(sessionKey).push(screening)
    }

    return {
      theatreName,
      sessions: Array.from(sessionsByKey.values()).map((screenings) =>
        buildSession(screenings, theatreName)
      )
    }
  })
})

const openSessionDialog = (session) => {
  selectedSession.value = session
  isSessionDialogOpen.value = true
}
</script>

<template>
  <!-- pc and tab -->
  <div
    ref="scrollContainer"
    class="no-scrollbar hidden h-full w-full flex-col justify-center overflow-x-auto text-stone-300 sm:flex"
  >
    <!-- 各影城場次 -->
    <div v-for="theatre in groupedScreenTimes" :key="theatre.theatreName" class="flex-0 mt-7 flex h-1/3">
      <!-- 影城名稱 -->
      <div class="overflow-hidden">
        <div
          class="animateRiver flex aspect-4/3 h-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2"
        >
          <span>{{ theatre.theatreName }}</span>
        </div>
      </div>
      <!-- 影城名稱 -->

      <!-- 電影 -->
      <div v-for="session in theatre.sessions" :key="session.id" class="relative">
        <ScreeningCard
          :session="session"
          :date="route.params.date"
          @open-session="openSessionDialog"
        ></ScreeningCard>
      </div>
      <!-- 電影 -->
    </div>
    <!-- 各影城場次 -->
  </div>
  <!-- pc and tab -->

  <!-- mobile -->
  <div
    class="no-scrollbar flex h-full w-full justify-center gap-1 overflow-auto text-stone-300 sm:hidden"
  >
    <!-- 各影城場次 -->
    <div
      v-for="theatre in groupedScreenTimes"
      :key="theatre.theatreName"
      class="flex-0 animateScreeningCard h-full w-full flex-col"
    >
      <!-- 影城名稱 -->
      <div
        class="flex h-20 w-full items-center justify-center text-nowrap rounded-md bg-stone-500 p-2 text-sm"
      >
        <span>{{ theatre.theatreName }}</span>
      </div>
      <!-- 影城名稱 -->

      <!-- 電影 -->
      <div v-for="session in theatre.sessions" :key="session.id" class="no-scrollbar relative">
        <ScreeningCard
          :session="session"
          :date="route.params.date"
          :vertical="true"
          @open-session="openSessionDialog"
        ></ScreeningCard>
      </div>
      <!-- 電影 -->
    </div>
    <!-- 各影城場次 -->
  </div>
  <!-- mobile -->

  <GroupedScreeningDialog
    v-model="isSessionDialogOpen"
    :session="selectedSession"
  ></GroupedScreeningDialog>
</template>
