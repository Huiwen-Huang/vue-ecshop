<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <div class="row mt-4">
      <!-- 產品列表 -->
      <!-- <div class="col">
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="text-center">圖片</th>
              <th class="text-center" style="width:30%">商品名稱</th>
              <th class="text-center" style="width:20%">價格</th>
              <th style="width:30%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td class="text-center" style="width:200px">
                <div style="height: 200px; background-size: cover; background-position: top"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </td>
              <td class="text-center">{{ item.title }}</td>
              <td class="text-center">{{ item.price }}</td>
              <td class="text-center">
                <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">查看更多</button>
                <button class="btn btn-outline-danger"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)">
                  <div v-if="this.status.loadingItem === item.id" class="spinner-border spinner-border-sm text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <i class="bi bi-cart4"></i> 加入購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <!-- 產品卡片 -->
      <div class="col d-flex flex-wrap justify-content-center">
        <template v-for="item in products" :key="item.id">
          <div class="card mx-4 mb-4 shadow rounded" style="width: 18rem;">
          <div style="height: 200px; background-size: cover; background-position: top"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">NT$ {{ item.price }}</p>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-outline-secondary me-2" @click="getProduct(item.id)">查看更多</button>
              <button class="btn btn-outline-warning"
                      :disabled="this.status.loadingItem === item.id"
                      @click="addCart(item.id)">
                <div v-if="this.status.loadingItem === item.id" class="spinner-border spinner-border-sm" role="status">
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
import PaginationCard from '@/components/PaginationCard.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項 ID
      }
    }
  },
  components: {
    PaginationCard
  },
  inject: ['emitter'],
  methods: {
    // 取得產品列表
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
          console.log(res.data)
        })
    },
    // 進入單一商品介紹頁
    getProduct (id) {
      this.$router.push(`/shop/product/${id}`)
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      // 需要帶入參數
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: cart }) // 帶入參數的方式要留意
        .then((res) => {
          this.status.loadingItem = ''
          this.$httpMsgState(res, '加入購物車')
          console.log(res)
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
