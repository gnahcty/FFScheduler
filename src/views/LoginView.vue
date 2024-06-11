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
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight sm:mt-0  "
        >
          登入帳號
        </h2>
      </div>
      <!-- 標題 -->

      <!-- 登入表單 -->
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="username" class="block text-sm font-medium leading-6  "
              >帳號</label
            >
            <div class="mt-2">
              <InputText
                invalid
                id="username"
                name="username"
                class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6  "
                >密碼</label
              >
              <div class="text-sm">
                <a href="#" class="font-semibold    "
                  >忘記密碼？</a
                >
              </div>
            </div>
            <div class="mt-2">
              <Password
                v-model="password"
                toggleMask
                :feedback="false"
                class="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500    "
            >
              登入
            </button>
          </div>
        </form>
        <div
          class="my-4 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary-700 after:mt-0.5 after:flex-1 after:border-t after:border-primary-700"
        >
          <p class="mx-4 mb-0 text-center text-sm font-semibold">還不是會員？</p>
        </div>
        <div class="mt-10 flex items-center justify-center gap-8 text-center">
          <router-link to="/register">
            <div
              class="font-semibold leading-6 text-primary-500 hover:text-primary-400    "
            >
              註冊
            </div>
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
import { ref } from 'vue'

const password = ref(null)
</script>
