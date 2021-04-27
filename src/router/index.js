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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    props: true,
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "product" */ '../views/ShoppingCart.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "product" */ '../views/Success.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
