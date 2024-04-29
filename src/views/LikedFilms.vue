<template>
  <LikedPageHeader></LikedPageHeader>
  <div class="pt-4">
    <div v-for="n in 10" :key="n">
      <LikedList></LikedList>
    </div>
  </div>
</template>

<script setup></script>
