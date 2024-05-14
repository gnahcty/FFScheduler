// 影展場次-月曆元件
<template>
  <div class="flex">
    <Calendar v-model="date" inline>
      <template #date="slotProps">
        <strong
          v-if="
            slotProps.date.month * 1 + 1 >= dayRange.startingMonth &&
            slotProps.date.month * 1 + 1 <= dayRange.endingMonth &&
            slotProps.date.day >= dayRange.startingDate &&
            slotProps.date.day <= dayRange.endingDate
          "
          class="dark:decoration-main-yellow dark:text-main-yellow text-primary-500 underline decoration-primary-500 decoration-2 underline-offset-4"
          @click="console.log(slotProps.date)"
          >{{ slotProps.date.day }}</strong
        >
        <template v-else>
          <span class="dark:text-main-orange">
            {{ slotProps.date.day }}
          </span>
        </template>
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const date = ref()
const dayRange = reactive({
  startingMonth: '4',
  endingMonth: '4',
  startingDate: '12',
  endingDate: '21'
})
</script>
