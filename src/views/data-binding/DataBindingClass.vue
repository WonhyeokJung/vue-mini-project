<template>
<div>
  <div class="container" :class="{'active':isActive, 'text-red': hasError}">Class Binding</div>
  <br />
  <div class="container" :class="[activeClass, errorClass]">배열 이용한 Class Binding / True, false 바인딩 처리 불가능</div>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red'
    }
  },
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
<style scoped>
  .container {
    width: 100%;
    height: 200px;
  }

  .active {
    background-color: yellow;
    font-weight: bold;
  }

  .text-red {
    color: red;
  }
</style>