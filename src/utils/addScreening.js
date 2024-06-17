import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { apiAuth } from '@/utils/axios.js'
import { useToast } from 'primevue/usetoast'
import { useListStore } from '@/stores/listStore.js'
import { useRouter } from 'vue-router'

export const addScreening = (screeningId) => {
  const user = useUserStore()
  const list = useListStore()
  const toast = useToast()
  const router = useRouter()


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



  const targetScreening = computed(() => list.userList.find((likedItem) => likedItem.screening._id === screeningId))

  const screeningSaved = computed(() => targetScreening.value || false)

  const add = async () => {

    try {
      if (!checkLogin()) return
      await apiAuth.post('/list/add', { screening: screeningId })
      list.getList()
    } catch (error) {
      console.log(error)
      notify('error', '錯誤', error.message)
    }

  }
  return { targetScreening, screeningSaved, add }
}