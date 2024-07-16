import { defineStore } from 'pinia'

export default defineStore('statusState', {
  state: () => {
    return {
      isLoading: false,
      cartLoadingItem: ''
    }
  }
})
