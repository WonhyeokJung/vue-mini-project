import ComputedView from '../views/detect-changes/ComputedView.vue'
import WatchView from '../views/detect-changes/WatchView'

export default [
  {
    path: '/computed',
    name: 'ComputedView',
    component: ComputedView
  },
  {
    path: '/watch',
    name: 'WatchView',
    component: WatchView
  }
]