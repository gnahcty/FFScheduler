import '@/assets/style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

app.use(createPinia())
app.use(ConfirmationService) //primevue confirm
app.use(ToastService) //primevue toast
app.use(router)
app.use(Vue3Marquee)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara, //apply preset
  ptOptions: {
    mergeSections: true,
    mergeProps: true
  }
})
app.directive('tooltip', Tooltip)
app.mount('#app')
