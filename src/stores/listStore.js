import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
  const currentCategory = ref([])

  /**
 *
 * @param {string} filmId
 * @param {number} direction
 * @returns {string} -prev/next film id
 */
  const getAdjacentIds = (id, dir) => {
    const index = currentCategory.value.indexOf(id)
    if (index !== -1) {
      const newIndex = (index + dir + currentCategory.value.length) % currentCategory.value.length
      return currentCategory.value[newIndex]
    }
    return ''
  }

  return {
    currentCategory,
    getAdjacentIds
  }
})