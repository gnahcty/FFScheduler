// 首頁
<template>
  <div class="h-full bg-white">
    <div
      class="isolate flex min-h-full items-center px-6 pt-14 lg:px-8 dark:backdrop-blur-sm dark:backdrop-brightness-75"
    >
      <div class="mx-auto max-w-2xl py-32">
        <div class="text-center">
          <h1 class="dark:text-main-yellow text-4xl font-bold tracking-tight sm:text-6xl">
            影展排程網站
          </h1>
          <p class="dark:text-main-orange mt-6 text-lg leading-8">
            網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/login">
              <Button
                label="馬上開始"
                class="border-main-yellow px-3.5 py-2.5 font-semibold hover:border-inherit dark:hover:bg-yellow-400"
              />
            </RouterLink>
            <RouterLink to="/playing">
              <span class="dark:text-main-orange text-sm font-semibold leading-6">
                看片單 <span>→</span>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
