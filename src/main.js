import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import bus from '@/utils/bus'

const app = createApp(App)
app.config.globalProperties.$bus = bus
app.use(store)
app.use(router)
app.mount('#app')
