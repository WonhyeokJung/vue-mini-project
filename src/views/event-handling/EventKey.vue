<template>
<div>
  <input type="text" @keyup="clg" @keyup.enter="submit" v-model="message">
  <p>My message is {{ message }}</p>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      message: ''
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
  methods: {
    submit () {
      alert(this.message)
    },
    clg () {
      console.log(this.message)
    }
  }
}
</script>