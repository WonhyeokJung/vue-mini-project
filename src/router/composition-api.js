import Calculator from '../views/composition-api/Calculator.vue'
import CalculatorSetup from '../views/composition-api/CalculatorSetup'
import CalculatorSetupToRefs from '../views/composition-api/CalculatorSetupToRefs'
import CalculatorReusable from '../views/composition-api/CalculatorReusable'
export default [
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/calculatorsetup',
    name: 'CalculatorSetup',
    component: CalculatorSetup
  },
  {
    path: '/calculatorsetuptorefs',
    name: 'CalculatorSetupToRefs',
    component: CalculatorSetupToRefs
  },
  {
    path: '/calculatorreusable',
    name: 'CalculatorReusable',
    component: CalculatorReusable
  }
]