// 影展單元-輪播圖元件

<template>
  <div class="relative h-full w-full">
    <!-- PC swiper -->
    <swiper-container v-bind="PCSwiperOpt" class="hidden h-full w-full sm:block">
      <swiper-slide v-for="(category, i) in categories" :key="category.name" class="w-64">
        <CategoryCard :film="category" :filmIndex="i" />
      </swiper-slide>
    </swiper-container>
    <!-- PC swiper -->

    <!-- Mobile swiper -->
    <swiper-container v-bind="MobileSwiperOpt" class="h-full w-full sm:hidden">
      <swiper-slide v-for="(category, i) in categories" :key="category.name" class="h-96 w-64">
        <CategoryCard :film="category" :filmIndex="i" />
      </swiper-slide>
    </swiper-container>
    <!-- Mobile swiper -->
  </div>
</template>

<script setup>
import { getCategories } from '@/utils/temp_data.js'
const categories = getCategories()
const PCSwiperOpt = {
  injectStyles: ['.swiper-wrapper { transition-timing-function: linear !important }'],
  speed: 8000,
  slidesPerView: 'auto',
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next'
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: true
  }
}
const MobileSwiperOpt = {
  injectStyles: ['.swiper-wrapper { transition-timing-function: linear !important }'],
  direction: 'vertical',
  speed: 8000,
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next'
  },
  autoplay: {
    delay: 0
  }
}
</script>
