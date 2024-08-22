<template>
  <ShopNavbar></ShopNavbar>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ellipsis-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </LoadingOverlay>
  <div class="container mt-5 mb-5">
    <!-- 進度條 -->
      <div class="row mb-4">
        <div class="col-md-8 col-10 mx-auto">
          <div class="position-relative m-4">
            <div class="progress" style="height: 2px;">
              <div class="progress-bar" role="progressbar" style="width: 100%; --bs-progress-bar-bg: #D6EADF;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <router-link to="/cart">
              <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill"
            style="width: 2rem; height:2rem; --bs-btn-bg: #D6EADF; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">1</button>
            </router-link>
            <router-link to="/checkout">
              <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill"
              style="width: 2rem; height:2rem; --bs-btn-bg: #A7C4B5; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">2</button>
            </router-link>
            <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill"
            style="width: 2rem; height:2rem; --bs-btn-bg: #D6EADF; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">3</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 col-10 mx-auto">
            <div class="position-relative m-2">
              <div class="position-absolute top-0 start-0 translate-middle d-inline mt-2 ms-4">購物車</div>
              <div class="position-absolute top-0 start-50 translate-middle d-inline mt-2 ms-2">填寫資料</div>
              <div class="position-absolute top-0 start-100 translate-middle d-inline mt-2" style="width: 4rem;">訂單確認</div>
            </div>
          </div>
        </div>
      </div>
    <!-- 訂購人資訊 -->
    <v-form class="row justify-content-around pt-4" @submit="addOrder" v-slot="{ errors }">
      <!-- 左側欄 -->
      <div class="col-md-7">
        <h6 class="bg-light p-3">訂購人資訊</h6>
        <div class="border rounded mb-4 p-3">
          <div class="mb-3">
            <label for="name" class="form-label">訂購人姓名</label>
            <v-field type="text" class="form-control" id="name" name="訂購人姓名"
            rules="required" v-model="form.user.name"
            :class="{ 'is-invalid': errors['訂購人姓名'] }"></v-field>
            <error-message name="訂購人姓名" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">訂購人電話</label>
            <v-field type="text" class="form-control" id="tel" name="tel" v-model="form.user.tel"
            :rules="isPhone" :class="{ 'is-invalid': errors['tel'] }"
            ></v-field>
            <error-message name="tel" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">訂購人信箱</label>
            <v-field type="email" class="form-control" id="email" name="訂購人信箱"
            rules="email|required" v-model="form.user.email"
            :class="{ 'is-invalid': errors['訂購人信箱'] }"></v-field>
            <error-message name="訂購人信箱" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">取貨地址</label>
            <v-field type="text" class="form-control" id="address" name="取貨地址" v-model="form.user.address"
            rules="required" :class="{ 'is-invalid': errors['取貨地址'] }"></v-field>
            <error-message name="取貨地址" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-4">
            <label for="note" class="form-label">訂單備註</label>
            <textarea class="form-control" id="note" rows="3" v-model="form.message"></textarea>
          </div>
        </div>
      </div>
    <!-- 右側欄 -->
    <div class="col-md-5">
      <!-- 送貨、付款方式 -->
      <h6 class="bg-light p-3">取貨及付款資訊</h6>
      <div class="border rounded mb-3 p-3">
        <div class="mb-4">
          <label for="shipping" class="mb-2">取貨方式</label>
          <v-field class="form-select" id="shipping" name="取貨方式"
          v-model="form.shipping" as="select"
          rules="required" :class="{ 'is-invalid': errors['取貨方式'] }">
            <option value="">請選擇取貨方式</option>
            <option value="自取">自取</option>
            <option value="外送">外送</option>
          </v-field>
          <error-message name="取貨方式" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-4">
          <label for="pay" class="mb-2">付款方式</label>
          <v-field class="form-select" aria-label="Default select example" id="pay" name="付款方式"
          v-model="form.pay" as="select"
          rules="required" :class="{ 'is-invalid': errors['付款方式'] }">
            <option value="">請選擇付款方式</option>
            <option value="現金">現金</option>
            <option value="信用卡">信用卡</option>
          </v-field>
          <error-message name="付款方式" class="invalid-feedback"></error-message>
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
        <a href="" class="link text-secondary" @click.prevent="backToCart">← 返回購物車</a>
        <button class="btn btn-warning" type="submit" @click="addOrder">送出訂單</button>
      </div>
    </div>
    </v-form>
  </div>
  <ShopFooter></ShopFooter>
</template>

<script>
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'

export default {
  data () {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          tel: '',
          email: '',
          address: ''
        },
        message: '',
        shipping: '',
        pay: ''
      }
    }
  },
  components: {
    ShopNavbar,
    ShopFooter
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
            this.$router.push(`/shop/checkout/${res.data.orderId}`)
          }
        })
    },
    backToCart () {
      this.$router.push('/cart')
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '須為正確的電話號碼'
    }
  },
  created () {
    this.getCart()
  }
}
</script>
