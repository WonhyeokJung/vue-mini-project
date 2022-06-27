<template>
<div>
  <label for="">
    <!-- v-model은 checked 속성을 사용(value 속성에 데이터 바인딩을 원할 경우 v-bind 사용) -->
    <input type="checkbox" v-model="checked"> {{ checked }}
  </label>
  <h2>체크 / 해제 기본값 변경</h2>
  <label for="">
    <input type="checkbox" v-model="checked2" true-value="yes" false-value="아닌데?"> {{ checked2 }}
  </label>
  <h2>여러 개의 체크 박스 바인딩</h2>
  <label><input type="checkbox" value="부산" v-model="checked3"></label>
  <label><input type="checkbox" value="서울" v-model="checked3"></label>
  <label><input type="checkbox" value="제주" v-model="checked3"></label>
  <br />
  <span>체크한 지역 : {{ checked3 }}</span>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      checked: true,
      checked2: '',
      checked3: [],
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