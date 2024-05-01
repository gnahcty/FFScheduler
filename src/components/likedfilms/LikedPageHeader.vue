<template>
  <div class="px-10">
    <div class="mx-auto max-w-7xl px-2 sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <!-- button for mobile -->
        <div class="absolute inset-y-0 left-5 flex items-center sm:hidden">
          <span class="pi pi-print text-3xl text-gray-600 hover:text-emerald-500"></span>
        </div>
        <!-- button for mobile -->

        <!-- Title -->
        <div class="flex-1 text-center text-3xl sm:text-left">我的片單</div>
        <!-- Title -->

        <div class="hidden sm:flex sm:items-center sm:justify-around">
          <!-- Searchbar for PC and tab -->
          <div v-if="props.showPCview" class="relative text-gray-600">
            <input
              class="h-10 w-full rounded-lg border-2 border-gray-300 bg-white pl-5 pr-16 text-sm focus:outline-emerald-500"
              type="search"
              name="search"
              placeholder="搜尋片單"
            />
            <button type="submit" class="absolute right-0 top-0 mr-4 mt-2">
              <span class="pi pi-search"></span>
            </button>
          </div>
          <!-- Searchbar for PC and tab -->

          <!-- Button for PC and tab -->
          <div class="relative ml-5 mt-1">
            <router-link to="/export">
              <span class="pi pi-print text-3xl text-gray-600 hover:text-emerald-500"></span>
            </router-link>
          </div>
          <!-- Button for PC and tab -->
        </div>
      </div>
    </div>

    <!-- Search Bar for Mobile-->
    <div class="mx-auto pt-2" :class="props.showPCview ? 'sm:hidden' : ''">
      <div class="relative px-5 pt-2 text-gray-600">
        <input
          class="h-12 w-full rounded-lg border-0 bg-white px-5 pr-16 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-emerald-500"
          type="search"
          name="search"
          placeholder="搜尋片單"
        />
        <button type="submit" class="absolute right-0 top-0 mr-9 mt-5">
          <span class="pi pi-search"></span>
        </button>
      </div>
    </div>
    <!-- Search Bar for Mobile-->
  </div>
</template>

<script setup>
const props = defineProps({
  showPCview: {
    type: Boolean,
    default: true
  }
})
</script>
