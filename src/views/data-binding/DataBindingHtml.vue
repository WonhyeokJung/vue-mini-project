<template>
<div>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      htmlString: '<p style="color:red">This is a red string</p>'
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
