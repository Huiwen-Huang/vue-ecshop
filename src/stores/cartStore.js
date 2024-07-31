import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()

export default defineStore('cartState', {
  state: () => {
    return {
      carts: [],
      total: '',
      finalTotal: ''
    }
  },
  actions: {
    // 取購物車列表
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.isLoading = true
      axios.get(api)
        .then((res) => {
          status.isLoading = false
          console.log('getCart', res)
          if (res.data.success) {
            this.carts = res.data.data.carts
            this.total = res.data.data.total
            this.finalTotal = res.data.data.final_total
          }
        })
    },
    // 更新購物車價格
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      status.isLoading = true
      status.cartLoadingItem = item.id
      axios.put(api, { data: cart })
        .then(res => {
          console.log('updateCart', res)
          status.isLoading = false
          status.cartLoadingItem = ''
          this.getCart()
        })
    },
    delProduct (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      axios.delete(api)
        .then(res => {
          this.isLoading = false
          console.log('removeCartItem', res)
          this.getCart()
        })
    }
  }
})
