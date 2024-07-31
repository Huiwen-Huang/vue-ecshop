<template>
  <ShopNavbar></ShopNavbar>
  <div class="container">
    <!-- 進度條 -->
    <div class="w-50 mb-4">
      <div>
        <span class="border bg-secondary text-light rounded-circle py-3 px-4">1</span>
        <span class="border rounded-circle py-2 px-3">2</span>
        <span class="border rounded-circle py-3 px-4">3</span>
      </div>
    </div>
    <!-- 訂購人資訊 -->
    <div class="row justify-content-around">
      <!-- 左側欄 -->
      <form class="col-md-7 rounded">
        <h6 class="bg-light p-3">訂購人資訊</h6>
        <div class="border rounded mb-4 p-3">
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
            <label for="address" class="form-label">取貨地址</label>
            <input type="text" class="form-control" id="address" v-model="form.user.address">
          </div>
          <div class="mb-4">
            <label for="note" class="form-label">訂單備註</label>
            <textarea class="form-control" id="note" rows="3" v-model="form.message"></textarea>
          </div>
        </div>
      </form>
      <!-- 右側欄 -->
      <div class="col-md-5">
        <!-- 送貨、付款方式 -->
        <h6 class="bg-light p-3">取貨及付款資訊</h6>
        <div class="border rounded mb-3 p-3">
          <div class="mb-4">
            <label for="shipping" class="mb-2">取貨方式</label>
            <select class="form-select" aria-label="Default select example" id="shipping">
              <option value="1">自取</option>
              <option value="2">外送</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="pay" class="mb-2">付款方式</label>
            <select class="form-select" aria-label="Default select example" id="pay">
              <option value="1">現金</option>
              <option value="2">信用卡</option>
            </select>
          </div>
        </div>
        <!-- 訂單資訊 -->
        <h6 class="bg-light p-3">訂單資訊</h6>
        <div class="p-3 border rounded mb-3">
          <div class="w-100">
            <p class="mb-3">合計
              <span class="float-end">NT$ {{ $filters.currency(this.total) }}</span>
            </p>
            <div v-if="this.total !== this.finalTotal" class="mb-4">
              <p class="text-warning fw-bold">套用優惠代碼
                <span class="float-end">- {{ this.carts[0]?.coupon?.percent }}%</span>
              </p>
            </div>
            <p class="fw-bold border-top pt-2">結帳總金額
              <span class="float-end fw-bold">NT$ {{ $filters.currency(this.finalTotal) }}</span>
            </p>
          </div>
        </div>
        <!-- 按鈕 -->
        <div class="mb-4 d-flex align-items-center justify-content-between">
          <a href="" class="link " @click.prevent="backToCart">← 返回購物車</a>
          <button class="btn btn-warning" @click.prevent="addOrder">送出訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data () {
    return {
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
    ShopNavbar
  },
  computed: {
    ...mapState(cartStore, ['total', 'finalTotal', 'carts'])
  },
  methods: {
    // 取購物車列表
    ...mapActions(cartStore, ['getCart']),
    addOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.isLoading = true
      this.$http.post(api, { data: order })
        .then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.success) {
            this.$router.push(`/checkout/${res.data.orderId}`)
          }
        })
    },
    backToCart () {
      this.$router.push('/cart')
    }
  },
  created () {
    this.getCart()
  }
}
</script>
