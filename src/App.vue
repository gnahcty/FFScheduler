<script setup>
import { RouterView } from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
</script>

<template>
  <RouterView class="noto-sans no-scrollbar" />
  <Toast />
  <ConfirmDialog></ConfirmDialog>
</template>
