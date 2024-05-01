// 排程
<template>
  <div class="w-full py-16">
    <!-- title -->
    <div
      class="relative mx-20 flex flex-1 items-stretch justify-center px-2 lg:justify-start lg:pt-8"
    >
      <div class="absolute inset-y-0 right-5 flex items-center lg:hidden">
        <span class="pi pi-print text-3xl text-gray-600 hover:text-emerald-500"></span>
      </div>
      <div class="text-3xl">我的排程</div>
    </div>
    <!-- title -->
    <div class="mx-auto hidden lg:flex">
      <ScrollPanel class="h-screen w-2/3">
        <div class="w-full px-10">
          <CalendarForPC></CalendarForPC>
        </div>
      </ScrollPanel>
      <ScrollPanel class="h-screen w-1/3">
        <div class="w-full pr-5">
          <LikedPageHeader :showPCview="false"></LikedPageHeader>
          <div class="pt-4">
            <div v-for="n in 10" :key="n">
              <LikedList></LikedList>
            </div>
          </div>
        </div>
      </ScrollPanel>
    </div>
    <div>
      <div class="lg:hidden">
        <CalendarForMobile></CalendarForMobile>
      </div>
    </div>
  </div>
</template>

<script setup></script>
