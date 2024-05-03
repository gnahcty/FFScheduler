// 收藏清單頁面-收藏清單
<template>
  <!-- 剩餘場次 -->
  <div
    v-if="!isLocked"
    class="relative top-14 mr-6 text-right text-sm"
    :class="remainingScreening > 2 ? 'text-emerald-500' : 'text-orange-500'"
  >
    剩餘場次：{{ remainingScreening }}
  </div>
  <div v-else class="relative top-14 mr-6 text-right text-sm text-gray-300">已鎖定</div>

  <!-- 剩餘場次 -->

  <!-- 已收藏場次表 -->
  <Fieldset
    :legend="filmModel.CName"
    class="mx-4 ring-1"
    :pt="fieldsetStyle"
    :class="fieldsetRingColor"
    toggleable
  >
    <div class="flex flex-wrap gap-4 gap-y-4">
      <button
        v-for="screening in filmModel.times"
        :key="screening.time"
        class="my-btn text-sm"
        :class="BtnStyle(screening)"
        @click="manageScreeningStatus(screening)"
        v-on-long-press="[() => toggleScreeningLock(screening), { modifiers: { stop: true } }]"
      >
        <span class="font-bold">{{ screening.time }}</span>
      </button>
    </div>
  </Fieldset>
  <!-- 已收藏場次表 -->
</template>

<script setup>
// import { computed } from 'vue'

import { vOnLongPress } from '@vueuse/components'
import useScreeningManagement from '@/utils/useScreeningManagement.js'

// 雙向綁定filmModel
const filmModel = defineModel('filmModel')

const {
  isLocked,
  remainingScreening,
  toggleScreeningLock,
  manageScreeningStatus,
  BtnStyle,
  fieldsetStyle,
  fieldsetRingColor
} = useScreeningManagement(filmModel)
</script>
