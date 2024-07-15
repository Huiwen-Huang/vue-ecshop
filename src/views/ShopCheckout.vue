<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="my-5 row justify-content-center">
    <h3 class="text-center text-secondary mb-4">訂單已完成，謝謝您的訂單！</h3>
    <form class="col-md-6 mt-4">
      <p class="text-center fs-5 fw-bold">商品資訊</p>
      <hr>
      <table class="table align-middle table-borderless mb-4">
        <thead>
        <th class="px-2">商品</th>
        <th class="px-2">數量</th>
        <th class="text-end px-2">小計</th>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }} / {{ item.product.unit }}</td>
          <td class="text-end">NT$ {{ $filters.currency(item.final_total) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2" class="text-end fw-bold">總計</td>
          <td class="text-end">NT$ {{ $filters.currency(order.total) }}</td>
        </tr>
        </tfoot>
      </table>
      <p class="text-center fs-5 fw-bold mt-4">訂購人資訊</p>
      <hr>
      <table class="table table-borderless text-center">
        <tbody>
        <tr>
          <th width="100">訂購人信箱</th>
          <td class="ps-4">{{ order.user.email }}</td>
        </tr>
        <tr>
          <th>訂購人姓名</th>
          <td class="ps-4">{{ order.user.name }}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td class="ps-4">{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td class="ps-4">{{ order.user.address }}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td class="ps-4">
            <span v-if="!order.is_paid">尚未付款</span>
            <span class="text-success" v-else>付款完成</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="text-end">
        <button class="btn btn-danger" @click.prevent="payOrder" :class="{ 'd-none': order.is_paid === true}">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
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
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.order = res.data.order
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
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
