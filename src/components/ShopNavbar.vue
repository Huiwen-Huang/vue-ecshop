<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 px-lg-4">
    <!-- fixed-top opacity-75 -->
    <div class="container-fluid d-flex flex-nowrap">
        <router-link class="navbar-brand fs-3 fw-bold text-warning mx-3" to="/">Hokii Poke</router-link>
        <!-- navbar -->
        <div class="container-fluid d-flex justify-content-end">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" @click.prevent="$refs.offcanvasNavbar.showCanvas()">
              <span class="navbar-toggler-icon fs-6 float-end"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item mx-2 fw-bold">
                      <router-link class="nav-link" to="/">首頁</router-link>
                  </li>
                  <li class="nav-item mx-2 fw-bold">
                    <router-link class="nav-link" to="/about">關於 Hokii</router-link>
                  </li>
                  <li class="nav-item mx-2 fw-bold">
                    <router-link class="nav-link" to="/products">全店商品</router-link>
                  </li>
                </ul>
                <!-- cartItem -->
          </div>
          <div class="text-end ms-2">
            <!-- 直接進到購物車 -->
            <!-- <router-link class="text-warning py-2 position-relative" to="/cart">
              <i class="bi bi-cart4 fs-3"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ carts.length }}
              </span>
            </router-link> -->
            <!-- 開啟購物車側欄 -->
            <a href="" class="text-warning py-2 position-relative" @click.prevent="$refs.cartCanvas.showCanvas()" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="offcanvasRight">
              <i class="bi bi-cart4 fs-3"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ carts.length }}
              </span>
            </a>
          </div>
        </div>
    </div>
</nav>
<div class="container-fluid">
    <ToastList></ToastList>
    <CartCanvas ref="cartCanvas"></CartCanvas>
    <NavCanvas ref="offcanvasNavbar"></NavCanvas>
    <router-view></router-view>
</div>
</template>

<script>
// import Dropdown from 'bootstrap/js/dist/dropdown'
import emitter from '@/methods/emitter'
import ToastList from '@/components/ToastList.vue'
import cartStore from '@/stores/cartStore'
import CartCanvas from './CartCanvas.vue'
import { mapState } from 'pinia'
import NavCanvas from './NavCanvas.vue'

export default {
  components: {
    ToastList,
    CartCanvas,
    NavCanvas
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

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
