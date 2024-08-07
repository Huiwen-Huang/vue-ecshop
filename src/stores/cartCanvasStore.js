import { defineStore } from 'pinia'

export default defineStore('cartCanvasState', {
  actions: {
    showCanvas () {
      this.offcanvas.show()
    },
    hideCanvas () {
      this.offcanvas.hide()
    }
  }
})
