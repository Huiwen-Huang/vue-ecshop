<template>
  <ShopNavbar></ShopNavbar>
    <div class="container d-flex flex-column justify-content-center">
      <h1 class="text-center text-warning fw-bold mb-4">Welcome to Hokii poke!</h1>
        <img class="img-fluid mb-3" src="../assets/images/poko-logo.jpg" alt="">
        <img class="img-fluid" src="../assets/images/poke_bn.jpg" alt="">
    </div>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'

export default {
  components: {
    ShopNavbar
  }
}
</script>
