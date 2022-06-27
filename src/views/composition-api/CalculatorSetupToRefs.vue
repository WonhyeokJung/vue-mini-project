<!-- template도 컴포넌트의 일부이다. -->
<template>
<div>
  <h2>컴포넌트 재사용 위한 덧셈 function 외부 함수 선언 후 데이터(변수) 반응형 적용 위해 toRefs 사용</h2>
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
import { reactive, toRefs } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
// 함수가 컴포넌트 밖에서 선언되면 반응형 처리가 불가하여 toRefs로 반응형 처리를 해줌.
function plusNumber() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  })
  return toRefs(state)
}
// vue 컴포넌트
export default {
  name: 'CalculatorSetupToRefs',
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