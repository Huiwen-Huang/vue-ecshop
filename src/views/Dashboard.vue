<template>
  <NavBar></NavBar>
  <div class="container-fluid">
    <ToastList></ToastList>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastList from '@/components/ToastList.vue'
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    NavBar,
    ToastList
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    // 將 cookie 中儲存的 token 抓出來
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    // 將 token 加到 Headers
    // 參考文件：https://github.com/axios/axios?tab=readme-ov-file#-axiosheaders
    this.axios.defaults.headers.common.Authorization = token
    // 驗證登入狀態
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api, this.user)
      .then((res) => {
        console.log(res)
        // 驗證失敗自動跳轉回 login 頁面
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
