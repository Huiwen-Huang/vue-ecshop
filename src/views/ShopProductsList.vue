<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <div class="row mt-4">
      <!-- 產品卡片 -->
      <div class="col d-flex flex-wrap justify-content-center">
        <template v-for="item in sortProducts" :key="item.id">
          <div class="card mx-4 mb-4 shadow rounded" style="width: 18rem;">
          <div style="height: 200px; background-size: cover; background-position: top"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">NT$ {{ item.price }}</p>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-outline-secondary me-2" @click="getProduct(item.id)">查看更多</button>
              <button class="btn btn-outline-warning"
                      :disabled="cartLoadingItem === item.id"
                      @click="addCart(item.id)">
                <div v-if="cartLoadingItem === item.id" class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <i class="bi bi-cart4"></i> 加入購物車
              </button>
            </div>
          </div>
          </div>
        </template>
      </div>
    </div>
    <!-- 頁籤 -->
    <PaginationCard :pages="pagination" @emit-pages="getProducts"></PaginationCard>
  </div>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import PaginationCard from '@/components/PaginationCard.vue'
import productStore from '@/stores/productStore'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    PaginationCard,
    ShopNavbar
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['sortProducts', 'pagination']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    // 取得產品列表、加入購物車
    ...mapActions(productStore, ['getProducts']),
    // 取得購物車數量
    ...mapActions(cartStore, ['getCart']),
    // 進入單一商品介紹頁
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    // 加入購物車
    ...mapActions(productStore, ['addCart'])
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
