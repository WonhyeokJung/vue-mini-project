<template>
<div>
  <h2>Postman Server 통신을 이용한 Data Binding</h2>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_price }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
// import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      productList: ''
    };
  },
  setup () {},
  beforeCreate () {},
  created () {
    this.getList()
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
    async getList() {
      this.productList = await this.$api("https://8ddf4f80-0510-4bb8-9e8d-60945ea7c9b4.mock.pstmn.io/list", "get")
      // this.productList = await axios.get("https://8ddf4f80-0510-4bb8-9e8d-60945ea7c9b4.mock.pstmn.io/list", {}).then(res => {
      //   console.log(res)
      // })
      // .catch(err => { console.log(err) })
    }
  }
}
</script>
<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>