//影展場次-放映清單(橫向)-特定影城放映清單 //影展場次-放映清單(縱向)-特定影城放映清單

<template>
  <div v-for="film in props.films" :key="film.filmId">
    <div
      class="card border-1 absolute flex w-full flex-col justify-between rounded-md border p-2 hover:border-primary-400 hover:text-primary-500 dark:border-amber-200 dark:text-amber-100 dark:hover:bg-slate-800"
      :style="CardPosition(film)"
    >
      <router-link to="/details">
        <div class="ellipsis flex w-full flex-col overflow-clip">
          <span class="text-sm opacity-75">{{ findTime(film) }} - {{ findEndingTime(film) }}</span>
          <span>{{ film.CName }}</span>
          <span class="text-pretty text-sm opacity-75">{{ film.EName }}</span>
        </div>
      </router-link>
      <span
        :class="films.liked ? 'pi-heart-fill' : 'pi-heart'"
        class="pi text-right hover:text-primary-500"
        @click="film.liked = !film.liked"
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  films: {
    type: Array,
    default: () => []
  },
  vertical: {
    type: Boolean,
    default: false
  }
})

// 回傳film.times裡面time包含04.18的放映時間(HH:MM)
const findTime = (film) => {
  // 找到film.times裡面time包含04.18的screening obj
  const screening = film.times.find((screening) => screening.time.includes('04.18'))
  //包含04.18的time (eg. "04.18  〈四〉 17:30"),以空格分開(["04.18","","〈四〉","17:30"])，取第4個
  return screening.time.split(' ')[3]
}

// 計算場次結束時間
const findEndingTime = (film) => {
  const StartingTime = convertTimeToMinutes(findTime(film))
  const length = parseInt(film.length.split(' ')[0])
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
  const referenceTime = 600 // 10:00 AM in minutes

  const filmTime = convertTimeToMinutes(findTime(film))
  // 將片長去掉分轉成以10分鐘為單位
  const filmLength = parseInt(film.length.split(' ')[0], 10)

  if (props.vertical) {
    // 計算offset
    const offset = (filmTime - referenceTime) * 1.25 - 50
    return {
      marginTop: offset + 'px',
      height: filmLength * 1.5 + 'px'
    }
  } else {
    const offset = (filmTime - referenceTime) * 2 - 50
    return {
      marginLeft: offset + 'px',
      width: filmLength * 2.5 + 'px'
    }
  }
}
</script>
