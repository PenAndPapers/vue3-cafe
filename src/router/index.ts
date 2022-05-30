import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', 
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../pages/Home/index.vue')
    },
    {
      path: '/sign-in', 
      name: 'SignIn',
      component: () => import(/* webpackChunkName: "SignIn" */ '../pages/SignIn.vue')
    },
    {
      path: '/sign-up', 
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "SignUp" */ '../pages/SignUp.vue')
    },
    {
      path: '/menu', 
      name: 'Menu',
      component: () => import(/* webpackChunkName: "Menu" */ '../pages/Menu/index.vue')
    },
    {
      path: '/deals', 
      name: 'Deals',
      component: () => import(/* webpackChunkName: "Deals" */ '../pages/Deals/index.vue')
    },
    {
      path: '/rewards', 
      name: 'Rewards',
      component: () => import(/* webpackChunkName: "Rewards" */ '../pages/Rewards/index.vue')
    },
    {
      path: '/news', 
      name: 'News',
      component: () => import(/* webpackChunkName: "News" */ '../pages/News/index.vue')
    },
    {
      path: '/cart', 
      name: 'Cart',
      component: () => import(/* webpackChunkName: "Cart" */ '../pages/Cart/index.vue')
    },
    {
      path: '/:catchAll(.*)', 
      name: 'ErrorPage',
      component: () => import(/* webpackChunkName: "ErrorPage" */ '../pages/Error/index.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router