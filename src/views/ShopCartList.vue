<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
      <!-- 購物車無商品時 -->
      <div class="row" v-if="this.total === 0">
        <div class="col text-center">
          <p class="text-secondary mt-4 fs-5">購物車尚內無商品，
            <router-link to="/shop/products" class="link-secondary">點我</router-link> 繼續選購！</p>
          <img src="../assets/images/cartEmpty.jpg" alt="cartEmpty" style="width:500px">
        </div>
      </div>
      <!-- 購物車有商品時 -->
      <div class="row" v-else>
        <!-- 購物車商品資訊 -->
        <div class="col-md-12 mb-4">
          <div>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th style="width:10%"></th>
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
                    <div style="height: 80px; background-size: cover; background-position: top"
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
                <td colspan="5" class="text-end">套用優惠代碼</td>
                <td class="text-end">{{ this.carts[0]?.coupon?.code }}</td>
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
            <div class="text-end mt-4">
              <button class="btn btn-outline-secondary" type="button" @click="removeAll">
                  移除購物車
              </button>
            </div>
          </div>
        </div>
        <!-- 購物車訂購資訊 -->
        <form class="col-md-7 mx-auto shadow rounded px-5 mt-4 mb-4">
          <h2 class="mt-5">訂購資訊</h2>
          <hr class="mb-4">
          <div class="mb-3">
            <label for="name" class="form-label">訂購人姓名</label>
            <input type="text" class="form-control" id="name" v-model="form.user.name">
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">訂購人電話</label>
            <input type="text" class="form-control" id="tel" v-model="form.user.tel">
          </div>
          <div class="mb-3">
            <label for="eamil" class="form-label">訂購人信箱</label>
            <input type="email" class="form-control" id="eamil" v-model="form.user.email">
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件地址</label>
            <input type="text" class="form-control" id="address" v-model="form.user.address">
          </div>
          <div class="mb-3">
            <label for="note" class="form-label">訂單備註</label>
            <textarea class="form-control" id="note" rows="3" v-model="form.message"></textarea>
          </div>
          <div class="text-end mt-4 mb-4">
            <button class="btn btn-warning" @click.prevent="addOrder">送出訂單</button>
          </div>
        </form>
      </div>
    </div>
    <CartDelModal ref="delModal" :item="cart" @del-item="removeCartItem"></CartDelModal>
</template>

<script>
import CartDelModal from '@/components/CartDelModal.vue'
import statusStore from '@/stores/statusStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

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
      coupon_code: '',
      form: {
        user: {
          name: '',
          tel: '',
          email: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    CartDelModal
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'finalTotal']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem'])
  },
  inject: ['emitter'],
  methods: {
    // 取購物車列表
    ...mapActions(cartStore, ['getCart', 'updateCart']),
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
          this.$httpMsgState(res, '商品全數移除')
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
          console.log('addCouponCode', res)
          if (res.data.success) {
            this.getCart()
          }
        })
    },
    addOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.isLoading = true
      this.$http.post(api, { data: order })
        .then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.success) {
            this.$router.push(`/shop/checkout/${res.data.orderId}`)
          }
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
