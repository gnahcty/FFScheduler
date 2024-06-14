<template>
  <div class="h-screen bg-white">
    <!-- Menu Bar for PC -->
    <PCNav :navItems="pcNavItems" />
    <!-- Menu Bar for PC -->
    <RouterView />

    <!-- navbar for phone and tab -->
    <MobileNav :navItems="mobileNavItems" />
    <!-- navbar for phone and tab -->
  </div>
</template>

<script setup>
import PCNav from '@/components/navbar_in_layouts/PCNav.vue'
import MobileNav from '@/components/navbar_in_layouts/MobileNav.vue'
import useAxios from '@/utils/useAxios'
import { format } from 'date-fns'
import { ref, onMounted, computed } from 'vue'

const { getFFDateRange } = useAxios()

const FFStartDate = ref('')
const pcNavItems = computed(() => [
  { to: '/categories', text: '索引' },
  { to: `/calendar/${FFStartDate.value}`, text: '場次' },
  { to: '/scheduler', text: '排程' }
])
const mobileNavItems = computed(() => [
  { to: '/categories', text: '索引', icon: 'pi-list' },
  { to: `/calendar/${FFStartDate.value}`, text: '場次', icon: 'pi-calendar' },
  { to: '/favorites', text: '收藏', icon: 'pi-heart' },
  { to: '/scheduler', text: '排程', icon: 'pi-calendar-times' }
])

onMounted(async () => {
  const dateRange = await getFFDateRange()
  FFStartDate.value = format(dateRange.start, 'MMMM_dd')
})
</script>
