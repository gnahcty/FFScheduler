<script setup>
import { computed } from 'vue'
import { addMinutes, format, parseISO } from 'date-fns'
import LikeButton from '@/components/LikeButton.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  session: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const primaryScreening = computed(() => props.session?.screenings?.[0] ?? props.session?.screening ?? null)

const scheduleText = computed(() => {
  if (!primaryScreening.value?.time) return ''

  const startTime = parseISO(primaryScreening.value.time)
  const duration = Number(props.session?.duration) || 0
  const endTime = addMinutes(startTime, duration)
  return `${format(startTime, 'HH:mm')} - ${format(endTime, 'HH:mm')}`
})

const closeDialog = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.modelValue && props.session"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 text-stone-100 backdrop-blur-sm"
      @click.self="closeDialog"
    >
      <div
        class="noise w-full max-w-lg rounded-2xl border border-orange-500/50 bg-stone-900/95 p-6 shadow-2xl"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.3em] text-orange-400">同場放映</p>
            <h2 class="text-xl font-semibold text-stone-50">{{ scheduleText }}</h2>
            <p class="text-sm text-stone-300">{{ props.session.place }}</p>
          </div>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-stone-600 text-stone-300 transition hover:border-orange-400 hover:text-orange-300"
            aria-label="關閉同場放映清單"
            @click="closeDialog"
          >
            <span class="pi pi-times text-sm"></span>
          </button>
        </div>

        <ul class="mt-6 space-y-3">
          <li v-for="screening in props.session.screenings" :key="screening._id">
            <div
              class="flex items-center justify-between gap-3 rounded-xl border border-stone-700/80 bg-stone-800/70 px-4 py-3 transition hover:border-orange-400/70 hover:bg-stone-800"
            >
              <router-link
                :to="`/details/${screening.film._id}`"
                class="min-w-0 flex-1"
                @click="closeDialog"
              >
                <p class="text-base font-medium text-stone-50">{{ screening.film.CName }}</p>
                <p class="mt-1 text-sm text-stone-400">{{ screening.film.EName }}</p>
              </router-link>
              <div class="relative z-10 flex-shrink-0">
                <LikeButton :screeningId="screening._id"></LikeButton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>
