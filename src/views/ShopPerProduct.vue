<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container mt-5">
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4 mt-5">
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"><router-link class="link-secondary" to="/shop/products">全部商品</router-link></li>
        <li class="breadcrumb-item" aria-current="page">{{ product.category }}</li>
        <li class="breadcrumb-item active fw-bold" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <!-- product details -->
    <div class="row justify-content-center mb-5">
      <div class="col-md-5 col-11 mb-4" style="max-width: 500px;">
        <img :src="product.imageUrl" alt="productImg" style="width:100%; height: 100%;">
      </div>
      <div class="col-md-4 col-11">
        <h2 class="mb-4">{{ product.title }}</h2>
        <p class="mb-4">{{ product.description }}</p>
        <hr>
        <br>
        <p class="fs-5 mb-5"><strong>NT${{ product.price }}</strong>
          <span class="fs-6 mb-0 float-end"><del>NT${{ product.origin_price }}</del></span>
        </p>
        <!-- 數量 -->
        <div class="input-group mb-3">
          <input type="number" class="form-control" placeholder="1" v-model.number="product.qty" min="1" aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">份</span>
        </div>
        <button type="button" class="btn btn-outline-warning w-100"
                @click="addCart(product.id)"
                :disabled="this.status.loadingItem === product.id">
          <div class="spinner-border spinner-border-sm text-warning" role="status"
                v-if="this.status.loadingItem === product.id">
            <span class="visually-hidden">Loading...</span>
          </div>
          <i class="bi bi-cart4"></i> 加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore'
import productStore from '@/stores/productStore'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      product: {},
      isLoading: false,
      id: '',
      status: {
        loadingItem: ''
      }
    }
  },
  computed: {
    ...mapState(productStore, ['products'])
  },
  inject: ['emitter'],
  methods: {
    ...mapActions(cartStore, ['getCart']),
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.product = res.data.product
        this.isLoading = false
        console.log(res)
      })
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = ''
          this.$httpMsgState(res, '加入購物車')
          console.log(res.data)
          this.getCart()
        })
    }
  },
  created () {
    // 透過路由去抓商品 ID
    this.id = this.$route.params.productId
    this.getProduct(this.id)
  }
}
</script>
