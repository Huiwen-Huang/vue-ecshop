import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsPage.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersList.vue')
      },
      {
        path: 'promotions',
        component: () => import('../views/CouponsList.vue')
      }
    ]
  },
  {
    path: '/shop',
    component: () => import('../views/ShopBoard.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/ShopHomePage.vue')
      },
      {
        path: 'products',
        component: () => import('../views/ShopProductsList.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/ShopSingleProduct.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/ShopCartList.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/ShopCheckout.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/ShopOrders.vue')
      }

    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
