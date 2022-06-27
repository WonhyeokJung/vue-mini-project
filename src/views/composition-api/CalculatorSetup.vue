<template>
<div>
  <h2>Calculator Setup 사용</h2>
  <div>
    <input type="text" v-model="state.num1" />
    <span> + </span>
    <input type="text" v-model="state.num2" />
    <span> = </span>
    <span>{{ state.result }}</span>
  </div>
</div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  name: 'CalculatorSetup',
  components: {},
  data () {
    return {
      sampleData: ''
    };
  },
  setup () {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })
    return {
      state
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