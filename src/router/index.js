import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/juridico',
    name: 'Juridico',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Juridico.vue')
  },
  {
    path: '/contable',
    name: 'Contable',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contable.vue')
  },
  {
    path: '/administrativo',
    name: 'Administrativo',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
