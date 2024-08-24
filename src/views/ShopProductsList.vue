<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ellipsis-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </LoadingOverlay>
  <!-- banner -->
  <div class="container-fuild position-relative mb-4 animate__animated animate__fadeInUp">
    <img src="../assets/images/banner-3.jpg" class="img-fuild opacity-50" style="max-width: 100%; height: auto;" alt="">
    <h1 class="text-center text-light fw-bold position-absolute translate-middle top-50 start-50">Eat Healthy, Eat Fresh</h1>
  </div>
  <div class="container">
    <div class="row justify-content-center mt-4" data-aos="fade-up" data-aos-delay="200">
      <!-- 分類選單 -->
      <div class="col-md-9 col-10 mb-4">
        <div class="row justify-content-center">
          <div class="col-md-2 col-6">
            <button type="button"
            class="btn btn-outline-warning fw-bold text-center mb-md-4 mb-2 w-100"
            :class="{ 'active': filterCategory === '' }"
            @click.prevent="filterCategory = ''">全部商品
            </button>
          </div>
          <div v-for="category in categories" :key="category" class="col-md-2 col-6">
            <button type="button"
            class="btn btn-outline-warning text-center mb-md-4 mb-2 w-100"
            :class="{ 'active': filterCategory === category }"
            @click.prevent="filterCategory = category">{{ category }}
            <!-- <span class="badge bg-light rounded-pill ms-5">{{ sortProducts.length }}</span> -->
            </button>
          </div>
        </div>
      </div>
      <!-- 產品卡片 -->
      <div class="col-md-9 col-sm-12">
        <div class="row justify-content-center">
          <div>{{ filterCategories.category }}</div>
          <div v-for="item in filterCategories" :key="item.id" class="card mx-md-3 mb-4 shadow rounded p-0" style="width: 18rem;">
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
    CartCanvas
  },
  inject: ['emitter'],
  computed: {
    ...mapState(productStore, ['products', 'categories']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
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
      this.$router.push(`/shop/product/${id}`)
    },
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
  }
}
</script>
