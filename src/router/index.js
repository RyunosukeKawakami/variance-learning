import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/TabActivateState'

import Home from '@/components/Home.vue'
import Submit from '@/components/Submit.vue'
import Study from '@/components/Study.vue'
import Answer from '@/components/Answer.vue'
import Detail from '@/components/Detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
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
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})
router.beforeEach((to, from, next) => { // eslint-disable-line
    switch (to.path) {
        case '/': store.dispatch('updateActivateId', 1); break;
        case '/study': store.dispatch('updateActivateId', 2); break;
        case '/submit': store.dispatch('updateActivateId', 3); break;
        case '/detail': store.dispatch('updateActivateId', 4); break;
    }
    next();
})

export default router;