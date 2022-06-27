<template>
<div>
  <h3>부모 컨텐츠에서 컴포넌트로 불러오는 것이 아니면 inject 값을 찾을 수 없음.</h3>
  <p>{{ itemLength }}</p>
  <p>ReactiveLength : {{ reactiveItemLength }}</p>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    };
  },
  inject: ['itemLength', 'reactiveItemLength'],
  setup () {},
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