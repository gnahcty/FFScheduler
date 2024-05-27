// 收藏清單頁面
<template>
  <div class="min-h-screen bg-stone-900">
    <div
      class="flex items-center justify-between border-b-2 border-slate-500 p-1 text-center text-primary-500"
    >
      <div class="w-full text-6xl font-bold uppercase">watchlist</div>
    </div>
    <div class="w-full">
      <div v-for="film in films" :key="film.filmId">
        <!-- 收藏清單 -->
        <FieldSet :film="film"></FieldSet>
        <!-- 收藏清單 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserList } from '@/stores/filmStore.js'

const { films } = useUserList()
</script>
