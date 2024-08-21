<template class="">
<ShopNavbar></ShopNavbar>
<div class="container-fluid d-flex flex-column p-0 m-0">
  <router-view></router-view>
  <ShopFooter class="mt-auto"></ShopFooter>
</div>
<!-- position-relative position-absolute bottom-0 end-0 -->
</template>

<script>
import emitter from '@/methods/emitter'
import cartStore from '@/stores/cartStore'
import { mapState } from 'pinia'
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
  }
}
</script>
