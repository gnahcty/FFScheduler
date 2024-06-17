// 收藏清單頁面
<template>
  <div class="no-scrollbar h-screen overflow-auto bg-stone-900">
    <div
      class="flex items-center justify-between border-b-2 border-slate-500 p-1 text-center text-primary-500"
    >
      <div class="w-full text-6xl font-bold uppercase">watchlist</div>
    </div>
    <div class="w-full text-primary-500">
      <div v-for="film in list.listByFilm" :key="film.CName">
        <!-- 收藏清單 -->
        <FieldSet :film="film"></FieldSet>
        <!-- 收藏清單 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/listStore'
const list = useListStore()
</script>
