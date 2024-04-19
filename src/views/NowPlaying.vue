<template>
  <ListPageHeader v-model="viewState" />
  <div class="px-14 pb-16">
    <ListView v-if="viewState === 'list'" />

    <CarouselView v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";
const viewState = ref("carousel");
</script>
