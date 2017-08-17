import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import main from '../components/main'
import search from '../components/search'
import result from '../components/result'
import singer from '../components/singer'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/main',
            component: main,
        },
        {
            path: '/main/search',
            name: 'search',
            component: search
        },
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/result',
            component: result
        },
        {
            path: '/main/singer',
            component: singer
        }
    ]
})