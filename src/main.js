import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { currency, date } from './methods/filter'
import $httpMsgState from './methods/pushMsgState'

import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}
// $httpMessageState 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMsgState = $httpMsgState

const pinia = createPinia()

app.use(pinia)
app.use(store)
app.use(router)
app.component('LoadingOverlay', Loading)
app.use(VueAxios, axios)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  generateMessage: localize('zh_TW', zhTW),
  validateOnInput: true
})

app.mount('#app')
