<template>
<div>
  <modal-layout v-if="isModal">
    <template v-slot:header>
      <h1>{{ modal.popup.title }}</h1>
    </template>
    <template #default>
      <p>팝업 컨텐츠 1</p>
      <p>팝업 컨텐츠 2</p>
    </template>

    <template v-slot:footer>
      <button type="button" @click="isModal=false">닫기</button>
    </template>
  </modal-layout>
  <button @click="isModal=true">Modal 열기</button>
</div>
</template>
<script>
import ModalLayout from '../slots/SlotModalLayout'
// import { Modal } from '../../assets/mixins/modal.js'
// 표현식이 아닌경우
import Modal from '@/assets/mixins/modal.js'
export default {
  components: {
    ModalLayout
  },
  // mixin을 사용하여 컴포넌트 재사용성이 강해지고, 중복 변수/메소드를 줄일 수 있다.
  mixins: [ Modal ],
  setup () {},
  beforeCreate () {},
  created () {
    this.getModal()
  },
  beforeMount () {},
  mounted () {
    console.log('Vue Component mounted')
  },
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {},
  watch: {},
  methods: {
    async getModal () {
      //전역
      // this.modal = await this.$api("https://8ddf4f80-0510-4bb8-9e8d-60945ea7c9b4.mock.pstmn.io/modal", "GET")
      // 지역mixin Modal에서 선언한 method
      this.modal = await this.$callAPI("https://8ddf4f80-0510-4bb8-9e8d-60945ea7c9b4.mock.pstmn.io/modal", "GET")
      console.log(this.modal.popup)
    }
  }
}
</script>