<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"><router-link class="link-secondary" to="/products">全部商品</router-link></li>
        <li class="breadcrumb-item" aria-current="page">{{ product.category }}</li>
        <li class="breadcrumb-item active fw-bold" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <!-- product details -->
    <div class="row justify-content-center">
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
    <!-- more products -->
    <!-- <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true" alt="blogImg01" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true" alt="blogImg02" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true" alt="blogImg03" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true" alt="blogImg04" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true" alt="blogImg05" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image6.png?raw=true" alt="blogImg06" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">React vs. Vue，哪種前端框架比較好用？從三大面向談起</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image7.png?raw=true" alt="blogImg07" class="articleImg">
          <div class="articleInfo">
            <h3 class="articleTitle">Vision Pro 來了！UIUX 設計師的未來在哪裡？</h3>
            <div class="articleContent">
              <p>UI/UX 新知</p>
              <p>2024/02/10</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
  </div>
  <ShopFooter></ShopFooter>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'
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
  components: {
    ShopNavbar,
    ShopFooter
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
    this.getCart()
  }
}
</script>
