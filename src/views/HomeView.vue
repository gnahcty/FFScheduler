<template>
  <div class="bg-white h-full">
    <div class="isolate px-6 pt-14 lg:px-8 min-h-full flex items-center">
      <div class="mx-auto max-w-2xl py-32">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">影展排程網站</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹網站介紹
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/login">
              <Button
                label="馬上開始"
                class="px-3.5 py-2.5 font-semibold hover:bg-emerald-400 hover:border-inherit"
              />
            </RouterLink>
            <RouterLink to="/playing">
              <span class="text-sm font-semibold leading-6 text-gray-900"
                >看片單 <span aria-hidden="true">→</span></span
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
