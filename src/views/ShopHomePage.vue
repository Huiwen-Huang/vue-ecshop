<template>
  <ShopNavbar></ShopNavbar>
    <div class="container-fluid">
      <div class="row p-0">
        <!-- Banner -->
        <div class="col-md-12 p-0 mb-md-4 mb-3 animate__animated animate__fadeInUp">
          <div class="position-relative" style="height: 800px; background-size: cover; background-position: center; opacity: 75%"
              :style="{backgroundImage: `url(${require('@/assets/images/banner-1.jpg')})`}"></div>
          <h1 class="text-center text-warning fw-bold position-absolute top-50 start-50 translate-middle animate__animated animate__rollIn animate__delay-1s">Welcome to Hokii poke!
            <router-link class="text-decoration-none" to="/products">
                <button class="btn btn-outline-warning d-block mx-auto mt-4 animate__animated animate__flash animate__delay-1s">
                SHOP NOW
              </button>
              </router-link>
          </h1>
        </div>
        <!-- 三大主題 -->
        <div class="container-fluid mb-4">
          <div class="row justify-content-center mt-md-4">
            <div class="col-md-4 p-0" data-aos="fade-right">
              <img src="../assets/images/vagetable.jpg" class="img-fluid" style="max-width: 100%; height: auto;" alt="">
            </div>
            <div class="col-md-4 p-5" data-aos="fade-up">
              <h5 class="fw-bold mb-4">蔬食健康無負擔</h5>
              <div>蔬食不僅能降低心血管疾病的風險，還能促進消化系統健康，增加能量和活力。
                <br>
                Hokii 的夏威夷飯以新鮮蔬果為主，提供均衡的營養，同時減少對環境的負擔。
                <br>
                無論是素食者還是尋求健康飲食的人，這都是您的理想選擇。
              </div>
            </div>
          </div>
          <div class="row flex-md-row-reverse justify-content-center">
            <div class="col-md-4 p-0" data-aos="fade-left">
              <img src="../assets/images/farm.jpg" class="img-fluid" style="max-width: 100%; height: auto;" alt="">
            </div>
            <div class="col-md-4 p-5" data-aos="fade-up">
              <h5 class="fw-bold mb-4 pt-4">支持在地小農</h5>
              <p class="my-auto">Hokii 堅持採購本地農場的新鮮食材，支持在地小農的生計與可持續發展。
                <br>
                每一碗夏威夷飯都飽含對社區的愛與支持，讓您在享受美味的同時，也能為環保和當地經濟盡一份力。
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4 p-0" data-aos="fade-right">
              <img src="../assets/images/market.jpg" class="img-fluid" style="max-width: 100%; height: auto;" alt="">
            </div>
            <div class="col-md-4 p-5" data-aos="fade-up">
              <h5 class="fw-bold mb-4 pt-4">產地新鮮直送</h5>
              <p>我們的食材直接從產地新鮮直送，確保每一口都充滿自然的鮮美滋味。
                <br>
                無論是多汁的水果還是爽脆的蔬菜，都是每日現採，保證最佳的品質與口感。
                <br>
                享受健康美味，就從 Hokii 的夏威夷飯開始。
              </p>
            </div>
          </div>
        </div>
        <!-- 商品資訊 -->
        <div class="container-fluid bg-light">
          <div class="row justify-content-center mt-4 bg-light my-md-5 my-3">
            <div class="col-md-10 d-flex flex-wrap justify-content-around p-md-0 p-4 py-md-5">
              <div class="card col-md-3 border-0 mb-4 shadow" data-aos="zoom-in">
                <img src="../assets/images/poke-3.jpg" alt="">
                <div class="card-body px-4 bg-light">
                  <h5 class="card-title fw-bold">Hokii 經典鮪魚飯</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text m-0">NT$ 189</p>
                    <button class="btn" @click="addCart('-O0x2-SXPpPn9m0Wi0i_')">
                      <i class="bi bi-cart4"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card col-md-3 border-0 mb-4 shadow" data-aos="zoom-in">
                <img src="../assets/images/poke-4.jpg" alt="">
                <div class="card-body px-4 bg-light">
                  <h5 class="card-title fw-bold">Hokii 酪梨鮪魚飯</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text m-0">NT$ 179</p>
                    <button class="btn" @click="addCart('-O10pJDEYr17j6dkd9e5')">
                      <i class="bi bi-cart4"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card col-md-3 border-0 mb-md-4 shadow" data-aos="zoom-in">
                <img src="../assets/images/poke-2.jpg" alt="">
                <div class="card-body px-4 bg-light">
                  <h5 class="card-title fw-bold">Hokii 優格沙拉</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text m-0">NT$ 179</p>
                    <button class="btn" @click="addCart('-O1GAAIjQ6TNInvRPiDg')">
                      <i class="bi bi-cart4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div style="height: 400px; background-size: cover; background-position: center"
        :style="{backgroundImage: `url(${require('@/assets/images/footer-bn.jpg')})`}">
      <div class="position-relative top-50 start-0 w-50 ms-md-5 ms-4" data-aos="fade-up">
        <div class="ms-md-2 fs-5 fw-bold text-secondary">立即輸入電郵訂閱，獲得最新優惠訊息！</div>
        <div class="input-group mt-3 position-absolute top-75 start-0 w-75">
          <input type="text" class="form-control" placeholder="輸入信箱立即訂閱">
          <button class="btn btn-outline-secondary" type="button">訂閱</button>
        </div>
      </div>
    </div>
  <ShopFooter></ShopFooter>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'
import productStore from '@/stores/productStore'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    ShopNavbar,
    ShopFooter
  },
  computed: {
    ...mapState(productStore, ['products'])
  },
  methods: {
    ...mapActions(productStore, ['addCart'])
  }
}
</script>
