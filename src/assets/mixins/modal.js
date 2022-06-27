import axios from "axios";

// 지역 mixin
let Modal = {
  // setup()으로 보내면 인식하지 못함.
  // setup() {}
  data() {
    return {
      isModal: false,
      modal: ''
    }
  },
  mounted () {
    console.log('mixin mounted!');
  }
}

export { Modal }

// 혹은 변수 선언없이 한번에
export default {
  data() {
    return {
      isModal: false,
      modal: ''
    }
  },
  mounted () {
    console.log('export default mixin mounted!');
  },
  methods: {
    async $callAPI(url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data
    }
  }
}

