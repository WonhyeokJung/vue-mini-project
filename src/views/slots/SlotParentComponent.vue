<template>
<div>
  <slot-child-component><p>hello</p></slot-child-component>
  <slot-child-component>
    <template #default="slotProps">
      {{ slotProps }}
      {{ typeof(slotProps.user) }}
    </template>
  </slot-child-component>
</div>
</template>
<script>
import SlotChildComponent from './SlotChildComponent.vue'
export default {
  components: {
    SlotChildComponent
  },
  data () {
    return {
      sampleData: ''
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
</script>1111111