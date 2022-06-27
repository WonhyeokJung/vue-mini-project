// 전역 mixins
import axios from 'axios'

export default {
  methods: {
    async $api(url, method, data) {
      return (await axios({
        mathod: method,
        url,
        data
      })
      .then(res => {
        res
        return res.data
      })
      .catch(e =>{
        console.log(e)
      }));
    }
  }
}