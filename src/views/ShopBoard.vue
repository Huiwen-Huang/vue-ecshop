<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 py-3">
    <div class="container-fluid">
        <router-link class="navbar-brand fs-2 fw-bold text-warning mx-3" to="/shop/products">Hokii Poke</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2 fw-bold">
                    <router-link class="nav-link" to="/shop/home">首頁</router-link>
                </li>
                <li class="nav-item mx-2 fw-bold">
                  <router-link class="nav-link" to="/shop/products">全店商品</router-link>
                </li>
                <li class="nav-item mx-2 fw-bold">
                  <router-link class="nav-link" to="/shop/orders">我的訂單</router-link>
                </li>
            </ul>
        </div>
        <div class="text-end me-4">
          <router-link class="text-warning py-2 position-relative" to="/shop/cart">
            <i class="bi bi-cart4 fs-3"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ carts.length }}
            </span>
          </router-link>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <ToastList></ToastList>
    <router-view></router-view>
</div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastList from '@/components/ToastList.vue'
import cartStore from '@/stores/cartStore'
import { mapState } from 'pinia'

export default {
  components: {
    ToastList
  },
  provide () {
    return {
      emitter
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  }
}
</script>
