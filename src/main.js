import {createApp} from 'vue';
import App from './App.vue'
import ProductListPage from './components/ProductListPage.vue';
import {createRouter ,createWebHashHistory} from 'vue-router';
const routes = [
    { path: '/', component: ProductListPage },
  ]
  

  const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = createApp(App)
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  app.mount('#app')



