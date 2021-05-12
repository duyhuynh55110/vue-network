import { createWebHistory, createRouter } from "vue-router";

import Home from "@containers/Auth/Home/index.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ]
})