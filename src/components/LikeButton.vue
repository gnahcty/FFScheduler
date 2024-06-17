<template>
  <div class="px-3">
    <span
      class="pi leading-6"
      :class="list.screeningSaved.value ? 'pi-minus' : 'pi-plus'"
      @click="list.add()"
    ></span>
  </div>
</template>

<script setup>
import { addScreening } from '@/utils/addScreening'
const props = defineProps({
  screeningId: {
    type: String,
    required: true
  }
})
const list = addScreening(props.screeningId)
</script>
