import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
  })
const pinia = createPinia()

const app = createApp(App)


app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
