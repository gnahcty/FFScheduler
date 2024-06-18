// 收藏清單頁面 - 電影欄
<template>
  <div class="border-gray-200 text-white transition-all duration-500">
    <!-- 收藏清單 -->
    <button
      @click="toggleAccordion()"
      class="flex w-full items-center justify-between p-2 pb-0 text-left text-3xl font-bold"
    >
      <div class="flex items-center">
        <span v-if="list.filmLocked.value" class="pi pi-lock pe-3 text-xs"></span>
        <router-link :to="`/details/${props.film._id}`">
          <span class="hover:underline">{{ props.film.CName }}</span>
        </router-link>
      </div>
      <div class="flex flex-col items-end">
        <div class="pi" :class="accordionOpened ? 'pi-minus' : 'pi-plus'"></div>
      </div>
    </button>
    <div
      class="overflow-hidden px-2 transition-all duration-300"
      :style="{ maxHeight: accordionOpened ? '100vh' : '0px' }"
    >
      <div class="isolate pb-2 text-right text-xs text-stone-200 transition-all">
        剩餘場次:{{ list.remainingScreening }}
      </div>
      <div class="grid grid-cols-2 gap-4 pb-2 xl:grid-cols-3">
        <template v-for="screening in props.film.screenings" :key="screening.list_id">
          <button
            class="my-btn text-sm"
            :class="list.chipStyle(screening.list_id).value"
            v-on-long-press="[() => list.lock(screening.list_id), { modifiers: { stop: true } }]"
            @click="list.hide(screening.list_id)"
          >
            <span class="font-bold">
              {{ format(screening.time, 'MM.dd EEE HH:mm') }}
            </span>
          </button>
        </template>
      </div>
    </div>
    <!-- 收藏清單 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { manageList } from '@/utils/manageList'
import { format } from 'date-fns'
import { vOnLongPress } from '@vueuse/components'

const props = defineProps({
  film: {
    type: Object,
    default: () => {}
  }
})

const list = manageList(props.film.screenings[0].list_id)
const accordionOpened = ref(false)
const toggleAccordion = () => (accordionOpened.value = !accordionOpened.value)
</script>
