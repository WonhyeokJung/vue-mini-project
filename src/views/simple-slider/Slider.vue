<template>
<div>
  <simple-slider-layout style="width:400px; height:300px" :imgLength="images.length">
    <template #slider>
      <div class="slider-slide" v-for="(v, i) in images" :key="i">
        <img :src="v" alt="">
      </div>
    </template>
  </simple-slider-layout>
</div>
</template>
<script>
// import { computed } from 'vue'
import SimpleSliderLayout from './SimpleSliderLayout.vue'
export default {
  name: 'SliderView',
  components: {
    SimpleSliderLayout
  },
  setup () {
    const images = [
      require('@/assets/green.jpg'),
      require('@/assets/red.jpg'),
      require('@/assets/orange.jpg'),
      require('@/assets/yellow.jpg')
    ]
    // const curIdx = computed(() => )
    return {
      images
    }
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