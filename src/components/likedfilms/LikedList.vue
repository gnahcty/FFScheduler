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
        @click="clickHandler(screening)"
        v-on-long-press="[() => LongPressHandler(screening), { modifiers: { stop: true } }]"
      >
        <span class="font-bold">{{ screening.time }}</span>
      </button>
    </div>
  </Fieldset>
  <!-- 已收藏場次表 -->
</template>

<script setup>
import { computed } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { vOnLongPress } from '@vueuse/components'

// 雙向綁定filmModel
const filmModel = defineModel('filmModel')

const confirm = useConfirm()
const toast = useToast()

// 場次是否已鎖定
const isLocked = computed(() => filmModel.value.times.some((screening) => screening.locked))

// 剩餘場次數量
const remainingScreening = computed(
  () => filmModel.value.times.filter((screening) => !screening.deleted).length
)

const LongPressHandler = (thisScreening) => {
  if (thisScreening.locked) {
    return
  }
  confirm.require({
    message: '鎖定後，此電影其他場次將被刪除，確定要鎖定嗎？',
    header: '鎖定場次',
    rejectClass: 'p-button-text p-button-text',
    acceptClass: 'p-button-success p-button-text',
    accept: () => {
      lockScreening(thisScreening)
    },
    reject: () => {
      toast.add({ severity: 'error', summary: '已取消', life: 3000 })
    }
  })
}

// 點擊場次
const clickHandler = function (thisScreening) {
  // 若場次已鎖定
  if (thisScreening.locked) {
    // 解除鎖定，復原已被刪除場次
    unlock(thisScreening)
  }
  // 若場次未被鎖定
  // 若場次已刪除
  else if (thisScreening.deleted) {
    reviveScreening(thisScreening)
    return
  } else {
    // 若場次未刪除，則刪除場次
    deleteScreening(thisScreening)
  }
}

const lockScreening = (thisScreening) => {
  // 鎖定此場次
  thisScreening.locked = true
  // 刪除其他場次
  for (const screening of filmModel.value.times) {
    if (screening !== thisScreening) {
      screening.deleted = true
    }
  }
  // 跳通知
  toast.add({ severity: 'success', summary: '已鎖定', life: 3000 })
}

// 復原已刪除場次
const reviveScreening = (thisScreening) => {
  try {
    // 若該電影有場次已鎖定，則解除鎖定並通知
    for (const screening of filmModel.value.times) {
      if (screening.locked === true) {
        screening.locked = false
        toast.add({
          severity: 'info',
          summary: '場次已解除鎖定',
          life: 3000
        })
      }
    }
    // 復原該場次
    thisScreening.deleted = false
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: '出現錯誤',
      detail: error.message,
      life: 3000
    })
  }
  toast.add({
    severity: 'success',
    summary: '場次已復原',
    life: 3000
  })
}

// 解除鎖定已鎖定場次
const unlock = (thisScreening) => {
  confirm.require({
    message: '解除鎖定後，此電影其他場次將被復原，確定要解除鎖定嗎？',
    header: '解除鎖定',
    rejectClass: 'p-button-text p-button-text',
    acceptClass: 'p-button-danger p-button-text',
    accept: () => {
      // 解除此場次鎖定狀態
      thisScreening.locked = false
      // 復原已刪除場次
      for (const screening of filmModel.value.times) {
        screening.deleted = false
      }
      // 跳通知
      toast.add({ severity: 'success', summary: '已解除鎖定', life: 3000 })
    },
    reject: () => {
      toast.add({ severity: 'error', summary: '已取消', life: 3000 })
    }
  })
}

// 刪除場次
const deleteScreening = (thisScreening) => {
  // 刪除此場次
  thisScreening.deleted = true
  // 跳通知
  toast.add({ severity: 'success', summary: '已刪除', life: 3000 })
}

/******    styles   **********/
const fieldsetStyle = {
  legendTitle: {
    class: `${isLocked.value ? 'text-grey-900' : remainingScreening.value > 2 ? 'text-emerald-500' : 'text-orange-500'}`
  },
  togglerIcon: {
    class: `${isLocked.value ? 'text-grey-900' : remainingScreening.value > 2 ? 'text-emerald-500' : 'text-orange-500'}`
  },
  toggleableContent: {
    class: `${isLocked.value ? 'ring-black' : remainingScreening.value > 2 ? 'ring-emerald-500' : 'ring-orange-400'}`
  }
}
const fieldsetRingColor = computed(() => ({
  'ring-black': isLocked.value,
  'ring-emerald-500': !isLocked.value && remainingScreening.value > 2,
  'ring-orange-400': !isLocked.value && remainingScreening.value <= 2
}))

// prettier-ignore
const BtnStyle = (screening) => {
  const bgColor = screening.locked ? 'bg-gray-800' : 'bg-transparent';

  const shadow = (!screening.locked && !screening.deleted) ? 'shadow-lg' : '';

  const textColor = screening.locked ? 'text-gray-100' :
                    screening.deleted ? 'text-gray-400' :
                    screening.danger ? 'text-red-800' : 'text-primary-500';

  const borderColor = screening.deleted ? 'border-gray-200' :
                      screening.danger ? 'border-red-200 ring ring-offset-0 ring-red-300' :
                      screening.locked ? 'border-gray-800' : 'border-primary-500';

  return `${bgColor} ${borderColor} ${textColor} ${shadow}`;
}

/******    styles   **********/
</script>
