<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <div class="row mt-4">
      <!-- 分類選單 -->
      <div class="col-md-2">
        <div class="row">
          <div class="col-lg-12 col-md-3 col-6">
            <button type="button"
            class="btn btn-outline-warning fw-bold text-center mb-4 w-100"
            :class="{ 'active': filterCategory === '' }"
            @click.prevent="filterCategory = ''">全部商品
            </button>
          </div>
          <div v-for="category in categories" :key="category" class="col-lg-12 col-md-3 col-6">
            <button type="button"
            class="btn btn-outline-warning fw-bold text-center mb-4 w-100"
            :class="{ 'active': filterCategory === category }"
            @click.prevent="filterCategory = category">{{ category }}
            <!-- <span class="badge bg-light rounded-pill ms-5">{{ sortProducts.length }}</span> -->
            </button>
          </div>
        </div>
      </div>
      <!-- 產品卡片 -->
      <div class="col-md-9 col-11 ms-auto">
        <div class="row">
          <div>{{ filterCategories.category }}</div>
          <div v-for="item in filterCategories" :key="item.id" class="card mx-3 mb-4 shadow rounded p-0" style="width: 18rem;">
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
        </div>
      </div>
    </div>
    <!-- 頁籤 -->
    <!-- <PaginationCard :pages="pagination" @emit-pages="getProducts"></PaginationCard> -->
    <CartCanvas ref="canvas"></CartCanvas>
  </div>
</template>

<script>
import CartCanvas from '@/components/CartCanvas.vue'
import ShopNavbar from '@/components/ShopNavbar.vue'
// import PaginationCard from '@/components/PaginationCard.vue'
import productStore from '@/stores/productStore'
import statusStore from '@/stores/statusStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
      filterCategory: ''
    }
  },
  components: {
    ShopNavbar,
    CartCanvas
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['products', 'categories']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(cartStore, ['carts']),
    // 篩選分類品項
    filterCategories () {
      let filterProducts = this.products
      if (this.filterCategory) {
        filterProducts = filterProducts.filter((item) => {
          return item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase())
        })
      }
      return filterProducts.sort(
        (a, b) => a.price - b.price
      )
    }
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
    // ...mapActions(productStore, ['addCart'])
    // 加入購物車+顯示側欄
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.cartLoadingItem = id
      // 需要帶入參數
      const cart = {
        product_id: id,
        qty: 1
      }
      this.axios.post(api, { data: cart }) // 帶入參數的方式要留意
        .then((res) => {
          this.cartLoadingItem = ''
          // this.$httpMsgState(res, '加入購物車')
          // status.pushMsg({ title: '商品已加入購物車' })
          console.log('addCart', res)
          if (res.data.success) {
            this.getCart()
            this.$refs.canvas.showCanvas()
          }
        })
    }
  },
  created () {
    this.getAllProducts()
    this.getCart()
  }
}
</script>
