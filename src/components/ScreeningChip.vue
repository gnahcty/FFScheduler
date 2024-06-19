4
<template>
  <button
    class="my-btn text-sm"
    :class="list.chipStyle.value"
    v-on-long-press="[() => list.lock(), { modifiers: { stop: true } }]"
    @click="list.hide()"
  >
    <span class="font-bold">
      {{ format(screening.time, 'MM.dd EEE HH:mm') }}
    </span>
  </button>
</template>

<script setup>
import { vOnLongPress } from '@vueuse/components'
import { format } from 'date-fns'
import { manageList } from '@/utils/manageList'
const screening = defineModel('screening')
const list = manageList(screening.value.list_id)
</script>
