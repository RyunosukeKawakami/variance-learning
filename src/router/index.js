import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Submit from '@/components/Submit.vue'
import Study from '@/components/Study.vue'
import Answer from '@/components/Answer.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/submit',
            name: 'submit',
            component: Submit
        },
        {
            path: '/study',
            name: 'study',
            component: Study
        },
        {
            path: '/answer',
            name: 'answer',
            component: Answer
        }
    ]
})