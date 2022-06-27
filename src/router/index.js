import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import componentsTest from './components-test'
import compositionApi from './composition-api'
import databinding from './databinding'
import detectchanges from './detectchanges'
import eventhandling from './eventhandling'
import login from './login'
import mixins from './mixins'
import postman from './postman'
import provideAndInject from './provide-and-inject'
import rendering from './rendering'
import slots from './slots'
import simpleSlider from './simple-slider'

const routes = [
  ...databinding,
  ...rendering,
  ...eventhandling,
  ...detectchanges,
  ...postman,
  ...componentsTest,
  ...slots,
  ...provideAndInject,
  ...compositionApi,
  ...mixins,
  ...login,
  ...simpleSlider,
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
