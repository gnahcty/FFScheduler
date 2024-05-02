<script setup>
import { RouterView } from 'vue-router'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
</script>

<template>
  <RouterView />
  <Toast />
  <ConfirmDialog></ConfirmDialog>
</template>
