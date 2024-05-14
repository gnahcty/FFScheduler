<template>
  <div class="h-screen bg-white">
    <!-- Menu Bar for PC -->
    <PCNav :navItems="pcNavItems" />
    <!-- Menu Bar for PC -->
    <RouterView />

    <!-- navbar for phone and pad -->
    <MobileNav :navItems="mobileNavItems" />
    <!-- navbar for phone and pad -->
  </div>
</template>

<script setup>
import PCNav from '@/components/navbar_in_layouts/PCNav.vue'
import MobileNav from '@/components/navbar_in_layouts/MobileNav.vue'
const pcNavItems = [
  { to: '/categories', text: '索引' },
  { to: '/calendar', text: '場次' },
  { to: '/scheduler', text: '排程' }
]
const mobileNavItems = [
  { to: '/categories', text: '索引', icon: 'pi-list' },
  { to: '/calendar', text: '場次', icon: 'pi-calendar' },
  { to: '/favorites', text: '收藏', icon: 'pi-heart' },
  { to: '/scheduler', text: '排程', icon: 'pi-calendar-times' }
]
</script>
