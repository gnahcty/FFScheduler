<template>
  <div class="container mx-auto hidden lg:flex">
    <ScrollPanel class="h-screen w-2/3 px-10">
      <CalendarForPC></CalendarForPC>
    </ScrollPanel>
    <ScrollPanel class="ml-10 h-screen w-1/3">
      <LikedPageHeader :showPCview="false"></LikedPageHeader>
      <div class="pt-4">
        <div v-for="n in 10" :key="n">
          <LikedList></LikedList>
        </div>
      </div>
    </ScrollPanel>
  </div>
  <div>
    <CalendarForMobile></CalendarForMobile>
  </div>
</template>

<script setup></script>
