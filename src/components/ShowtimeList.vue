// 電影資訊-場次列表

<template>
  <ul role="list" class="w-full flex-shrink divide-y divide-orange-600">
    <li v-for="screening in props.screenings" :key="screening._id" class="flex justify-between">
      <div class="text-md flex flex-wrap gap-x-2">
        <span class="w-[5.3rem]"> {{ screening.date }}</span>
        <span> {{ screening.time }} </span>
        <span> {{ screening.place }} </span>
      </div>
      <!-- like btn -->
      <LikeButton :screeningId="screening._id" class="" />
      <!-- like btn -->
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  screenings: {
    type: Object,
    default: () => {}
  }
})
</script>
