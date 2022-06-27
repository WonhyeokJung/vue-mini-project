<template>
<div>
  <provide-inject-child></provide-inject-child>
  <button @click="addItem">아이템 추가</button>
  <p ref="ptag">{{ getItems }}</p>
</div>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild.vue';
import { computed } from 'vue'
export default {
  components: {ProvideInjectChild},
  data () {
    return {
      items: ['A', 'B'],
      sample: ['A']
    };
  },
  provide () {
    return {
      itemLength: this.items.length,
      reactiveItemLength: computed(() => this.items.length)
    }
  },
  setup () {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log(this.$refs.ptag);
  },
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {
    getItems() {
      return this.sample
    }
  },
  watch: {},
  methods: {
    addItem() {
      this.items.push('C')
      console.log(this.items);
    }
  }
}
</script>