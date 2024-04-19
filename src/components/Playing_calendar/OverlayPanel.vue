<template>
  <div
    v-if="visible"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="stopDrag"
    class="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 lg:hidden"
    :style="{ transform: `translateY(${currentY}px)` }"
    ref="overlay"
  >
    <div class="h-1/2 overflow-hidden">
      <!-- Content for the overlay -->
      <div class="p-4">
        <h2 class="text-xl font-bold">Overlay Panel</h2>
        <p>Drag up and down to reveal the calendar.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(true)
const startY = ref(0)
const currentY = ref(0)
const overlay = ref(null)

const startDrag = (event) => {
  startY.value = event.touches[0].clientY - currentY.value
}

const onDrag = (event) => {
  const newY = event.touches[0].clientY - startY.value
  // Constrain the drag to not move the panel off-screen
  if (newY < 0 && newY > -overlay.value.clientHeight) {
    currentY.value = newY
  }
}

const stopDrag = () => {
  // You can add logic here to snap the panel open or closed based on currentY
}
</script>

<style scoped></style>
