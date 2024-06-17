//影展場次-放映清單(橫向)-特定影城放映清單

<template>
  <div class="animateScreeningCard absolute h-full rounded-md" :style="CardPosition()">
    <div class="group relative m-0 flex h-full rounded-md sm:mx-auto sm:max-w-lg">
      <!-- 遮罩 -->
      <div
        class="absolute inset-0 z-10 h-full w-full rounded-md bg-gradient-to-t from-black/80 via-black/50 to-black/10 backdrop-grayscale duration-300 group-hover:backdrop-grayscale-0"
      ></div>
      <!-- 遮罩 -->
      <!-- 卡片 -->
      <div
        class="h-full w-full overflow-hidden rounded-md opacity-80 transition duration-300 ease-in-out group-hover:opacity-100"
      >
        <router-link :to="`/details/${props.film._id}`">
          <!-- cover photo -->
          <img
            :src="props.film.photos[0]"
            class="block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            :alt="props.film.CName"
          />
          <!-- cover photo -->
        </router-link>
      </div>
      <!-- 卡片 -->

      <!-- 卡片上的字 -->
      <div class="absolute z-10 flex h-full w-full items-center justify-between p-4 ps-4">
        <router-link :to="`/details/${props.film._id}`">
          <div
            class="ellipsis flex h-fit w-full flex-col overflow-clip duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"
          >
            <span class="text-xs opacity-75 sm:text-sm">{{ startingTime }} - {{ endingTime }}</span>
            <span class="sm:text-md text-sm">{{ props.film.CName }}</span>
            <span class="text-pretty text-xs opacity-75 sm:text-sm">{{ props.film.EName }}</span>
          </div>
        </router-link>
        <!-- like btn  -->
        <LikeButton :screeningId="props.screening._id"></LikeButton>
        <!-- like btn  -->
      </div>
      <!-- 卡片上的字 -->
    </div>
  </div>
</template>

<script setup>
import { format, parseISO, addMinutes } from 'date-fns'
import { computed } from 'vue'

const props = defineProps({
  screening: {
    type: Object,
    default: () => {}
  },
  film: {
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

const startingTime = computed(() => format(parseISO(props.screening.time), 'HH:mm'))

const endingTime = computed(() => {
  const startingTime = parseISO(props.screening.time)
  const endingTime = addMinutes(startingTime, filmLength.value)
  return format(endingTime, 'HH:mm')
})

// 片長去掉'分'
const filmLength = computed(() => parseInt(props.film.length.split(' ')[0]))

// HH:MM -> HH*60+MM
const convertTimeToMinutes = (timeString) => {
  // 將HH:MM -> [HH,MM] 並轉型成number
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

const CardPosition = () => {
  const referenceTime = 610 // 10:10 AM in minutes

  const startingTimeInMin = convertTimeToMinutes(startingTime.value)
  // 將片長去掉分轉成以10分鐘為單位
  const filmLength = parseInt(props.film.length.split(' ')[0], 10)

  if (props.vertical) {
    const offset = (startingTimeInMin - referenceTime) * 2
    return {
      marginTop: offset + 'px',
      height: filmLength * 2 + 'px'
    }
  } else {
    const offset = (startingTimeInMin - referenceTime) * 2.6
    return {
      marginLeft: offset + 'px',
      width: filmLength * 3 + 'px'
    }
  }
}
</script>
