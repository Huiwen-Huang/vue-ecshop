<template>
  <ShopNavbar></ShopNavbar>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-2">
        <div class="list-group text-center">
          <!-- <a href="#" class="list-group-item list-group-item-action active">全店商品</a> -->
          <router-link class="list-group-item list-group-item-action active" to="/products">全店商品</router-link>
          <a href="#" class="list-group-item list-group-item-action">經典組合</a>
          <a href="#" class="list-group-item list-group-item-action">自選波奇</a>
          <a class="list-group-item list-group-item-action disabled">清爽沙拉</a>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'

export default {
  components: {
    ShopNavbar
  }
}
</script>
