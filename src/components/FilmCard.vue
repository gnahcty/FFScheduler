<template>
  <div
    class="group relative m-0 flex h-40 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
  >
    <div
      class="to-bg-stone-900-10 absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-black/80 via-black/50"
    ></div>
    <div
      class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
    >
      <!-- like btn  -->
      <span
        class="pi absolute right-3 top-3 z-40 text-3xl text-gray-400"
        :class="liked ? 'pi-heart-fill' : 'pi-heart'"
        @click="liked = !liked"
      ></span>
      <!-- like btn  -->
      <router-link to="/details">
        <!-- cover photo -->
        <img
          src="@/assets/拍血.jpeg"
          class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          alt=""
        />
        <!-- cover photo -->
      </router-link>
    </div>
    <div
      class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110"
    >
      <router-link to="/details">
        <!-- film title -->
        <h1 class="text-shadow font-serif text-2xl font-bold text-white">拍血少年</h1>
        <h1 class="text-sm font-light text-gray-200">All you need is blood</h1>
        <!-- film title -->
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const liked = ref(false)
</script>
