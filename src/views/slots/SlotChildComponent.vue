<template>
<div>
  <slot name="default" :user="user" :data="sampleData" :fruitData="fruits">{{ user.lastName }}</slot>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: 'abc',
      user: {
        lastName: 'Doe',
        firstName: 'Jane'
      }
    };
  },
  setup () {
    const fruits = ['apple', 'banana']
    return {
      fruits
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