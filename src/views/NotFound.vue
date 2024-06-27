<template>
  <div
    class="flex h-screen w-full flex-wrap items-center justify-center overflow-clip bg-black text-primary-500"
  >
    ERROR 404: Page not found X__X
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

setTimeout(() => {
  router.replace('/')
}, 5000)
</script>
