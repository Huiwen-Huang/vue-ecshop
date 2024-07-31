<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
      <!-- 進度條 -->
      <div class="row mb-4">
        <div class="col-md-8 mx-auto">
          <div class="position-relative m-4">
            <div class="progress" style="height: 1px;">
              <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">1</button>
            <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">2</button>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
          </div>
        </div>
      </div>
      <!-- 購物車無商品時 -->
      <div class="row" v-if="this.total === 0">
        <div class="col text-center">
          <p class="text-secondary mt-4 fs-5">購物車尚內無商品，
            <router-link to="/products" class="link-secondary">點我</router-link> 繼續選購！</p>
          <img src="../assets/images/cartEmpty.jpg" alt="cartEmpty" style="width:500px">
        </div>
      </div>
      <!-- 購物車有商品時 -->
      <div class="row mx-0" v-else>
        <!-- 購物車商品資訊 -->
        <h6 class="bg-light p-3">購物車</h6>
        <div class="mb-4 border rounded p-3">
          <div>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th style="width: 10%"></th>
                  <th class="ps-5" style="width: 30%">商品資料</th>
                  <th style="width: 15%">單價</th>
                  <th style="width: 8%">數量</th>
                  <th class="text-end" style="width: 25%">小計</th>
                  <th class="text-end" style="width: 20%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in carts" :key="item.product.id">
                  <td>
                    <div style="height: 80px; background-size: cover; background-position: center"
                      :style="{backgroundImage: `url(${item.product.imageUrl})`}"></div>
                  </td>
                  <td class="ps-5" >
                    {{ item.product.title }}
                  </td>
                  <td>
                    <div>NT$ {{ item.product.price }}</div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input type="number" class="form-control"
                              :disabled="cartLoadingItem === item.id"
                              v-model.number="item.qty" min="1"
                              @change="updateCart(item)">
                      <div class="input-group-text">/ {{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <div>NT$ {{ $filters.currency(item.total) }}</div>
                  </td>
                  <!-- 移除商品 -->
                  <td class="text-end">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="openDelModal(item)">
                      <i class="bi bi-x"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="5" class="text-end">合計</td>
                <td class="text-end">NT$ {{ $filters.currency(this.total) }}</td>
              </tr>
              <tr v-if="this.total !== this.finalTotal">
                <td colspan="5" class="text-end text-warning fw-bold">套用優惠折扣</td>
                <td class="text-end text-warning fw-bold">- {{ this.carts[0]?.coupon?.percent }}%</td>
              </tr>
              <tr>
                <td colspan="5" class="text-end fw-bold">結帳總金額</td>
                <td class="text-end fw-bold">NT$ {{ $filters.currency(this.finalTotal) }}</td>
              </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control me-3" placeholder="請輸入優惠碼" v-model="coupon_code">
              <div class="input-group-append">
                <button class="btn btn-outline-warning" type="button" @click="addCouponCode">
                  套用優惠
                </button>
              </div>
            </div>
            <div class="text-end mt-4 mx-2">
              <!-- <button class="btn btn-outline-secondary" type="button" @click="removeAll">
                  移除購物車
              </button> -->
              <router-link to="/products" class="link-secondary">繼續購物</router-link>
            </div>
          </div>
        </div>
        <!-- 前往結帳 -->
        <button type="button" class="btn btn-outline-warning w-100 mb-3" @click.prevent="goToCheckout">
          前往結帳
        </button>
        <!-- 看更多商品 -->
      </div>
    </div>
    <CartDelModal ref="delModal" :item="cart" @del-item="removeCartItem"></CartDelModal>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import CartDelModal from '@/components/CartDelModal.vue'
import statusStore from '@/stores/statusStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

// const status = statusStore()

export default {
  data () {
    return {
      // carts: [], // 購物車所有商品
      cart: {}, // 單一列商品
      // total: '',
      // finalTotal: '',
      // isLoading: false,
      // status: {
      //   loadingItem: ''
      // },
      coupon_code: ''
    }
  },
  components: {
    CartDelModal,
    ShopNavbar
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'finalTotal']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem'])
  },
  inject: ['emitter'],
  methods: {
    // 取購物車列表
    ...mapActions(cartStore, ['getCart', 'updateCart']),
    // ...mapActions(statusStore, ['pushMsg']),
    // getCart () {
    //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
    //   this.isLoading = true
    //   this.$http.get(api)
    //     .then((res) => {
    //       this.isLoading = false
    //       console.log('getCart', res)
    //       if (res.data.success) {
    //         this.carts = res.data.data.carts
    //         this.total = res.data.data.total
    //         this.finalTotal = res.data.data.final_total
    //       }
    //     })
    // },
    // 開啟刪除彈窗
    openDelModal (item) {
      this.cart = { ...item }
      const deleteComponent = this.$refs.delModal
      deleteComponent.showModal()
      console.log('openDelModal', this.cart)
    },
    // 移除單一商品
    removeCartItem () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.cart.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then(res => {
          const deleteComponent = this.$refs.delModal
          deleteComponent.hideModal()
          this.isLoading = false
          this.$httpMsgState(res, '商品移除')
          // status.pushMsg({ title: '商品移除成功' })
          console.log('removeCartItem', res)
          this.getCart()
        })
    },
    // 購物車全數移除
    removeAll () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.isLoading = true
      this.$http.delete(api)
        .then(res => {
          this.isLoading = false
          this.$httpMsgState(res, '商品移除')
          // status.pushMsg({ title: '商品全數移除' })
          console.log('removeAll', res)
          this.getCart()
        })
    },
    // 更新購物車價格
    // updateCart (item) {
    //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
    //   const cart = {
    //     product_id: item.product_id,
    //     qty: item.qty
    //   }
    //   this.isLoading = true
    //   this.status.loadingItem = item.id
    //   this.$http.put(api, { data: cart })
    //     .then(res => {
    //       console.log('updateCart', res)
    //       this.isLoading = false
    //       this.status.loadingItem = ''
    //       this.getCart()
    //     })
    // },
    // 套用優惠活動
    addCouponCode () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      // 需要帶入參數
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(api, { data: coupon })
        .then(res => {
          this.isLoading = false
          // 套用後清空欄位資料
          this.coupon_code = ''
          // 設定訊息回饋
          this.$httpMsgState(res, '優惠套用')
          // status.pushMsg({ title: '優惠套用成功' })
          console.log('addCouponCode', res)
          if (res.data.success) {
            this.getCart()
          }
        })
    },
    goToCheckout () {
      this.$router.push('/checkout')
    }
  },
  created () {
    this.getCart()
  }
}
</script>
