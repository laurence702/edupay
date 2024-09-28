// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: { variant: 'outlined' },
    VTextField: { variant: 'solo' }
  },
  theme: {
    defaultTheme: 'dark'
  }
})

app.use(vuetify).mount('#app')
