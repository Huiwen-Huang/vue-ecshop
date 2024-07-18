import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ShopHomePage.vue')
  },
  {
    path: '/products',
    component: () => import('../views/ShopProductsList.vue')
  },
  {
    path: '/product/:productId',
    component: () => import('../views/ShopPerProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/ShopCartList.vue')
  },
  {
    path: '/checkout/:orderId',
    component: () => import('../views/ShopCheckout.vue')
  },
  {
    path: '/orders',
    component: () => import('../views/ShopOrders.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // `to` 和 `from` 都是路由对象
    if (to.fullPath.match('newPage')) {
      return {
        top: 0
      }
    }
  }
})

export default router
