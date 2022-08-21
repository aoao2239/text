import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Message from 'Ms'

// 导入mock
require('./mock')
createApp(App).use(store).use(router).mount('#app')
