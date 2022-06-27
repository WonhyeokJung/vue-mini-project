import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import mixins from './mixins'
const app = createApp(App)
app.use(router).mixin(mixins).mount('#app')
// directive 설정(custom 디렉티브)
// v-focus
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})