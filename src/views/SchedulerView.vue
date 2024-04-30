<template>
  <div class="w-full py-20">
    <!-- title -->
    <div class="flex flex-1 items-stretch justify-center lg:justify-start lg:pl-10">
      <div class="text-3xl font-bold">影展場次</div>
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
