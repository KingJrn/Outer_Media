// Import the createApp function from the Vue library
import { createApp } from 'vue'

// Import the createPinia function from the Pinia library
import { createPinia } from 'pinia'

// Import the App component and the router
import App from './App.vue'
import router from './router'

// Import the Bootstrap CSS and JS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import custom SCSS styles
import './assets/scss/main.scss'

// Create a new Vue app instance
const app = createApp(App)

// Add the Pinia plugin to the Vue app
app.use(createPinia())

// Add the router to the Vue app
app.use(router)

// Mount the Vue app to the DOM
app.mount('#app')