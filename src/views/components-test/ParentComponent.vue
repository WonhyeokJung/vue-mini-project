<template>
<div>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>
  <p>자식 컴포넌트 데이터값 동기화</p>
  <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
</div>
</template>
<script>
import ChildComponent from '../../components/ChildComponent.vue'
export default {
  components: {
    ChildComponent
  },
  data () {
    return {
      sampleData: '',
    };
  },
  setup () {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // child componet에 ref 지정 후 이를 통해 btn에 접근
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.callFromParent();
    this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터"
  },
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {
    detectChildMsgChange () {
      return this.$refs.child_component.msg3;
    }
  },
  watch: {},
  methods: {
    sendMessage (data) {
      console.log(data)
    },
    checkChild() {
      // this.detectChildMsgChange()는 불가능
      alert(this.detectChildMsgChange)
    }
  }
}
</script>