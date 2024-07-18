<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 py-3">
    <div class="container-fluid">
        <router-link class="navbar-brand fs-2 fw-bold text-warning mx-3" to="/">Hokii Poke</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
                <!-- dropdown -->
                <!-- <li class="nav-item dropdown" ref="dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >探索商品</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><router-link class="dropdown-item" to="/products">全店商品</router-link></li>
                    <li><router-link class="dropdown-item" to="/category/best-sell">經典組合</router-link></li>
                    <li><router-link class="dropdown-item" to="/category/diy-poke">自選波奇</router-link></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><router-link class="dropdown-item" to="/category/salad">清爽沙拉</router-link></li>
                  </ul>
                </li> -->
                <!-- <li class="nav-item mx-2 fw-bold">
                  <router-link class="nav-link" to="/orders">我的訂單</router-link>
                </li> -->
            </ul>
        </div>
        <div class="text-end me-4">
          <router-link class="text-warning py-2 position-relative" to="/cart">
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
// import Dropdown from 'bootstrap/js/dist/dropdown'
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
  // mounted () {
  //   this.dropdown = new Dropdown(this.$refs.dropdown)
  //   this.dropdown.hide()
  // }
}
</script>
