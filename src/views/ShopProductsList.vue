<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <div class="row mt-4">
      <!-- 分類選單 -->
      <div class="col-md-2 list-group d-flex flex-column">
        <button type="button" class="btn btn-outline-warning text-center mb-4">
          全部商品
          <!-- <span class="badge bg-light rounded-pill ms-5">{{ sortProducts.length }}</span> -->
        </button>
        <template v-for="(item, i) in categories" :key="i">
          <button type="button" class="btn btn-outline-warning text-center mb-4" @click.prevent="filterClassical(item)">{{ item }}
            <!-- <span class="badge bg-warning rounded-pill ms-5">{{ productSet.length }}</span> -->
          </button>
        </template>
        </div>
      <!-- 產品卡片 -->
      <div class="col-md-9 d-flex flex-wrap justify-content-center">
        <template v-for="item in productSet" :key="item.id">
          <div class="card mx-3 mb-4 shadow rounded" style="width: 18rem;">
            <a href="" @click.prevent="getProduct(item.id)">
              <div style="height: 200px; background-size: cover; background-position: top"
                  :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
            </a>
          <div class="card-body">
            <h6 class="card-title mb-4">{{ item.title }}
              <span class="card-text float-end">NT$ {{ item.price }}</span>
            </h6>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-warning w-100"
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
    <PaginationCard :pages="pagination" @emit-pages="getProducts" :class="{ 'd-none': Object.keys(pagination).length === 0}"></PaginationCard>
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
  data () {
    return {
      productSet: []
    }
  },
  components: {
    PaginationCard,
    ShopNavbar
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['products', 'sortProducts', 'pagination', 'categories']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    // 取得產品列表
    ...mapActions(productStore, ['getAllProducts']),
    ...mapActions(productStore, ['getProducts']),
    // 取得購物車數量
    ...mapActions(cartStore, ['getCart']),
    // 進入單一商品介紹頁
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    // 加入購物車
    ...mapActions(productStore, ['addCart']),
    // 篩選分類
    filterClassical (item) {
      const set = this.products.filter((products) => {
        return products.category === item
      })
      this.productSet = set
      this.getAllProducts()
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
