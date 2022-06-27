<template>
<div class="modal-container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
</template>
<script>
export default {
  components: {},
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
</script>
<style scoped>
.modal-container {
  position: fixed;
  left: 50%;
  width: 50%;
  height: auto;
  border: 1px solid #ddd;
  background-color: white;
  z-index: 2;
  transform: translate(-50%);
}
</style>