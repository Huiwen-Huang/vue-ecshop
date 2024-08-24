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
      const { title, content, style = 'success' } = data
      this.messages.push({ style, title, content })
    },
    resetMessage () {
      this.messages = []
    }
  }
})
