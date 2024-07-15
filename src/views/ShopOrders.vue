<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <h3>我的訂單</h3>
    <table class="table table-striped table-hover mt-4">
      <thead>
        <tr>
          <th class="text-center" width="120">訂單日期</th>
          <th class="text-center" width="200">訂單編號</th>
          <th class="text-center" width="120">訂單金額</th>
          <th class="text-center" width="120">付款狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td class="text-center">{{ $filters.date(item.create_at) }}</td>
          <td class="text-center"><a href="" @click.prevent="viewPerOrder(item)" class="text-secondary">{{ item.id }}</a></td>
          <td class="text-center">NT$ {{ $filters.currency(item.total) }}</td>
          <td class="text-center text-success" v-if="item.is_paid">已付款</td>
          <td class="text-center" v-else>未付款</td>
        </tr>
      </tbody>
    </table>
  </div>
  <PaginationCard :pages="pagination" @emit-pages="getOrders"></PaginationCard>
</template>

<script>
import PaginationCard from '@/components/PaginationCard.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      isLoading: false
    }
  },
  components: {
    PaginationCard
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.$http.get(api)
        .then(res => {
          console.log('getOrders', res)
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    },
    viewPerOrder (item) {
      this.$router.push(`/shop/checkout/${item.id}`)
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
