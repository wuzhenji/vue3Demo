import { createRouter, createWebHistory } from "vue-router";
import page from '@/views/page1/index'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: page
        }
    ]
})