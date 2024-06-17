<template>
  <button
    class="my-btn text-sm"
    :class="list.chipStyle.value"
    v-on-long-press="[() => list.lock(props.id), { modifiers: { stop: true } }]"
    @click="list.hide(props.id)"
  >
    <span class="font-bold">
      {{ format(props.time, 'MM.dd EEE HH:mm') }}
    </span>
  </button>
</template>

<script setup>
import { vOnLongPress } from '@vueuse/components'
import { format } from 'date-fns'
import { manageList } from '@/utils/manageList'
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
})
const list = manageList(props.id)
</script>
