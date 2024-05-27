<template>
  <div class="border-gray-200 text-white transition-all duration-500">
    <!-- 收藏清單 -->
    <button
      @click="toggle()"
      class="flex w-full items-center justify-between p-2 pb-0 text-left text-3xl font-bold"
    >
      <div class="flex items-center">
        <span v-if="isLocked" class="pi pi-lock pe-3 text-xs"></span>
        <span>{{ film.CName }}</span>
      </div>
      <div class="flex flex-col items-end">
        <div class="pi" :class="isOpen ? 'pi-minus' : 'pi-plus'"></div>
      </div>
    </button>
    <div
      class="overflow-hidden px-2 transition-all duration-300"
      :style="{ maxHeight: isOpen ? '1000px' : '0px' }"
    >
      <div class="isolate pb-2 text-right text-xs text-stone-200 transition-all">
        剩餘場次:{{ remainingScreening.length }}
      </div>
      <div class="grid grid-cols-2 gap-4 pb-2 xl:grid-cols-3">
        <button
          v-for="screening in film.times"
          :key="screening.time"
          class="my-btn text-sm"
          :class="BtnStyle(screening).value"
          @click="deleteScreeningToggle(screening)"
          v-on-long-press="[() => lockScreeningToggle(screening), { modifiers: { stop: true } }]"
        >
          <span class="font-bold">
            {{ screening.time }}
          </span>
        </button>
      </div>
    </div>
    <!-- 收藏清單 -->
  </div>
</template>

<script setup>
import { vOnLongPress } from '@vueuse/components'
import useScreeningManagement from '@/utils/useScreeningManagement.js'

import { ref } from 'vue'

const props = defineProps({ film: { type: Object, default: () => {} } })

const isOpen = ref(false)
const toggle = () => (isOpen.value = !isOpen.value)
const {
  isLocked,
  BtnStyle,
  // isDanger,
  remainingScreening,
  lockScreeningToggle,
  deleteScreeningToggle
} = useScreeningManagement(props.film.filmId)

// const titleStyle = computed(() =>
//   isDanger.value
//     ? 'text-red-700'
//     : remainingScreening.value.length <= 2
//       ? 'text-orange-500'
//       : 'text-white'
// )
</script>
