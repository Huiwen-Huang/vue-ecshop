<template>
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <!-- 換成 icon -->
        <!-- <span class="p-2 me-2 d-inline-block">
          <i class="bi bi-apple"></i>
        </span> -->
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
    </div>
</div>
</template>

<script>
// 從 BS5 匯入吐司元件
import Toast from 'bootstrap/js/dist/toast'

export default {
  name: 'ToastMsg',
  props: [
    'msg'
  ],
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 3000
    })
    toast.show()
  }
}
</script>
