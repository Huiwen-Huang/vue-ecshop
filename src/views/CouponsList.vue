<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container">
    <!-- 新增優惠 -->
    <div class="text-end mt-4">
      <button class="btn btn-success" type="button" @click="openModal(true)">
          新增優惠卷
      </button>
    </div>
    <!-- 優惠活動列表 -->
    <table class="table mt-4">
      <thead>
      <tr>
          <th class="ps-4" style="width: 300px">優惠名稱</th>
          <th class="text-center" width="120">優惠代碼</th>
          <th class="text-center" width="120">折扣 %</th>
          <th class="text-center" width="120">到期日</th>
          <th class="text-center" width="120">是否上架</th>
          <th class="text-center" width="120">編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in coupons" :key="item.id">
          <td class="ps-4">{{ item.title }}</td>
          <td class="text-center">{{ item.code }}</td>
          <td class="text-center">{{ item.percent }} %</td>
          <td class="text-center">{{ $filters.date(item.due_date) }}</td>
          <td class="text-center">
          <span class="text-success" v-if="item.is_enabled">上架</span>
          <span class="text-muted" v-else>未上架</span>
          </td>
          <td class="text-center">
          <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" :disabled="this.status.loadingItem === item.id" @click="delCoupon(item.id)">刪除</button>
          </div>
          </td>
      </tr>
      </tbody>
    </table>
  </div>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <PaginationCard :pages="pagination" @emit-pages="getCoupons"></PaginationCard>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import PaginationCard from '@/components/PaginationCard.vue'

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isLoading: false,
      isNew: false,
      status: {
        loadingItem: ''
      },
      pagination: {}
    }
  },
  components: {
    CouponModal,
    PaginationCard
  },
  inject: ['emitter'],
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          console.log('getCoupons', res.data)
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = { due_date: new Date().getTime() / 1000 }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponCompoent = this.$refs.couponModal
      couponCompoent.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      const couponCompoent = this.$refs.couponModal
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'

      if (!this.isNew) {
        // 編輯
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempCoupon })
        .then(res => {
          console.log('updateCoupon', res)
          couponCompoent.hideModal()
          this.getCoupons()
          this.$httpMsgState(res, '更新')
        })
    },
    delCoupon (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.status.loadingItem = id
      this.$http.delete(api)
        .then(res => {
          this.status.loadingItem = ''
          this.getCoupons()
          this.$httpMsgState(res, '刪除')
          console.log('delCoupon', res)
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
