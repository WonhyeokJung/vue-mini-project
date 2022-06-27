<!-- template도 컴포넌트의 일부이다. -->
<template>
<div>
  <h2>재사용 가능하게 덧셈 함수 분리</h2>
  <div>
    <input type="text" v-model="num1" />
    <span> + </span>
    <input type="text" v-model="num2" />
    <span> = </span>
    <span>{{ result }}</span>
  </div>
</div>
</template>
<script>
import { plusNumber } from './calculator.js'

// vue 컴포넌트
export default {
  name: 'CalculatorReusable',
  components: {},
  data () {
    return {
      sampleData: ''
    };
  },
  setup () {
    let {num1, num2, result} = plusNumber()  // state를 return으로 받아 그중 num1, num2, result 를 사용
    return {
      num1, num2, result
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>