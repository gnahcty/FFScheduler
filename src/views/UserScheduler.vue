// 排程頁面
<template>
  <div class="min-h-screen w-full bg-stone-900 py-12 text-primary-600 lg:h-screen">
    <!-- for PC -->
    <div class="no-scrollbar mx-auto hidden h-full w-screen lg:flex">
      <!-- 左邊行事曆區塊 -->
      <div class="no-scrollbar h-full w-full overflow-auto px-10">
        <!-- title -->
        <div class="flex w-full flex-1 items-center justify-between px-2 lg:pt-8">
          <div class="text-7xl uppercase">scheduler</div>
          <div class="flex gap-5 text-xl">
            <router-link to="/export" class="flex items-center">
              <div class="pi pi-print cursor-pointer hover:text-stone-300"></div>
            </router-link>
            <div
              class="pi pi-list cursor-pointer hover:text-stone-300"
              @click="showList = !showList"
            ></div>
          </div>
        </div>
        <!-- title -->
        <!-- 行事曆元件（電腦版） -->
        <CalendarForPC></CalendarForPC>
        <!-- 行事曆元件（電腦版） -->
      </div>
      <!-- 左邊行事曆區塊 -->
      <!-- 右邊收藏清單區塊 -->
      <div
        id="list"
        class="no-scrollbar flex h-full flex-col justify-between pr-5 transition-all duration-300"
        :class="{ 'w-0': !showList, 'w-1/2': showList }"
      >
        <div class="no-scrollbar flex-auto overflow-auto">
          <div v-for="film in films" :key="film.filmId">
            <!-- 收藏清單 -->
            <FieldSet :film="film"></FieldSet>
            <!-- 收藏清單 -->
          </div>
        </div>
        <!-- <div class="w-full text-right text-7xl uppercase">watchlist</div> -->
      </div>
      <!-- 右邊收藏清單區塊 -->
    </div>
    <!-- for PC -->

    <!-- for tab and mobile -->
    <div class="lg:hidden">
      <!-- 行事曆元件（手機、平板） -->
      <CalendarForMobile></CalendarForMobile>
      <!-- 行事曆元件（手機、平板） -->
    </div>
    <!-- for tab and mobile -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserList } from '@/stores/filmStore.js'
const { films } = useUserList()
const showList = ref(false)
</script>
