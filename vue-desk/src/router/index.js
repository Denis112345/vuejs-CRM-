import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import { required } from 'vuelidate/lib/validators'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout:'main', auth: true},
      component: () => import('../views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/detail-record',
      name: 'detail-record',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/detail-record.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/history.vue')
    },
    {
      path: '/planing',
      name: 'planing',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/planing.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/record.vue')
    },
    {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/register.vue')
    },

  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiredAuth = to.matched.some(record => record.meta)

  if(requiredAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
