import Vue from 'vue'
import VueRouter from 'vue-router'
import User from "../components/user"
import Main from "../components/main"
import Content from "../components/content"

Vue.use(VueRouter)

new VueRouter({
    routes: [
        {
            path: './user',
            name: 'user',
            component: User
        },
        {
            path: './man',
            name: 'man',
            component: Main
        },
        {
            path: './content',
            name: 'content',
            component: Content
        }
    ]
})