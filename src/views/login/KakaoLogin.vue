<template>
<div>
  <a id="custom-login-btn" @click="kakaoLogin()">
    <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222">
  </a>
  <button @click="kakaoLogout()">로그아웃</button>
</div>
</template>
<script>
export default {
  name: 'KakaoLogin',
  components: {},
  data () {
    return {
      sampleData: ''
    };
  },
  setup () {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.kakaoLogout()
  },
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  computed: {},
  watch: {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'account_email',
        success: this.getKakaoAccount,
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url:'/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account;
          const email = kakao_account.email
          console.log('email', email);
          console.log(kakao_account);
          alert("로그인 성공!")
        },
        fail: error => {
          console.log(error);
        }
      })
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res);
      })
    }
  }
}
</script>