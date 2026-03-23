//影展場次-放映清單-場次卡片

<script setup>
import { format, parseISO, addMinutes } from 'date-fns'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  session: {
    type: Object,
    default: () => {}
  },
  vertical: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['openSession'])

const primaryScreening = computed(() => props.session?.screening ?? props.session?.screenings?.[0] ?? {})
const primaryFilm = computed(() => props.session?.film ?? primaryScreening.value?.film ?? {})
const sessionFilms = computed(() => props.session?.screenings?.map((screening) => screening.film) ?? [])
const isGroupedSession = computed(() => sessionFilms.value.length > 1)

const buildJoinedTitle = (field) => {
  return sessionFilms.value
    .slice(0, 2)
    .map((film) => film?.[field])
    .filter(Boolean)
    .join(' + ')
}

const displayCName = computed(() => {
  if (isGroupedSession.value) return buildJoinedTitle('CName')
  return primaryFilm.value?.CName ?? ''
})

const displayEName = computed(() => {
  if (isGroupedSession.value) return buildJoinedTitle('EName')
  return primaryFilm.value?.EName ?? ''
})

const sessionDuration = computed(() => {
  const explicitDuration = Number(props.session?.duration)
  if (Number.isFinite(explicitDuration) && explicitDuration > 0) return explicitDuration

  const duration = parseInt(String(primaryFilm.value?.length ?? '').split(' ')[0], 10)
  return Number.isFinite(duration) ? duration : 0
})

const isCompactCard = computed(() => sessionDuration.value < 60)
const showLikeButton = computed(() => !isCompactCard.value && !isGroupedSession.value)

const startingTime = computed(() => {
  if (!primaryScreening.value?.time) return '00:00'
  return format(parseISO(primaryScreening.value.time), 'HH:mm')
})

const endingTime = computed(() => {
  if (!primaryScreening.value?.time) return '00:00'
  const startingTime = parseISO(primaryScreening.value.time)
  const endingTime = addMinutes(startingTime, sessionDuration.value)
  return format(endingTime, 'HH:mm')
})

const scheduleText = computed(() => `${startingTime.value} - ${endingTime.value}`)

const timeLineRef = ref(null)
const cNameLineRef = ref(null)
const eNameLineRef = ref(null)

const isTimeOverflowing = ref(false)
const isCNameOverflowing = ref(false)
const isENameOverflowing = ref(false)

const syncOverflowState = () => {
  isTimeOverflowing.value = !!timeLineRef.value && timeLineRef.value.scrollWidth > timeLineRef.value.clientWidth
  isCNameOverflowing.value = !!cNameLineRef.value && cNameLineRef.value.scrollWidth > cNameLineRef.value.clientWidth
  isENameOverflowing.value = !!eNameLineRef.value && eNameLineRef.value.scrollWidth > eNameLineRef.value.clientWidth
}

// HH:MM -> HH*60+MM
const convertTimeToMinutes = (timeString) => {
  if (!timeString) return 0
  // 將HH:MM -> [HH,MM] 並轉型成number
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

const CardPosition = () => {
  const referenceTime = 610 // 10:10 AM in minutes

  const startingTimeInMin = convertTimeToMinutes(startingTime.value)

  if (props.vertical) {
    const offset = (startingTimeInMin - referenceTime) * 2
    return {
      marginTop: offset + 'px',
      height: sessionDuration.value * 2 + 'px'
    }
  } else {
    const offset = (startingTimeInMin - referenceTime) * 2.6
    return {
      marginLeft: offset + 'px',
      width: sessionDuration.value * 3 + 'px'
    }
  }
}

const handleCardClick = () => {
  emit('openSession', props.session)
}

onMounted(() => {
  nextTick(syncOverflowState)
  window.addEventListener('resize', syncOverflowState)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncOverflowState)
})

watch(
  () => [scheduleText.value, displayCName.value, displayEName.value, props.vertical],
  async () => {
    await nextTick()
    syncOverflowState()
  }
)
</script>

