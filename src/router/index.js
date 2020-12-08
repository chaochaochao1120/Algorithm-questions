import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '/',
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
    {
        path: '/practice4',
        name: 'practice4',
        component: () => import('../views/practice4.vue')
    },
    {
        path: '/practice5',
        name: 'practice5',
        component: () => import('../views/practice5.vue')
    },
    {
        path: '/practice6',
        name: 'practice6',
        component: () => import('../views/practice6.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;