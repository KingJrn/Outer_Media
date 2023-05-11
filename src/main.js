// Import the createApp function from the Vue library
import { createApp } from 'vue'

// Import the createPinia function from the Pinia library
import { createPinia } from 'pinia'

// Import the App component and the router
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

// Import the Bootstrap CSS and JS files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Import custom SCSS styles
import './assets/scss/main.scss'

// Create a new Vue app instance
const app = createApp(App)

// Add the Pinia plugin to the Vue app
app.use(createPinia())

// Add the router to the Vue app
app.use(router)

//Add the Vuetify to the vue app
app.use(vuetify)
// Mount the Vue app to the DOM
app.mount('#app')
