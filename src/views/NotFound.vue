<template>
  <div
    class="flex h-screen w-full flex-wrap items-center justify-center overflow-clip bg-black text-primary-500"
  >
    <div class="w-full text-wrap">
      {{ list.userList.find((list) => list._id === '666ed84221b32fa70a3a3dd7') }}
    </div>
  </div>
</template>

<script setup>
import { useListStore } from '@/stores/listStore'
const list = useListStore()
</script>
