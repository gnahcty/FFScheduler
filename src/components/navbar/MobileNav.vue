<!-- navbar for phone and pad -->
<template>
  <div
    class="dark:text-main-orange dark:bg-main-black dark:border-main-black fixed inset-x-0 bottom-0 z-50 h-16 w-full border-t bg-white lg:hidden"
  >
    <div class="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
      <router-link
        type="button"
        v-for="navItem in navItems"
        :to="navItem.to"
        :key="navItem.to"
        class="dark:text-main-orange dark:hover:text-main-yellow inline-flex flex-col items-center justify-center px-5 hover:text-primary-500"
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
