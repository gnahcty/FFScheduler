import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiAuth } from '@/axios/axios.js'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import { useListStore } from './listStore'
// import { storeToRefs } from 'pinia'


export const useUserStore = defineStore('user', () => {
  const { userList } = useListStore()
  const router = useRouter()
  const toast = useToast()
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }

  const token = ref('')

  const isLoggedIn = computed(() => token.value !== '')


  const login = (data) => {
    token.value = data.token
  }

  const getProfile = async () => {
    if (token.value === '') return
    try {
      const { data } = await apiAuth.get('/list')
      userList.value = data.result.list
    } catch (error) {
      token.value = ''
      notify('error', '請重新登入')
    }

  }

  const logout = async () => {
    await apiAuth.post('/user/logout')
    token.value = ''
    userList.length = 0
    notify('success', '您已登出')
    router.push('/')
  }


  return {
    token,
    login,
    logout,
    getProfile,
    isLoggedIn,
  }
}, {
  persist: {
    key: 'FFS',
    paths: ['token']
  }
})