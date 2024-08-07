<template>
  <ShopNavbar></ShopNavbar>
    <div class="container-fluid">
      <div class="row p-0">
        <!-- Banner -->
        <div class="col-md-12 p-0 mb-4 position-relative">
          <div style="height: 800px; background-size: cover; background-position: center"
              :style="{backgroundImage: `url(${require('@/assets/images/banner-1.jpg')})`}">
            <h1 class="text-center text-warning fw-bold position-absolute top-50 start-50 translate-middle animate__animated animate__fadeIn">Welcome to Hokii poke!</h1>
          </div>
        </div>
        <!-- 三大主題 -->
        <div class="row justify-content-center mt-4">
          <div class="col-md-4 animate__animated animate__slideInLeft p-0">
            <img src="../assets/images/vagetable.jpg" style="width: 472px;" alt="">
          </div>
          <div class="col-md-4 animate__animated animate__slideInUp p-5">
            <h5 class="fw-bold mb-4">蔬食健康無負擔</h5>
            <div>蔬食不僅能降低心血管疾病的風險，還能促進消化系統健康，增加能量和活力。
              <br>
              Hokii 的夏威夷飯以新鮮蔬果為主，提供均衡的營養，同時減少對環境的負擔。
              <br>
              無論是素食者還是尋求健康飲食的人，這都是您的理想選擇。
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 animate__animated animate__slideInRight p-5">
            <h5 class="fw-bold mb-4 pt-4">支持在地小農</h5>
            <p class="my-auto">Hokii 堅持採購本地農場的新鮮食材，支持在地小農的生計與可持續發展。
              <br>
              每一碗夏威夷飯都飽含對社區的愛與支持，讓您在享受美味的同時，也能為環保和當地經濟盡一份力。
            </p>
          </div>
          <div class="col-md-4 animate__animated animate__slideInUp p-0">
            <img src="../assets/images/farm.jpg" style="width: 472px;" alt="">
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 animate__animated animate__slideInLeft p-0">
            <img src="../assets/images/market.jpg" style="width: 472px;" alt="">
          </div>
          <div class="col-md-4 animate__animated animate__slideInUp p-5">
            <h5 class="fw-bold mb-4 pt-4">產地新鮮直送</h5>
            <p>我們的食材直接從產地新鮮直送，確保每一口都充滿自然的鮮美滋味。
              <br>
              無論是多汁的水果還是爽脆的蔬菜，都是每日現採，保證最佳的品質與口感。
              <br>
              享受健康美味，就從 Hokii 的夏威夷飯開始。
            </p>
          </div>
        </div>
        <!-- 商品資訊 -->
        <div class="row justify-content-center mt-4 bg-light py-5">
          <div class="col-md-8 d-flex justify-content-center">
            <div class="card col-md-3 me-4 border-0 bg-light">
              <img src="../assets/images/poke-3.jpg" class="card-img-top rounded-0" alt="">
              <div class="card-body">
                <h5 class="card-title">Hokii 經典鮪魚飯</h5>
                <p class="card-text">NT$ 189</p>
              </div>
            </div>
            <div class="card col-md-3 me-4 border-0 bg-light">
              <img src="../assets/images/poke-4.jpg" class="card-img-top rounded-0" alt="">
              <div class="card-body">
                <h5 class="card-title">Hokii 酪梨鮪魚飯</h5>
                <p class="card-text">NT$ 179</p>
              </div>
            </div>
            <div class="card col-md-3 me-4 border-0 bg-light">
              <img src="../assets/images/poke-2.jpg" class="card-img-top rounded-0" alt="">
              <div class="card-body">
                <h5 class="card-title">Hokii 優格沙拉</h5>
                <p class="card-text">NT$ 179</p>
              </div>
            </div>
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
import productStore from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    ShopNavbar,
    ShopFooter
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(productStore, ['products'])
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
