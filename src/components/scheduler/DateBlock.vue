<template>
  <div class="relative h-full min-h-32 border-b border-r border-stone-700 px-2 py-2">
    <div
      class="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-center leading-none transition duration-100 ease-in-out"
      :class="{
        'text-primary-500 underline underline-offset-4': isToday(props.date),
        'text-stone-200': duringFF && !isToday(props.date),
        'text-stone-600': !isToday(props.date) && !duringFF
      }"
    >
      {{ getDate(props.date) }}
    </div>
    <div v-for="(list, i) in lists" :key="list._id">
      <EventChips v-model:list="lists[i]"></EventChips>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { isToday, getDate, isWithinInterval, isSameDay } from 'date-fns'
import { useListStore } from '@/stores/listStore'

const { getListByDate } = useListStore()
const props = defineProps({
  date: {
    type: Object,
    default: null
  },
  dateRange: {
    type: Object,
    default: null
  }
})

const lists = ref([])

const duringFF = computed(() => {
  if (!props.dateRange?.value) return false
  return (
    isWithinInterval(props.date, {
      start: new Date(props.dateRange.value.start),
      end: new Date(props.dateRange.value.end)
    }) || isSameDay(props.date, new Date(props.dateRange.value.start))
  )
})

watch(
  () => props.date,
  () => {
    lists.value = getListByDate(props.date)
  }
)

onMounted(async () => {
  lists.value = getListByDate(props.date)
})
</script>
