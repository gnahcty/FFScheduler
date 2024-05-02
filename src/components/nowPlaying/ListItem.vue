// 影展片單-清單檢視-清單項目
<template>
  <li class="flex gap-8 py-5">
    <router-link to="/details" class="flex-auto">
      <div class="flex justify-evenly gap-x-6">
        <!-- movie info -->
        <div class="flex min-w-0 gap-x-4">
          <!-- cover photo -->
          <img src="@/assets/拍血.jpeg" alt="" class="w-48 rounded-xl" />
          <!-- cover photo -->

          <div class="flex h-full min-w-0 flex-auto flex-col justify-center gap-3">
            <!-- film title -->
            <p class="truncate text-2xl font-semibold leading-6 dark:text-gray-100">拍血少年</p>
            <p class="mt-1 truncate text-xl leading-5 text-gray-500">All You Need Is Blood</p>
            <!-- film title -->
          </div>
        </div>
        <!-- movie info -->

        <!-- movie details for PC -->
        <p class="flex flex-shrink items-center justify-center truncate">導演名稱</p>

        <p class="hidden items-center justify-around lg:flex dark:text-gray-100">
          美國 USA | 1984 | DCP | Colour | 96min
        </p>
        <!-- movie details for PC -->
      </div>
    </router-link>

    <!-- like btn -->
    <div class="flex shrink-0 items-center justify-center">
      <span
        class="pi text-3xl leading-6 dark:text-gray-100 hover:text-primary-500"
        :class="liked ? 'pi-heart-fill' : 'pi-heart'"
        @click="liked = !liked"
      >
      </span>
    </div>
    <!-- like btn -->
  </li>
</template>

<script setup>
import { ref } from 'vue'
const liked = ref(false)
</script>
