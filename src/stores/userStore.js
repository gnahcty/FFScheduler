import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { apiAuth } from '@/utils/axios.js'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'


export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const toast = useToast()
  const notify = (severity, summary, detail = '', life = 1000) => {
    toast.add({ severity, summary, detail, life })
  }

  const token = ref('')
  const list = reactive([])
  const isLoggedIn = computed(() => token.value.length > 0)


  const login = (data) => {
    token.value = data.token
  }

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/user/profile')
      list.splice(0, list.length, ...data.result.list)
      // get some user data....
    } catch (error) {
      token.value.length = 0
    }

  }

  const logout = async () => {
    await apiAuth.post('/user/logout')
    token.value = ''
    list.length = 0
    notify('success', '您已登出')
    router.push('/')
  }


  return {
    token,
    list,
    login,
    logout,
    isLoggedIn,
    getProfile,
  }
}, {
  persist: {
    key: 'FFS',
    paths: ['token']
  }
})