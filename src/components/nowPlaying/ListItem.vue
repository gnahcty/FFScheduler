<template>
  <router-link to="/details">
    <li class="flex justify-between gap-x-6 py-5">
      <!-- movie info -->
      <div class="flex min-w-0 gap-x-4">
        <!-- cover photo -->
        <img src="@/assets/拍血.jpeg" alt="" class="w-48 rounded-xl" />
        <!-- cover photo -->

        <div class="flex h-full min-w-0 flex-auto flex-col justify-center gap-3">
          <!-- film title -->
          <p class="truncate text-2xl font-semibold leading-6 text-gray-900">拍血少年</p>
          <p class="mt-1 truncate text-xl leading-5 text-gray-500">All You Need Is Blood</p>
          <!-- film title -->
        </div>
      </div>
      <!-- movie info -->

      <!-- movie details for PC -->
      <p class="flex flex-shrink items-center justify-center truncate">導演名稱</p>

      <p class="hidden items-center justify-around lg:flex">
        美國 USA | 1984 | DCP | Colour | 96min
      </p>
      <!-- movie details for PC -->

      <!-- like btn -->
      <div class="flex shrink-0 items-center justify-center">
        <span class="pi pi-heart text-3xl leading-6 text-gray-900"> </span>
      </div>
      <!-- like btn -->
    </li>
  </router-link>
</template>
