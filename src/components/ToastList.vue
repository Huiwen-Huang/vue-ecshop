<template>
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1050">
    <ToastMsg v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastMsg>
  </div>
</template>

<script>
import ToastMsg from '@/components/ToastMsg.vue'

export default {
  components: {
    ToastMsg
  },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
