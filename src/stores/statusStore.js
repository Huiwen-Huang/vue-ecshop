import { defineStore } from 'pinia'

export default defineStore('statusState', {
  state: () => {
    return {
      isLoading: false,
      cartLoadingItem: '',
      messages: []
    }
  },
  actions: {
    pushMsg (data) {
      const { title, content } = data
      this.messages.push({ title, content })
    }
  }
})
