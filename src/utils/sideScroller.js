import { ref, onMounted, onUnmounted } from 'vue'

export const useHorizontalScroll = () => {
  const scrollContainer = ref(null)

  const handleWheel = (event) => {
    if (!event.deltaY) return
    event.preventDefault() // Prevent the default vertical scroll
    scrollContainer.value.scrollLeft += event.deltaY * 0.75 // Horizontal scroll by the vertical scroll amount
  }

  onMounted(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false })
    }
  })

  onUnmounted(() => {
    if (scrollContainer.value) {
      scrollContainer.value.removeEventListener('wheel', handleWheel)
    }
  })

  return {
    scrollContainer
  }
}
