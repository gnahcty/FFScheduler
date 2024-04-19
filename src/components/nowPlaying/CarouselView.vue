<template>
  <!-- opening film cards for PC -->
  <div class="my-6 hidden grid-cols-3 gap-3 lg:grid">
    <div class="border-1 relative" v-for="n in 3" :key="n">
      <div
        class="to-bg-black-10 absolute inset-0 flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-t from-black/80 via-black/50"
      >
        <span class="text-3xl font-semibold text-white">開幕片</span>
      </div>
      <img src="@\assets\拍血.jpeg" />
    </div>
  </div>
  <!-- opening film cards for PC -->

  <!-- carousels -->
  <div class="my-10 w-full" v-for="n in 6" :key="n">
    <span class="my-6 text-2xl font-semibold">當代奇幻</span>
    <div class="my-6">
      <CarouselComponent></CarouselComponent>
    </div>
  </div>
  <!-- carousels -->
</template>
