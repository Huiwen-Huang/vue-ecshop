<template>
<div class="offcanvas offcanvas-end" style="max-width: 360px;" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" ref="offcanvasNavbar">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item mx-2 fw-bold">
        <router-link class="nav-link" to="/">首頁</router-link>
      </li>
      <li class="nav-item mx-2 fw-bold">
        <router-link class="nav-link" to="/about">關於 Hokii</router-link>
      </li>
      <li class="nav-item mx-2 fw-bold">
        <router-link class="nav-link" to="/products">全店商品</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  methods: {
    showCanvas () {
      this.offcanvas.show()
    },
    hideCanvas () {
      this.offcanvas.hide()
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvasNavbar)
  }
}
</script>
