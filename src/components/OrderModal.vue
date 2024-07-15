<template>
  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯訂購資訊</h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">訂單日期</label>
            <input type="date" class="form-control" id="title" v-model="create_at">
          </div>
          <div class="mb-3">
            <label for="name">訂購人姓名</label>
            <input type="text" class="form-control" id="name" v-model="form.user.name">
          </div>
          <div class="mb-3">
            <label for="tel">訂購人電話</label>
            <input type="text" class="form-control" id="tel" v-model="form.user.tel">
          </div>
          <div class="mb-3">
            <label for="email">訂購人信箱</label>
            <input type="text" class="form-control" id="email" v-model="form.user.email">
          </div>
          <div class="mb-3">
            <label for="address">訂購人地址</label>
            <input type="text" class="form-control" id="address" v-model="form.user.address">
          </div>
          <div class="mb-3">
            <label for="address">訂單金額</label>
            <input type="text" class="form-control" id="address" v-model.number="form.total">
          </div>
          <div class="mb-3">
            <label for="payment_method">付款方式</label>
            <input type="text" class="form-control" id="payment_method" v-model="form.payment_method">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="is_paid" :true-value="true" :false-value="false"
                  v-model="form.is_paid">
            <label class="form-check-label" for="is_paid">
              是否付款
            </label>
          </div>
          <div class="mb-3">
            <label for="message">訂單備註</label>
            <input type="textarea" class="form-control" id="message" v-model="form.message">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('emit-order', form)">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  props: {
    order: {}
  },
  data () {
    return {
      create_at: '',
      form: {
        id: '',
        create_at: '',
        is_paid: false,
        message: '',
        payment_method: '',
        products: [],
        total: '',
        user: {
        }
      }
    }
  },
  watch: {
    order () {
      this.form = this.order
      // 將時間格式改為 YYYY-MM-DD
      const dateAndTime = new Date(this.form.create_at * 1000).toISOString().split('T');
      // 將切分後的日期部分（即 YYYY-MM-DD）存入 this.create_at
      [this.create_at] = dateAndTime
    },
    create_at () {
      this.form.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  mixins: [modalMixins]
}
</script>
