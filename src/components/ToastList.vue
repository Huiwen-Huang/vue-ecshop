<template>
  <div class="toast-container position-fixed top-5 end-0 p-3" style="z-index: 1050">
    <ToastMsg v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastMsg>
  </div>
</template>

<script>
import ToastMsg from '@/components/ToastMsg.vue'
import statusStore from '@/stores/statusStore'
import { mapState } from 'pinia'

export default {
  components: {
    ToastMsg
  },
  computed: {
    ...mapState(statusStore, ['messages'])
  }
  // inject: ['emitter'],
  // mounted () {
  //   this.emitter.on('push-message', (message) => {
  //     const { style = 'success', title, content } = message
  //     this.messages.push({ style, title, content })
  //   })
  // }
}
</script>
