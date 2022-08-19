import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Responsive
import '../src/assets/css/responsive/blogsdetail_res.css'
import '../src/assets/css/responsive/responsive.css'
import '../src/assets/css/responsive/home_res.css'
import '../src/assets/css/responsive/portfolio_res.css'
//CSS
import '../src/assets/css/style.css'

createApp(App).use(router).mount('#app')
