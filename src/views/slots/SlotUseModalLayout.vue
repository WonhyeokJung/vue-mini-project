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
import ModalLayout from './SlotModalLayout'
export default {
  components: {
    ModalLayout
  },
  data () {
    return {
      isModal: false,
      modal: ''
    };
  },
  setup () {},
  beforeCreate () {},
  created () {
    this.getModal()
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {},
  watch: {},
  methods: {
    async getModal () {
      this.modal = await this.$api("https://8ddf4f80-0510-4bb8-9e8d-60945ea7c9b4.mock.pstmn.io/modal", "GET")
      console.log(this.modal.popup)
    }
  }
}
</script>