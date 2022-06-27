import { reactive, computed, toRefs } from 'vue'
// 함수가 컴포넌트 밖에서 선언되면 반응형 처리가 불가하여 toRefs로 반응형 처리를 해줌.
function plusNumber() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  })
  return toRefs(state)
}

export {
  plusNumber
}