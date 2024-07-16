<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container mt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/shop/products">全部商品</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-8">
        <h2>{{ product.title }}</h2>
        <p>商品描述：Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, suscipit animi aut, consequatur voluptate nam molestiae praesentium maiores error eligendi quisquam at facere et, ducimus non accusantium dolorem dolore provident.</p>
        <div style="height: 800px; background-size: cover; background-position: top"
                  :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
      </div>
      <div class="col-4">
        <p class="fs-6 mb-0"><del>原價 NT${{ product.origin_price }}</del></p>
        <p class="fs-5"><strong>現在只要 NT${{ product.price }}</strong></p>
        <hr>
        <button type="button" class="btn btn-outline-warning"
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
  inject: ['emitter'],
  methods: {
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
