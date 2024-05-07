// 收藏清單頁面
<template>
  <div class="py-14">
    <!-- 收藏清單header -->
    <LikedPageHeader></LikedPageHeader>
    <!-- 收藏清單header -->

    <div class="pt-4">
      <div v-for="film in films" :key="film.filmId">
        <!-- 收藏清單 -->
        <LikedList :film="film"></LikedList>
        <!-- 收藏清單 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useExampleStore } from '@/stores/filmStore.js'
const { films } = useExampleStore()
</script>
