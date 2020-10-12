import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/practice1',
        name: 'practice1',
        component: () => import('../views/practice1.vue')
    },
    {
        path: '/practice2',
        name: 'practice2',
        component: () => import('../views/practice2.vue')
    },
    {
        path: '/practice3',
        name: 'practice3',
        component: () => import('../views/practice3.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
