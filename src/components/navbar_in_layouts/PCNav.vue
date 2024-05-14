// NavBar for PC
<template>
  <header class="fixed inset-x-0 top-0 z-50 text-primary-600 dark:bg-gradient-to-b">
    <nav class="flex items-center justify-between p-6 lg:px-12">
      <!-- LOGO -->
      <div class="flex sm:flex-1">
        <router-link to="/" class="hidden font-semibold sm:flex"> HOME </router-link>
      </div>
      <!-- LOGO -->
      <!-- Menu Bar for PC -->
      <div class="hidden sm:flex sm:gap-x-12">
        <RouterLink
          v-for="navItem in navItems"
          :key="navItem.to"
          :to="navItem.to"
          class="text-sm font-semibold leading-6 dark:text-main-orange dark:hover:text-main-yellow"
        >
          {{ navItem.text }}
        </RouterLink>
      </div>
      <!-- Menu Bar for PC -->
      <!-- Login Button for PC -->
      <div class="hidden sm:flex sm:flex-1 sm:justify-end">
        <RouterLink to="/login" class="text-sm font-semibold leading-6 dark:text-main-yellow">
          登入<span>&rarr;</span>
        </RouterLink>
      </div>
      <!-- Login Button for PC -->
    </nav>
  </header>
</template>

<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true
  }
})
</script>
