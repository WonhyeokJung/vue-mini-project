<template>
<div>
  <provide-inject-child-setup-ver></provide-inject-child-setup-ver>
  <button @click="addItem">아이템 추가</button>
  <p ref="ptag">{{ getItems }}</p>
</div>
</template>
<script>
import ProvideInjectChildSetupVer from './ProvideInjectChildSetupVer.vue';
import { computed, reactive, provide } from 'vue'
export default {
  components: {ProvideInjectChildSetupVer},
  setup () {
    let state = reactive({
      items: ['A', 'B'],
      sample: ['A']
    })
    const addItem = function () {
      state.items.push('C')
      console.log(state.items)
    }
    // provide(key, value)
    provide('itemLength', state.items.length)
    provide('reactiveItemLength', computed(() => state.items.length))
    return { state, addItem }

  },
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
      return this.state.sample
    }
  },
  watch: {},
}
</script>