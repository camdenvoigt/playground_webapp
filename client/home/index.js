import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './app.vue'

const app = createApp(App);

app.mount('#app');