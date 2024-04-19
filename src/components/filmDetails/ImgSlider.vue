<template>
  <div class="relative h-full w-full">
    <!-- controls -->
    <div class="swiper-button-prev absolute z-40 flex h-full items-center" id="swiper-prev">
      <span class="pi pi-angle-left text-5xl text-gray-300"></span>
    </div>
    <div class="swiper-button-next absolute right-0 z-40 flex h-full items-center" id="swiper-next">
      <span class="pi pi-angle-right text-5xl text-gray-300"></span>
    </div>
    <!-- controls -->

    <!-- slides -->
    <swiper-container v-bind="swiperOptions" class="h-full">
      <swiper-slide v-for="n in 3" :key="n" class="h-full">
        <div class="h-full w-full bg-black">
          <img src="@/assets/拍血.jpeg" alt="" class="mx-auto h-full" />
        </div>
      </swiper-slide>
    </swiper-container>
    <!-- slides -->
  </div>
</template>

<script setup>
const swiperOptions = {
  autoplay: {
    delay: 5000
  },
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next'
  }
}
</script>
