// 影展單元-輪播圖元件-單元卡片
<template>
  <div class="group relative h-full w-full text-primary-600">
    <router-link :to="`/categories/${props.category?.name}`">
      <!-- index -->
      <div
        class="absolute left-0 top-0 z-20 ps-4 pt-4 transition duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-90"
      >
        <h1 class="text-shadow text-2xl font-light">
          {{ (props.categoryIndex + 1).toString().padStart(2, '0') }}/
        </h1>
      </div>
      <!-- index -->
      <!-- cover photo -->
      <div
        class="z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out"
      >
        <img
          :src="props.category?.pic"
          class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
          alt=""
        />
      </div>
      <!-- cover photo -->
      <!-- title -->
      <div
        class="absolute bottom-0 right-0 z-20 overflow-clip px-4 pb-8 pe-8 text-end transition duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-1 group-hover:scale-110"
      >
        <h1 class="text-shadow text-balance break-normal text-2xl font-bold">
          {{ props.category?.name }}
        </h1>
      </div>
      <!-- title -->
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: Object,
    default: () => {}
  },
  categoryIndex: {
    type: Number,
    default: 0
  }
})
</script>
