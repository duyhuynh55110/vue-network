import { createWebHistory, createRouter } from "vue-router";

import Home from "@views/Auth/Home/index.vue"

import Profile from "@views/Auth/Profile/index.vue"
import ProfileIndex from "@views/Auth/Profile/containers/Index/index.vue"
import ProfileImages from "@views/Auth/Profile/containers/Images/index.vue"
import ProfileEvents from "@views/Auth/Profile/containers/Events/index.vue"

import Friends from "@views/Auth/Friends/index.vue"
import FriendsIndex from "@views/Auth/Friends/containers/Index/index.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/profile',
            component: Profile,
            children: [
                {
                    path: "events",
                    name: "ProfileEventsContainer",
                    component: ProfileEvents,
                },
                {
                    path: "images",
                    name: "ProfileImagesContainer",
                    component: ProfileImages,
                },
                {
                    path: "",
                    name: "ProfileIndexContainer",
                    component: ProfileIndex,
                },
            ]
        },
        {
            path: '/friends',
            component: Friends,
            children: [
                {
                    path: "",
                    name: "FriendsIndexContainer",
                    component: FriendsIndex,
                },
            ]
        },
    ]
})