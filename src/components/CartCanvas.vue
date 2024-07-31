<template>
  <div class="offcanvas offcanvas-end" style="max-width: 360px;" tabindex="-1" id="cart" aria-labelledby="shoppingCart" ref="offcanvasCart">
    <div class="offcanvas-header bg-warning text-light position-relative">
      <h5 id="shoppingCart">購物車</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body mb-5">
      <!-- 購物車品項 -->
      <div class="card mb-3 border-0" v-for="cart in carts" :key="cart.id">
        <div class="row g-0">
          <div class="col-md-3 col-3 p-3 pe-0">
            <div class="border" style="width:100%; height: 100%; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${cart.product.imageUrl})`}"></div>
          </div>
          <div class="col-md-9 col-9">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title fs-6">{{ cart.product.title}}</h5>
              <p class="card-text fs-7 fw-bold">{{ cart.qty }} x NT${{ $filters.currency(cart.product.price) }}
                <!-- 移除單一商品 -->
                <a href="" class="text-secondary float-end" @click.prevent="delProduct(cart)">
                  <i class="bi bi-trash"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 結帳按鈕 -->
      <div class="row w-100 position-absolute bottom-0 end-0 mb-3">
        <div class="col-11">
          <router-link to="/cart">
            <button type="button" class="btn btn-warning w-100 py-3">前往結帳</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(cartStore, ['carts', 'finalTotal', 'total'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'updateCart', 'delProduct']),
    showCanvas () {
      this.offcanvas.show()
    },
    hideCanvas () {
      this.offcanvas.hide()
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvasCart)
  }
}
</script>
