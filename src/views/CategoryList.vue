// 影展單元

<template>
  <!-- for pc & tab -->
  <div class="mb-16 hidden h-full flex-col bg-stone-900 pt-16 sm:flex">
    <!-- 上半部標題 -->
    <div class="flex h-1/2 w-screen items-center justify-center gap-6">
      <div class="overflow-clip text-center text-9xl uppercase text-primary-600">categories_</div>
    </div>
    <!-- 上半部標題 -->

    <!-- 下半部內容 -->
    <div class="h-1/2">
      <CarouselComponent></CarouselComponent>
    </div>
    <!-- 下半部內容 -->
  </div>
  <!-- for pc & tab -->

  <!-- for mobile -->
  <div class="mb-16 flex h-full justify-around bg-stone-900 sm:hidden">
    <div
      class="overflow-clip ps-12 text-7xl uppercase text-primary-600"
      style="writing-mode: vertical-rl; text-orientation: mixed"
    >
      categories_
    </div>
    <div class="h-full">
      <CarouselComponent></CarouselComponent>
    </div>
  </div>
  <!-- for mobile -->
</template>
