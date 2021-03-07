import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../components/RootComponent'),
        children: [
            {
                path: '',
                component: () => import('../components/pages/HomePageComponent')
            }
        ]
    }
]

const Router = new VueRouter({
    mode: 'history',
    routes
})

export default Router
