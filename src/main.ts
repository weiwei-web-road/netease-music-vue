import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
// 可以使用plugin 把新的 Vue实例挂载到 Vue原型上，这样每次实例化的时候，Vue实例都有这个属性
// 或者也可以在Vue 实例化之后，再挂载到Vue根实例上，这样每次实例化，都需要再重新挂载
import './plugins/element.js'
import './plugins/audio.js'
import './plugins/d3.js'
import './plugins/popup.js'

Vue.config.productionTip = false

new Vue({
  // 创建和挂载根实例。
  // 通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能, 任何组件都可以通过 this.$route 访问路由器，通过 this.$router 访问当前路由
  router,
  // Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
  store,
  render: h => h(App)
}).$mount('#app')

// moment 用来管理时间格式
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
