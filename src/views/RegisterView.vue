<template>
  <div class="flex h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 lg:pb-0">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- LOGO for Phone -->
      <router-link to="/">
        <img
          class="mx-auto h-10 w-auto lg:hidden"
          src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=500"
          alt="LOGO"
        />
      </router-link>
      <!-- LOGO for Phone -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        註冊會員
      </h2>
    </div>
    <!-- TODO:註冊表單驗證 -->
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >帳號</label
          >
          <div class="mt-2">
            <InputText
              invalid
              id="username"
              name="username"
              class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">信箱</label>
          <div class="mt-2">
            <InputText
              invalid
              id="email"
              name="email"
              class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >密碼</label
            >
          </div>
          <div class="mt-2">
            <Password
              v-model="password"
              toggleMask
              class="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            註冊
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        已經有帳號了？
        {{ ' ' }}
        <router-link to="/login">
          <span class="font-semibold leading-6 text-emerald-500 hover:text-emerald-500"
            >點擊登入</span
          >
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const password = ref(null)
</script>
