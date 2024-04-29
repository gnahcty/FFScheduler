<template>
  <div class="flex items-end justify-center gap-5 font-bold">
    <Button
      @click="goToPreviousWeek"
      class="rounded bg-blue-500 px-4 py-2 text-white"
      icon="pi pi-angle-left"
    />
    <div class="text-lg">{{ formattedMonthYear }}</div>
    <Button
      @click="goToNextWeek"
      class="rounded bg-blue-500 px-4 py-2 text-white"
      icon="pi pi-angle-right"
    />
  </div>
  <div
    class="mx-auto flex justify-start overflow-x-auto rounded-lg bg-white px-2 py-4 shadow-md md:mx-12 md:justify-center"
  >
    <div
      v-for="day in weekDays"
      :key="day.dateString"
      class="hover-light-shadow group mx-1 flex w-16 cursor-pointer justify-center rounded-lg transition-all duration-300 hover:bg-purple-100 hover:shadow-lg"
    >
      <div
        v-if="isToday(day.dateString)"
        class="light-shadow group relative mx-1 flex w-16 cursor-pointer content-center justify-center rounded-lg bg-purple-300 shadow-lg"
      >
        <span class="absolute -right-1 -top-1 flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-0 group-hover:opacity-75"
          ></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
        </span>
        <div class="flex items-center px-4 py-4">
          <div class="text-center">
            <p class="text-sm text-purple-900">{{ day.day }}</p>
            <p class="mt-3 font-bold text-purple-900">{{ day.date }}</p>
          </div>
        </div>
      </div>

      <div v-else class="flex items-center px-4 py-4">
        <div class="text-center">
          <p
            class="text-sm text-gray-900 transition-all duration-300 group-hover:text-purple-900"
          >
            {{ day.day }}
          </p>
          <p
            class="mt-3 text-gray-900 transition-all duration-300 group-hover:font-bold group-hover:text-purple-900"
          >
            {{ day.date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { startOfWeek, endOfWeek, format, eachDayOfInterval } from "date-fns";

const currentDate = ref(new Date());

const startOfCurrentWeek = computed(() =>
  startOfWeek(currentDate.value, { weekStartsOn: 1 })
);
const endOfCurrentWeek = computed(() =>
  endOfWeek(currentDate.value, { weekStartsOn: 1 })
);

const formattedMonthYear = computed(() => format(currentDate.value, "MMMM yyyy"));

const isToday = (dateString) => {
  return dateString === format(new Date(), "yyyy-MM-dd");
};

const weekDays = computed(() => {
  return eachDayOfInterval({
    start: startOfCurrentWeek.value,
    end: endOfCurrentWeek.value,
  }).map((day) => ({
    day: format(day, "EEE"),
    date: format(day, "dd"),
    dateString: format(day, "yyyy-MM-dd"),
  }));
});

const goToNextWeek = () => {
  console.log(currentDate.value);
  // currentDate.value = addWeeks(currentDate.value, 1);
};

const goToPreviousWeek = () => {
  console.log(currentDate.value);
  // currentDate.value = addWeeks(currentDate.value, -1);
};
</script>