<template>
  <div class="animateScreeningCard absolute h-full rounded-md" :style="CardPosition()">
    <div class="group relative m-0 flex h-full rounded-md sm:mx-auto sm:max-w-lg">
      <router-link
        v-if="!isGroupedSession"
        :to="`/details/${primaryFilm._id}`"
        class="absolute inset-0 z-20 rounded-md"
        :aria-label="displayCName"
      />
      <button
        v-else
        type="button"
        class="absolute inset-0 z-20 rounded-md border-0 bg-transparent p-0"
        :aria-label="`${displayCName} 同場放映清單`"
        @click="handleCardClick"
      ></button>
      <!-- 遮罩 -->
      <div
        class="pointer-events-none absolute inset-0 z-10 h-full w-full rounded-md bg-gradient-to-t from-black/80 via-black/50 to-black/10 backdrop-grayscale duration-300 group-hover:backdrop-grayscale-0"
      ></div>
      <!-- 遮罩 -->
      <!-- 卡片 -->
      <div
        class="h-full w-full overflow-hidden rounded-md opacity-80 transition duration-300 ease-in-out group-hover:opacity-100"
      >
        <!-- cover photo -->
        <img
          :src="primaryFilm.photos?.[0]"
          class="block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          :alt="displayCName"
        />
        <!-- cover photo -->
      </div>
      <!-- 卡片 -->

      <!-- 卡片上的字 -->
      <div
        class="pointer-events-none absolute z-20 flex h-full w-full items-center justify-between gap-3"
        :class="isCompactCard ? 'p-0' : 'p-4 ps-4'"
      >
        <div class="min-w-0 flex-1">
          <div
            class="flex h-fit min-w-0 w-full flex-col overflow-hidden duration-300 ease-in-out"
            :class="isCompactCard ? '' : 'group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'"
          >
            <div
              ref="timeLineRef"
              class="marquee-line text-xs opacity-75 sm:text-sm"
              :class="{ 'marquee-line--scrolling': isTimeOverflowing }"
            >
              <span class="marquee-line__content">{{ scheduleText }}</span>
              <span v-if="isTimeOverflowing" class="marquee-line__content marquee-line__content--clone" aria-hidden="true">
                {{ scheduleText }}
              </span>
            </div>
            <div
              ref="cNameLineRef"
              class="marquee-line text-sm sm:text-base"
              :class="{ 'marquee-line--scrolling': isCNameOverflowing }"
            >
              <span class="marquee-line__content">{{ displayCName }}</span>
              <span v-if="isCNameOverflowing" class="marquee-line__content marquee-line__content--clone" aria-hidden="true">
                {{ displayCName }}
              </span>
            </div>
            <div
              ref="eNameLineRef"
              class="marquee-line text-xs opacity-75 sm:text-sm"
              :class="{ 'marquee-line--scrolling': isENameOverflowing }"
            >
              <span class="marquee-line__content">{{ displayEName }}</span>
              <span v-if="isENameOverflowing" class="marquee-line__content marquee-line__content--clone" aria-hidden="true">
                {{ displayEName }}
              </span>
            </div>
          </div>
        </div>
        <!-- like btn  -->
        <div v-if="showLikeButton" class="pointer-events-auto relative z-30">
          <LikeButton :screeningId="primaryScreening._id"></LikeButton>
        </div>
        <!-- like btn  -->
      </div>
      <!-- 卡片上的字 -->
    </div>
  </div>
</template>

<style scoped>
.marquee-line {
  display: flex;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-line__content {
  flex: 0 0 auto;
  min-width: 100%;
}

.marquee-line--scrolling .marquee-line__content {
  min-width: max-content;
  padding-right: 2rem;
}

.marquee-line--scrolling .marquee-line__content--clone {
  display: inline-block;
}

.group:hover .marquee-line--scrolling .marquee-line__content {
  animation: screening-card-marquee 8s linear infinite;
}

@keyframes screening-card-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - 2rem));
  }
}
</style>
