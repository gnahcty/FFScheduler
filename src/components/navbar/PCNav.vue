// NavBar for PC
<template>
  <header class="fixed inset-x-0 top-0 z-50 dark:bg-gradient-to-b">
    <nav class="flex items-center justify-between p-6 lg:px-8">
      <!-- LOGO -->
      <div class="flex lg:flex-1">
        <router-link to="/" class="hidden lg:flex">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=500"
            alt="LOGO"
          />
        </router-link>
      </div>
      <!-- LOGO -->
      <!-- Menu Bar for PC -->
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          v-for="navItem in navItems"
          :key="navItem.to"
          :to="navItem.to"
          class="dark:text-main-orange dark:hover:text-main-yellow text-sm font-semibold leading-6"
        >
          {{ navItem.text }}
        </RouterLink>
      </div>
      <!-- Menu Bar for PC -->
      <!-- Login Button for PC -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to="/login" class="dark:text-main-yellow text-sm font-semibold leading-6">
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
