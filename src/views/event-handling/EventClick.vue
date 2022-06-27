<template>
<div>
  <button type="button" @click="increaseCounter">Add 1</button>
  <p>The counter is : {{ counter }}</p>
  <hr />
  <button type="button" @click="setCount(7)">Set 7</button>
  <p>This counter is : {{ counter2 }}</p>
  <hr /> 
  <button type="button" @click="one(), two()">Click시 두개 함수 호출</button>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      counter: 0,
      counter2: 0
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
    increaseCounter () {
      this.counter += 1;
    },
    setCount (count) {
      this.counter2 = count
    },
    one () {
      alert('One!')
    },
    two () {
      alert('Two!')
    }
  }
}
</script>