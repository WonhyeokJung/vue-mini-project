<template>
<div>
  <h2>Page Title</h2>
  <h2>Props 이용한 컴포넌트 재활용</h2>
  <h2>{{ title }}</h2>
  <p>v-bind 이용해서 전달해야 하는 자료형들 (v-bind 이용 안할시 문자열로 전달됨.)</p>
  <p>props 내에 타입을 설정해주면 그 타입과 맞지 않게 왔을경우 경고가 뜬다.</p>
  <p>Prop 숫자형 전달 : {{ num }}, 논리 자료형(Boolean) 전달 : {{ bool }}, Array : {{ arr }}</p>
  <p>Object : {{ obj }}, Object Property(오브젝트 속성(밸류값) 타입 유지) : {{ name }} </p>
</div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  props: {
    title: {
        type: String,
        default: "페이지 제목입니다."
      },
    num: {
      type: Number,
      default: 0
    },
    bool: {
      type: Boolean
    },
    arr: {
      type: Array
    },
    obj: {
      type: Object
    },
    name: {
      type: [String, Number]
    }
  },
  setup (p) {
    console.log("default: 페이지 제목입니다.","\n","props: ", p.title)
  },
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
  h2 {
    color: black;
 }
</style>