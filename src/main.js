import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import Vuelazyload from 'vue-lazyload'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'

Vue.component(Button.name, Button)
Vue.use(Vuelazyload, {
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
