<template>
  <div class="mt-1 overflow-hidden rounded-lg border px-2 py-1" :class="chipStyle">
    <p class="truncate text-xs leading-tight">11:00-22:00</p>
    <p class="truncate text-sm leading-tight">血迷宮（導演版）</p>
    <p class="truncate text-xs leading-tight">Blood Simple</p>
  </div>
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
    bgColor = 'bg-gray-100'
    textColor = 'text-gray-800'
    borderColor = 'border-gray-200'
  } else {
    bgColor = 'bg-emerald-100'
    textColor = 'text-emerald-800'
    borderColor = 'border-emerald-200'
  }

  // 若衝堂，border及文字顏色設為紅色，加ring
  if (props.danger) {
    return `${bgColor} border-red-400 ring-1 ring-red-400 ${textColor}`
  } else {
    // 否則設為主題色，不加ring
    return `${bgColor} ${borderColor}-200 ${textColor}`
  }
})
</script>
