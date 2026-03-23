import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { apiAuth } from '@/axios/axios.js'
import { useToast } from 'primevue/usetoast'
import { useListStore } from '@/stores/listStore.js'
import { useRouter } from 'vue-router'

/**
 * 切換場次收藏狀態
 * @param {String} screeningId
 * @returns {Object} - { targetScreening, isSaved, isLoading, add }
 */
export const addScreening = (screeningId) => {
  const user = useUserStore()
  const list = useListStore()
  const toast = useToast()
  const router = useRouter()
  const isLoading = ref(false)

  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }

  const checkLogin = () => {
    if (!user.isLoggedIn) {
      notify('error', '請先登入')
      router.push('/login')
    }
    return user.isLoggedIn
  }

  const targetScreening = computed(() =>
    list.userList.find((likedItem) => likedItem.screening._id === screeningId)
  )

  /**
   * @returns {Boolean}- is the screening saved in userList?
   *  */
  const isSaved = computed(() => targetScreening.value || false)

  /** add/ remove screening to userList */
  const add = async () => {
    try {
      if (!checkLogin()) return
      if (isLoading.value) return

      isLoading.value = true
      await apiAuth.post('/list/add', { screening: screeningId })
      await list.getList()
    } catch (error) {
      console.log(error)
      notify('error', '錯誤', error.message)
    } finally {
      isLoading.value = false
    }
  }

  return { targetScreening, isSaved, isLoading, add }
}
