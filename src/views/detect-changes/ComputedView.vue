<template>
<div>
  <input type="text" v-model="lastName">
  <h2>풀네임 단순 데이터 바인딩 출력</h2>
  <p>{{ firstName + ' ' + lastName }}</p>
  <hr />
  <h2>풀네임 메서드 활용 출력</h2>
  <h3>단순 / 메서드 활용은 화면 내 갯수만큼 연산을 수행하여 퍼포먼스를 떨어뜨린다.</h3>
  <p>{{ getFullName() }}</p>
  <hr />
  <h2>Computed / 화면 내 여러 곳에 있어도 단 한번만 연산</h2>
  <h3>기존의 데이터 값을 기반으로 변화가 일어나면 변화를 토대로 새로운 데이터 값을 생성하는 것이 목적</h3>
  <p>{{ fullName }}</p>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      firstName: 'Jane',
      lastName: 'Doe'
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
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {},
  methods: {
    getFullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>