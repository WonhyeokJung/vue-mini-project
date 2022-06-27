<template>
<div>
  <h3>Setup에서 inject 상세설정이 가능 / 부모 컨텐츠에서 컴포넌트로 불러오는 것이 아니면 inject 값을 찾을 수 없음.</h3>
  <p>{{ itemLength }}</p>
  <p>ReactiveLength : {{ reactiveItemLength }}</p>
  <p>provide 찾지 못했을 때 String Default Value : {{ defaults }}</p>
  <p>Function Default Value: {{ functionDefault }}</p>
</div>
</template>
<script>
import { inject } from '@vue/runtime-core';
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    };
  },
  setup () {
    const itemLength = inject('itemLength')
    const reactiveItemLength = inject('reactiveItemLength')
    const defaults = inject('default', 'default 값입니다.')
    // true면 function을 인식하고(treat default as factory 옵션)
    const functionDefault = inject('default2', () => 'default', true)
    return {
      itemLength,
      reactiveItemLength,
      defaults,
      functionDefault
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