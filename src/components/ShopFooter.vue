<template>
  <div class="col-md-12 p-0 position-relative">
    <div style="height: 400px; background-size: cover; background-position: center"
        :style="{backgroundImage: `url(${require('@/assets/images/footer-bn.jpg')})`}">
      <div class="position-relative top-50 start-0 w-50 ms-5">
        <div class="m-2 fs-5">歡迎訂閱我們，隨時獲得最新優惠！
          <div class="input-group mt-3 position-absolute top-75 start-0 w-75">
            <input type="text" class="form-control" placeholder="輸入信箱立即訂閱" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">訂閱</button>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-lg-5">
      <div class="container-fluid">
        <div class="navbar-brand text-warning fw-bold mx-auto" href="#">Hokii Poke
          <span class="navbar-text mx-auto fs-6 fw-light px-3">© 2024. All Rights Reserved.</span>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
    </nav>
  </div>
</template>
