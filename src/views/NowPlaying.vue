<template>
  <ListPageHeader v-model="viewState"></ListPageHeader>
  <div class="px-14 pb-16">
    <ListView v-if="viewState === 'list'"></ListView>

    <CarouselView v-else></CarouselView>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const viewState = ref('carousel')
</script>
