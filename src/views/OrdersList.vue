<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ellipsis-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </LoadingOverlay>
  <div class="container">
    <table class="table table-striped table-hover mt-4">
      <thead>
        <tr>
          <th class="text-center" width="120">訂單日期</th>
          <th class="text-center" width="200">訂單編號</th>
          <th class="text-center" width="120">訂單金額</th>
          <th class="text-center" width="120">付款狀態</th>
          <th class="text-center" width="200">訂購人</th>
          <th class="text-center" width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td class="text-center">{{ $filters.date(item.create_at) }}</td>
          <td class="text-center">{{ item.id }}</td>
          <td class="text-center">NT$ {{ $filters.currency(item.total) }}</td>
          <td class="text-center text-success" v-if="item.is_paid">已付款</td>
          <td class="text-center" v-else>未付款</td>
          <td class="text-center">{{ item.user.email }}</td>
          <td class="text-center">
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click.prevent="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <PaginationCard :pages="pagination" @emit-pages="getOrders"></PaginationCard>
  <OrderModal ref="orderModal" :order="tempOrder" @emit-order="updateOrder"></OrderModal>
  <OrderDelModal ref="delModal" :item="tempOrder" @del-item="delOrder"></OrderDelModal>
</template>

<script>
import PaginationCard from '@/components/PaginationCard.vue'
import OrderModal from '@/components/OrderModal.vue'
import OrderDelModal from '@/components/OrderDelModal.vue'

export default {
  data () {
    return {
      orders: {},
      tempOrder: {
        id: ''
      },
      pagination: {},
      isLoading: false
    }
  },
  components: {
    PaginationCard,
    OrderModal,
    OrderDelModal
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          console.log('getOrder', res)
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      console.log('editOderModal', this.tempOrder)
      this.$refs.orderModal.showModal()
    },
    updateOrder (form) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${form.id}`
      this.isLoading = true
      this.$http.put(api, { data: form })
        .then(res => {
          this.isLoading = false
          this.$refs.orderModal.hideModal()
          console.log('updateOrder', res)
          if (res.data.success) {
            this.getOrders()
          }
        })
    },
    openDelModal (item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.showModal()
    },
    delOrder (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then(res => {
          this.isLoading = false
          this.$refs.delModal.hideModal()
          console.log('delOrder', res)
          if (res.data.success) {
            this.getOrders()
          }
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
