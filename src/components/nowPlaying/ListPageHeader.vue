<template>
  <div class="bg-white px-14 pt-14 lg:pt-20">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- switch for Mobile-->
        <div class="absolute inset-y-0 left-5 flex items-center sm:hidden">
          <span
            @click="switchView()"
            class="pi text-3xl text-gray-600 hover:text-emerald-500"
            :class="viewState === 'carousel' ? 'pi-bars' : 'pi-th-large'"
          ></span>
        </div>
        <!-- switch for Mobile-->

        <!-- Title -->
        <div class="flex flex-1 items-stretch justify-center sm:justify-start">
          <div class="text-3xl">影展片單</div>
        </div>
        <!-- Title -->

        <div class="static hidden items-center justify-around sm:flex">
          <!-- Searchbar for PC and Tab -->
          <div class="relative text-gray-600">
            <input
              class="h-10 appearance-none rounded-lg border-2 border-gray-300 bg-white pl-5 pr-16 text-sm focus-within:appearance-none focus:outline-emerald-500"
              type="search"
              name="search"
              placeholder="搜尋片單"
            />
            <button type="submit" class="absolute right-0 top-0 mr-4 mt-2">
              <span class="pi pi-search"></span>
            </button>
          </div>
          <!-- Searchbar for PC and Tab -->

          <!-- switch for PC and Tab -->
          <div class="relative ml-5 mt-1">
            <span
              v-if="viewState === 'list'"
              @click="switchView()"
              class="pi pi-th-large text-3xl text-gray-600 hover:text-emerald-500"
            ></span>
            <span
              v-if="viewState === 'carousel'"
              @click="switchView()"
              class="pi pi-bars text-3xl text-gray-600 hover:text-emerald-500"
            ></span>
          </div>
          <!-- switch for PC and Tab -->
        </div>
      </div>
    </div>

    <!-- search bar for mobile -->
    <div class="mx-auto pt-2 sm:hidden">
      <div class="relative px-5 pt-2 text-gray-600">
        <input
          class="h-12 w-full appearance-none rounded-lg border-0 bg-white px-5 pr-16 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus-within:appearance-none focus:outline-emerald-500"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mr-9 mt-5">
          <span class="pi pi-search"></span>
        </button>
      </div>
    </div>
    <!-- search bar for mobile -->
  </div>
</template>

<script setup>
const viewState = defineModel()
const switchView = () => {
  viewState.value = viewState.value === 'carousel' ? 'list' : 'carousel'
}
</script>
