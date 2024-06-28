<template>
  <div class="h-screen bg-white">
    <!-- Menu Bar for PC -->
    <PCNav :navItems="pcNavItems" />
    <!-- Menu Bar for PC -->

    <div
      v-if="state.isLoading"
      class="flex h-screen w-full items-center justify-center bg-stone-900 text-primary-600"
    >
      {{ loadText }}
    </div>

    <RouterView v-show="!state.isLoading" />

    <!-- navbar for phone and tab -->
    <MobileNav :navItems="mobileNavItems" />
    <!-- navbar for phone and tab -->
  </div>
</template>

<script setup>
import PCNav from '@/components/navbar_in_layouts/PCNav.vue'
import MobileNav from '@/components/navbar_in_layouts/MobileNav.vue'
import useAxios from '@/axios/useAxios'
import { useGeneralStore } from '@/stores/generalStore'
import { format } from 'date-fns'
import { ref, onMounted, computed } from 'vue'

const { getFFDateRange } = useAxios()
const state = useGeneralStore()

const loadText = ref('Loading...')
const FFStartDate = ref('April_12')
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
  try {
    const dateRange = await getFFDateRange()
    FFStartDate.value = format(dateRange.start, 'MMMM_dd')
    state.isLoading = false
  } catch (error) {
    loadText.value = '載入失敗，請稍後再試'
  }
})
</script>
