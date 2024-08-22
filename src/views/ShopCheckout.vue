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
          <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm rounded-pill"
          style="width: 2rem; height:2rem; --bs-btn-bg: #D6EADF; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">1</button>
          <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm rounded-pill"
          style="width: 2rem; height:2rem; --bs-btn-bg: #D6EADF; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">2</button>
          <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill"
          style="width: 2rem; height:2rem; --bs-btn-bg: #A7C4B5; --bs-btn-color: #fff; --bs-btn-hover-color: #fff;--bs-btn-hover-bg: #A7C4B5; --bs-btn-active-color: #fff; --bs-btn-active-bg: #A7C4B5;">3</button>
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
    <div class="row justify-content-center">
      <!-- 訂單資訊 -->
      <div class="col-11 col-md-10 border rounded mb-4 pt-4 mt-4">
        <div class="text-center text-secondary mb-5">
          <i class="bi bi-check-circle text-success fs-1"></i>
          <div class="fs-5 fw-bold">訂單已完成，謝謝您的訂購！</div>
          <div class="fs-6 fw-bold">Thank you! Your order has been submitted!</div>
        </div>
        <div class="row justify-content-center mt-4">
          <!-- 訂購人資訊 -->
          <div class="col-md-5">
            <p class="fw-bold">訂購人資訊</p>
            <hr>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>訂購人姓名</td>
                  <td class="ps-4">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <td width="100">訂購人信箱</td>
                  <td class="ps-4">{{ order.user.email }}</td>
                </tr>
                <tr>
                  <td>收件人電話</td>
                  <td class="ps-4">{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <td>收件人地址</td>
                  <td class="ps-4">{{ order.user.address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 取貨及付款資訊 -->
          <div class="col-md-5">
            <p class="fw-bold">取貨及付款資訊</p>
            <hr>
            <table class="table table-borderless align-middle">
              <tbody>
              <tr>
                <td width="100">取貨方式</td>
                <td class="ps-4">{{ order.shipping }} 自取</td>
              </tr>
              <tr>
                <td>取貨狀態</td>
                <td class="ps-4 fw-bold">未取貨</td>
              </tr>
              <tr>
                <td>付款方式</td>
                <td class="ps-4">{{ order.pay }} 現金</td>
              </tr>
              <tr>
                <td>付款狀態</td>
                <td class="ps-4 fw-bold">
                  <span v-if="!order.is_paid">未付款</span>
                  <span class="text-success" v-else>付款完成</span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button class="btn btn-danger mx-3" @click.prevent="payOrder" :class="{ 'd-none': order.is_paid === true}">確認付款去</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <!-- 商品資訊 -->
          <div class="col-md-10">
            <p class="fw-bold">商品資訊</p>
            <hr>
            <table class="table align-middle table-borderless mb-4">
              <thead>
              <th style="width:6%"></th>
              <th class="px-2" style="width:40%">商品</th>
              <th class="" style="width:10%">數量</th>
              <th class="text-end mx-2" style="width:20%">小計</th>
              </thead>
              <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>
                  <img :src="item.product.imageUrl" style="height: 30px;" alt="">
                  <!-- <div style="height: 40px; background-size: cover; background-position: top"
                    :style="{backgroundImage: `url(${item.product.imageUrl})`}"></div> -->
                </td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}</td>
                <td class="text-end">NT$ {{ $filters.currency(item.final_total) }}</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-end fw-bold"></td>
                <td class="text-end fw-bold">共 NT$ {{ $filters.currency(order.total) }}</td>
              </tr>
              </tfoot>
            </table>
          </div>
          <div class="row justify-content-center p-0">
            <div class="col-md-10 col-12 text-end mb-4">
              <button class="btn btn-outline-warning w-100" @click.prevent="backToHome">回到首頁</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ShopFooter></ShopFooter>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'

export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      isLoading: false
    }
  },
  components: {
    ShopNavbar,
    ShopFooter
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.order = res.data.order
            console.log('getOrder', res)
          }
        })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.isLoading = true
      this.$http.post(api)
        .then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.success) {
            this.getOrder()
          }
        })
    },
    backToHome () {
      this.$router.push('/')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
