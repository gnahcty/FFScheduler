// NavBar for PC
<template>
  <header class="fixed inset-x-0 top-0 z-50 hidden text-primary-600 sm:block">
    <nav class="m-6 flex h-6 items-center justify-between lg:mx-12">
      <!-- LOGO -->
      <div>
        <router-link to="/" class="flex font-semibold"> HOME </router-link>
      </div>
      <!-- LOGO -->
      <!-- Menu Bar for PC -->
      <div class="flex h-6 gap-x-12 overflow-hidden">
        <RouterLink v-for="navItem in navItems" :key="navItem.to" :to="navItem.to">
          <div
            class="text-sm font-semibold leading-6 transition-all duration-200 hover:-translate-y-6"
          >
            <div>{{ navItem.text }}</div>
            <div>{{ navItem.text }}</div>
          </div>
        </RouterLink>
      </div>
      <!-- Menu Bar for PC -->
      <!-- Login Button for PC -->
      <div class="group flex w-14" v-if="!user.isLoggedIn">
        <RouterLink to="/login">
          <div class="group flex text-sm font-semibold leading-6">
            <span>登入</span
            ><span class="group-hover:shift-lr transition-all duration-300">&rarr;</span>
          </div>
        </RouterLink>
      </div>
      <div class="group flex w-14" v-else>
        <div class="group flex text-sm font-semibold leading-6" @click="user.logout">
          <span>登出</span
          ><span class="group-hover:shift-lr transition-all duration-300">&rarr;</span>
        </div>
      </div>
      <!-- Login Button for PC -->
    </nav>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
const user = useUserStore()
defineProps({
  navItems: {
    type: Array,
    required: true
  }
})
</script>
