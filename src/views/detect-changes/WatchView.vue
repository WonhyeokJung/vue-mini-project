<template>
<div>
  <h3>Watch는 data ()에 정의된 Data 하나를 감시하고 변경을 확인한다.</h3>
  <hr />
  <h1>Full name: {{ fullName }}</h1>
  <p>변화가 없으므로 아무것도 출력되지 않음. computed처럼 초기에 한번 실행되지 않는다.</p>
  <hr />
  <button type="button" @click="changeName">변경</button>
  <p>변경 클릭시 firstName이 변경되어 watch내 함수가 작동한다.</p>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      firstName: 'Jane',
      lastName: 'Doe',
      fullName : '',
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
  watch: {
    // firstName에 변경이 일어나면 작동한다.
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName () {
      this.firstName === 'John' ? this.firstName = 'Jane' : this.firstName = 'John'
    }
  }
}
</script>