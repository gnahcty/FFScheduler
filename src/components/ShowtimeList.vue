// 電影資訊-場次列表

<template>
  <ul role="list" class="w-full flex-shrink divide-y divide-orange-600">
    <li v-for="(screening, i) in props.screenings" :key="i" class="flex justify-between">
      <div class="flex flex-wrap gap-x-3">
        <span class="w-24"> {{ screening.date }}</span>
        <span> {{ screening.time }} </span>
        <span> {{ screening.place }} </span>
      </div>
      <!-- like btn -->
      <div class="px-3">
        <span
          class="pi leading-6"
          :class="isLiked(screening.time, route.params.id) ? 'pi-minus' : 'pi-plus'"
          @click="likeScreeningToggle(screening, route.params.id)"
        ></span>
        <div></div>
      </div>
      <!-- like btn -->
    </li>
  </ul>
</template>

<script setup>
import { useUserList } from '@/stores/filmStore.js'
import { useRoute } from 'vue-router'
const props = defineProps({
  screenings: {
    type: Object,
    default: () => {}
  }
})
const route = useRoute()
const { isLiked, likeScreeningToggle } = useUserList()
</script>
