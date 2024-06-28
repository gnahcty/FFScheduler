import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGeneralStore = defineStore('general', () => {
  const isLoading = ref(true)
  return {
    isLoading
  }
})
