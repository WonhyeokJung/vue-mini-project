import NestedComponent from '../views/components-test/NestedComponent'
import ParentComponent from '../views/components-test/ParentComponent'
export default [
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/refs',
    name: 'ParentComponent',
    component: ParentComponent
  }
]