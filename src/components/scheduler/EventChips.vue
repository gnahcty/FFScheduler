<template>
  <!-- for PC -->
  <div
    class="mt-1 hidden cursor-pointer overflow-hidden rounded-lg px-2 py-1 lg:block"
    :class="useList.chipStyle.value"
    v-on-long-press="[() => useList.lock(), { modifiers: { stop: true } }]"
    @click="useList.hide()"
    v-if="!useList.isHidden.value"
  >
    <p class="truncate text-xs leading-tight">{{ startingTime }} - {{ endingTime }}</p>
    <p class="truncate text-sm leading-tight">{{ film.CName }}</p>
    <p class="truncate text-xs leading-tight">{{ film.EName }}</p>
  </div>
  <!-- for PC -->

  <!-- for tab and mobile -->
  <div class="flex gap-3 lg:hidden" v-if="show">
    <div class="flex flex-col items-center text-sm">
      <span>{{ startingTime }}</span>
      <span>|</span>
      <span>{{ endingTime }}</span>
    </div>
    <div
      class="mt-1 flex-auto cursor-pointer select-none overflow-hidden rounded-lg border px-2 py-1"
      :class="useList.chipStyle.value"
      v-on-long-press="[() => useList.lock(), { modifiers: { stop: true } }]"
      @click="useList.hide()"
    >
      <p class="truncate">{{ film.CName }}</p>
      <p class="truncate">{{ film.EName }}</p>
    </div>
  </div>
  <!-- for tab and mobile -->
</template>

<script setup>
import { vOnLongPress } from '@vueuse/components'
import { manageList } from '@/utils/manageList'
import { format } from 'date-fns'
import { computed } from 'vue'

const props = defineProps({
  showHidden: {
    type: Boolean,
    default: false
  }
})
const list = defineModel('list')
const useList = manageList(list.value?._id)
const film = list.value.screening.film
const startingTime = format(list.value.screening.time, 'HH:mm')
const endingTime = format(list.value.screening.endTime, 'HH:mm')
const show = computed(() => (props.showHidden ? useList.isHidden.value : !useList.isHidden.value))
</script>
