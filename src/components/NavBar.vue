<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/admin/products">Admin</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/products">Products</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/admin/orders">Orders</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/admin/promotions">Promotions</router-link>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">登出</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.isLoading = true
      this.axios.post(api, this.user)
        .then((res) => {
          this.isLoading = false
          // 登出成功自動跳轉回 login
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
