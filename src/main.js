import '@/assets/style.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import { register } from 'swiper/element/bundle';// import function to register Swiper custom elements
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'

const app = createApp(App)

register();// register Swiper custom elements
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara //apply preset
})

app.mount('#app')
