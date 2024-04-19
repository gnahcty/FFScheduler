<template>
  <Fieldset legend="目錄" class="text-xl">
    <div class="h-64 w-full">
      <TieredMenu :model="items" class="w-32 border-0">
        <template #item="{ item, props, hasSubmenu }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-angle-right ml-auto" />
          </a>
        </template>
      </TieredMenu>
    </div>
  </Fieldset>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: '當代奇幻',
    icon: 'pi pi-palette',
    items: [
      {
        label: '血迷宮',
        route: '/details'
      },
      {
        label: '拍血少年',
        route: '/details'
      }
    ]
  }
])
</script>
