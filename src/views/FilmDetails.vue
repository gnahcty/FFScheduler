<template>
  <div class="pb-16">
    <!-- 頂部劇照 -->
    <div class="h-44 lg:mt-20 lg:h-80">
      <ImgSlider />
    </div>
    <!-- 頂部劇照 -->

    <div
      class="my-8 w-full px-5 py-10 md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:px-20"
    >
      <div class="flex flex-col" v-if="viewState === 'info'">
        <!-- Breadcrumb -->
        <Breadcrumb :model="items" class="mb-5 border-0 pl-0" />
        <!-- Breadcrumb -->

        <!-- 左邊電影資訊 -->
        <FilmInfo />
        <!-- 左邊電影資訊 -->
      </div>

      <!-- 右邊場次&目錄 -->
      <div class="mt-10 flex flex-col px-5">
        <!-- 場次 -->
        <div class="flex w-full justify-between">
          <p class="mb-4 truncate text-3xl font-bold">場次</p>
          <Button
            label="收藏全部"
            icon="pi pi-plus"
            text
            class="hidden lg:block"
          ></Button>
        </div>
        <ShowtimeList />
        <!-- 場次 -->

        <!-- 目錄 -->
        <div class="my-5 hidden px-10 lg:block">
          <FilmNav />
        </div>
        <!-- 目錄 -->
      </div>
    </div>

    <!-- 底部推薦影片 -->
    <div class="flex flex-col gap-5 px-5 lg:px-20">
      <span class="text-xl font-semibold">你可能也會喜歡...</span>
      <div class="flex flex-row gap-3 overflow-clip">
        <FilmCard v-for="n in 3" :key="n" />
      </div>
    </div>
    <!-- 底部推薦影片 -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const viewState = ref("info");

const items = ref([{ label: "當代奇幻" }, { label: "拍血少年" }]);
</script>
