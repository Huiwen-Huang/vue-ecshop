import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'
import cartStore from './cartStore'

const status = statusStore()
const carts = cartStore()

export default defineStore('productState', {
  state: () => {
    return {
      products: [],
      pagination: {}
    }
  },
  getters: {
    // 商品以價格排序
    sortProducts: (state) =>
      state.products.sort(
        (a, b) => a.price - b.price
      )
  },
  actions: {
    // 取得產品列表
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      status.isLoading = true
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          status.isLoading = false
          console.log('getProducts', res.data)
        })
    },
    // 加入購物車
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      status.cartLoadingItem = id
      // 需要帶入參數
      const cart = {
        product_id: id,
        qty: 1
      }
      axios.post(api, { data: cart }) // 帶入參數的方式要留意
        .then((res) => {
          status.cartLoadingItem = ''
          // this.$httpMsgState(res, '加入購物車')
          console.log('addCart', res)
          if (res.data.success) {
            carts.getCart()
          }
        })
    }
  }
})
