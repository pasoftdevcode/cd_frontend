import Vue from 'vue'
import Router from 'vue-router'
// components
import home from './views/home.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        children: [
            // Login and Register
            {
                path: '/login',
                name: 'login',
                component: () => import('./views/login.vue')
            },
            //-------------
            {
                path: '/table',
                name: 'table',
                component: () => import('./views/table.vue'),
            }
        ]
    }, {
        path: '/*',
        component: home
    }, ]
})