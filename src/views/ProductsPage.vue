<template>
  <LoadingOverlay :active="isLoading">
    <div class="loadingio-spinner-ellipsis-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </LoadingOverlay>
  <div class="container">
    <div class="text-end">
        <button class="btn btn-primary" type="button" @click="openModal(true)">
            增加一個產品
        </button>
    </div>
    <table class="table mt-4">
        <thead>
        <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否上架</th>
            <th width="200">編輯</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
            <td class="text-right">
            {{ $filters.currency(item.price) }}
            </td>
            <td>
            <span class="text-success" v-if="item.is_enabled">上架</span>
            <span class="text-muted" v-else>未上架</span>
            </td>
            <td>
            <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)">刪除</button>
            </div>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
  <PaginationCard :pages="pagination" @emit-pages="getProducts"></PaginationCard>
  <ProductModal ref="productModal"
          :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal"
            :item="tempProduct"
            @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import PaginationCard from '../components/PaginationCard.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    PaginationCard
  },
  inject: ['emitter'],
  methods: {
    // 取得商品列表
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.axios.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    // 開啟新增、編輯商品彈窗
    openModal (isNew, item) {
      //  如果是新的就帶出空物件，不是就抓 item 的資料
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    // 新增、編輯商品
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.isLoading = true
      this.axios[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res)
          productComponent.hideModal()
          this.isLoading = false
          this.getProducts()
          this.$httpMsgState(res, '更新')
        })
    },
    // 開啟刪除商品彈窗
    openDelModal (item) {
      this.tempProduct = { ...item }
      const deleteComponent = this.$refs.delModal
      deleteComponent.showModal()
    },
    // 刪除商品
    delProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.axios.delete(api)
        .then((res) => {
          console.log(res.data)
          const deleteComponent = this.$refs.delModal
          deleteComponent.hideModal()
          this.isLoading = false
          this.getProducts()
          this.$httpMsgState(res, '刪除')
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
