import { createWebHistory, createRouter } from "vue-router";

import Home from "@views/Auth/Home/index.vue"

import Profile from "@views/Auth/Profile/index.vue"
import ProfileIndex from "@views/Auth/Profile/containers/Index/index.vue"
import ProfileFriendsList from "@views/Auth/Profile/containers/FriendsList/index.vue"

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
                    path: "friends-list",
                    name: "ProfileFriendsListContainer",
                    component: ProfileFriendsList,
                },
                {
                    path: "",
                    name: "ProfileIndexContainer",
                    component: ProfileIndex,
                },
            ]
        },
    ]
})