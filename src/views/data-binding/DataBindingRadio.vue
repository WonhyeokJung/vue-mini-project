<template>
<div>
  <label><input type="radio" value="서울" v-model="picked"></label>
  <label><input type="radio" :value="radioValue2" v-model="picked"></label>
  <label><input type="radio" :value="radioValue3" v-model="picked"></label>
  <br />
  <span>선택한 지역: {{ picked }}</span>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      picked: '',
      radioValue1: 'Seoul',
      radioValue2: 'Pusan',
      radioValue3: 'Jeju'
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