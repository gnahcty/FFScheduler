<template>
  <ListPageHeader v-model="viewState" />
  <div class="px-5 pb-16 sm:px-14">
    <ListView v-if="viewState === 'list'" />

    <CarouselView v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const viewState = ref('carousel')
</script>
