<script setup>
import { computed } from 'vue'
import { addScreening } from '@/utils/addScreening'

const props = defineProps({
  screeningId: {
    type: String,
    required: true
  }
})

const list = addScreening(props.screeningId)

const buttonClass = computed(() => {
  if (list.isLoading.value) {
    return 'text-stone-400 cursor-wait'
  }

  return list.isSaved.value ? 'text-white hover:text-red-400' : 'text-white hover:text-orange-300'
})
</script>

<template>
  <div class="px-3">
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-full bg-transparent transition-colors duration-200"
      :class="buttonClass"
      :disabled="list.isLoading.value"
      :aria-busy="list.isLoading.value"
      :aria-label="list.isSaved.value ? 'Unlike screening' : 'Like screening'"
      @click="list.add()"
    >
      <span
        class="pi text-sm leading-none"
        :class="
          list.isLoading.value ? 'pi-spinner pi-spin' : list.isSaved.value ? 'pi-minus' : 'pi-plus'
        "
      ></span>
    </button>
  </div>
</template>
