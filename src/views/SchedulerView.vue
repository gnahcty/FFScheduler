// 排程頁面
<template>
  <div class="w-full py-16">
    <!-- title -->
    <div
      class="relative mx-20 flex flex-1 items-stretch justify-center px-2 lg:justify-start lg:pt-8"
    >
      <div class="absolute inset-y-0 right-5 flex items-center lg:hidden">
        <span class="pi pi-print text-3xl text-gray-600 hover:text-emerald-500"></span>
      </div>
      <div class="text-3xl">我的排程</div>
    </div>
    <!-- title -->

    <!-- for PC -->
    <div class="mx-auto hidden lg:flex">
      <!-- 左邊行事曆區塊 -->
      <ScrollPanel class="h-screen w-2/3">
        <div class="w-full px-10">
          <!-- 行事曆元件（電腦版） -->
          <CalendarForPC></CalendarForPC>
          <!-- 行事曆元件（電腦版） -->
        </div>
      </ScrollPanel>
      <!-- 左邊行事曆區塊 -->
      <!-- 右邊收藏清單區塊 -->
      <ScrollPanel class="h-screen w-1/3">
        <div class="w-full pr-5">
          <!-- 收藏清單header -->
          <LikedPageHeader :showPCview="false"></LikedPageHeader>
          <!-- 收藏清單header -->
          <div class="pt-4">
            <div v-for="film in films" :key="film.filmId">
              <!-- 收藏清單 -->
              <LikedList :film="film"></LikedList>
              <!-- 收藏清單 -->
            </div>
          </div>
        </div>
      </ScrollPanel>
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
import { useExampleStore } from '@/stores/filmStore.js'
const { films } = useExampleStore()
</script>
