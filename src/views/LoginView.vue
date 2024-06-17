<template>
  <div class="flex h-full items-center bg-stone-900 text-primary-600">
    <div class="flex w-full flex-col justify-center self-center px-6 pb-12 sm:pb-0 lg:px-8">
      <!-- 返回鍵 -->
      <router-link to="/" class="sm:hidden">
        <div class="pi pi-times"></div>
      </router-link>
      <!-- 返回鍵 -->

      <!-- 標題 -->
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight sm:mt-0">
          登入帳號
        </h2>
      </div>
      <!-- 標題 -->

      <!-- 登入表單 -->
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form :disabled="isSubmitting" @submit.prevent="submit">
          <div class="field">
            <label for="account" class="mb-2 text-sm font-medium leading-6">帳號</label>
            <InputText
              v-model="account"
              id="account"
              class="w-full rounded-md border-0 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
            />
            <div class="h-6 w-full text-right">
              <small id="account-help" class="text-xs"> {{ errors.account }} </small>
            </div>
          </div>

          <div class="field mb-4">
            <div class="flex flex-col">
              <label for="password" class="text-sm font-medium leading-6">密碼</label>
              <Password
                v-model="password"
                type="password"
                toggleMask
                :feedback="false"
                class="w-full rounded-md border-0 ring-1 ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            <div class="h-6 w-full text-right">
              <small id="password-help" class="text-xs"> {{ errors.password }} </small>
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-primary-400"
          >
            登入
          </button>
        </form>
        <div
          class="my-4 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary-700 after:mt-0.5 after:flex-1 after:border-t after:border-primary-700"
        >
          <p class="mx-4 mb-0 text-center text-sm font-semibold">還不是會員？</p>
        </div>
        <div class="mt-10 flex items-center justify-center gap-8 text-center">
          <router-link to="/register">
            <div class="font-semibold leading-6 text-primary-500 hover:text-primary-400">註冊</div>
          </router-link>
          <div class="text-sm">/</div>
          <div class="pi pi-google"></div>
        </div>
      </div>
      <!-- 登入表單 -->
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/utils/axios.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import { useListStore } from '@/stores/listStore.js'

const router = useRouter()
const user = useUserStore()
const list = useListStore()

const toast = useToast()
const notify = (severity, summary, detail = '', life = 1000) => {
  toast.add({ severity, summary, detail, life })
}

const formSchema = yup.object({
  account: yup.string().required('必填').min(6, '帳號最少 6 個字').max(20, '帳號最多 20 個字'),
  password: yup.string().required('必填').min(6, '密碼最少 6 個字').max(20, '密碼最多 20 個字')
})

const { defineField, handleSubmit, isSubmitting, errors } = useForm({
  validationSchema: formSchema
})

const [account] = defineField('account')
const [password] = defineField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/user/login', {
      account: values.account,
      password: values.password
    })
    console.log(data)
    user.login({ token: data.result.token })
    list.getList()
    notify('success', '登入成功')
    router.push('/categories')
  } catch (error) {
    notify('error', '登入失敗', error.response?.data?.message || '發生未知錯誤，請稍後再試', 2000)
  }
})
</script>
