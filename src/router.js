import { createRouter, createWebHistory } from 'vue-router'
import useUser from './stores/user'
const routes = [
    {
        path: '/',
        component:  () => import('./components/HelloWorld.vue')        
    },
    {
        path: '/home',
        component:  () => import('./components/TestComponent.vue'),
        meta: { requiresAuth: true }
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
    const user = useUser()
    if (to.meta.requiresAuth && !user.isLoggedIn) return '/login'
})
export default router