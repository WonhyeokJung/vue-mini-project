<template>
<div class="slider">
  <div class="slider-wrapper">
    <slot name="slider" :curIdx="curIdx" :selectSlide="selectSlide"></slot>
    <div class="slider-arrow__prev slider-arrow-horizontal__prev slider-arrow__prev" @click="prevSlide"></div>
    <div class="slider-arrow__next slider-arrow-horizontal__next slider-arrow__next" @click="nextSlide"></div>
    <div class="slider-pagination">
      <span v-for="(v, i) in imgLength" :key="i" class="slider-pagination__dot slider-pagination__dot--click" @click="selectSlide(i)"></span>
    </div>
  </div>
</div>
</template>
<script>
import { onMounted } from 'vue';
export default {
  name: 'SimpleSliderLayout',
  components: {},
  props: {
    imgLength: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      sampleData: ''
    };
  },
  setup (props) {
    let slider = null
    let curIdx = 0
    let slides = null
    let paginationDots = null

    const selectSlide = function (i) {
      slides[curIdx].classList.remove('slider-slide--active')
      paginationDots[curIdx].classList.remove('slider-pagination__dot--active')
      slides[i].style.animationName = ''
      curIdx = i
      slides[curIdx].setAttribute('class', 'slider-slide slider-slide--active')
      paginationDots[curIdx].classList.add('slider-pagination__dot--active')
      return curIdx
    }

    const prevSlide = function () {
      slides[curIdx].classList.remove('slider-slide--active')
      slides[curIdx].style.animationName = ''
      slides[curIdx].classList.add('slider-slide--next')
      paginationDots[curIdx].classList.remove('slider-pagination__dot--active')
      if (curIdx === 0) {
        slides[props.imgLength - 1].classList.remove('slider-slide--prev')
      } else {
        slides[curIdx - 1].classList.remove('slider-slide--prev')
      }
      if (curIdx === props.imgLength - 1) {
        slides[0].classList.remove('slider-slide--next')
      } else {
        slides[curIdx + 1].classList.remove('slider-slide--next')
      }
      if (curIdx === 0) {
        curIdx = props.imgLength - 1
        slides[curIdx].style.animationName = 'currSlideFromPrev'
        slides[curIdx].classList.add('slider-slide--active')
        paginationDots[curIdx].classList.add('slider-pagination__dot--active')
        return
      }
      curIdx -= 1
      slides[curIdx].style.animationName = 'currSlideFromPrev'
      slides[curIdx].classList.add('slider-slide--active')
      paginationDots[curIdx].classList.add('slider-pagination__dot--active')
      return
    }

    const nextSlide = function () {
      slides[curIdx].classList.remove('slider-slide--active')
      slides[curIdx].style.animationName = ''
      slides[curIdx].classList.add('slider-slide--prev')
      paginationDots[curIdx].classList.remove('slider-pagination__dot--active')
      if (curIdx === props.imgLength - 1) {
        slides[0].classList.remove('slider-slide--next')
      } else {
        slides[curIdx + 1].classList.remove('slider-slide--next')
      }
      if (curIdx === 0) {
        slides[props.imgLength - 1].classList.remove('slider-slide--prev')
      } else {
        slides[curIdx - 1].classList.remove('slider-slide--prev')
      }
      if (curIdx === props.imgLength - 1) {
        curIdx = 0
        slides[curIdx].classList.add('slider-slide--active')
        paginationDots[curIdx].classList.add('slider-pagination__dot--active')
        return
      }
      curIdx += 1
      slides[curIdx].classList.add('slider-slide--active')
      paginationDots[curIdx].classList.add('slider-pagination__dot--active')
      return
    }

    onMounted(() => {
      slider = document.querySelector('.slider')
      slides = slider.querySelectorAll('.slider-slide')
      paginationDots = slider.querySelectorAll('.slider-pagination__dot')
      slides[0].classList.add('slider-slide--active')
      paginationDots[0].classList.add('slider-pagination__dot--active')
    })

    return {
      curIdx,
      selectSlide,
      prevSlide,
      nextSlide,
      slides
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
<style scoped>
  @import url('../../assets/css/simple-slider.css');
</style>