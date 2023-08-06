import { createApp } from 'vue'

import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue';

import './assets/main.css'

const app = createApp(App)

app.component('base-button', BaseButton);

app.mount('#app')
