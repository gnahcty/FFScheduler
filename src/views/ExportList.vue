<template>
  <div class="mx-auto w-full max-w-md">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-200 transition-all duration-300"
    >
      <button
        @click="toggle(index)"
        class="flex w-full items-center justify-between bg-gray-100 p-4 text-left hover:bg-gray-200 focus:outline-none"
      >
        <span>{{ item.title }}</span>
        <div class="pi" :class="isOpen(index) ? 'pi-minus' : 'pi-plus'"></div>
      </button>
      <div
        class="grid overflow-hidden transition-all duration-300"
        :style="{ maxHeight: isOpen(index) ? '1000px' : '0' }"
      >
        <div class="bg-gray-50 p-4">aaaa</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { title: 'Accordion Item 1', content: 'Content for the first item.' },
  { title: 'Accordion Item 2', content: 'Content for the second item.' },
  { title: 'Accordion Item 3', content: 'Content for the third item.' }
])

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index) => {
  return openIndex.value === index
}
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
