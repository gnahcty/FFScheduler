<template>
  <!-- for PC -->
  <div class="mt-1 hidden overflow-hidden rounded-lg border px-2 py-1 lg:block" :class="chipStyle">
    <p class="truncate text-xs leading-tight">11:00-22:00</p>
    <p class="truncate text-sm leading-tight">血迷宮（導演版）</p>
    <p class="truncate text-xs leading-tight">Blood Simple</p>
  </div>
  <!-- for PC -->

  <!-- for tab and mobile -->
  <div class="flex gap-3 lg:hidden">
    <div class="flex flex-col items-center text-sm">
      <span>11:00</span>
      <span>|</span>
      <span>22:00</span>
    </div>
    <div class="mt-1 flex-auto overflow-hidden rounded-lg border px-2 py-1" :class="chipStyle">
      <p class="truncate">血迷宮（導演版）</p>
      <p class="truncate">Blood Simple</p>
    </div>
    <div class="flex gap-2" v-if="props.showBtn">
      <div class="pi pi-minus h-fit rounded-full p-3 hover:bg-emerald-100"></div>
      <div class="pi pi-lock h-fit rounded-full p-3 hover:bg-emerald-100"></div>
    </div>
  </div>
  <!-- for tab and mobile -->
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  state: {
    type: String,
    default: 'none'
  },
  danger: {
    type: Boolean,
    default: false
  },
  showBtn: {
    type: Boolean,
    default: true
  }
})

const chipStyle = computed(() => {
  let bgColor, textColor, borderColor
  // 根據狀態選擇主題色
  if (props.state === 'warning') {
    bgColor = 'bg-orange-100'
    textColor = 'text-orange-800'
    borderColor = 'border-orange-200'
  } else if (props.state === 'locked') {
    bgColor = 'bg-gray-800'
    textColor = 'text-gray-100'
    borderColor = 'border-gray-800'
  } else {
    bgColor = 'bg-emerald-100'
    textColor = 'text-emerald-800'
    borderColor = 'border-emerald-200'
  }

  // 若衝堂，border及文字顏色設為紅色，加ring
  if (props.danger) {
    return `${bgColor} border-red-400 ring-1 ring-red-400 text-red-800`
  } else {
    // 否則設為主題色，不加ring
    return `${bgColor} ${borderColor} ${textColor}`
  }
})
</script>
