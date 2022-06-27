<template>
<div>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
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