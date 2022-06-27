<template>
<div>
  <!-- v-bind:num="3" v-bind 정적 전달 / v-bind 동적 전달 v-bind:num="data" -->
  <PageTitle :title="title" num="3" :bool="true" :arr="[3, 7, 10]" :obj="obj" :name="obj.name" />
</div>
</template>
<script>
import PageTitle from '../../components/PageTitle.vue';
export default {
  components: {
    PageTitle
  },
  data () {
    return {
      title: 'setup은 첫번째 parameter로 props를 가집니다.',
      obj: {
        name: 'Jane Doe',
        age: 28
      }
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
  div {
    color: blue;
  }
</style>