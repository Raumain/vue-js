import { createApp } from 'vue'
import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Movies',
        component: () => import(/* webpackChunkName: "about" */ '../views/MovieHome.vue')
    },
    {
        path: '/movie/:id',
        name: 'Details',
        component: () => import(/* webpackChunkName: "about" */ '../views/MovieDetails.vue'),
        props: true
    },
    {
        path: '/movie/edit/:id',
        name: 'EditMovie',
        component: () => import(/* webpackChunkName: "about" */ '../views/MovieEdit.vue'),
    },
    {
        path: "/add",
        name: "Add",
        component: () => import(/* webpackChunkName: "about" */ '../views/MovieAdd.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
createApp(App).use(router).mount('#app')

export default router
