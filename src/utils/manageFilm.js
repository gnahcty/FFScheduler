
import { useListStore } from '@/stores/listStore.js'
import { computed } from 'vue'

export const manageFilm = (filmID) => {
  const list = useListStore()
  const remainingScreening = computed(() => list.userList.filter((likedItem) => likedItem.screening.film._id === filmID && !likedItem.hidden))
  const filmLocked = computed(() => remainingScreening.value.some((likedItem) => likedItem.locked))
  const filmClashed = computed(() => remainingScreening.value.some((likedItem) => likedItem.clash > 0))

  return { remainingScreening, filmLocked, filmClashed }
}