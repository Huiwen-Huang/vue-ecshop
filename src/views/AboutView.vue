<template>
  <ShopNavbar></ShopNavbar>
  <!-- banner -->
  <div class="container-fuild position-relative animate__animated animate__fadeInUp">
    <img src="../assets/images/banner-4.jpg" class="img-fuild opacity-50" style="max-width: 100%; height: auto;" alt="">
    <h1 class="text-center text-light fw-bold position-absolute translate-middle top-50 start-50">From Ocean to Bowl
      <br>The Journey of Hawaiian Poke</h1>
  </div>
  <!-- content -->
  <div class="container-fuild mt-md-4 mt-2">
    <div class="row justify-content-center">
        <div class="card col-md-3 border-0 px-4" data-aos="zoom-in">
          <img src="../assets/images/hawaii.jpg" alt="hawaii">
          <div class="card-body">
            <h5>Poke 的起源與文化</h5>
            <hr>
            <p>夏威夷飯又稱作 Poke Bowl，是一種起源於夏威夷的傳統料理。
              <br>Poke 這個詞在夏威夷語中的意思是“切塊”或“切片”，指的是將新鮮的魚類切成塊狀，然後用各種調味料拌勻的料理方式。
              <br>最早的 Poke 是由當地的漁民所創，漁民們在捕魚的過程中，會將當天捕獲的新鮮魚類切塊，並且加入海鹽、海藻等調味品作為簡單的餐點。
              <br>這種樸實且充滿海洋風味的料理，成為夏威夷當地人的日常飲食之一。</p>
          </div>
        </div>
        <div class="card col-md-3 border-0 px-4" data-aos="zoom-in" data-aos-delay="100">
          <img src="../assets/images/ingridient.jpg" alt="hawaii">
          <div class="card-body">
            <h5>Poke 的製作與變化</h5>
            <hr>
            <p>傳統的夏威夷 Poke 主要以新鮮的生魚片為基礎，常見的魚類包括鮪魚、鮭魚、章魚等，然後加入各種調味料如醬油、芝麻油、海鹽、青蔥、海藻等，再配以米飯或是其他穀物作為底料。
            <br>隨著 Poke 的流行，它的製作也變得更加多樣化。除了魚肉等選擇，還可以加入如雞肉、牛肉或是素食的豆腐等蛋白質來源。同時，配料的選擇也更加豐富，如酪梨、蔬菜、水果、堅果、海藻、醃製蔬菜等，讓每一碗 Poke Bowl 都可以根據個人口味和飲食習慣進行定制。</p>
          </div>
        </div>
        <div class="card col-md-3 border-0 px-4" data-aos="zoom-in" data-aos-delay="200">
          <img src="../assets/images/multi.jpg" alt="hawaii">
          <div class="card-body">
            <h5>Poke 的文化意義</h5>
            <hr>
            <p>夏威夷飯所蘊含的文化意義不僅僅在於它是一道美味的料理，更是夏威夷多元文化的體現。作為一個多元種族共存的地區，夏威夷的飲食文化融合了太平洋島嶼原住民、日本、韓國、中國等多個文化元素，而 Poke Bowl 正是這種多元文化的產物之一。它代表了夏威夷人民的開放性和包容性，反映了不同文化間的互相影響與融合。</p>
          </div>
        </div>
    </div>
  </div>
  <ShopFooter></ShopFooter>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    ShopNavbar,
    ShopFooter
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
