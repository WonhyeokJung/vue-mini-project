<template>
<div>
  <input type="text" v-model="textValue">
  <button type="button" :disabled="textValue.length < 6">6자 이상 입력시 활성화</button>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      textValue: ''
    };
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