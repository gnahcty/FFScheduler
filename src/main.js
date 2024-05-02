import '@/assets/style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { register } from 'swiper/element/bundle'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

register() // register Swiper custom elements
app.use(createPinia())
app.use(ConfirmationService) //primevue confirm
app.use(ToastService) //primevue toast
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara, //apply preset
  ptOptions: {
    mergeSections: true,
    mergeProps: true
  }
})

app.mount('#app')
