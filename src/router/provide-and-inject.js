import ProvideInject from '../views/provide-and-inject/ProvideInject'
import ProvideInjectChild from '../views/provide-and-inject/ProvideInjectChild'
import ProvideInjectSetupVer from '../views/provide-and-inject/ProvideInjectSetupVer'

export default [
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/provideinjectchild',
    name: 'ProvideInjectChild',
    component: ProvideInjectChild
  },
  {
    path: '/provideinjectsetupver',
    name: 'ProvideInjectSetupVer',
    component: ProvideInjectSetupVer
  }
]