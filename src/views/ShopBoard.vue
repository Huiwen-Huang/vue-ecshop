<template>
<ShopNavbar></ShopNavbar>
<div class="container-fluid d-flex flex-column pb-5 p-lg-0 m-0" >
  <router-view></router-view>
  <ShopFooter></ShopFooter>
</div>
</template>

<script>
import emitter from '@/methods/emitter'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'

export default {
  components: {
    ShopNavbar,
    ShopFooter
  },
  provide () {
    return {
      emitter
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    // 取得購物車數量
    ...mapActions(cartStore, ['getCart'])
  },
  created () {
    this.getCart()
  }
}
</script>
