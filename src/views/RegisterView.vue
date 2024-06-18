// 註冊
<template>
  <div
    class="flex h-full flex-1 flex-col justify-center bg-stone-900 px-6 pb-12 text-primary-600 lg:px-8 lg:pb-0"
  >
    <!-- 標題 -->
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- 返回鍵 -->
      <router-link to="/" class="sm:hidden">
        <div class="pi pi-times"></div>
      </router-link>
      <!-- 返回鍵 -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">註冊會員</h2>
    </div>
    <!-- 標題 -->

    <!-- 註冊表單 -->
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form :disabled="isSubmitting" @submit.prevent="submit">
        <div class="field">
          <label for="account" class="mb-2 text-sm font-medium leading-6">帳號</label>
          <InputText
            v-model="account"
            id="account"
            class="w-full rounded-md border-0 ring-1 ring-inset sm:text-sm sm:leading-6"
          />
          <div class="h-6 w-full text-right">
            <small id="account-help" class="text-xs"> {{ errors.account }} </small>
          </div>
        </div>
        <div class="field">
          <label for="email" class="mb-2 text-sm font-medium leading-6">信箱</label>
          <InputText
            v-model="email"
            type="email"
            class="block w-full rounded-md border-0 ring-1 ring-inset sm:text-sm sm:leading-6"
          />
          <div class="h-6 w-full text-right">
            <small id="email-help" class="text-xs">{{ errors.email }}</small>
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

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-primary-400"
          >
            註冊
          </button>
        </div>
      </form>
      <div
        class="my-4 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary-700 after:mt-0.5 after:flex-1 after:border-t after:border-primary-700"
      >
        <p class="mx-4 mb-0 text-center text-sm font-semibold">已經有帳號了？</p>
      </div>
      <div class="mt-10 flex items-center justify-center gap-8 text-center">
        <router-link to="/login">
          <div class="leading-6 text-primary-500 hover:text-primary-400">登入</div>
        </router-link>
        <!-- <div class="text-sm">/</div>
        <div class="pi pi-google"></div> -->
      </div>
    </div>
    <!-- 註冊表單 -->
  </div>
</template>

<script setup>
import validator from 'validator'
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/axios/axios.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const toast = useToast()
const notify = (severity, summary, detail = '', life = 1000) => {
  toast.add({ severity, summary, detail, life })
}

const formSchema = yup.object({
  account: yup.string().required('必填').min(6, '帳號最少 6 個字').max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('必填')
    .test('isEmail', '信箱格式錯誤', (value) => validator.isEmail(value)),
  password: yup.string().required('必填').min(6, '密碼最少 6 個字').max(20, '密碼最多 20 個字')
})

const { defineField, handleSubmit, isSubmitting, errors } = useForm({
  validationSchema: formSchema
})

const [account] = defineField('account')
const [email] = defineField('email')
const [password] = defineField('password')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    notify('success', '註冊成功')

    router.push('/login')
  } catch (error) {
    notify('error', '註冊失敗', error.response?.data?.message || '發生未知錯誤，請稍後再試', 2000)
  }
})
</script>
