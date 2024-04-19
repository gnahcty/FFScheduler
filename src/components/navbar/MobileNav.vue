<template>
  <!-- navbar for phone and pad -->
  <div
    class="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white lg:hidden dark:border-gray-600 dark:bg-gray-700"
  >
    <div class="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
      <router-link
        type="button"
        v-for="navItem in navItems"
        :to="navItem.to"
        :key="navItem.to"
        class="inline-flex flex-col items-center justify-center px-5 text-gray-500 hover:bg-gray-50 hover:text-emerald-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-emerald-500"
      >
        <span :class="navItem.icon" class="pi mb-1 flex align-bottom"></span>
        <span class="text-sm">{{ navItem.text }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true
  }
})
</script>
