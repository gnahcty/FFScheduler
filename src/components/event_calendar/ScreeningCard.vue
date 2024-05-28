//影展場次-放映清單(橫向)-特定影城放映清單 //影展場次-放映清單(縱向)-特定影城放映清單

<template>
  <div class="animateScreeningCard absolute h-full rounded-md" :style="CardPosition(props.film)">
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
        <router-link :to="`/details/${props.film.filmId}`">
          <!-- cover photo -->
          <img
            :src="props.film.photos.photos1"
            class="block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            :alt="props.film.CName"
          />
          <!-- cover photo -->
        </router-link>
      </div>
      <!-- 卡片 -->

      <!-- 卡片上的字 -->
      <div class="absolute z-10 flex h-full w-full items-center justify-between p-4 ps-4">
        <router-link :to="`/details/${props.film.filmId}`">
          <div
            class="ellipsis flex h-fit w-full flex-col overflow-clip duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"
          >
            <span class="text-xs opacity-75 sm:text-sm"
              >{{ findTime(props.film) }} - {{ findEndingTime(props.film) }}</span
            >
            <span class="sm:text-md text-sm">{{ props.film.CName }}</span>
            <span class="text-pretty text-xs opacity-75 sm:text-sm">{{ props.film.EName }}</span>
          </div>
        </router-link>
        <!-- like btn  -->
        <span class="pi pi-plus absolute right-3 top-3 z-40 text-gray-400"></span>
        <!-- like btn  -->
      </div>
      <!-- 卡片上的字 -->
    </div>
  </div>
</template>

<script setup>
// import gsap from 'gsap'
// import { onMounted } from 'vue'
const props = defineProps({
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

// 回傳film.times裡面time包含04.18的放映時間(HH:MM)
const findTime = (film) => {
  // 找到film.times裡面time包含04.18的screening obj
  const screening = film.times.find((screening) => screening.time.includes(props.date))
  //包含04.18的time (eg. "04.18  〈四〉 17:30"),以空格分開(["04.18","〈四〉","17:30"])，取第4個
  return screening.time.split(' ')[2]
}

// 計算場次結束時間
const findEndingTime = (film) => {
  const StartingTime = convertTimeToMinutes(findTime(film))
  const length = parseInt(film.length.split(' ')[0]) //去掉"分"
  return convertMinutesToTime(StartingTime + length)
}

// HH:MM -> HH*60+MM
const convertTimeToMinutes = (timeString) => {
  // 將HH:MM -> [HH,MM] 並轉型成number
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}

//MMM -> HH:MM
const convertMinutesToTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

const CardPosition = (film) => {
  const referenceTime = 610 // 10:10 AM in minutes

  const filmTime = convertTimeToMinutes(findTime(film))
  // 將片長去掉分轉成以10分鐘為單位
  const filmLength = parseInt(film.length.split(' ')[0], 10)

  if (props.vertical) {
    const offset = (filmTime - referenceTime) * 2
    return {
      marginTop: offset + 'px',
      height: filmLength * 2 + 'px'
    }
  } else {
    const offset = (filmTime - referenceTime) * 2.6
    return {
      marginLeft: offset + 'px',
      width: filmLength * 3 + 'px'
    }
  }
}

// onMounted(() => {
// gsap.fromTo(
//   '.animateScreeningCard',
//   {
//     opacity: 0
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     ease: 'power2.in'
//   }
// )
// })
</script>
