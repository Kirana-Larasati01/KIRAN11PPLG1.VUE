import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../Pages/LandingPages.vue'
import ProductPage from '../Pages/ProductPages.vue'
import AboutPage from '../Pages/AboutPages.vue'
const router = createRouter({
 history: createWebHistory(),
 routes: [
 { path: '/', component: LandingPage },
 { path: '/product', component: ProductPage },
 { path: '/about', component: AboutPage },
 ],
})
export default router
 