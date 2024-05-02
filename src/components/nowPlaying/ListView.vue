// 影展片單-清單檢視
<template>
  <div class="my-6">
    <!-- category -->
    <span class="my-6 text-2xl font-semibold dark:text-amber-500">開幕片</span>
    <!-- category -->

    <!-- card for mobile -->
    <div class="flex w-full flex-col items-center justify-center gap-4 py-6 sm:hidden">
      <FilmCard v-for="n in 3" :key="n" />
    </div>
    <!-- card for mobile -->

    <!-- list for pc and pad -->
    <ul role="list" class="hidden divide-y divide-gray-100 sm:block">
      <ListItem v-for="n in 3" :key="n" />
    </ul>
    <!-- list for pc and pad -->
  </div>
  <div class="my-6">
    <!-- category -->
    <span class="my-6 text-2xl font-semibold dark:text-amber-500">分類片單</span>
    <!-- category -->

    <!-- card for mobile -->
    <div class="flex w-full flex-col items-center justify-center gap-4 py-6 sm:hidden">
      <FilmCard v-for="n in 10" :key="n" />
    </div>
    <!-- card for mobile -->

    <!-- list for pc and pad -->
    <ul role="list" class="hidden divide-y divide-gray-100 sm:block">
      <ListItem v-for="n in 10" :key="n" />
    </ul>
    <!-- list for pc and pad -->
  </div>
</template>
