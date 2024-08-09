<template>
<ShopNavbar></ShopNavbar>
<!-- banner -->
<div class="container-fuild position-relative animate__animated animate__fadeInUp">
  <img src="../assets/images/faq.jpg" class="img-fuild opacity-50" style="max-width: 100%; height: auto;" alt="">
  <h1 class="text-center text-light fw-bold position-absolute translate-middle top-50 start-50">FAQS</h1>
</div>
<!-- order faq -->
<div class="container my-4" data-aos="fade-up">
  <h5 class="bg-light p-2">
    <i class="bi bi-shop me-2"></i>訂購須知</h5>
  <p>感謝您選擇 Hokii Poke！我們致力於為您提供新鮮、健康的夏威夷飯及蔬食沙拉。為了確保您享受到最佳品質的產品，請務必了解以下訂購須知：</p>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#orderOne" aria-expanded="true" aria-controls="orderOne">
          商品保存方式與保存天數
        </button>
      </h2>
      <div id="orderOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body text-center">
          我們的夏威夷飯和沙拉均以新鮮食材製作，請於收到商品後立即冷藏保存。建議將產品放置於 0-4°C 的冷藏環境中，以保持其最佳口感和新鮮度。
          <br>夏威夷飯應在收到後 24 小時內食用完畢，沙拉則建議在 48 小時內享用，避免因保存時間過長而影響口感與品質。
          <br>請注意，產品應避免放置於高溫或陽光直射的環境中，以免加速變質。
        </div>
      </div>
    </div>
  </div>
</div>
<!-- shipping faq -->
<div class="container my-4" data-aos="fade-up">
  <h5 class="bg-light p-2">
    <i class="bi bi-truck me-2"></i>配送須知</h5>
  <p>為了確保您能夠享受到最新鮮的餐點，我們的配送流程經過精心設計，以下是相關配送須知：</p>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#shippingOne" aria-expanded="true" aria-controls="shippingOne">
          出貨時間
        </button>
      </h2>
      <div id="shippingOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body text-center">
          我們的產品均為現點現做，訂單確認後將於 24 小時內開始準備並出貨。
          <br>為確保新鮮，週末及國定假日可能會延後出貨，具體出貨時間將在訂單確認時告知。
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#shippingTwo" aria-expanded="true" aria-controls="shippingTwo">
          配送時間
        </button>
      </h2>
      <div id="shippingTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body text-center">
          配送時間因地區而異，通常在出貨後 1-3 個工作日內送達。主要城市的配送時間較短，偏遠地區則可能需要更長時間。
          <br>為了確保您能夠及時收到商品，我們建議您在訂購時提供準確的收件地址和聯絡方式，並確保配送期間內有人可以簽收商品。
          <br>若有特殊配送需求，請在訂單備註中註明，我們將盡力配合安排。
        </div>
      </div>
    </div>
  </div>
</div>
<!-- payment faq -->
<div class="container my-4" data-aos="fade-up">
  <h5 class="bg-light p-2">
    <i class="bi bi-credit-card me-2"></i>退款須知</h5>
  <p>我們希望您在 Hokii Poke 的購物體驗能夠順利且滿意。若因任何原因需要取消訂單或申請退款，請參考以下退款須知：</p>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#paymentOne" aria-expanded="true" aria-controls="paymentOne">
          取消訂單
        </button>
      </h2>
      <div id="paymentOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body text-center">
          若您需要取消訂單，請務必在訂單確認後的 2 小時內聯繫我們的客服團隊。
          <br>我們將根據您的要求盡快處理訂單取消事宜，並全額退還已支付款項。
          <br>若訂單已進入製作或出貨階段，則無法取消訂單或退款，敬請見諒。
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#paymentTwo" aria-expanded="true" aria-controls="paymentTwo">
          退款注意事項
        </button>
      </h2>
      <div id="paymentTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body text-center">
          若您在收到商品後對產品品質或配送過程有任何不滿，請在收到商品後的 24 小時內聯繫我們的客服，並提供相關照片及問題說明。
          <br>我們將根據具體情況進行審核，若確實為我們的責任，我們將為您安排退款或補寄商品。
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container my-4 text-center">
  <p>感謝您的理解與配合，若有任何疑問或需要進一步協助，請隨時聯繫我們的客服團隊，我們將竭誠為您服務。</p>
</div>
<ShopFooter></ShopFooter>
</template>

<script>
import ShopNavbar from '@/components/ShopNavbar.vue'
import ShopFooter from '@/components/ShopFooter.vue'

export default {
  components: {
    ShopNavbar,
    ShopFooter
  }
}
</script>
