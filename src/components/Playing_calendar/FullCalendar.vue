<template>
  <div class="flex">
    <Calendar v-model="date" inline>
      <template #date="slotProps">
        <strong
          v-if="slotProps.date.day >= 12 && slotProps.date.day <= 21"
          class="text-emerald-500"
          >{{ slotProps.date.day }}</strong
        >
        <template v-else>{{ slotProps.date.day }}</template>
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref()
</script>
