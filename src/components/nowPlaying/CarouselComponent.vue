// 影展片單-輪播圖檢視-輪播圖元件

<template>
  <div class="relative h-full w-full">
    <!-- 左控制鈕 -->
    <div class="swiper-button-prev absolute z-40 flex h-full items-center" id="swiper-prev">
      <span class="pi pi-angle-left text-5xl text-gray-300"></span>
    </div>
    <!-- 左控制鈕 -->

    <!-- 右控制鈕 -->
    <div class="swiper-button-next absolute right-0 z-40 flex h-full items-center" id="swiper-next">
      <span class="pi pi-angle-right text-5xl text-gray-300"></span>
    </div>
    <!-- 右控制鈕 -->

    <!-- swiper主元件 -->
    <swiper-container v-bind="swiperOptions" class="h-full w-full">
      <swiper-slide v-for="n in 10" :key="n" class="w-72">
        <FilmCard />
      </swiper-slide>
    </swiper-container>
    <!-- swiper主元件 -->
  </div>
</template>

<script setup>
import FilmCard from '@/components/FilmCard.vue'

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next'
  }
  // breakpoints: {
  //   768: {
  // slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   1128: {
  // slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   1620: {
  // slidesPerView: 4,
  //     spaceBetween: 20
  //   }
  // }
}
</script>
