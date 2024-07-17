<template>
  <ShopNavbar></ShopNavbar>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container mt-4 pt-4">
    <nav aria-label="breadcrumb mb-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link class="link-secondary" to="/products">全部商品</router-link></li>
        <li class="breadcrumb-item" aria-current="page">{{ product.category }}</li>
        <li class="breadcrumb-item active fw-bold" aria-current="page">{{ product.title }}</li>
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
import ShopNavbar from '@/components/ShopNavbar.vue'

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
    ShopNavbar
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
