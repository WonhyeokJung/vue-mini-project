<template>
<div>
  <p>V-model에 selectedValue 할당하여, @change가 일어날 때마다 선택된 option의 value를 alert한다.</p>
  <select v-model="selectedValue" @change="changeSelect()">
    <option value="서울">Seoul</option>
    <option value="부산">Pusan</option>
    <option value="제주">제주</option>
  </select>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      selectedValue: ''
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
    changeSelect () {
      alert(this.selectedValue);
    }
  }
}
</script>