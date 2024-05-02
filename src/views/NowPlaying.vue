// 影展片單

<template>
  <div class="dark:bg-black">
    <!-- header -->
    <ListPageHeader v-model="viewState" />
    <!-- header -->

    <div class="px-5 pb-16 sm:px-14">
      <!-- 清單檢視 -->
      <ListView v-if="viewState === 'list'" />
      <!-- 清單檢視 -->

      <!-- 輪播圖檢視 -->
      <CarouselView v-else />
      <!-- 輪播圖檢視 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const viewState = ref('carousel')
</script>
