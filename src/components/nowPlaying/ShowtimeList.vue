<template>
  <ul role="list" class="w-full flex-shrink divide-y divide-gray-100">
    <li v-for="n in 5" :key="n" class="flex justify-between gap-x-6 py-5">
      <div class="flex flex-wrap gap-x-3">
        <span> 04.12 〈五〉 14:50</span>
        <span> 信義威秀 11 廳 </span>
      </div>
      <!-- like btn -->
      <div class="flex shrink-0 items-center justify-center">
        <span class="pi pi-heart text-xl leading-6 text-gray-900"> </span>
      </div>
      <!-- like btn -->
    </li>
  </ul>
</template>
