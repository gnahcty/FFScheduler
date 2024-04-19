<template>
  <div class="h-screen bg-white">
    <!-- Menu Bar for PC -->
    <PCNav :navItems="pcNavItems"></PCNav>
    <!-- Menu Bar for PC -->
    <RouterView />

    <!-- navbar for phone and pad -->
    <MobileNav :navItems="mobileNavItems"></MobileNav>
    <!-- navbar for phone and pad -->
  </div>
</template>

<script setup>
import PCNav from '@/components/navbar/PCNav.vue'
import MobileNav from '@/components/navbar/MobileNav.vue'

const pcNavItems = [
  { to: '/playing', text: '索引' },
  { to: '/calendar', text: '場次' },
  { to: '/scheduler', text: '排程' }
]
const mobileNavItems = [
  { to: '/playing', text: '索引', icon: 'pi-list' },
  { to: '/calendar', text: '場次', icon: 'pi-calendar' },
  { to: '/favorites', text: '收藏', icon: 'pi-heart' },
  { to: '/scheduler', text: '排程', icon: 'pi-calendar-times' }
]
</script>
