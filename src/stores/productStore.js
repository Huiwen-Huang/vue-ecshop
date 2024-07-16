import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from './statusStore'

const status = statusStore()

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
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      status.isLoading = true
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          status.isLoading = false
          console.log(res.data)
        })
    }
  }
})
